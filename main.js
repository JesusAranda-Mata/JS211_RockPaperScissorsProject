// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
/**
 * Write a function that will return
 *  'Hand1 wins' if hand1 is the winning hand
 *  'Hand1 wins' if hand1 is the winning hand
 *  'It's a tie!' if it is a tie
 * @param {string} hand1 - represents hand1's hand
 * @param {string} hand2 - represents hand2's hand
 * @returns an appropriate message let you know which player won
 */

let paper = "paper"
let rock = "rock"
let scissors = "scissors"

paper.trim()
rock.trim()
scissors.trim()

const rockPaperScissors = (h1, h2) => {
  // Write code here
  let hand1 = h1.trim().toLowerCase();
  let hand2 = h2.trim().toLowerCase();

  if ((hand1 == paper && hand2 == rock) || (hand1 == rock && hand2 == scissors) || (hand1 == scissors && hand2 == paper)){
    return "Hand one wins!"
  }
  if ((hand1 == rock && hand2 == paper) || (hand1 == paper && hand2 == scissors) || (hand1 == scissors && hand2 ==  rock)){
    return "Hand two wins!"
  }
  if ((hand1 == rock && hand2 == rock) || (hand1 == paper && hand2 == paper) || (hand1 == scissors && hand2 == scissors)){ 
    return "It's a tie!"
  } 
  else {  
    return "Learn the game!!!"
  }  
}

/*----
//-----------This is my test code
const rockPaperScissors = (hand1, hand2) => {
  // Write code here
  if (hand1 == rock && hand2 == scissors){
    return '0'
  }
  if (hand1 == paper && hand2 == rock){
    return '1'
  }
  if ("scissors"&&"paper"){
    return "Hand two wins!"
  }
  if (paper && scissors){
    return '3'
  }
  if (rock && paper){
    return '4'
  }
  if (hand1 == scissors && hand2 == rock){
    return '5'
  }
}
----*/

/*----- 
 let results = rockPaperScissors()
 console.log(results)
-----*/

  // Use the unit test to see what is expected

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
