let input = 'snakes and monsters'
const vowels = ['a', 'e', 'i', 'o', 'u']
let resultArray = []

// loop that iterates through each letter in input
for(let i = 0; i < input.length; i++) {

  // As you loop through the input, iterate through the vowels array
  for(let j = 0; j < vowels.length; j++) {

    // if the input and vowel match, push to resultsArray
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }

  // If the input is 'e' after checking for matches, add another instance of e so you wil get 'e', 'e'
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  
  // If the input is 'e' after checking for matches, add another instance of e so you wil get 'e', 'e'
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
}

//.join to bring letters together, .toUpperCase to capitalize all letters
console.log(resultArray.join('').toUpperCase());
