"use strict";
// Sørger for at JavaScript kører i "strict mode" (færre fejl og bedre praksis)

// ---------------------------------------------------------
// DATA (array med objekter)
// Indeholder info om hver fisk
// ---------------------------------------------------------
const fiskeinfo =  [
    {
        className: "fish1", // Matcher CSS class
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

// ---------------------------------------------------------
// DOMContentLoaded
// Kører først når hele HTML'en er loaded
// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {

    // Finder tooltip element i HTML
    const tooltip = document.getElementById("tooltip");

    // ---------------------------------------------------------
    // Funktion: viser tooltip med tekst
    // ---------------------------------------------------------
    function showTooltip(html) {
        
        // Tjekker om tooltip-elementet eksisterer i DOM´ en 
        if(tooltip){
            
            // Indsætter tekst i tooltip elementet
            tooltip.innerHTML = html
            
            // Gør tooltip elementet synligt med CSS-klassen: is-visible
            tooltip.classList.add("is-visible");
            
            // Sætter en timer til at skjule tooltip elementer efter 8 sek
            setTimeout(function(){
                
                // Skjuler tooltip igen efter 8 sek
                tooltip.classList.remove("is-visible");

            }, 10000);
        }
    }

    // ---------------------------------------------------------
    // Loop gennem alle fisk og tilføjr hover funktion
    // ---------------------------------------------------------
    fiskeinfo.forEach((fish)=> {
        
        // Finder alle DOM elementer med den aktuelle fisk class attribut-navn (f.eks. fish1,fish2,fish3)
        document.querySelectorAll("." +fish.className).forEach((elem)=> {

        // CLICK Tilføjer en addeventlistener til hvert element som bliver klikket (click)     
        elem.addEventListener("click", ()=> {
                
            // Opretter en HTML-blok indeholdende fiskens detaljer 
              const fishDetails = `
                    <strong>${fish.info}</strong>
                `;
                showTooltip(fishDetails);
            });

        // MOUSEOVER Når musen holdes over fisken
        elem.addEventListener("mouseover", ()=> {
                
            // Opretter HTML med fiskens info
            const fishDetails = `
                <strong>${fish.info}</strong>
            `;
            
            // Viser tooltip med info
            showTooltip(fishDetails);
            });
        });
    });

// ---------------------------------------------------------
// Hent HTML elementer (fisk + kiste)
// ---------------------------------------------------------
const getRegnbueFisk = document.querySelector("#regnbuefisk");
const getNemoFisk = document.querySelector("#nemofisk");
const getBlåFisk = document.querySelector("#blåfisk");
const getSøhest = document.querySelector("#søhest");
const getHaj = document.querySelector("#haj");
const kiste = document.querySelector("#kiste");
const kisteLyd = document.querySelector("#kiste");




// ---------------------------------------------------------
// Opret lyd-objekter (en lyd pr. fisk)
// ---------------------------------------------------------
const soundRegnbueFisk = new Audio("../sound/regnbuefisk-bobler.wav");
const soundNemoFisk = new Audio("../sound/nemofisk-bobler.wav");
const soundBlåFisk = new Audio("../sound/bluefisk-bobler.wav");
const soundSøhest = new Audio("../sound/seahorse-bobler.wav");
const soundHaj = new Audio("../sound/haj-bobler.wav");
const soundKiste = new Audio("../sound/kiste-kor.wav");

// ---------------------------------------------------------
// Event listeners (klik på fisk → afspil lyd)
// ---------------------------------------------------------
    if (getRegnbueFisk) {
        getRegnbueFisk.addEventListener("click", () => {
            soundRegnbueFisk.currentTime = 0; // Starter forfra
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
// ---------------------------------------------------------
// Kiste funktion (åben/luk + lyd)
// ---------------------------------------------------------
    kiste.addEventListener("click", function(){
        // Hvis kisten er åben
        if(kiste.src.endsWith("img/aaben-kiste.png")) {
            
            // Luk kisten
            kiste.src="img/lukket-kiste.png"

            // Stop lyden
            soundKiste.pause();
            soundKiste.currentTime = 0;
        }
        else{
            // Åbn kisten
            kiste.src="img/aaben-kiste.png";
        
        // Start lyd
        soundKiste.currentTime = 0; // Lyden starter så snart man trykker på kisten
        soundKiste.play();
        }
    });
});