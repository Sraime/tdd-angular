## TDD in practice with Angular

Ce projet a pour but de mettre en pratique la réalisation d'un component angular.

### Le sujet est le suivant :

Vous dévez réaliser un component permettant d'afficher un message. Celui-ci doit être configurable via un mode d'édition. 
Les caractéristiques sont les suivantes :

**Le message a deux modes :**
- Visualisation : le texte du message est affiché
- Édition : possibilité de modifier le texte du message

**Par défaut :**
- Le message est une chaîne de caractères vide
- Le mode visualisation est actif

**Un bouton permet de changer le mode :**
- En mode visualisation le bouton à le texte « modify » et permet, au clique, de passer en mode édition 
- En mode édition le bouton à le texte « save » et permet, au clique, de sauvegarder le texte et de passer en mode visualisation

**NB :** Quand le texte du message est vide, rien n'est affiché

**Voici un exemple de solution**

visualisation  - message vide
<img src="https://zupimages.net/up/19/23/yocy.png" width="300" />

visualisation - message non-vide
<img src="https://zupimages.net/up/19/23/q9sk.png" width="300" />

édition
<img src="https://zupimages.net/up/19/23/yocy.png" width="300" />