var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var alphabet = "abcdefghijklmnopqrstuvwxyz";




// Find index in alphabet and add shift variable
// before for loop: encodedString = ""
// in for loop:
// find index of current letter in alphabet
// add shift number to that index
// add letter from alphabet of shifted index to encodedString





const encodedString = input.valueOf();

for (let i = 0; i < encodedString.length; i++) {
    
    const index = alphabet.indexOf(encodedString); 
    const newIndex = index + shift;
    const newCharacter = alphabet[newIndex];

} return encodedString;







