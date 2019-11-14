const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 :")
var seventies = entrepreneurs.filter(function(entrepreneur){
  return entrepreneur.year >= 1970 && entrepreneur.year <= 1980;
}); 
console.log(seventies)

console.log("Sors une array qui contient le prénom et le nom des entrepreneurs ;")

function name() {
  console.log("Array comprenant prénom et nom des entrepreneurs:");
  array_entrepreneurs = [];
  for(let index in entrepreneurs) {
    // .push POUR AJOUTER PRENOM ET NOM DANS L'ARRAY
    array_entrepreneurs.push(entrepreneurs[index].first + " " + entrepreneurs[index].last);
  }
  console.log(array_entrepreneurs);
}

name()

console.log("Quel âge aurait chaque inventeur aujourd'hui ?")

function year() {
  console.log("Array comprenant l'âge des entrepreneurs:");
  array_age = [];
  for(let index in entrepreneurs) {
    age = 2019 - (entrepreneurs[index].year)
    // .push POUR AJOUTER PRENOM ET NOM DANS L'ARRAY
    array_age.push(entrepreneurs[index].first + " " + entrepreneurs[index].last + " à" + " " + age +" "+ "ans");
  }
  console.log(array_age);
}

year()

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.")

function compare( a, b ) {
  if ( a.last < b.last ){
    return -1;
  }
  if ( a.last > b.last ){
    return 1;
  }
  return 0;
}

console.log(entrepreneurs.sort(compare));
