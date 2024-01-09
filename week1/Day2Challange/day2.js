
//challange1 pallindrom3
function palindrome(str) {
    var char = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(char, '');
    var len = str.length;
    for (var i = 0; i < len; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   console.log(palindrome('katak')); // true
   console.log(palindrome('blanket')); // false
    console.log(palindrome('civic')); // true
    console.log(palindrome('kasur rusak')); // true
    console.log(palindrome('mister')); // false