// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let wordToScore = " ";

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  } 
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");

   let wordToScore = input.question("Please enter a word: ");
   return (wordToScore);

};

 function simpleScorer () {
  let simpleScorer = wordToScore.length
}

 function vowelBonusScorer(){
   let vowelBonusScorer = wordToScore.split("");//splits the string by character!
   let total = 0//no points yet
   let vowels = "aeiouy"

for ( let i=0; i<vowelBonusScorer.length; i++){

if (vowels.includes(vowelBonusScorer[i])){
 
total = total + 3
//console.log("Vowel total: " + total);
//console logged this along the way to check that i was accutartly updating the varibale total 
}
else {
  total = total + 1;
  //console.log("Consonant and vowel total: " + total);
}

}

return (total);
}

let scrabbleScorer;

let simpleScoreObject = {
  name:"Simple Score", 

  description:"Each letter is worth 1 point.",

  scoringFunction: function simpleScorer () {
  let simpleScorer = wordToScore.length
}
 };

 let bonusVowelsObject = { 
  name: "Bonus Vowels",

  description:"Vowels are 3 pts, consonants are 1 pt.",

  scoringFunction: function vowelBonusScorer(){
    let vowelBonusScorer = wordToScore.split("");
    let total = 0
   let vowels = "aeiouy"

  for ( let i=0; i<vowelBonusScorer.length; i++){
  
   if (vowels.includes(vowelBonusScorer[i])){
  total = total + 3
}
  else {
  total = total + 1; 
}
}
  return total;
}
};

let scrabbleObject = {
   name:"Scrabble",

   description: "The traditional scoring algorithm.",

  scoringFunction: function oldScrabbleScorer(wordToScore) {
	wordToScore = wordToScore.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${wordToScore[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }
}

const scoringAlgorithms = [ simpleScoreObject, bonusVowelsObject, scrabbleObject ];

function scorerPrompt() {
   scoringMethod=input.question( "What scoring method would you like to use? Press 0 for Simple( one point per character), Press 1 for Vowel Bonus ( three points per vowel, 1 point per consonant) and Press 2 for Original Scrabble Point System.");

  if (scoringMethod === '0') {
    console.log(wordToScore +'is worth' + simpleScorer(wordToScore) + 'points');
  }

  else if (scoringMethod ==='1'){
    vowelBonusScorer(wordToScore);
  }

  else ( scoringMethod ==='2') 
    oldScrabbleScorer(wordToScore);
}

function transform() {
   for (let i = 0; i < oldPointStructure[i].length; i++) {

    newPointStructure.push(oldPointStructure[i].toLowerCase());
    
    return newPointStructure
  }
};

let newPointStructure ={ 
  a: 1, b: 3, c:3, d: 2, e: 1, f: 4, g: 2, h:4, i:1, j: 8,
  k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1,
  u: 1, v: 4, w: 4, x: 8, y: 4, z: 10
};

function runProgram() {
   initialPrompt();
   scorerPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
