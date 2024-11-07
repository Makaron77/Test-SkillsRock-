//! 1. Проверка на палиндром

// function isPalindrome(str) {
//   let newStr = str
//     .split(' ')
//     .join('')
//     .toLowerCase();
//   return (
//     newStr ===
//     newStr
//       .split('')
//       .reverse()
//       .join('')
//   );
// }

// console.log(isPalindrome('А роза упала на лапу Азора')); // true
// console.log(isPalindrome('Привет')); // false


//! 2. FizzBuzz

// Напишите функцию, которая выводит числа от 1 до 100. Но для кратных трём
// выводите "Fizz" вместо числа, а для кратных пяти — "Buzz". Для чисел, кратных как
// трём, так и пяти, выводите "FizzBuzz".

// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//       console.log('FizzBuzz');
//     }
//     else if (i % 3 === 0) {
//       console.log('Fizz');
//     }
//     else if (i % 5 === 0) {
//       console.log('Buzz');
//     }
//     else console.log(i);
//   }
// }
// fizzBuzz();


//! 3. Разбиение массива на части

// Напишите функцию, которая разбивает массив на группы заданного размера.

// function chunkArray(arr, size) {
//   let res = [];
//   for (let i = 0; i < arr.length; i += size) {
//     res.push(arr.slice(i, i + size));
//   }
//   return res;
// }
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2))// [[1, 2], [3, 4], [5, 6], [7, 8]]
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6],[7, 8]]
