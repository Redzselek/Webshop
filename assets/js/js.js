var szamlalo = 0;
function Kosarhozad() 
{
 szamlalo++
//#region Kosárkép frissítése
  if (szamlalo == 0) {
    document.getElementById("kosarkepecske").src ="assets/images/shopping-cart0.png";
  } else if (szamlalo == 1) {
    document.getElementById("kosarkepecske").src ="assets/images/shopping-cart1.png";
  } else if (szamlalo == 2) {
    document.getElementById("kosarkepecske").src ="assets/images/shopping-cart2.png";
  } else if (szamlalo == 3) {
    document.getElementById("kosarkepecske").src ="assets/images/shopping-cart3.png";
  } else if (szamlalo == 4) {
    document.getElementById("kosarkepecske").src ="assets/images/shopping-cart4.png";
  } else if (szamlalo == 5) {
    document.getElementById("kosarkepecske").src ="assets/images/shopping-cart5.png";
  } else if (szamlalo == 6) {
    document.getElementById("kosarkepecske").src ="assets/images/shopping-cart6.png";
  } else if (szamlalo == 7) {
    document.getElementById("kosarkepecske").src ="assets/images/shopping-cart7.png";
  } else if (szamlalo == 8) {
    document.getElementById("kosarkepecske").src ="assets/images/shopping-cart8.png";
  } else if (szamlalo == 9) {
    document.getElementById("kosarkepecske").src ="assets/images/shopping-cart9.png";
  } else if (szamlalo >= 10) {
    document.getElementById("kosarkepecske").src ="assets/images/shopping-cart10.png";
    }
//#endregion
}

let kosar = document.querySelectorAll(".add-cart");
console.log(kosar);

let termekek = [];
var termeke = 
        {
            termek: document.querySelectorAll(".termek-nev"),
            ar: document.querySelectorAll(".termek-ar"),
            kosarban : 0
        };
function artolt() {
    termeke = {}
    
        termeke = 
        {
            termek: document.querySelectorAll(".termek-nev"),
            ar: document.querySelectorAll(".termek-ar"),
            kosarban : 0
        }
        termekek.push(termeke)   
        console.log("Elso log", termekek);
    console.log("Masodik log", termekek);
}
console.log("Harmadik log", termekek);

for (let i = 0; i < kosar.length; i++) {
  kosar[i].addEventListener('click', () => {
    Kocsiban();
  });
}

