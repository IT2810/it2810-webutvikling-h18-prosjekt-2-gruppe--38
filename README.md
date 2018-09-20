# IT2810 Website
This is our website for the second prosjekt in It2810.

## Build it on your local computer
To build this website on your local computer you need to first have installed [node](https://nodejs.org/en/download/). Then you can clone the repo and `cd` into it. From there you run the command ```npm install``` or ```yarn``` if you are using yarn. Then to run the website as a dev server you can run the command ```npm start``` or ```yarn start```. If you want to build the project instead you can run the command ```npm build``` or ```yarn build```. Which will build the project in the `/build` folder. 


## Documentation

**Planlegging**

Etter å ha lest prosjektbeskrivelsen hadde gruppen et møte hvor vi fant ut av hvem som skulle sette opp prosjektet og hvordan vi ønsket å løse oppgaven.
Etter vi hadde fått opp nettsiden med styled components og hovedgrunnlaget for å kunne bygge videre på siden, delte vi opp resten av oppgaven i mindre deler og satte opp “tasks” for alt som skulle gjøres. Vi brukte kanban board på Github til dette (som man kan se under projects -> Prosjekt 2 på Github siden). Deretter kunne man lett plukke opp tasks og fordele dem mellom alle på gruppen. Utifra disse tasks-ene lagde vi issues, og deretter branches til hvert issue. Når vi var ferdige med et issue, lagde vi pull requests og merget over til master branch uten mye trøbbel.

**React**

I dette prosjektet skulle vi bruke React, et JavaScript bibliotek for å bygge brukergrensesnitt. Hovedforskjellen mellom ReactJS og JS er React sin virtual DOM (VDOM). React lager en datastruktur i minnet, beregner forskjellen til websiden som vises i nettleseren og oppdaterer kun de komponentene som er endret. Komponenter lar utvikleren dele brukergrensesnittet inn i selvstendige, gjenbrukbare deler. Komponenter defineres enten med nøkkelordet “function” eller “class”.

Da vi ikke kunne bruke globale states med Redux, måtte vi alle lese oss opp på hvordan man fører state opp og ned i React-hierarkiet. For å sende state oppover brukte vi callback-funksjoner, og får å sende nedover benyttet vi oss av props.

**AJAX**

Ajax sender nettforespørseler asynkront til serveren istedenfor å laste hele siden på nytt. For å få til dette er det en rekke bibliotek man kan bruke i React. Blant de mest populære finner man JQuery $.ajax, Fetch API, Superagent, Axios og Request. For vårt prosjekt valgte vi å bruke Axios, en HTTP-klient for Node.js og nettlesere. Axios fungerer på både klient og server.
Axios-kall utførte vi kun når et bilde og dikt ble valgt, for å unngå å laste alle bildene og diktene når nettsiden lastes inn. Vi satte opp logikken i appen slik at kallene ikke ble utført før brukeren hadde valgt alle kategoriene på siden og valgt en “fane”. Dette gjør at siden laster raskere. For å gjøre API kall med Axios brukte vi GET-forespørselen fra [Axios](https://github.com/axios/axios). For å sørge for at kallene ble gjort akkurat i det setState() oppdaterte staten til en aktuell komponent, utførte vi Axios-kallet i callback-funksjonen på funksjonen som tok inn en endring av state fra en parent/child.

**Styled Components**

Styled components fjerner mappingen mellom komponeneter og styles. Når man definerer tags med styled-components lager man egentlig vanlige React komponenter, som inneholder styles. Fra [dokumentasjonen](https://styled-components.com) viser de et eksempel hvor man kan rendere et `<h1>` tag med noen stiler:

```js
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  `
```

HTML-objektet vil da få stylingen og skrives slik: `<Title>Hello World </Title>`.
På denne måten kan man gjenbruke styles uten et hav av CSS-filer. Implementasjonen av komponentene blir veldig oversiktlig, da all CSS ligger i samme fil.

Styled-components tillater også å endre CSS ved å sjekke om en property er gitt i et objekt. Eksempelet under er også hentet fra [dokumentasjon](https://styled-components.com).

```js
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  `
```

**Responsivt design**

Da vi skulle designe nettsiden vår tok vi utgangspunkt i eksempelet som ble gitt i oppgavebeskrivelsen fordi eksempelet var ryddig og oversiktlig. Da vi begynte å tenke på hvordan de forskjellige elementene skulle skalere og endre seg med endringer på nettsidestørrelsen gjorde vi noen endringer til eksempelet. Vi flyttet kategoriboksen (hvor brukere kan velge kategori) ned under området bildet, tekst og lyd skal vises. Vi gjorde dette fordi det gjorde det lettere å skalere ned nettsiden til mobil uten å måtte tenke for mye på hvor alle elementene skulle flyttes. Da vi implementerte designet for nettsiden passet vi på at alle komponentene våre var responsive. Dette førte til at vi helt fra starten av hadde responsivitet og derfor slapp vi å tenke så mye på dette da vi implementerte logikken for resten av nettsiden.

**Løsning av funksjonalitetskrav**

Etter at vi hadde implementert designet til nettsiden og opprettet alle komponentene som vi trengte begynte vi med å implementere logikken bak nettsiden for å generere tabsene. Vi startet med å lagre state for kategoriknappene og lagret alle tre kategorivalgene som et objekt i state slik av vi kunne bruke dette videre til å generere tabs.

Deretter lagde vi et komponent som håndterte all logikken for å laste inn bilder og tekst gjennom axios og lyd. Samtidig shufflet vi alle elementene innenfor hver kategori slik at vi får variasjon i tabsene som blir generert. Disse media elementene ble lagret i state.

Så lagde vi onclick funksjoner i tabsene som sender informasjon til komponentet som håndterer logikk om hvilken tab som ble trykket på. Detetter sender komponentet som håndterer logikk sin state (media) ned til display komponentet som håndterer fremvisning av bilde, lyd og tekst.

Display komponentet hadde en metode som sjekker når props blir oppdatert og deretter rerenderer alle elementene.

Kilder: 
- https://medium.freecodecamp.org/yes-react-is-taking-over-front-end-development-the-question-is-why-40837af8ab76
- https://reactjs.org/docs/components-and-props.html
- https://medium.com/styled-components/styled-components-getting-started-c9818acbcbbd
- https://github.com/axios/axios
- https://hashnode.com/post/5-best-libraries-for-making-ajax-calls-in-react-cis8x5f7k0jl7th53z68s41k1

