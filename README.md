# blok-web

README
========

TRANSAVIA STORIES - Tue 31 Jan 2018

by Agung Tarumampen 
https://oege.ie.hva.nl/~tarumaa001/PROJECT%20WEB%20SITE%202/index.html


Introductie:
------------

Hallo daar! Dit is de readme voor de Transavia Stories website voor het project: WEB.
Hierin ga ik het hebben over hoe mijn code is ingedeelde en de redenen erachter.


Configuration:
-------------

FILES:
-----

HTML:
index.html -> Overzichtspagina
filter.html -> Filter en Sorteer pagina
verhaal.html, verhaal2.html en verhaal3.html -> Verhaalpagina's
leeslijst.html -> Leeslijstpagina
aanmeldpagina.html -> Aanmeldpagina

CSS:
styles2.css -> CSS voor alle pagina's

JS:
javascript.js -> Javascript voor alle pagina's



WERKWIJZE:
---------

HTML:
1. Het gebruik van DIV is weinig gebruik van gemaakt. Alleen voor style purpose en als container die dient als de 'grid' van de article's. De reden daarvoor is omdat bij display:grid van de section het anders ook de titel in de grid meetelt en dat is niet wat ik wil.

2. Elementen die veel in anderen pagina's voorkomen zijn: Aside, Article, Sections, Verstopte zoekbalk en styling van inputtypes.

3. Er is gebruik gemaakt van comments om aantal dingen wat duidelijker te maken

CSS:
1. 1 file to rule them all

2. Volgorde: Algemeen styling, Desktopstyling = min-width: 60rem, Tabletstyling = max-width: 60rem and min-width 30rem en Mobilestyling = max-width: 30rem. 
Verder zijn er enkele mediaqueries voor tussenin de desktop en tablet en mobile.

3. Veel gebruik gemaakt van zowel classes als selectoren. vb: div.progressbar, input[type=submit]:not('email'). 

JS:
1. Er is met comments onderscheid gemaakt welke regels eronder voor welk functie dienen.

2. Veel gebruikt van classlist.toggle, for loops en addEventListener.
