question = prompt("Pose une question brow.")
if (question[question.length - 1] == "?") {
console.log("Ouais, ouais....")
}
else if (question == "") {
  console.log("Bah quoi ? Kestah ? T'es en PLS ?")
}
else if (question === question.toUpperCase()) {
console.log("Pwa, calme-toi... Wesh.")
}
else if (question.includes("fortnite") || question.includes("Fortnite")) {
console.log("Starfoulilahhhh !!! On se fait une partie soum-soum brow ?")
}
else {
  console.log("Eh ! Tu sais quoi ? Jm'en BALEK.")
}
