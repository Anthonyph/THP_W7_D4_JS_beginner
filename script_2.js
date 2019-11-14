{

  function factorielle() {
    let number = prompt('de quel nombre veux-tu calculer la factorielle ?');
    n = Number(number);
    console.log("Tu as choisi le nombre : " + number);
    if(n<0) throw new Error("factoriel n'est définie que pour les entiers positifs");
    
    if(n<=1)
    console.log("Le résultat est : 1");
     
    else 
    for (answer = 1; n>0 ;n--){
        answer *= n;}
    console.log("Le résultat est :" + " " + answer);

  }
  
factorielle()
  
}
