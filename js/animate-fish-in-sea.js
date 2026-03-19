"use strict";

// når man skal lave en liste (array) i javascript skal man lave skarp parantes
//  her opbygger vi vores js datastruktur med arrayr indeholdene js objecter
const fiskeinfo =  [
    {
        className: "fish1",
        info: "Denne fisk er smuk, med alle sine flotte farver. Den elsker at gemme sig i de høje tangbunker",
        
    },

    {
       className: "fish2",
        info: "Klovnefisk er små, orange fisk med hvide striber, ligesom Nemo! De bor i noget der hedder søanemoner, som faktisk kan være farlige for andre fisk",
        
    },

    {
       className: "fish3",
        info: "Jeg er en sergentfisk! Jeg har flotte blå og sorte striber. De hjælper mig med at gemme mig i vandet! Kan du tælle mine striber?",
        
    },

     {
       className: "fish4",
        info: "Et sjovt fact omkring søshesten som du måske ikke vidste, er at det er den mandlige søhest der bærer børnene",
        
    },
    {
        className: "fish5",
        info: "Hej, Haj! Hajer er nogle af havets sejeste rovdyr. De har eksisteret i over 400 millioner år, altså før dinosaurerne gik på jorden"
    }
];

document.addEventListener("DOMContentLoaded", () => {

    const tooltip = document.getElementById("tooltip");
    // finder tooltip id attirubten fra DOM og gemmer i en variabel

    // funktion der viser tooltip med fiskeinfo 
    
    function showTooltip(html) {
        // tjekker om tooltip-elementet eksisterer i DOM´ en 
        if(tooltip){
            // indsætter tekst i tooltip elementet
            tooltip.innerHTML = html
            // gør tooltip elementet synligt med css-klassen - is-visible
            tooltip.classList.add("is-visible");
        //    sætter en timer til at skjule tooltip elementer efter 8 sek
            setTimeout(function(){
                // fjerner/skjuler css klassen fra tooltip elementet- is-visible, efter 8 sek
                tooltip.classList.remove("is-visible");

            }, 8000);
        }
    }

 
    fiskeinfo.forEach((fish)=> {
        // finder alle DOM elementer med den aktuelle fisk class attribut-navn (f.eks. fish1,fish2,fish3)
document.querySelectorAll("." +fish.className).forEach((elem)=> {

//   tilføjer en addeventlistener til hvert element som musen føres henover (mouseover)     
    elem.addEventListener("mouseover", ()=> {
                // opretter en HTML-blok indeholdende fiskens detaljer 
              const fishDetails = `
            <strong>${fish.info}</strong>
`;
                showTooltip(fishDetails);

            });
        });
    });

  /* Hente Alle DOM-elementer */

const getRegnbueFisk = document.querySelector("#regnbuefisk");
const getNemoFisk = document.querySelector("#nemofisk");
const getBlåFisk = document.querySelector("#blåfisk");
const getSøhest = document.querySelector("#søhest");
const getHaj = document.querySelector("#haj");
const kiste = document.querySelector("#kiste");
const kisteLyd = document.querySelector("#kiste");




    /* Oprette lydobjekter */

    const soundRegnbueFisk = new Audio("../sound/regnbuefisk-bobler.wav");
   
    const soundNemoFisk = new Audio("../sound/nemofisk-bobler.wav");
    
    const soundBlåFisk = new Audio("../sound/bluefisk-bobler.wav");

    const soundSøhest = new Audio("../sound/seahorse-bobler.wav");

    const soundHaj = new Audio("../sound/haj-bobler.wav");

    const soundKiste = new Audio("../sound/kiste-kor.wav");


    if (getRegnbueFisk) {
        getRegnbueFisk.addEventListener("click", () => {
            soundRegnbueFisk.currentTime = 0;
            soundRegnbueFisk.play();
        });
    }

    if (getNemoFisk) {
        getNemoFisk.addEventListener("click", () => {
            soundNemoFisk.currentTime = 0;
            soundNemoFisk.play();
        });
    }

    if (getBlåFisk) {
        getBlåFisk.addEventListener("click", () => {
            soundBlåFisk.currentTime = 0;
            soundBlåFisk.play();
        });
    }

      if (getSøhest) {
        getSøhest.addEventListener("click", () => {
            soundSøhest.currentTime = 0;
            soundSøhest.play();
        });
    }

    if (getHaj) {
        getHaj.addEventListener("click", () => {
            soundHaj.currentTime = 0;
            soundHaj.play();
        });
    }

    kiste.addEventListener("click", function(){
        if(kiste.src.endsWith("img/aaben-kiste.png")) {
            // Kisten er åben -> luk den og stop lyden
            kiste.src="img/lukket-kiste.png"

            // Lyden stoppes/pauses når kisten lukker
            soundKiste.pause();
            soundKiste.currentTime = 0;
        }
        else{
            // Kisten er lukket -> åbn den og start lyden
            kiste.src="img/aaben-kiste.png";
        
        // Afspiller lyd når kisten åbner
        soundKiste.currentTime = 0; // Lyden starter så snart man trykker på kisten
        soundKiste.play();
        }
    });
});

  