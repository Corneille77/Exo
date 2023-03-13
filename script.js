// EXERCICE 1
// C aura pour valeur 24


// EXERCICE 2
// C aura pour valeur 135


// EXERCICE 3
// Taxe = prompt('Donner le prix Hors Taxe')
// var calc = Taxe * 1.196
// console.log(calc);


// Exercice 4
// var nom = prompt('Votre nom')
// var prenom = prompt('Votre prénom')
// console.log('Bonjour ' + prenom + ' Votre nom est ' + nom);

// Exercice 5
// var nbr1 = prompt('Saisissez votre premier nombre')
// var nbr2 = prompt('Saisissez votre deuxième nombre')
// var calc = nbr1 * nbr2
// if(calc < 0){
//     console.log('ce résultat est négatif');
// }
// else{
//     console.log('ce résultat est positif');
// }

// Exercice 6
// function ageFilm(a){
//     a = prompt('Quel âge avez-vous ?')
//     if(a < 13){
//         console.log('Action man');
//     }
//     else if(a >= 13 && a <= 18){
//         console.log('Matrix');
//     }
//     else {
//         console.log('Evil dead');
//     }
// }

// Exercice 7

// function number(nbr){
// let rand = Math.round(Math.random()*10)+1;
// nbr = parseInt(prompt('Saissisez un nombre entre 1 et 10'))
//  while (nbr !== rand) {
//     nbr = parseInt(prompt('Saissisez un nombre entre 1 et 10'))
//  }
//  console.log('Félicitation');
// }


// Exercice 8

// function compteur(user){
        
//     while (user >= 0) {
//         console.log(user);
//         user -= 1
//     }
// }

// Exercice 9

// function gameNumber(){
//     let nbr = Math.round(Math.random()*100);
//     let number = 0
//     while (number !== nbr) {
//         number = parseInt(prompt('Trouvez le nombre généré'))
//         if (number < nbr) {
//             console.log('Trop petit');
//         }
//         else if(number > nbr){
//             console.log('Trop grand');
//         }
//     }
//     console.log('Félicitatin vous avez trouvé le nombre exact');
// }


// Exercice 10

// function tab(nbr){
//     nbr = [10, 15, 20, 15, 14, 8]
        
// }


// //Exercice 11

// function note(studentNumber){
//     student = []
//     studentNumber = prompt("Combien d'élève y'a t'il ?")
//     for (i =0 ;i < studentNumber; i++){ 
//         usersnote = student.unshift(prompt('Saisir la note'))
//     }
//     return student
// }


// //Exercice 12

// function note(studentNumber){
//      let student = []
//     studentNumber = prompt("Combien d'élève y'a t'il ?")
//     for (i =0 ;i < studentNumber; i++){ 
//         let usersnote = student.unshift(prompt('Saisir la note'))
//     }
//     moyenne = student.filter(student => student >=10)

//     return moyenne

// }

// Exercice 13

// function value(nbr) {
//     let maxVal = nbr[0][0];
//     for (let i = 0; i < nbr.length; i++){
//       for (let j = 0; j < nbr[i].length; j++) {
//         if (nbr[i][j] > maxVal) {
//           maxVal = nbr[i][j];
//         }
//       }
//     }
//     return maxVal;
//   }

// Exercice 14 

// function longueur(tab){
//     c = prompt('Ecrivez un phrase')
//     long = c.length
//     return long
// }




// Exercice 15
// function gameNumber(){
//     let nbr = Math.round(Math.random()*5);
//     let number = 0
//     while (number !== nbr) {
//         number = parseInt(prompt('Trouvez le nombre généré'))
//         if (number < nbr) {
//             console.log('Trop petit');
//         }
//         else if(number > nbr){
//             console.log('Trop grand');
//         }
//     }
//     console.log('Félicitatin vous avez trouvé le nombre exact');
// }

// Exercice 16

// function test(a,b){
//     if(a > b){
//         return 0
//     }
//     else{
//         return 1
//     }

// }

// Exercice 18
// function BigNumber(tab) {
//     let maxVal = tab[0];
  
//     for (let i = 0; i < tab.length; i++) {
//       if (tab[i] > maxVal) {
//         maxVal = tab[i];
//       }
//     }
//     return maxVal;
//   }
  
//   let tableau = [2, 6, 1, 7, 9, 3];
//   let resultat = BigNumber(tableau);
//   console.log(resultat); 

// exercice 19
// function voyelle(chaine) {
//     let nbVoyelles = 0;
//     let voyelles = "aeiaeuou";
//     for (let i = 0; i < chaine.length; i++) {
//       if (voyelles.includes(chaine[i])) {
//         nbVoyelles++;
//       }
//     }
//     return nbVoyelles;
//   } 
//   let chaine = "Bonjour tout le monde!";
//   let resultat = compterVoyelles(chaine);
//   console.log(resultat); 

   /*exercice 20*/
//    function filtrerNombresPairs(tableau) {
//     let tableauNombresPairs = [];
  
//     for (let i = 0; i < tableau.length; i++) {
//       if (tableau[i] % 2 === 0) {
//         tableauNombresPairs.push(tableau[i]);
//       }
//     }
  
//     return tableauNombresPairs;
//   }
  
//   let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let resultat = filtrerNombresPairs(tableau);
//   console.log(resultat); 
  
  /*exercice 21*/
//   function reverseWords(str) {
//     var words = str.split(" ");
//     for (var i = 0; i < words.length; i++) {
//       words[i] = words[i].split("").reverse().join("");
//     }
//     return words.join(" ");
//   }
//   var str = "ceci est une phrase";
//   var reversedStr = reverseWords(str);
//   console.log(reversedStr); 