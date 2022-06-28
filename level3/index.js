// Check whether two strings are anagram of each other
/* Anagram words
Listen - Silent 
Triangle - Integral */

const areAnagram = (str1, str2) => {
    
    let s1 = str1.split('').sort()
    let s2 = str2.split('').sort()
    if (s1.length != s2.length) 
        return false;

    // Compare sorted strings
    for (let i = 0; i < s1.length; i++) {
        if(s1[i] != s2[i])
        return false;
    }
    return true;
}

/* Driver Code*/
let str1 = 'test';
let str2 = 'ttes';

// Function Call
if (areAnagram(str1, str2))
    console.log("These are anagram!");
else
    console.log("Not anagram!");
