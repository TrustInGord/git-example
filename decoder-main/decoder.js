// =================================================================
//   )      (\_     | JAVASCRIPT OPERATIVES │
//  ((    _/{  "-;  │                 ──────────────────────────────── │
//   )).-' {{ ;'`   │ PROJECT: THE DECODER RING │
//  ( (  ;._ \\ ctr │     (Strings, Conditionals, & Operators)     │
// =================================================================

// ----------------------------------------------------------------
// │ YOUR MISSION:                                                │
// │ Complete the objectives outlined in the README.md file.      │
// ----------------------------------------------------------------


// │ ENCRYPTED DATA (DO NOT CHANGE) │
// ----------------------------------
const encryptedMessage = "Th*e ph*oeni*x h*as lan*ded. R*endev*ous at mid*night. Pas*sword: sh*ad*ow";
const requiredKeyword = "phoenix";
const agentID = 77;


// │ AGENT STATUS REPORT (VARIABLES TO BE MODIFIED) │
// --------------------------------------------------
let clearanceLevel = 0;
let cleanedMessage = "";
let containsKeyword = false;
let extractedKey = "";
let isAgentIDValid = false;
let finalMessage = "Access Denied."; // Default message


// --------------------------------------------------------------------
// │ STAGE 1: MESSAGE CLEANUP                                         │
// --------------------------------------------------------------------
// │ OBJECTIVE:                                                       │
// │ Remove all '*' characters from `encryptedMessage` and convert it │
// │ to lowercase. Store the result in `cleanedMessage`.              │
// --------------------------------------------------------------------

// YOUR CODE HERE
// tempMessage = encryptedMessage.replaceAll(`*`, ``);
// encryptedMessage.replace(/\*/g,, "");
// tempMessage = encryptedMessage.replaceAll(`*`, ``).toLowerCase();

cleanedMessage = encryptedMessage.replaceAll(`*`, ``).toLowerCase();

// --------------------------------------------------------------------
// │ STAGE 2: KEYWORD VERIFICATION                                    │
// --------------------------------------------------------------------
// │ OBJECTIVE:                                                       │
// │ Check if `cleanedMessage` includes the `requiredKeyword`.        │
// │ If it does, set `containsKeyword` to true and increment          │
// │ `clearanceLevel`.                                                │
// --------------------------------------------------------------------

// YOUR CODE HERE
if (cleanedMessage.includes(requiredKeyword)) {
    containsKeyword = true;
    clearanceLevel++;
}

// --------------------------------------------------------------------
// │ STAGE 3: KEY EXTRACTION                                          │
// --------------------------------------------------------------------
// │ OBJECTIVE:                                                       │
// │ Find and extract the password from the end of `cleanedMessage`.  │
// │ If the extracted key's length is 7, increment `clearanceLevel`.  │
// --------------------------------------------------------------------

// YOUR CODE HERE

tempPasswordPosition = cleanedMessage.indexOf("password: ");
extractedKey = cleanedMessage.slice(tempPasswordPosition + 10, cleanedMessage.length);
//console.log(tempPasswordPosition+ "Test");

console.log(extractedKey.length == extractedKey);
if (extractedKey.length == 6) {
    clearanceLevel++;
}

// --------------------------------------------------------------------
// │ STAGE 4: AGENT ID VALIDATION                                     │
// --------------------------------------------------------------------
// │ OBJECTIVE:                                                       │
// │ Check if `agentID` is an odd number AND greater than 50.         │
// │ If true, set `isAgentIDValid` to true and increment              │
// │ `clearanceLevel`.                                                │
// --------------------------------------------------------------------

// YOUR CODE HERE
if ((agentID % 2 == 1) && (agentID > 50)) {
    //console.log("Oddity");
    isAgentIDValid = true;
    clearanceLevel++;
}

// --------------------------------------------------------------------
// │ STAGE 5: FINAL VERDICT                                           │
// --------------------------------------------------------------------
// │ OBJECTIVE:                                                       │
// │ If `clearanceLevel` is exactly 3, update `finalMessage` to the   │
// │ success message outlined in the README.                          │
// --------------------------------------------------------------------

// YOUR CODE HERE
if (clearanceLevel == 3) {
    finalMessage = `Mission success. The extracted key is: ${extractedKey}. Proceed to extraction.`
}


// --------------------------------------------------------------------
// │ FINAL REPORT (DO NOT CHANGE)                                     │
// --------------------------------------------------------------------
console.log("[DECODING REPORT]");
console.log("-------------------");
console.log("Clearance Level:     ", clearanceLevel);
console.log("Message Cleaned:     ", cleanedMessage);
console.log("Keyword Found:       ", containsKeyword);
console.log("Key Extracted:       ", extractedKey);
console.log("Agent ID Valid:      ", isAgentIDValid);
console.log("\n[FINAL VERDICT]");
console.log("-------------------");
console.log(finalMessage);
