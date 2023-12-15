# La forêt interdite

## Objectif

En modifiant uniquement les fichiers `style.css` et `script.js`, vous devrez reproduire à l'identique le résultat suivant : [https://youtu.be/QccYm2Qom1U](https://youtu.be/QccYm2Qom1U).

Pour ce faire, vous devrez vous familiariser avec le code et les fichiers existants.

# Marche à suivre

1. Au chargement de la page, il faut que le personnage soit animé par technique d'animation «sprite» avec l'image `images/personnage/Idle.png`.
1. Lorsqu'on clique sur le bouton «Commencer», il faut faire disparaitre l'élément HTML avec le id «controls». Vous devrez également déclencher la lecture en boucle de la piste sonore `audio/trame.mp3`.
1. Lorsqu'on appuis sur la lettre `D`, le pesonnage doit être animé avec l'image `images/personnage/Run.png`. Aussi, il faut créer un effet parallax avec les images de fond qui se trouvent dans le dossier `images/parallax`.
1. Lorsqu'on relàche la lettre `D`, l'animation du personnage doit revenir à l'état initial et l'effet parallax doit s'arrêter.

# Pondération

* Retrait de l'élément HTML «#controls» au clic du bouton «Commencer» (5%)
* Lecture de la piste sonore en boucle (5%)
* Animation du personnage (20%)
* Gestion des événements avec la lettre `D` (20%)
* Effet parallax (20%)
* Adéquation entre l'aperçu et le résultat attendu (30%)

# Remise

* Compresser l'ensemble des documents dans un fichier `.zip`
* Nommer le fichier `PRENOM_NOM_EX02_CSS.zip`
* Déposer le fichier dans `Examen02` sur Teams
