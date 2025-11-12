const potions = [
  'Healing Potion',
  'Invisibility Potion',
  'Strength Potion',
  'Speed Potion',
  'Love Potion',
];

let myInv = potions;

console.log("Welcome to the Potion Shop!\n");

console.log("Current Inventory:");
displayInventory(myInv);

countPotions(myInv);

console.log(" ");
let jake = "Strength Potion";
console.log(`Do we have "${jake}?" ` + hasPotion(myInv, jake));
jake = "Glimmering Elixer";
console.log(`Do we have "${jake}?" ` + hasPotion(myInv, jake));

console.log(" ");
let newPotion = "Glimmering Elixir";
console.log(`Adding ${newPotion}...`);
addPotion(myInv, newPotion);

newPotion = "Love Potion";
console.log(" ");
console.log(`Adding ${newPotion} ...`);
addPotion(myInv, newPotion);


console.log("\nOur new inventory is:")
displayInventory(myInv);

console.log("\nThe second potion on our list is: " + findPotionByIndex(myInv, 1));
console.log("The tenth potion on our list is: " + findPotionByIndex(myInv, 9));

//    Accepts one argument: an inventory array.
//    Logs a message to the console: "Current Inventory:" followed by the entire array.

function displayInventory(inventory) {
    let tempText = "";

        for (const inv in inventory) {
            tempText += `"` + inventory[inv] + `", `;
        }

    let textTempter = tempText.slice(0, -2)
    console.log("[ " + textTempter + " ]");
}

//    Accepts one argument: an inventory array.
//    Returns the total number of potions in the inventory (a number).

function countPotions(inventory) {
    console.log("\nWe have " + inventory.length + " types of potions");
}

//    Accepts two arguments: an inventory array and a potionName (a string).
//    Returns true if the potion exists in the inventory and false if it does not (a boolean).


function hasPotion(inventory, potionName) {
    if (inventory.includes(potionName)) {
        return true;
    }
    else {
        return false;
    }
}


//    Accepts two arguments: an inventory array and a potionName (a string).
//    This function should first check if the potion already exists.
//    If it doesn't exist, add the new potion to the end of the inventory.
//    Logs a message to the console, like "Glimmering Elixir has been added to the inventory."
//    If the potion does already exist, log a message like "Love Potion is already in stock."

function addPotion(inventory, potionName) {
    if (inventory.includes(potionName)) {
        console.log(`${potionName} is already in stock.`);
    }
    else {
        inventory.push(potionName);
        console.log(`${potionName} has been added to the inventory.`);
    }
}

//    Accepts two arguments: an inventory array and an index (a number).
//    If a potion exists at that index, return the potion's name (a string).
//    If no potion exists at that index, return null.

function findPotionByIndex(inventory, index) {
    if (inventory[index] != null){
       // console.log("True");
        return inventory[index];
    }
    else {
       // console.log("false");
        return "null";
    }
}