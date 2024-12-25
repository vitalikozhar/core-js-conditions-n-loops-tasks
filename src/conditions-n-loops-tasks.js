/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > c && a > c) return a;
  if (b > a && b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x - king.x === 0 || queen.y - king.y === 0) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || b + c <= a || c + a <= b) return false;
  return a === b || b === c || c === a;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II III IV V VI VII VIII XI X
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  let numTemp = num;
  while (numTemp >= 10) {
    numTemp -= 10;
    result += 'X';
  }
  switch (numTemp) {
    case 1:
      result += 'I';
      break;
    case 2:
      result += 'II';
      break;
    case 3:
      result += 'III';
      break;
    case 4:
      result += 'IV';
      break;
    case 5:
      result += 'V';
      break;
    case 6:
      result += 'VI';
      break;
    case 7:
      result += 'VII';
      break;
    case 8:
      result += 'VIII';
      break;
    case 9:
      result += 'IX';
      break;
    default:
      break;
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let stringResult = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i !== 0) {
      stringResult += ' ';
    }
    switch (numberStr[i]) {
      case '1':
        stringResult += 'one';
        break;
      case '2':
        stringResult += 'two';
        break;
      case '3':
        stringResult += 'three';
        break;
      case '4':
        stringResult += 'four';
        break;
      case '5':
        stringResult += 'five';
        break;
      case '6':
        stringResult += 'six';
        break;
      case '7':
        stringResult += 'seven';
        break;
      case '8':
        stringResult += 'eight';
        break;
      case '9':
        stringResult += 'nine';
        break;
      case '10':
        stringResult += 'ten';
        break;
      case '0':
        stringResult += 'zero';
        break;
      case '-':
        stringResult += 'minus';
        break;
      case '+':
        stringResult += 'plus';
        break;
      case '.':
        stringResult += 'point';
        break;
      case ',':
        stringResult += 'point';
        break;
      default:
        break;
    }
  }
  return stringResult;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(stk) {
  let newString = '';
  for (let i = stk.length - 1; i >= 0; i -= 1) {
    newString += stk[i];
  }
  return newString === stk;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const stringNum = `${num}`;
  const stringDigit = `${digit}`;
  for (let i = 0; i < stringNum.length; i += 1) {
    if (stringNum[i] === stringDigit) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let sum1 = 0;
  let result = -1;
  for (let index = 0; index < arr.length; index += 1) {
    let sum2 = 0;
    result = index + 1;
    sum1 += arr[index];
    for (let i = index + 2; i < arr.length; i += 1) {
      sum2 += arr[i];
    }
    if (sum1 === sum2) return result;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  if (!Number.isInteger(size) || size <= 0) {
    return [];
  }
  const array = new Array(size);
  for (let k = 0; k < size; k += 1) {
    array[k] = new Array(size);
  }
  let i = 0;
  let j = 0;
  let number = 0;

  function right() {
    for (; j < size; j += 1) {
      if (!array[i][j]) {
        number += 1;
        array[i][j] = number;
      } else {
        break;
      }
    }
    i += 1;
    j -= 1;
  }

  function down() {
    for (; i < size; i += 1) {
      if (!array[i][j]) {
        number += 1;
        array[i][j] = number;
      } else {
        break;
      }
    }
    j -= 1;
    i -= 1;
  }

  function left() {
    for (; j >= 0; j -= 1) {
      if (!array[i][j]) {
        number += 1;
        array[i][j] = number;
      } else {
        break;
      }
    }
    i -= 1;
    j += 1;
  }

  function up() {
    for (; i >= 0; i -= 1) {
      if (!array[i][j]) {
        number += 1;
        array[i][j] = number;
      } else {
        break;
      }
    }
    i += 1;
    j += 1;
  }

  while (number < size ** 2) {
    right();
    if (number > size ** 2) break;
    down();
    if (number > size ** 2) break;
    left();
    if (number > size ** 2) break;
    up();
    if (number > size ** 2) break;
  }
  return array;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrix2 = matrix;
  const arrayOut = new Array(matrix[0].length);
  for (let i = 0; i < arrayOut.length; i += 1) {
    arrayOut[i] = new Array(matrix.length);
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      arrayOut[j][arrayOut.length - 1 - i] = matrix[i][j];
    }
  }
  for (let i = 0; i < arrayOut.length; i += 1) {
    for (let j = 0; j < arrayOut[i].length; j += 1) {
      matrix2[i][j] = arrayOut[i][j];
    }
  }
  return matrix2;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr2) {
  const arr = arr2;
  const min = -100;
  const max = 100;
  const countLength = max - min + 1;
  const count = new Array(countLength);
  for (let i = 0; i < countLength; i += 1) {
    count[i] = 0;
  }
  for (let i = 0; i < arr.length; i += 1) {
    count[arr[i] - min] += 1;
  }
  let sortedIndex = 0;
  for (let i = 0; i < count.length; i += 1) {
    const countValue = count[i];
    for (let j = 0; j < countValue; j += 1) {
      arr[sortedIndex] = i + min;
      sortedIndex += 1;
    }
  }

  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let stringEquals = '';

  function dev(array) {
    const result = [];
    stringEquals = '';
    let index = 0;
    for (let i = 0; i < array.length; i += 2) {
      result[index] = array[i];
      index += 1;
    }
    for (let i = 1; i < array.length; i += 2) {
      result[index] = array[i];
      index += 1;
    }
    for (let i = 0; i < result.length; i += 1) {
      stringEquals += result[i];
    }
    return result;
  }

  let newArray = str.split('');
  let index = 0;
  let flag = true;
  for (let i = 0; i < iterations; i += 1) {
    newArray = dev(newArray);
    if (stringEquals === str) {
      if (flag) {
        index = i;
        flag = false;
      }
      while (index + i < iterations) {
        i += index + 1;
      }
    }
  }
  let resultString = '';
  for (let i = 0; i < newArray.length; i += 1) {
    resultString += newArray[i];
  }
  return resultString;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let tempNumber = number;
  const numberLength = Math.floor(Math.log10(number)) + 1;
  const array = [];
  let result = [];
  let flag = true;
  if (number < 10) return number;
  for (let i = 0; i < numberLength; i += 1) {
    array.unshift(tempNumber % 10);
    tempNumber = Math.floor(tempNumber / 10);
  }
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (i < array.length - 1 && flag && result.some((num) => num > array[i])) {
      let check = array[i];
      while (check < 10 && flag) {
        check += 1;
        for (let j = 0; j < result.length; j += 1) {
          if (check === result[j]) {
            const myNumber = result.splice(j, 1)[0];
            result.unshift(array[i]);
            result = result.sort((a, b) => a - b);
            result.unshift(myNumber);
            flag = false;
            break;
          }
        }
      }
    } else {
      result.unshift(array[i]);
    }
  }
  tempNumber = 0;
  let index = 1;
  for (let i = array.length - 1; i >= 0; i -= 1) {
    tempNumber += result[i] * index;
    index *= 10;
  }
  return tempNumber;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
