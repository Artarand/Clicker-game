const clickEvent = document.querySelector("img");
const affichageClick = document.querySelector("h1");
let clickNumber = 0;
let clickX = 0;
let genButtonFactor = 2;



let Xauto = setInterval(() => {
    clickNumber++;
    affichageClick.textContent = clickNumber;
}, 1000);

let Xautogen = setInterval(() => {

    var elements = document.getElementById('container').querySelectorAll('h2');
    let fragment = document.createDocumentFragment();
    fragment.textContent = ' ';
    fragment.firstChild.replaceWith(...elements);
    let factor = 1

    // genButton(factor += 1);

    for (price = 0; price < clickNumber; price = factor * factor * 50) {
        genButton(factor += 1);
    }
}, 1000);


const genButton = (factor) => {
    // console.log('genButton', factor);
    let container = document.getElementById('container');
    let button = document.createElement("h2");
    button.textContent = 'Factor ' + factor + ' (' + factor * factor * 50 + ')';
    container.appendChild(button);
    button.classList.add('x' + factor);
    button.classList.add('box');
    button.classList.add('not-done');
    button.addEventListener("click", function (e) {
        X(factor);
    });
    if (clickNumber >= factor * factor * 50) {
        button.addEventListener("mouseenter", () => {
            button.style.opacity = 0.8;
        });
        button.addEventListener("mouseleave", () => {
            button.style.opacity = 1;
        });
    }
}

const delButton = (factor) => {
    console.log('delButton', factor);
    document.getElementsByClassName('x' + factor).remove();
}

const X = (factor) => {

    console.log('X', factor);
    let tarif = factor * factor * 50;
    let interval = 1000 / factor;

    // pas deux fois le même achat
    if (clickX == factor) return;

    // payer
    if (tarif > clickNumber) {
        console.log('trop cher pour toi');
        return;
    } else {
        clickNumber -= tarif;
        // stocker l'achat actuel
        clickX = factor;
        // rembourser un éventuel achat précédent
        if (clickX > 0) {
            // clickNumber += clickX * 500;
        }
    }

    console.log(interval);

    // supprimer la boucle actuelle
    clearInterval(Xauto);

    // définir nouvelle boucle
    Xauto = setInterval(() => {
        clickNumber++;
        affichageClick.textContent = clickNumber;
    }, interval);

};

clickEvent.addEventListener("click", () => {
    clickNumber++;
    affichageClick.textContent = clickNumber;
});