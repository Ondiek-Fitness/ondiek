
function reverseString(str) {
    // Split the string into an array of characters
    let charArray = str.split('');
    
    // Reverse the array
    charArray.reverse();
    
    // Join the characters back into a string
    let reversedStr = charArray.join('');
    
    return reversedStr;
}

// Example usage:
console.log(reverseString("hollo")); // Output: "olleh"

