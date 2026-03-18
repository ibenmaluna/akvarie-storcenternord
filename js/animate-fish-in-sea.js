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
        info: "Denne fisk er smuk, med alle sine flotte farver. Den elsker at gemme sig i de høje tangbunker",
        
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

    // gennemløber alle bilobjekter i carinfo-JS-datastrukturen
    fiskeinfo.forEach((fish)=> {
        // finder alle DOM elementer med den aktuelle bil class attribut-navn (f.eks. car1,car2,car3)
document.querySelectorAll("." +fish.className).forEach((elem)=> {

//   tilføjer en addeventlistener til hvert element som musen føres henover (mouseover)     
    elem.addEventListener("mouseover", ()=> {
                // opretter en HTML-blok indeholdende bilens detaljer 
              const fishDetails = `
            <strong>${fish.info}</strong>
`;
                showTooltip(fishDetails);

            });
        });
    });

  /* Hente Alle DOM-elementer */

const regnbuefisk = document.querySelector("#regnbuefisk");
const nemofisk = document.querySelector("#nemofisk");
const blåfisk = document.querySelector("#blåfisk");
const søhest = document.querySelector("#søhest");


    /* Oprette lydobjekter */

    const soundRedCar = new Audio();
    soundRedCar.src = "../sound/redCarHorn.wav";
    const soundPoliceCar = new Audio();
    soundPoliceCar.src = "../sound/policeCarSound.wav";
    const soundBlueCar = new Audio();
    soundBlueCar.src = "../sound/blueCarSound.wav";

    /* Tjeck om den røde bil (getRedCar) med ID attributten "redcar" findes i DOM'en */
    if (regnbuefisk) {
        regnbuefisk.addEventListener("click", () => {
            regnbuefisk.play();
        });
    }

    /* Tjeck om den Politibilen (getPoliceCar) med ID attributten "policecar" findes i DOM'en */
    if (nemofisk) {
        nemofisk.addEventListener("click", () => {
            nemofisk.play();
        });
    }

    /* Tjeck om den blå bil (getBlueCar) med ID attributten "bluecar" findes i DOM'en */
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

    // toggle mellem åben og lukket kiste
    
    document.addEventListener('DOMContentLoaded', () => {
  const scene = document.querySelector('.scene');
  const lukketKiste = document.getElementById('lukketkiste');
  const aabenKiste = document.getElementById('aabenkiste');

  // Klik på lukket kiste → åben
  if (lukketKiste && scene) {
    lukketKiste.addEventListener('click', () => {
      scene.classList.toggle('open');
    });
  }

  // Klik på åben kiste → lukket igen
  if (aabenKiste && scene) {
    aabenKiste.addEventListener('click', () => {
      scene.classList.toggle('open');
    });
  }
});

});

  