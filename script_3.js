console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

function Pyramid() {
  let number = prompt("Combien d'étage veux-tu ?");
  n = Number(number);

  for (let i = 0; i < n; i++) {
    let str = ''; /* je réinitialise a chaque tour ma ligne */

    for (let j = 1; j < n-i; j++) {
      str = str + ' '; /* j'ajoute le vide (qui va jusqu'à n-i) */
    }

    for (let k = 1; k <= (i+1); k++) {
      str = str + '*'; /* j'ajoute le vide (qui va jusqu'à n-i) */
    }

    console.log(str);
  }
}

Pyramid()