"use strict";
/* Exercise No# 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
let guestList = ["Sana", "Arooba", "Muneeba", "Ramsha"];
//print message
console.log("Unfortunately! we can't arrange the bigger table so we only invite 2 guests.");
//Remove guests
while (guestList.length > 2) {
    let guestremove = guestList.pop();
    if (guestremove !== undefined) {
        console.log(`Sorry! ${guestremove}, we can't invite you.`);
    }
}
// print message to remaining guests
guestList.forEach(guest => {
    console.log(`Dear ${guest} you are still invited for a dinner`);
});
//remove last 2 guest from the list
guestList.splice(0, guestList.length);
// updated empty array
console.log("No Guest is invited for a dinner:", guestList);
