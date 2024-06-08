/* Exercise 06: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. 
Then print the name after striping the white spaces. */

let whiteSpace = "\n\t Syeda Muntaha \t\n";
let withoutWhiteSpace = whiteSpace.trim();

// print with Whitespace:
console.log(whiteSpace);

//print without Whitespace:
console.log(withoutWhiteSpace);