# Sujet 1 – Correction des problèmes de dates Talend

## Contexte

Durant la migration de CDH vers CDP, certaines dates dans les tables de données étaient passées en UTC au lieu de CET. Ce problème est dû à une migration automatisée incomplète.

## Objectif

Corriger les jobs Talend où ce problème survenait pour garantir l’**isofonctionnalité** des traitements entre CDH et CDP.

## Travail réalisé

- Comparaison des données dans Hue
- Analyse des jobs migrés
- Modification des composants Talend
- Exécution dans différents environnements (bd0 → perf)

## Résultat

Problèmes résolus sur plusieurs jeux de données. Livraison validée par l’équipe métier.
