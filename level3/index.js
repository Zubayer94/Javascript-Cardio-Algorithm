// Check whether two strings are anagram of each other
/* Anagram words
Listen - Silent 
Triangle - Integral */

// let str1 = 'bfacdre'
// let str2 = str1.split('').sort()
// console.log(str2);
const areAnagram = (str1, str2) => {

    let s1 = str1.split('')
    let s2 = str2.split('')
    if (s1.length != s2.length()) 
        return false;

    // Compare sorted strings
    str1.forEach((str, index) => {
        if(str2[index] != str) 
            return false;
    });    

    return true;
}

/* Driver Code*/
let str1 = 'test';
let str2 = 'ttew';

// Function Call
if (areAnagram(str1, str2))
    console.log("The two strings are anagram of each other");
else
    console.log("The two strings are not anagram of each other<br>");
