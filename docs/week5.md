# Development Tools - Web
Frontend

## Inhoudsopgave
T.B.A

## Transpiling ES6 to ES5 with babel

### What does the transpiled file look like?
Als een rotzooi. Maar dat is te verwachten. Alle bestanden zijn samengevoegd tot één bestand, en dat is natuurlijk wat onoverzichtelijker.

### What happended with the class (todo.js)?
De ToDo class is een soort van één grote functie geworden. Ook heeft babel een functie toegevoegd `_createClass`

### In your final report, make a note of at least 3 changes you have spotted.

1. `let` en `const` zijn veranderd naar `var`
2. Classes worden omgezet naar functies
3. Boven in staat nu `"use strict"`
4. `jQuery` is ook vertaald naar een functie van babel genaamd `_jquery`
5. De `export` functie is iets anders.

## Exercise	2: Transpiling SASS to CSS

SASS is geweldig. Ik heb er zelf al veel mee gewerkt. Het gave aan SASS is dat je variabelen en functies kan maken in CSS. Ook kun je dingen 'nesten'. Bijvoorbeeld:

```SCSS
$color__eyes = #000;
$color__white = #fff;

.mickeymouse {
    .mickeymouse__eyes {
        color: $color__eyes;
    }

    .mickeymouse__mouth {
        color: #FF000000;
    }

    .mickeymouse__teeth {
        color: $color__white;
    }
}
```

Kortom, ik ben een voorstander van SCSS :)


## Exercise 3: Webpack

### Entry, Output, Loaders & Plugins

| Concept | Short description |
| --- | --- |
| Entry | Een entry point is simpel weg het bestand dat Webpack moet bundelen. Als dit bestand imports heeft, worden die ook gebundeld. Daarom is dit een 'entry'. |
| Output | Webpack heeft maar één output. Dat is logisch want het punt is om dingen te bundelen. Hierin specifieer je dus hoe het bestand moet heten, en waar het moet komen. |
| Loaders | Loaders kun je zien als een soort middleware zoals in `Express`. Als Webpack een bestand inlaad (loads) dan gaat eerst deze middleware er over heen. | 
| Plugins | Een plugin is een soort last-resort i.p.v. een loader. Als iets in een loader niet mogelijk is, dan kan het via een plugin. Een plugin zit heeelemaal in de 'backend' van Webpack. |

### What is the difference in output for production mode and development mode?

#### Production
Productie modus haalt onnodige imports, code en debug-modules uit de bundle. Hierdoor word de inlezing sneller en is het bestand kleiner. Het bestand wordt dus geoptimaliseerd voor 'productie'.

#### Development
Development modus spreekt voor zich. Dit laat de debug-modules zitten en zorgt voor een zo goed mogelijke ervaring bij het ontwikkelen. Ook ondersteund dit 'hot-reloading' (watch zoals nodemon).

#### PS.
De opdrachten geven nogal wat tegenstrijdige informatie. 'Add build and build:**prod** entries'. Vervolgens staat in de tabel 'build en build:**dev**'....