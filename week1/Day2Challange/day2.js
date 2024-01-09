
//challange1 

// function palindrome(kata) {
//   let reversedWord = ''
//   for (let i = kata.length-1; i >= 0; i--) {
//     const element = kata[i];
//     reversedWord += element;
//   }
//   return reversedWord === kata
//   }
  
//   console.log(palindrome('katak')); // true
//   console.log(palindrome('blanket')); // false
//   console.log(palindrome('civic')); // true
//   console.log(palindrome('kasur rusak')); // true
//   console.log(palindrome('mister')); // false

//challange2 

// function hitungJumlahKata(kalimat) {
//   var count = 0;
//   for (let i = 0; i<kalimat.length; i++) {
//       if (kalimat[i] === ' ' ) {
//         count++;
//       } else if (kalimat[i !== ' ']) {

//       }
//   }
//   return count + 1;
// }

// // TEST CASES
// console.log(hitungJumlahKata('I have a dream')); // 4
// console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
// console.log(hitungJumlahKata('A song to sing')); // 4
// console.log(hitungJumlahKata('I')); // 1
// console.log(hitungJumlahKata('I believe I can code')); // 5


//challange 3

// function changeVocals (str) {
//   let letter = ""
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == "a") {
//             letter += "b"
//         } else if (str[i] == "i") {
//             letter += "j"
//         } else if (str[i] == "u") {
//             letter += "v"
//         } else if (str[i] == "e") {
//             letter += "f"
//         } else if (str[i] == "o") {
//             letter += "p"
//         } else if (str[i] == "A") {
//             letter += "B"
//         } else if (str[i] == "I") {
//             letter += "J"
//         } else if (str[i] == "U") {
//             letter += "V"
//         } else if (str[i] == "E") {
//             letter += "F"
//         } else if (str[i] == "O") {
//             letter += "p"
//         }
//         else {
//             letter += str[i]
//         }
//     }
//     return letter;
// };

// function reverseWord (str) {
//     let wordreversed = ''
//     for (let i = str.length-1; i >= 0; i--) {
//      const element = str[i];
//      wordreversed += element;
//   }
//   return wordreversed
  
// }

// function setLowerUpperCase (str) {
//   let lowUpCase = ""
//   for (let i = 0; i < str.length; i++ ) {
//     if(str[i]===str[i].toUpperCase()) {
//       lowUpCase += str[i].toLowerCase()
//     }else {
//       lowUpCase += str[i].toUpperCase()
//     }
//   }
//   return lowUpCase
// }

// function removeSpaces (str) {
//   let remSpace = '';
//   for (let i=0; i<str.length; i++) {
//     const element = str[i];
//     if (element == ' ') {
//         continue;
//     }
//     remSpace += element;
//   }
//   return remSpace
// }

// function passwordGenerator (name) {
//   if (name.length<5){
//     return 'Minimal karakter yang diinputkan adalah 5 karakter'
//   }
//   let res = removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
//   return res
// }
// console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

//challange 4 

function meleeRangedGrouping (str) {
  //your code here
}

//challange 5 

// function stringToArray(string) {
//   let arrMult = []
//   let temp = []
//   for (let i= 0; i<string.length; i++) {
//    const element = string[i];
//     if (string[i] ===',' ) {
//       arrMult = [...arrMult, temp];
//       temp =[];
//       continue;
//     } 
//     temp = [...temp, element];
//   }
//    if (temp.length>0){
//     arrMult = [...arrMult, temp]
//     temp =[]
//   }
//   return arrMult
  
// }

// console.log(stringToArray('aqrst,ukaei,ffooo'))


