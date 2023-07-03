export default function titlizeString(inputString) {
    let words = inputString.split(' ');  // Split the string into an array of words
    let titlizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));  // Capitalize each word
    let titlizedString = titlizedWords.join(' ');  // Join the titlized words back into a string
    return titlizedString;
  }
  
  // Example usage:
  let inputString = "hello world";
  let titlizedResult = titlizeString(inputString);
  console.log(titlizedResult);