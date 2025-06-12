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

* Réutilisation d'identifiants pour les 3 tables de prodauto (table des contrats, contrats à effet différé et devis)/
  Tant que la resynchronisation avec le Datahub n’a pas eu lieu, le Datahub conserve encore l’ancien contrat non purgé, ce qui fait qu'on peut avoir même identifiant pour plusieurs contrats différents (ancien et nouveau).
* La manipulation repose sur des **requêtes SQL** avec des jointures et des fonctions analytiques.

---

**A FINIR Il y aura ici des explications du job tpacon10 et un schéma dans la partie contexte ca là c'est pas clair**