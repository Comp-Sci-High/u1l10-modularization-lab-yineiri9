// Follow the instructions for each section below.

// The functions you will be writing will all be modifying the array groceryList below.
// Leave it alone.
let groceryList = ["Milk", "Oreos"];

// Part 1 - Modularizing
// In this section, you will use the existing code and turn them into functions.
// Make sure to leave the console logs as part of the function.
// What each function returns will be specified.
// Test your functions as you go.
// Remember to name your functions appropriately, identify the input(s) (if any), and return what's specified.

//////////////////////////////////////////////////////////////////////
// 1. Create a function that adds an item to the list.
// Return the new item.
function add(item){
groceryList.push(item);
console.log("item added"+item);
return item
}
// Code to modularize:


//////////////////////////////////////////////////////////////////////
// 2. Create a function that removes the last item from the list.
// Return the removed item.
function remove(item){
  groceryList.pop();
  console.log("item remove " + item);
  return item
}


// Code to modularize:


//////////////////////////////////////////////////////////////////////
// 3. Create a function that updates a specific item in the list.
// Return the updated item.
function updates(item){
  groceryList.shift(item);
  console.log("item updated from " + item)
}
// Code to modularize:


//////////////////////////////////////////////////////////////////////
// 4. Create a function that shows the current grocery list.
// Returns the grocery list array.
function shows(){
  if (groceryList.length === 0) {
    console.log("The grocery list is empty.");
  } else {
    console.log("Grocery List: " + groceryList);
  }
  return groceryList
}

// Code to modularize:


//////////////////////////////////////////////////////////////////////

// Part 2 - Add new features
// Now that you've modularized the existing code, it's time to add two new features.

//////////////////////////////////////////////////////////////////////
// 1. Write a function that logs how many items you have left in the list.
// It should log the following "The grocery list has x item(s).", with x being how many items are left.
// Returns the grocery list length.
function logs(){
  console.log("The grocery list has"+ groceryList.length)
  return groceryList.length
}
//////////////////////////////////////////////////////////////////////
// 2. Write a function that clears the whole grocery list.
// It should log the following "The grocery list is now empty."
// Returns the empty grocery list.
function clears(){
  console.log("the grocery list is now empty")
  return ""
}
//////////////////////////////////////////////////////////////////////
// Part 3 - Calling Functions
// You want to create a charcuterie board so now it's time to call the functions you wrote in Part 1 and Part 2.
// Your goal is to achieve the console output below by calling your functions.
// Remember that your functions should've already included console logs, therefore you are only calling your functions NOT logging them below.

/*
// The grocery list is cleared
// Item added: Gouda Cheese
// Item added: Brie Cheese
// Item added: Swiss Cheese
// Item removed: Swiss Cheese
// Item added: Green Grapes
// Grocery List: Gouda Cheese, Brie Cheese, Green Grapes
// Item added: Prosciutto
// Item added: Chorizo
// Item added: Multigrain Crackers
// Item updated from Chorizo to Jamon
// The grocery list has 6 item(s)
// Item added: Pita Chips
// Grocery List: Gouda Cheese, Brie Cheese, Green Grapes, Prosciutto, Jamon, Multigrain Crackers, Pita Chips
*/

// Call 1: Clear the grocery list
clears()
// Call 2: Add Gouda Cheese
add("Gouda Cheese")
// Call 3: Add Swiss Cheese
add("Swiss Cheese")
// Call 4: Remove Swiss Cheese
remove("Swiss Cheese")
// Call 5: Add Green Grapes
add("Green Grapes")
// Call 6: Add Prosciutto
add("Prosciutt")
// Call 7: Add Chorizo
add("Chorizo")
// Call 8: Add Multigrain Crackers
add("Multigrain Crackers")
// Call 9: Update Chorizo to Jamon
updates(" Chorizo to Jamon")
// Call 10: Show the count of items
shows()
// Call 11: Add Pita Chips
add("pita")
// Call 12: Show the final list
shows()

//////////////////////////////////////////////////////////////////////
// Extra Credit - Improving functions
// EC1: Function #3 asks you to create a function that updates an item from the array. 
// Refactor it so that instead of taking an index it takes in the name of the item you want to update. 

// EC2: Function #2 asks you to create a function that removes the last item from the grocery list. 
// Refactor it so that it can remove any item from any part of the grocery list. 
