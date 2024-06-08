"use strict";
// Excerise 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "syeda Muntaha";
console.log("LowerCase:", personName.toLowerCase());
console.log("UpperCase:", personName.toUpperCase());
console.log("TitleCase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
