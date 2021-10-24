# Github API

Aujourd'hui, on se fait plaisir et on met en pratique tout ce qu'on a vu pour se créer une application qui fonctionne avec une véritable API, celle de github !

![resultat](./resultat.png)

**Objectif**

Faire un annuaire qui permette de chercher des repos sur github

Github fourni une API qui permet de chercher dans tous les repos, à cette adresse:

***

https://api.github.com/search/repositories?q=REPOACHERCHER

***

En remplaçant REPOACHERCHER par ce qui a été saisi par l'utilisateur, vous obtiendrez une liste de resultats.

### Astuces

Pour gagner du temps sur la mise en forme, nous allons utiliser une bibliothèque: Semantic-UI

https://react.semantic-ui.com/

Pour l'installation vous trouverez les instructions ici:

https://react.semantic-ui.com/usage


### Composants REACT à créer

* SearchBar

* ReposResults (pour afficher les repos correspondant à la recherche)

* Message (pour afficher les erreurs et les informations)

### Comportement

Lorsque je submit le formulaire de recherche en appuyant sur entrer, une requête est faite pour récupérer les résultats. En cas de resultats, ils s'affichent sous la barre de recherche, sous forme de cartes, comme sur l'image.

> # ATTENTION !
> Si vous arrivez à afficher sous forme de cartes les résultats fournis par github, c'est vraiment énorme !!
> Les bonus, c'est uniquement si vous êtes très très très gourmands...

### Conseils méthodologiques

* Je fais déjà l'affichage avec des composants statiques (sans props)
  * la search bar
  * le message
  * la liste de cartes
* Je suis libre d'utiliser Semantic UI quand bon mon semble, je peux d'abord me concentrer sur les fonctionnalités puis la mise en forme ou l'inverse
* Je donne des props (et vérifie les prop-types) avec des données que je crée moi même, pour tester
* Je commence à introduire des hooks d'état dans mon composant racine
* Je mets mes fausses données dans les états, et je les passe aux composants
* Je gère le changement dans l'input de recherche
* Je gère le submit
* J'essaie d'utiliser axios pour obtenir des résultats
* J'utilise axios pour obtenir des résutlats liés à la recherche de l'user (text de l'input)
* J'utilise les résultats pour donner à mon state les datas, formattées au besoin pour coller aux props attendues

Ah et une dernière chose, le logo est fourni dans le dossier `assets`, tu trouveras aussi des datas dans le dossier `data` qui peuvent servir dans un premier temps aussi pour faire des tests

### Bonus : Plus de résultats

Par défaut l'api github retourne les 30 premiers résultats, changeons ça

***

https://api.github.com/search/repositories?q=REPOACHERCHER&sort=stars&order=desc&page=1&per_page=9

***

- On modifie l'url appelée avec des paramètres get supplémentaires, ainsi on demande 9 repos par page, on commence à la page 1 et on tri les résultats par nombre d'étoiles décroissantes
- On ajoute un bouton à la suite des résultats _Plus de résultats_
- Au clic sur ce bouton on charge les 9 repos suivants, qu'on affiche à la suite des 9 premiers, et ainsi de suite
#   P o k e m o n - T C G - A P I  
 