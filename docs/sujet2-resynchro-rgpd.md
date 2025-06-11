# Sujet 2 – Resynchronisation des purges RGPD

![Schema explicatif à insérer ici]

## Contexte

Certaines données ont été supprimées **avant** la mise en place de la purge RGPD. Pour garantir une conformité totale, ces cas doivent être intégrés dans le processus.

## Objectif

Recharger des données **BIS** (anciennement supprimées) afin de générer un fichier **delta** identifiant les données absentes dans la base actuelle.

## Contraintes

- Réutilisation possible des identifiants (nsc, ncnt)
- Traitement spécifique par requête SQL avancée

## Requête d’exemple

```sql
-- Extrait partiel, voir la requête complète dans les annexes
SELECT ...
FROM metcdc_tpacon10_histo
...

Résultat
Génération du fichier guide de purge

Respect des contraintes RGPD

Livraison de scripts et documentation (CI, SAD, DHE)

yaml
Copier
Modifier

---

### `/docs/sujet3-tpo2mrh.md`

```markdown
# Sujet 3 – TPO2MRH

## Contexte

Traitement équivalent à celui du sujet précédent, mais sur une autre entité métier : **TPO2MRH**.

## Objectif

Appliquer les mêmes logiques : ingestion BIS, delta, génération de fichiers de purge.

## Intérêt

- Réutilisation du socle générique YAML
- Validation de la robustesse des requêtes existantes

## Résultat

Livraison rapide grâce à l'expérience précédente. Projet finalisé avant la fin du stage.