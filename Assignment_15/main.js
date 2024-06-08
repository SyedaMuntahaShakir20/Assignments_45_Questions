"use strict";
/* Exercise No# 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15.Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Sana", "Arooba", "Muneeba", "Ramsha"];
console.log("Big Amouncement! We arrange another bigger table for a dinner");
//add guest in beggining of array 
guestList.unshift("Shoaib");
//add guest in middle of array
guestList.splice(Math.floor(guestList.length / 2), 0, "Rabia");
//use append() to add guest in the end
guestList.push("Sarah");
//print invitation msg to each other
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited for a dinner`);
});
