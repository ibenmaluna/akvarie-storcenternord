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
        info: "Denne fisk er smuk, med alle sine flotte farver. Den elsker at gemme sig i de høje tangbunker",
        
    },

    {
       className: "fish3",
        info: "Jeg er en sergentfisk! Jeg har flotte blå og sorte striber. De hjælper mig med at gemme mig i vandet! Kan du tælle mine striber?",
        
    },

     {
       className: "fish4",
        info: "Et sjovt fact omkring søshesten som du måske ikke vidste, er at det er den mandlige søhest der bærer børnene",
        
    },
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
const kiste = document.querySelector("#kiste");



    /* Oprette lydobjekter */

    const soundRegnbueFisk = new Audio("../sound/regnbuefisk-bobler.wav");
   
    const soundPoliceCar = new Audio();
    soundPoliceCar.src = "../sound/policeCarSound.wav";
    const soundBlueCar = new Audio();
    soundBlueCar.src = "../sound/blueCarSound.wav";


    if (getRegnbueFisk) {
        getRegnbueFisk.addEventListener("click", () => {
            soundRegnbueFisk.currentTime = 0;
            soundRegnbueFisk.play();
        });
    }

    if (nemofisk) {
        nemofisk.addEventListener("click", () => {
            nemofisk.play();
        });
    }

    if (blåfisk) {
        blåfisk.addEventListener("click", () => {
            blåfisk.play();
        });
    }

      if (søhest) {
        søhest.addEventListener("click", () => {
            søhest.play();
        });
    }


    kiste.addEventListener("click", function(){
        if(kiste.src.endsWith("img/aaben-kiste.png")) {
            kiste.src="img/lukket-kiste.png"
        }
        else{
            kiste.src="img/aaben-kiste.png";
        }
      
    });
});

  