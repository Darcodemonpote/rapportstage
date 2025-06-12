### Outils utilisés

Lors de ce stage, j'ai manipulé plusieurs outils techniques et de gestion de projet, répartis entre le développement, la supervision et l’organisation du travail, les principaux étant :

* **Talend** : Outil pour développer des **jobs ETL** (Extract Transform Load), permettant la transformation et le transfert automatisé de données, et ce visuelement, sous la forme de composants déplacables et modifiables.
* **Socle Générique**: Moteur d’éxécution des jobs génériques propre à covéa, qui permet de développer rapidement en YAML ou JSON des **jobs** qui réalisent des traitements, via des stages, des patterns... \
    *(Il a été réalisé en java avec le framework SPRING BOOT puis déployer sur OPENSHIFT)*
* **Hue** : Interface web utilisée pour effectuer des **requêtes SQL** sur les données stockées dans l’environnement Hadoop.
* **Jenkins** : Plateforme d’**intégration continue** utilisée pour exécuter des chaînes de traitement automatiquement à partir de jobs Talend.
* **Yarn**, **Administrator Center**, **Real-Time Monitoring** : Outils d’administration et de supervision des processus Big Data.
* **Jira** : Suivi des **tickets** et planification des tâches dans un cadre de gestion agile.
* **Git** : Utilisé dès le premier jour pour le versioning, la collaboration et la gestion des modifications de code.

### Environnements de travail

Pour garantir une qualité de livraison et la non-régression des traitements, les jobs passent par plusieurs environnements avant d'être mis en production :

| Environnement | Rôle                                      |
| ------------- | ----------------------------------------- |
| `bd0`         | Environnement de **développement**        |
| `bt1`         | Environnement de **pré-recette**          |
| `bt2 / TAU`   | Environnement de **tests utilisateurs**   |
| `perf`        | Environnement de **tests de performance** |
| `pré-prod`    | Environnement de **pré-production**       |
Chaque environnement dispose de ses propres jeux de données, configurations et droits, garantissant une montée en qualité progressive des livrables.
---
![k](/img/knox.png)