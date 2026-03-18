"use strict";

// når man skal lave en liste (array) i javascript skal man lave skarp parantes
//  her opbygger vi vores js datastruktur med arrayr indeholdene js objecter
const carinfo =  [
    {
        className: "car1",
        carBrand: "ford",
        carModel: "mustang",
        releaseYear: 1974,
        // det er kun tekst der skal i anførelsestegn - ikke tal
        color: "red",
        fuelType: "diesel"
    },

    {
        className: "car2",
        carBrand: "VW",
        carModel: "UP!",
        releaseYear: 1980,
        color: "blue",
        fuelType: "Gas"
    },

    {
        className: "car3",
        carBrand: "Audi",
        carModel: "policecar",
        releaseYear: 2000,
        color: "grey",
        fuelType: "Hybrid"
    },
];

document.addEventListener("DOMContentLoaded", () => {

    const tooltip = document.getElementById("tooltip");
    // finder tooltip id attirubten fra DOM og gemmer i en variabel

    // funktion der viser tooltip med bilinfo 
    
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
    carinfo.forEach((car)=> {
        // finder alle DOM elementer med den aktuelle bil class attribut-navn (f.eks. car1,car2,car3)
document.querySelectorAll("." +car.className).forEach((elem)=> {

//   tilføjer en addeventlistener til hvert element som musen føres henover (mouseover)     
    elem.addEventListener("mouseover", ()=> {
                // opretter en HTML-blok indeholdende bilens detaljer 
                const carDetails = `
                <strong>Brand:${car.carBrand}</strong><br>
                    model: ${car.carModel}<br>
                    releaseyear: ${car.releaseYear}<br>
                    color: ${car.color}<br>
                    fueltype: ${car.fuelType}<br>
                `;
                showTooltip(carDetails);

            });
        });
    });

  /* Hente Alle DOM-elementer */

    const getRedCar = document.querySelector("#redcar");
    const getBlueCar = document.querySelector("#blueCar");
    const getPoliceCar = document.querySelector("#policeCar");
    const sun = document.querySelector(".sun");
    const scene = document.querySelector(".scene");

    /* Oprette lydobjekter */

    const soundRedCar = new Audio();
    soundRedCar.src = "../sound/redCarHorn.wav";
    const soundPoliceCar = new Audio();
    soundPoliceCar.src = "../sound/policeCarSound.wav";
    const soundBlueCar = new Audio();
    soundBlueCar.src = "../sound/blueCarSound.wav";

    /* Tjeck om den røde bil (getRedCar) med ID attributten "redcar" findes i DOM'en */
    if (getRedCar) {
        getRedCar.addEventListener("click", () => {
            soundRedCar.play();
        });
    }

    /* Tjeck om den Politibilen (getPoliceCar) med ID attributten "policecar" findes i DOM'en */
    if (getPoliceCar) {
        getPoliceCar.addEventListener("click", () => {
            soundPoliceCar.play();
        });
    }

    /* Tjeck om den blå bil (getBlueCar) med ID attributten "bluecar" findes i DOM'en */
    if (getBlueCar) {
        getBlueCar.addEventListener("click", () => {
            soundBlueCar.play();
        });
    }

    if (sun && scene) {
        sun.addEventListener("click", () => {
            scene.classList.toggle("night");
        });

    }

});

  