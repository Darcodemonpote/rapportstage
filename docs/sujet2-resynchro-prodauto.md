### Contexte

Dans le cadre de la mise en place de la norme RGPD, il y a eu la mise en place d'une purge sur la base de donnée contenant les contrats/devis ajoutés par les utilisateurs (DB2), or la base de donnée du datahub n'a pas subis ces memes mises à jours, et donc les données n'avaient pas été purgés de ce coté.
Le composant lié aux contrats et devis automobile (**prodauto**) fait partie des composants afféctés par cela.

Pour assurer la bonne **conformité** avec les exigences RGPD, il faut donc **resynchroniser** ces données supprimées en les réintégrant dans le processus de purge, afin qu’elles soient correctement prises en compte.

---

### Objectif

* Récuperer et ingérer /A EXPLIQUER\ un Unload de la base DB2 qui correspont aux données n'ayant pas été purgés.
* Générer un fichier **delta** qui identifie les données absentes ou non traitées dans la base actuelle, pour une purge complète et fiable.

---

### Contraintes techniques

* Réutilisation d'identifiants pour les 3 tables de prodauto (table des contrats, contrats à effet différé et devis)
* La manipulation repose sur des **requêtes SQL** avec des jointures et des fonctions analytiques.

---

### Requête SQL d’exemple /A EXPLIQUER\

```sql
SELECT 'contrat' AS ctymet,
       t3.nsc AS nsc,
       t3.ncnt AS ncnt,
       CONCAT('31/12/', CAST(CAST(SUBSTR(t3.base_timestamp,1,4) AS INT) - 1 AS STRING)) AS dpasarch,
       '' AS dapurge,
       DATE_FORMAT(CURRENT_TIMESTAMP,'yyyy-MM-dd HH:mm:ss') AS date_ingestion
FROM (
    SELECT t2.nsc,
           t2.ncnt,
           t2.min_dnrdef,
           t2.max_dnrdef,
           t2.base_timestamp,
           ROW_NUMBER() OVER (PARTITION BY t2.nsc, t2.ncnt ORDER BY t2.base_timestamp ASC) AS rn
    FROM (
        SELECT j.nsc,
               j.ncnt,
               MIN(j.dnrdef) OVER (PARTITION BY j.nsc, j.ncnt) AS min_dnrdef,
               MAX(j.dnrdef) OVER (PARTITION BY j.nsc, j.ncnt) AS max_dnrdef,
               MAX(n.dtl__capxtimestamp) OVER (PARTITION BY j.nsc, j.ncnt) AS base_timestamp
        FROM metcdc_tpacon10_histo j
        INNER JOIN resynchro_tpacon10 n ON j.nsc = n.nsc AND j.ncnt = n.ncnt
    ) AS t2
    WHERE ADD_MONTHS(t2.min_dnrdef, ${delay_reuse}) < t2.max_dnrdef
) AS t3
WHERE t3.rn = 1
UNION ALL
SELECT 'contrat' AS ctymet,
       b.nsc AS nsc,
       b.ncnt AS ncnt,
       CAST('${date_arch}' AS STRING) AS dpasarch,
       '' AS dapurge,
       DATE_FORMAT(CURRENT_TIMESTAMP,'yyyy-MM-dd HH:mm:ss') AS date_ingestion
FROM metcdc_tpacon10_base b
WHERE NOT EXISTS (
    SELECT 1
    FROM resynchro_tpacon10 i
    WHERE b.nsc = i.nsc AND b.ncnt = i.ncnt
);
```