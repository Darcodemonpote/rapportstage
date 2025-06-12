### Contexte

Dans le cadre de la **migration de la plateforme Big Data de CDH vers CDP**, certains comportements indésirables sont apparus, notamment une erreur sur le **traitement des dates** :\
Les valeurs qui étaient auparavant exprimées en **CET (UTC+1)** apparaissaient désormais en **UTC**, entraînant des incohérences dans les analyses et les traitements métiers.

Ce décalage de fuseau horaire est dû à la configuration par défaut des composants Talend dans le nouvel environnement. Ce problème, bien que discret, pouvait fausser la logique des calculs temporels (ex. : durées, dates d'échéance, journaux, etc.).

### Objectif

Garantir l’**isofonctionnalité** entre les traitements CDH et CDP en identifiant et corrigeant tous les jobs Talend concernés par ce bug de date. L'objectif était d’éviter toute régression fonctionnelle liée à un changement de fuseau horaire implicite.

---

### Travail réalisé

* **Comparaison des données** entre l’ancien environnement CDH et le nouvel environnement CDP à l’aide de requêtes SQL sur Hue.
* **Analyse des jobs Talend** pour identifier les composants utilisant des champs de date sans gestion explicite du fuseau horaire.
* **Modification des composants** Talend, généralement les `tMap`, afin d'intégrer le bon format ou de forcer la conversion en CET.
![image](/img/talend.png)
![image](/img/date.png)\
Ici il s'agit d'appliquer la formule: source.variable != null ?
BigDataParserUtils.parseTo_Date(DateTimeZone.applyTimeZoneDS( "yyyy-MM-dd HH:mm:ss.SSS", source.variable  , "CET"), "yyyy-MM-dd HH:mm:ss.SSS"): null \
Ce qui vérifie que le chant existe, et que si c'est le cas on en change le fuseau horaire

* **Tests** sur `bd0`, pour valider les modifications sans générer de nouvelles erreurs, puis les intégrateurs font les tests en pré-production avant de le mettre en place en production.

---

### Résultat

Problème corrigé sur plusieurs jeux de données critiques.
Les jobs mis à jour ont été livrés en **coproj** puis **validés par les équipes métiers**, avec une confirmation de conformité fonctionnelle.
La correction a ensuite été répliquée sur d'autres jobs similaires à l'aide de scripts automatisés.

---

### Schéma de flux simplifié

Voici une illustration du pipeline de correction :

```
[ Regarder les composants où il y a de potentielles modifications]
                           ↓
[ Hue (CDH) ]       [ Hue (CDP) ]
      ↓                  ↓
[ Comparaison SQL ] ←→ [ Extraction de différences ]
      ↓
[ Job Talend identifié ]
      ↓
[ Correction fuseau horaire ]
      ↓
[ Déploiement (bd0 → bt1 → perf) ]
```

Les différents sujets sur lesquels j'ai travaillé avaient été répertoriés sur un grand fichier excel, et je notais à mesure que je les terminais, et, quand nécessaire, demandait la création d'un tiquet sur Jira et y indiquais les modifications apportés.
![excel](/img/excel.png)