
// name = prompt('de quel ARN veux tu transcrire le code ?')
let name2 = "CCGUCGUUGCGCUACAGC";
let name3 = "CCUCGCCGGUACUUCUCG";

const Sérine = ["Sérine","UCU", "UCC", "UCA","UCG","AGU","AGC"];
const Proline = ["Proline", "CCU", "CCC", "CCA", "CCG"];
const Leucine = ["Leucine", "UUA", "UUG"];
const Phénylalanine = ["Phénylalanine","UUU", "UUC"];
const Arginine = ["Arginine", "CGU", "CGC", "CGA", "CGG", "AGA", "AGG"];
const Tyrosine = ["Tyrosine", "UAU", "UAC"];

results2 = name2.match(/.{1,3}/g)
results3 = name3.match(/.{1,3}/g)

console.log(results2)
console.log(results3)

name_array =[]

for (var arn of results2) {
	if (arn == "UCU" || arn == "UCC" || arn == "UCA" || arn == "UCG" || arn == "AGU" || arn == "AGC") {
		name_array.push("Sérine");
	} else if (arn == "CCU" || arn == "CCC" || arn == "CCA" || arn == "CCG") {
		name_array.push("Proline");
	} else if (arn == "UUA" || arn == "UUG") {
		name_array.push("Leucine");
	} else if (arn == "UUU" || arn == "UUC") {
		name_array.push("Phénylalanine");
	} else if (arn == "CGU" || arn == "CGC" || arn == "CGA" || arn == "CGG" || arn == "AGA" || arn == "AGG") {
		name_array.push("Arginine");
	} else {
		name_array.push("Tyrosine");
	}
}
console.log(name_array)
console.log(name_array.join("-"))