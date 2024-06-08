/* Exercise 05: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
Then compose your message and store it in a new variable called message. Print your message. */

let famousPerson : string = "Albert Einstein";
let famousQuote : string = " Imagination is more important than knowledge.";
let message : string = `${famousPerson} once said, "${famousQuote}"`;
console.log(message);