# Project: Magical Potion Shop Inventory

Welcome, your first task at our magical potion shop is to create a simple inventory management system using JavaScript. You'll be working with our master list of potions to track what we have in stock.

## 🎯 Your Objective

Your goal is to write a set of JavaScript functions inside the `js/index.js` file to manage our list of potions. You will then call these functions to produce a specific output in the browser's developer console.

## 🛠️ Instructions

1. **Create and Link Your Script:** Inside the `js` folder, create a new file named `inventory.js`. Make sure it's correctly linked in the `index.html` file.

2. **Start with Our Current Inventory:** At the very top of `js/index.js`, create an array to store our list of potions.

   ```javascript
   const potions = [
     'Healing Potion',
     'Invisibility Potion',
     'Strength Potion',
     'Speed Potion',
     'Love Potion',
   ];
   ```

3. **Build the Management Functions:** You need to create the following five functions. Each function will perform a specific action on the `potions` array.
   - `displayInventory(inventory)`:
     - Accepts one argument: an inventory `array`.
     - Logs a message to the console: "Current Inventory:" followed by the entire array.

   - `countPotions(inventory)`:
     - Accepts one argument: an inventory `array`.
     - **Returns** the total number of potions in the inventory (a `number`).

   - `hasPotion(inventory, potionName)`:
     - Accepts two arguments: an inventory `array` and a `potionName` (a `string`).
     - **Returns** `true` if the potion exists in the inventory and `false` if it does not (a `boolean`).

   - `addPotion(inventory, potionName)`:
     - Accepts two arguments: an inventory `array` and a `potionName` (a `string`).
     - This function should first check if the potion already exists.
     - If it doesn't exist, add the new potion to the end of the inventory.
     - Logs a message to the console, like "`Glimmering Elixir` has been added to the inventory."
     - If the potion _does_ already exist, log a message like "`Love Potion` is already in stock."

   - `findPotionByIndex(inventory, index)`:
     - Accepts two arguments: an inventory `array` and an `index` (a `number`).
     - If a potion exists at that index, **return** the potion's name (a `string`).
     - If no potion exists at that index, **return** `null`.

4. **Run the Program:** After defining all your functions, add code to the _bottom_ of your `js/index.js` file to call them in sequence and replicate the **Expected Output** below.

## ✅ Expected Output

When you open `index.html` in your browser, your console should show the following output exactly.

```
Welcome to the Potion Shop!

Current Inventory:
[ "Healing Potion", "Invisibility Potion", "Strength Potion", "Speed Potion", "Love Potion" ]

We have 5 types of potions.

Do we have "Strength Potion"? true
Do we have "Glimmering Elixir"? false

Adding "Glimmering Elixir"...
"Glimmering Elixir" has been added to the inventory.

Adding "Love Potion"...
"Love Potion" is already in stock.

Our new inventory is:
[ "Healing Potion", "Invisibility Potion", "Strength Potion", "Speed Potion", "Love Potion", "Glimmering Elixir" ]

The second potion on our list is: Invisibility Potion
The tenth potion on our list is: null
```

## File Structure

File tree

```text
.
├── index.html
├── js
│   └── index.js

1 directory, 2 files
```

Good luck!
