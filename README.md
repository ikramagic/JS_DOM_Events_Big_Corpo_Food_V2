[![Netlify Status](https://api.netlify.com/api/v1/badges/3c1c7931-1efc-42a6-a56b-65a39251d3e4/deploy-status)](https://app.netlify.com/sites/la-restaverne/deploys)
![Works on my machine](https://forthebadge.com/images/badges/works-on-my-machine.svg)

<table>
  <tr>
        <td><a href="https://la-restaverne.netlify.app/"><img src="assets/img/Bored-Van-Gogh.gif" alt="SPAM Dall-e Art Impressionist"></td>
</table>

---

# "LA REΣTAVERNE"

## Description du projet

Ce projet consiste en la création d'un prototype de site web pour un restaurant chypriote spécialisé dans la cuisine grecque. Le site web inclut plusieurs fonctionnalités interactives réalisées en JavaScript pur, avec un style Bootstrap.

## Fonctionnalités implémentées

### 1. Système d'onglets

Les onglets permettent de naviguer entre différentes sections du site : Accueil, Menu, et Photos.

- **JavaScript**: Gestion des onglets avec une écoute sur les clics pour activer et afficher le contenu correspondant.
- **HTML**: Utilisation de la structure de Bootstrap pour les onglets, mais sans dépendance aux fonctionnalités JavaScript de Bootstrap.
- **CSS**: Style appliqué principalement via Bootstrap, mais du CSS personnalisé a été ajouté, notamment pour les polices d'écriture.

### 2. Exit pop-up

Une fenêtre modale (exit popup) apparaît lorsque l'utilisateur s'apprête à quitter la page.

- **Déclenchement**: Sur l'événement `mouseleave` du document.
- **Comportement**: S'affiche une seule fois lors du premier `mouseleave`.
- **Fermeture**: Peut être fermée en cliquant sur une croix ou en dehors de la popup.
- **CSS**: Style personnalisé pour s'assurer que l'image ne dépasse pas de la popup.

### 3. Galerie de photos

Affichage d'une grille de photos dans l'onglet "Photos".

- **JavaScript**: Création dynamique de la grille en injectant des éléments HTML pour les images.
- **CSS**: Utilisation des classes de grille de Bootstrap pour une mise en page réactive.

### 4. Générateur de menu aléatoire

Dans l'onglet "Menu", un bouton permet de générer un menu aléatoire.

- **JavaScript**: Sélection aléatoire d'éléments de menu à partir de tableaux prédéfinis.

### 5. Formulaire dans la Exit pop-up

- **HTML**: Formulaire simple pour collecter l'adresse email avec une case à cocher.

## Problèmes rencontrés / Solutions

- **Problème de l'image dépassant de la popup**: Résolu par l'ajout de styles CSS pour contrôler la taille maximale de l'image.
- **Problème avec les onglets non fonctionnels**: Résolu en ajustant le JavaScript pour gérer correctement les classes `active` et `show` de Bootstrap, et en s'assurant que la structure HTML était correcte.

## Conclusion

<table>
  <tr>
    <td><a href="https://la-restaverne.netlify.app/"><img src="assets/img/Bored-Van-Gogh-2.gif" alt="SPAM Dall-e Art Impressionist"></td>
</table>

---

![Responsible](https://forthebadge.com/images/badges/powered-by-responsibility.svg)
