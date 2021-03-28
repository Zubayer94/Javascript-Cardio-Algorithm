// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
//   return str
//         .split('') // convert every letter into into an array element 
//         .reverse() // reverse the order
//         .join(''); //convert into string, if i put any data into the semi collon that would be added between every one of them

////////////////////////////////////

// let revStr = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     revStr = revStr + str[i];
// }
// return revStr;

////////////////////////////////////

// let revStr = '';
// for (let i = 0; i <= str.length - 1; i++) {
//     revStr = str[i] + revStr;
// }
// return revStr;

////////////////////////////////////
 //for/of work for Arrays, Strings, Maps, NodeLists, and more.
// let revStr = '';
// for(let char of str){
//     revStr = char + revStr;
// }
// return revStr;

////////////////////////////////////
 // String isn't iterable through foreach, need to convert string to array
 
// let revStr = '';
// str.split('').forEach( char => revStr = char + revStr)
// return revStr;

//////////////////////////////////// 
 // String isn't iterable through reduce, need to convert string to array
 // reduce method get two parameter , 1. executing function with perameter of (accumulator - required, currentValue - required, currentIndex - optional, arr - optional) 2. initial value of accumulator
// return str.split('').reduce( (revStr, char) =>  char + revStr, '') //iterate from left to right
// // return str.split('').reduceRight( (revStr, char) =>  revStr + char, '') //iterate from right to left
}




// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    // revStr = str.split('').reverse().join('');
    // return revStr === str;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    // let intRev = int.toString().split('').reverse().join('');
    // return parseInt(intRev);
    // //return parseInt(intRev) * Math.sign(int); //if we want to pass with the sign either it is negitive sign it will pass that too
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    // let strArr = str.toLowerCase().split(' ');
    // for (let i = 0; i < strArr.length; i++) {
    //     strArr[i] = strArr[i].substring(0,1).toUpperCase()
    //      + strArr[i].substring(1); //substring(1) mean from index 1 to last letter
    // }
    // return strArr.join(' ');

    //////////////////////////////////////////

    // return str
    //     .toLowerCase()
    //     .split(' ')
    //     .map( word => word[0].toUpperCase() + word.substr(1)) //substr(1) mean from index 1 to last letter
    //     .join(' ');

}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    const indexObj = {};
    let maxChar = '';
    let maxLeng = 0;
    str.split('').forEach(char => {
        if (indexObj[char] >= 1) {
            indexObj[char] ++
        }
        else{
            indexObj[char] = 1
        }
    });
    for (let eleKey in indexObj) {
        if (indexObj[eleKey] > maxLeng) {
            maxLeng = indexObj[eleKey];
            maxChar = eleKey;
        }
    }
    return maxChar;
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i%3 === 0 && i%5 === 0) {
            console.log("FizzBuzz" +  i);
        }
        else if(i%3 === 0){
            console.log("Fizz" +  i);
        }
        else if(i%5 === 0){
            console.log("Buzz" +  i);
        }
        else{
            console.log(i);
        }
    }
}



// Call Function
const output = maxCharacter('javascript');

console.log(output);