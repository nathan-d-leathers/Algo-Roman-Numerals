exports.let toRoman = function(num) {

    let romanArr = [];
  
    const romanNumerals = {
      M : 1000,
      CM : 900,
      D : 500,
      CD : 400,
      C : 100,
      XC : 90,
      L : 50,
      XL : 40,
      X : 10,
      IX : 9,
      V : 5,
      IV : 4,
      I : 1,
      }
      
      for (let i of Object.keys(romanNumerals)) {
        if (num >= romanNumerals[i]) {
          romanArr.push(i);
          num -= romanNumerals[i];
        }
      }
      return romanArr.join('');
    
  };


// alt method

//     let romanArr = [];
//     while (num > 1000) {
//         num = num - 1000;
//         romanArr.push("M");
//     }
//     if (num > 900 && num < 1000) {
//         num = num - 900;
//         romanArr.push("CM")
//     }
//     while (num > 500 && num < 900) {
//         num = num - 500;
//         romanArr.push("D");
//     }
//     if (num > 400 && num < 500) {
//         num = num - 400;
//         romanArr.push("CD")
//     }
//     while (num > 100) {
//         num = num - 100;
//         romanArr.push("C");
//     }
//     if (num > 90 && num < 100) {
//         num = num - 90;
//         romanArr.push("XC");
//     }
//     while (num > 50) {
//         num = num - 50;
//         romanArr.push("L");
//     }
//     if (num > 40 && num < 50) {
//         num = num - 40;
//         romanArr.push("XL");
//     }
//     while (num > 10) {
//         num = num - 10;
//         romanArr.push("X");
//     }
//     if (num === 9) {
//         num = num - 9;
//         romanArr.push("IX")
//     }
//     while (num > 5 && num < 9) {
//         num = num - 5;
//         romanArr.push("IV");
//     }
//     if (num === 4) {
//         num = num -4;
//         romanArr.push("IV")
//     } 
//     while (num > 0) {
//         num = num - 1;
//         romanArr.push("I");
//     }
//     return romanArr.join("");

// };

// console.log(toRoman(944));


/*

I -> 1
V -> 5
X -> 10
L -> 50
C -> 100
D -> 500
M -> 1000

*/

