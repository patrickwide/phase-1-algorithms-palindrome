function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("");
}

/* 
  Add your pseudocode here

  function isPalindrome(word):
  reversed_word = reverse(word)
  if word equals reversed_word:
    return true
  else:
    return false

*/

/*
  Add written explanation of your solution here
  word.split('') splits the word into an array of characters.
  .reverse() reverses the order of the characters in the array.
  .join('') joins the elements back into a string.
  word === ... checks if the original string is equal to the reversed string.
  If they are equal, the function returns true. Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
