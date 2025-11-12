// =================================================================
//   )      (\_     | WOLFPACK SURVIVAL │
//  ((    _/{  "-;  │                 ──────────────────────────────── │
//   )).-' {{ ;'`   │ PROJECT: THE DRAGON'S LAIR │
//  ( (  ;._ \\ ctr │          (JavaScript Fundamentals)           │
// =================================================================

// ----------------------------------------------------------------
// │ YOUR MISSION:                                                │
// │ Complete the code below to bring the story to life.          │
// │ ⚠️ Do NOT create any new variables.                          │
// │ ⚠️ Do NOT change the pre-written `console.log` statements.   │
// ----------------------------------------------------------------

// │ HERO AND GAME VARIABLES (DO NOT CHANGE) │
// -------------------------------------------
let heroName = "Gordon";
let heroClass = "Warrior";
let heroHealth = 75;
let heroAttack = 10;
let heroGold = 100;
let heroWeapon = "Fists";
const MAX_HEALTH = 100;

// --- STORY VARIABLES (TO BE MODIFIED) ---
let storyPart1 = "";
let storyPart2 = "";
let storyPart3 = "";
let storyPart4 = "";
let storyPart5 = "";
let storyPart6 = "";
let finalTale = "";

// --- GAME VALUES (DO NOT CHANGE) ---
const swordAttackBonus = 15;
const trollToll = 50;
const fountainHealAmount = 20;
const dragonAttackDamage = 60;
const dragonTreasure = 150;


// --------------------------------------------------------------------
// │ STEP 1: THE JOURNEY BEGINS                                       │
// --------------------------------------------------------------------
// │ INSTRUCTIONS:                                                    │
// │ Create the first part of the story.                              │
// │ Combine `heroName` and `heroClass` into a single string.         │
// │ Assign the result to `storyPart1`.                               │
// --------------------------------------------------------------------

// YOUR CODE HERE
storyPart1 = `Our hero, ${heroName} the ${heroClass}, begins their quest.`;


// --------------------------------------------------------------------
// │ STEP 2: THE RUSTY SWORD                                          │
// --------------------------------------------------------------------
// │ INSTRUCTIONS:                                                    │
// │ 1. Update the `heroWeapon` variable to "Rusty Sword".            │
// │ 2. Increase `heroAttack` by the `swordAttackBonus`.              │
// │ 3. Create the story part using the hero's new attack power.      │
// --------------------------------------------------------------------

// YOUR CODE HERE

heroWeapon = "Rusty Sword";
heroAttack += swordAttackBonus;
storyPart2 = `And then our hero, ${heroName} wielded the Rusty Sword and gained ${swordAttackBonus} attack to have ${heroAttack} attack`;


// storyPart2 = `They find a Rusty Sword, raising their attack power to ${heroAttack};

// --------------------------------------------------------------------
// │ STEP 3: THE TROLL'S BRIDGE                                       │
// --------------------------------------------------------------------
// │ INSTRUCTIONS:                                                    │
// │ 1. Decrease `heroGold` by the `trollToll`.                       │
// │ 2. Create the story part describing the event and the gold left. │
// --------------------------------------------------------------------

// YOUR CODE HERE

heroGold -= trollToll;
storyPart3 = `${heroName} encountered a bridge, with a troll under it. He paid the troll toll of ${trollToll} gold gaining passage`;

// storyPart3 = `A troll demands a toll of ${trollToll} gold to cross a bridge. Arthur has ${heroGold} gold left.`

// --------------------------------------------------------------------
// │ STEP 4: THE HEALING FOUNTAIN                                     │
// --------------------------------------------------------------------
// │ INSTRUCTIONS:                                                    │
// │ 1. Increase `heroHealth` by the `fountainHealAmount`.            │
// │    (Remember, health cannot go above `MAX_HEALTH`!)              │
// │ 2. Create the story part showing the health recovered.           │
// --------------------------------------------------------------------

// YOUR CODE HERE

if (heroHealth + fountainHealAmount > MAX_HEALTH) {
    heroHealth = MAX_HEALTH;

    storyPart4 = `The brave hero ${heroName}, weary from their travel took time to
rest and sip at the fountain, replenishing their health ${MAX_HEALTH - heroHealth}
Now having ${heroHealth}`;

    // storyPart4 = `Arthur discovers a healing fountain and recovers ${fountainHealAmount} health, bringing them to ${heroHealth} total health.`          
}
else {
    heroHealth += fountainHealAmount;
    storyPart4 = `The brave hero ${heroName}, weary from their travel took time to
rest and sip at the fountain, replenishing their health ${fountainHealAmount}`;

    // storyPart4 = `Arthur discovers a healing fountain and recovers ${fountainHealAmount} health, 
    //            bringing them to ${heroHealth} total health.`
}



// --------------------------------------------------------------------
// │ STEP 5: THE DRAGON BATTLE                                        │
// --------------------------------------------------------------------
// │ INSTRUCTIONS:                                                    │
// │ 1. Decrease `heroHealth` by the `dragonAttackDamage`.            │
// │ 2. Create the story part showing the damage taken.               │
// --------------------------------------------------------------------

// YOUR CODE HERE

heroHealth -= dragonAttackDamage;

storyPart5 = `The dragon attacks! ${heroName} takes ${dragonAttackDamage} damage and has ${heroHealth} health remaining.`;

// --------------------------------------------------------------------
// │ STEP 6: VICTORY & TREASURE                                       │
// --------------------------------------------------------------------
// │ INSTRUCTIONS:                                                    │
// │ 1. Increase `heroGold` by the `dragonTreasure` amount.           │
// │ 2. Create the final story part celebrating the victory.          │
// --------------------------------------------------------------------

// YOUR CODE HERE

heroGold += dragonTreasure;

storyPart6 = `VICTORY! The dragon is defeated. ${heroName} claims the treasure of ${dragonTreasure} gold, bringing their total to ${heroGold} gold.`;

// --------------------------------------------------------------------
// │ STEP 7: THE FINAL TALE                                           │
// --------------------------------------------------------------------
// │ INSTRUCTIONS:                                                    │
// │ Combine all story parts into a single narrative. Use the `\n`    │
// │ character to add a new line between each part.                   │
// --------------------------------------------------------------------

// YOUR CODE HERE
finalTale = storyPart1 + "\n" + storyPart2 + "\n" + storyPart3 + "\n" + storyPart4 + "\n" + storyPart5 + "\n" + storyPart6; // Hint: Add the other parts to this string.


// --------------------------------------------------------------------
// │ FINAL OUTPUT (DO NOT CHANGE)                                     │
// --------------------------------------------------------------------
console.log("STORY OUTPUT:");
console.log(finalTale);
console.log("\n--- HERO'S FINAL STATS ---");
console.log("Health:", heroHealth);
console.log("Attack:", heroAttack);
console.log("Gold:", heroGold);
console.log("Weapon:", heroWeapon);
