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

### Write down in your report what happens to images
Afbeeldingen komen met een gehashde waarde in de `dist` folder. Ook komt deze nu voor in de `app.bundle.js`

### Is the .babelrc file still necessary? 
Nee. Het was in het begin al niet nodig, en nu al helemaal niet. Je kunt de babel opties configureren via het webpack configuratie bestand.

### What happened to the node_modules (such as jQuery and Lodash)? Should you also add them to the bundle?
jQuery en lodash staan in een import. Hier houd webpack rekening mee. In een development build zullen ze geimporteerd worden. Bij een productie build zal webpack kijken welke functies nodig zijn van die imports en alleen die functies inladen. Er is dus geen verdere configuratie vereist.

### Write a brief description of the major changes between the development and production builds of your product

Wat me gelijk opvalt is dat de groote van `app.bundle.js` van 882Kb naar 164Kb zakt. Dat is een verschil van 718Kb! Als je dit bestand opent dan zie je dat het bestand geminified is (of geuglified, hoe je het wilt noemen.). Er staat alleen nog een comment in van de jQuery library en de rest is praktisch onleesbaar. De afbeelding blijft onaagetast. Al kun je file-loader zo configureren dat een development build een andere vorm van afbeeldingen opleverd (geen hash naam, etc.)

## Exercise 4: Webpack-dev-server

### Make a note in your report on how you accomplished this

Eerst heb ik webpack-dev-server geinstalleerd.
```
npm install webpack-dev-server --save-dev
```

Daarna heb ik een start entry gemaakt.
```
"scripts": {
    "start": "webpack-dev-server"
}
```

Volgens de documentatie staat de server al geconfigureerd in de watch modus ([Bron](https://webpack.js.org/configuration/watch/))

>In webpack-dev-server and webpack-dev-middleware watch mode is enabled by default.

Zodra ik een verandering toe pas in `themeColors.scss` zie ik dat de devserver dit oppakt en opnieuw compileert.
```
Version: webpack 4.42.1
Time: 28ms
Built at: 04/07/2020 13:59:11
        Asset      Size  Chunks             Chunk Names
app.bundle.js  1.21 MiB    main  [emitted]  main
 + 1 hidden asset
Entrypoint main = app.bundle.js
[./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/appStyle.scss] 899 bytes {main} [built]
    + 41 hidden modules
```

## Exercise	5: Linting (repeat from last week)

All done! Ik heb weer de lint configuratie van Google gebruikt. Één lijn heb ik moeten commenten voor eslint. De rest is gefixt.

## Exercise 6: Test with cypress.io

Alle tests zijn headless te gebruiken en zouden alle functionaliteit moeten testen