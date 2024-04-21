const clickEvent = document.querySelector("img");
const affichageClick = document.querySelector("h1");
const Xdeux = document.querySelector("h3");
const Xtrois = document.querySelector("h4");
const Xquatre = document.querySelector("h5");
let clickNumber = 0;
let numberClickOnX2 = 0;
let numberClickOnX3 = 0;
let numberClickOnX4 = 0;
let clickX = 0;
let X2auto;
let X3auto;
let X4auto;
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

    genButton(factor += 1);
    genButton(factor += 1);
    genButton(factor += 1);

    if (clickNumber > factor * factor * 50) {
        genButton(factor += 1);
        genButton(factor += 1);
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

// const X2 = () => {
//     if (numberClickOnX2 < 1) {
//         if (clickNumber > 100) {
//             clearInterval(X1auto);
//             X2auto = setInterval(() => {
//                 clickNumber++;
//                 affichageClick.textContent = clickNumber;
//             }, 500);
//             clickNumber -= 100;
//             numberClickOnX2++;
//             Xdeux.classList.add("done");
//             clearInterval(X3auto);
//             clearInterval(X4auto);
//             Xtrois.classList.remove("done");
//             Xquatre.classList.remove("done");
//             if (numberClickOnX3 == 1) {
//                 numberClickOnX3 = 0;
//                 clickNumber += 500;
//             } else if (numberClickOnX4 == 1) {
//                 numberClickOnX2 = 0;
//                 clickNumber += 2500;
//             }
//         } else {
//             alert("Il vous faut 100 clicks pour acheter cette amélioration.");
//         }
//     }
// };

// const X3 = () => {
//     if (numberClickOnX3 < 1) {
//         if (clickNumber > 500) {
//             clearInterval(X1auto);
//             X3auto = setInterval(() => {
//                 clickNumber++;
//                 affichageClick.textContent = clickNumber;
//             }, 333);
//             clickNumber -= 500;
//             numberClickOnX3++;
//             Xtrois.classList.add("done");
//             clearInterval(X2auto);
//             clearInterval(X4auto);
//             Xdeux.classList.remove("done");
//             Xquatre.classList.remove("done");
//             if (numberClickOnX2 == 1) {
//                 numberClickOnX2 = 0;
//                 clickNumber += 100;
//             } else if (numberClickOnX4 == 1) {
//                 numberClickOnX2 = 0;
//                 clickNumber += 2500;
//             }
//         } else {
//             alert("Il vous faut 500 clicks pour acheter cette amélioration.");
//         }
//     }
// };

// const X4 = () => {
//     if (numberClickOnX4 < 1) {
//         if (clickNumber > 2500) {
//             clearInterval(X1auto);
//             X4auto = setInterval(() => {
//                 clickNumber++;
//                 affichageClick.textContent = clickNumber;
//             }, 250);
//             clickNumber -= 2500;
//             numberClickOnX4++;
//             Xquatre.classList.add("done");
//             clearInterval(X2auto);
//             clearInterval(X3auto);
//             Xdeux.classList.remove("done");
//             Xtrois.classList.remove("done");
//             if (numberClickOnX2 == 1) {
//                 numberClickOnX2 = 0;
//                 clickNumber += 100;
//             } else if (numberClickOnX3 == 1) {
//                 numberClickOnX3 = 0;
//                 clickNumber += 500;
//             }
//         } else {
//             alert("Il vous faut 2500 clicks pour acheter cette amélioration.");
//         }
//     }
// };


// let X1auto = setInterval(() => {
//     clickNumber++;
//     affichageClick.textContent = clickNumber;
// }, 1000);

// Xdeux.addEventListener("click", X2);

// Xtrois.addEventListener("click", X3);

// Xquatre.addEventListener("click", X4);



// Xdeux.addEventListener("mouseenter", () => {
//     Xdeux.style.opacity = 0.75;
// });

// Xdeux.addEventListener("mouseleave", () => {
//     Xdeux.style.opacity = 1;
// });

// Xtrois.addEventListener("mouseenter", () => {
//     Xtrois.style.opacity = 0.75;
// });

// Xtrois.addEventListener("mouseleave", () => {
//     Xtrois.style.opacity = 1;
// });

// Xquatre.addEventListener("mouseenter", () => {
//     Xquatre.style.opacity = 0.75;
// });

// Xquatre.addEventListener("mouseleave", () => {
//     Xquatre.style.opacity = 1;
// });
