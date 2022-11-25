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
// let str1 = 'test';
// let str2 = 'ttes';

// // Function Call
// if (areAnagram(str1, str2))
//     console.log("These are anagram!");
// else
//     console.log("Not anagram!");

/* 
Program to validate an IP address
Write a program to Validate an IPv4 Address. 
According to Wikipedia, IPv4 addresses are canonically represented in dot-decimal notation, 
which consists of four decimal numbers, each ranging from 0 to 255, 
separated by dots, e.g., 172.16.254.1 */

function validateIP(ip) {
    let splitedIP = ip.split('.')
    if (splitedIP.length > 4 || splitedIP.length < 4) {
        return false
    }
    
    for (let i = 0; i < splitedIP.length; i++) {
        if(isNaN(splitedIP[i]))
            return false

        // if (splitedIP[i]) {
        //     if (plitedIP[i].length <1) {
                
        //     }
        // }

        if(splitedIP[i]>255 || splitedIP[i]<0)
            return false

        return true
    }
}

// Function Call
// if (validateIP('125.512.100.1'))
//     console.log("Valid IP");
// else
//     console.log("Invalid IP!");


