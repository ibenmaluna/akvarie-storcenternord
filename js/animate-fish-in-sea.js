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
function showTooltip(html, x, y) {
    
    if (tooltip) {
        tooltip.innerHTML = html;

        // Reset + vis
        tooltip.classList.remove("is-visible");

        // Midlertidig placering
        tooltip.style.left = x + "px";
        tooltip.style.top = (y - 20) + "px";

        tooltip.classList.add("is-visible");

        // Vent på rendering før vi måler
        requestAnimationFrame(() => {

            const rect = tooltip.getBoundingClientRect();

            const width = tooltip.offsetWidth;
            const height = tooltip.offsetHeight;

            let newX = x;
            let newY = y - 20;

            // Hvis den går ud til højre
          if (x + width / 2 > window.innerWidth - 10) {
                newX = window.innerWidth - width / 2 - 10;
            }

            // Hvis den går ud til venstre
             if (x - width / 2 < 10) {
                newX = width / 2 + 10;
            }

            // Hvis den går op over toppen
        if (y - height < 10) {
                newY = y + height + 10; // vis under fisken
            }

            tooltip.style.left = newX + "px";
            tooltip.style.top = newY + "px";

        });

        // Skjul efter 10 sek
        setTimeout(() => {
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

    elem.addEventListener("click", (e) => {
    
        const fishDetails = `
        <strong>${fish.info}</strong>
     `;

    // Hent position på fisken
     const rect = e.target.getBoundingClientRect();

     const x = rect.left + rect.width / 2;
     const y = rect.top;

    // Stop fisken når den trykkes på
    e.target.style.animationPlayState = "paused";

        showTooltip(fishDetails, x, y);

        // Start igen efter 10 sek
        setTimeout(() => {
            e.target.style.animationPlayState = "running";
        },10000);
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




// ---------------------------------------------------------
// Opret lyd-objekter (en lyd pr. fisk)
// ---------------------------------------------------------
const soundRegnbueFisk = new Audio("sound/regnbuefisk-bobler.wav");
const soundNemoFisk = new Audio("sound/nemofisk-bobler.wav");
const soundBlåFisk = new Audio("sound/bluefisk-bobler.wav");
const soundSøhest = new Audio("sound/seahorse-bobler.wav");
const soundHaj = new Audio("sound/haj-bobler.wav");
const soundKiste = new Audio("sound/kiste-kor.wav");

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


// klik på ok og pop vinduet forsvinder
    const overlay = document.getElementById("overlay");
    const okBtn = document.getElementById("okBtn");
    const soundOkBtn = new Audio("sound/seahorse-bobler.wav"); // NY LYD TIL OK-KNAPPEN (ændring)

    if (okBtn) {
        okBtn.addEventListener("click", () => {
            overlay.style.display = "none";
            // Afspil lyd når OK klikkes (ændring)
            soundOkBtn.currentTime = 0;
            soundOkBtn.play();
        });
    }
});

  



