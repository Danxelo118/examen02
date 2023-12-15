# La Forêt Interdite - Examen 02

## Objectif

Votre mission est de reproduire fidèlement une interface Web interactive, en vous basant sur la démonstration disponible ici : [Lien vers la vidéo YouTube](https://youtu.be/QccYm2Qom1U). Pour cela, vous devez uniquement modifier les fichiers `style.css` et `script.js`, en tenant compte du code et des fichiers déjà existants.

## Instructions détaillées

1. __Animation du personnage au chargement__ : Au démarrage de la page, animez le personnage en utilisant la technique d'animation « sprite » avec l'image `images/personnage/Idle.png`.
1. __Interaction avec le bouton « Commencer »__ :
  * Au clic du bouton, faites disparaître l'élément HTML avec l'id #controls.
  * Déclenchez la lecture en boucle de la piste sonore `audio/trame.mp3`.
1. __Animation et effet parallax avec la touche `D`__ :
  * Lorsqu'on appui sur la lettre `D`, le personnage doit s'animer avec l'image `images/personnage/Run.png`.
  * Simultanément, créez un effet parallaxe avec les images de fond situées dans le dossier `images/parallax`.
  * Lorsque la touche `D` est relâchée, l'animation du personnage doit revenir à l'état `Idle` et l'effet parallax doit cesser.

## Pondération

  * Disparition de #controls : 5%
  * Lecture audio en boucle : 5%
  * Animation du personnage : 20%
  * Gestion de la touche `D` : 20%
  * Effet parallax : 20%
  * Conformité avec l'aperçu vidéo : 30%

## Remise

  * Compressez tous les documents nécessaires dans un fichier `.zip`.
  * Nommez votre fichier `NOM_PRENOM_EX02.zip`.
  * Déposez le fichier dans la section «Examen02» sur Teams.
