const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

{
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

for(let index in books) {
  if (console.log(books[index].rented > 1)); {
  console.log(books[index].title + " a été emprunté");
  }
  }

console.log("Quel est livre le plus emprunté ?");

function compare( a, b ) {
  if ( a.rented < b.rented ){
    return +1;
  }
  if ( a.rented > b.rented ){
    return -1;
  }
  return 0;
}

console.log(books.sort(compare));

console.log("Le livre le plus emprunté est " + books[0].title)
}
{
console.log("Quel est le livre le moins emprunté ?");

function compare2( a, b ) {
  if ( a.rented < b.rented ){
    return -1;
  }
  if ( a.rented > b.rented ){
    return +1;
  }
  return 0;
}
console.log(books.sort(compare2));

console.log("Le livre le moins emprunté est " + books[0].title)

}
console.log("Trouve le livre avec l'ID: 873495 ;");

var findID = books.filter(function(book){
  return book.id == 873495;
}); 
console.log(findID[0]);


console.log("Supprime le livre avec l'ID: 133712 ;");
{

  const books2 = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  for (index in books2) {
  if (books2[index].id == 133712){
    books2.splice(index, 1);
  }
}
console.log(books2);
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");

function compare3( a, b ) {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return +1;
  }
  return 0;
}

console.log(books2.sort(compare3));
}
