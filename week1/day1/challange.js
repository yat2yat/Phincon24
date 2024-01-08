
//challange 1
// function bandingkanAngka(angka1, angka2) {
//    if (angka1<angka2) {
//     return true;
//    }else if (angka1>angka2){
//     return false;
//    }else if (angka1==angka2){
//     return -1
//    }
// }

//    console.log(bandingkanAngka(5, 8)); // true
//    console.log(bandingkanAngka(5, 3)); // false
//    console.log(bandingkanAngka(4, 4)); // -1
//    console.log(bandingkanAngka(3, 3)); // -1
//    console.log(bandingkanAngka(17, 2)); // false

//challange 2
// function balikKata(kata) {
//     var result = "";
//     for (var i = kata.length -1; i >= 0; i--) {
//         result += kata[i] 
//     }
//     return result
//   }
  
//   // TEST CASES
//   console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
//   console.log(balikKata('John Doe')); // eoD nhoJ
//   console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
//   console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
//   console.log(balikKata('Super')); // repuS

//challange 3

// function konversiMenit(menit) {
//     const minutes =  menit%60;
//     const hours =   `${menit/60}`[0];
 
//     return `${(hours)}:${(minutes)}`;
//   }


  
//   // TEST CASES
//   console.log(konversiMenit(63)); // 1:03
//   console.log(konversiMenit(124)); // 2:04
//   console.log(konversiMenit(53)); // 0:53
//   console.log(konversiMenit(88)); // 1:28
//   console.log(konversiMenit(120)); // 2:00


  function xo(str) {
    let counterX = 0; 
    let counterO = 0;
    for ( let i= 0; i <str.length; i++) {
        
        if (str[i].toLowerCase() === "x"){
            counterX++;
        } else if (str[i].toLowerCase() === "o") {
            counterO++;
        }
    }
    return counterX === counterO
  }

  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true

// //challange 5 
// var input = [
//     ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//     ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//     ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//     ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
// ]

