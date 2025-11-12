# Project: JavaScript Operatives - The Decoder Ring

Welcome, Agent. Your mission, should you choose to accept it, involves decoding a secret message intercepted from an enemy operative. The message is corrupted, but it contains vital intelligence. Your task is to use your JavaScript skills to clean the message, verify its contents, and extract the final password.

## Your Objective

Complete the `decoder.js` file to process the `encryptedMessage`. Unlike previous missions, you will not be given step-by-step instructions. Instead, you must achieve a series of objectives to produce the correct final output.

**This mission will test your understanding of:**

- String methods like `.toLowerCase()`, `.replace()`, `.includes()`, `.indexOf()`, and `.slice()`.
- String properties like `.length`.
- Incrementing (`++`) and assignment operators.
- Conditional logic (`if`, `else if`, `else`).

## Mission Briefing & Objectives

You must modify the `let` variables in `decoder.js` by completing the following objectives:

1. **Clean the Message:** The `encryptedMessage` has been corrupted with extraneous `*` characters and is in a messy case. Clean it by removing all `*` characters and converting the entire message to lowercase. Store the result in the `cleanedMessage` variable.

2. **Verify the Keyword:** The message is only valid if it contains the `requiredKeyword` ("phoenix"). Check if your `cleanedMessage` includes this keyword. If it does, set `containsKeyword` to `true` and **increment** your `clearanceLevel` by one.

3. **Extract the Password:** The password is the last word of the message. Find the starting position of the password (it comes right after "password: ") and use it to **slice** the password out of the `cleanedMessage`. Store the result in the `extractedKey` variable. If the extracted key has a length of exactly 7 characters, **increment** `clearanceLevel` again.

4. **Validate the Agent ID:** For security, the `agentID` must be an **odd number** greater than 50. Write a conditional statement to check if `agentID` meets these criteria. If it does, set `isAgentIDValid` to `true` and **increment** `clearanceLevel` one last time.

5. **Determine the Final Verdict:** If, and only if, your final `clearanceLevel` is **3**, the message is authentic. You must update the `finalMessage` to reveal the intelligence. The final message should be: `Mission success. The extracted key is: [YOUR EXTRACTED KEY]. Proceed to extraction.`

## Final Output

When you run your completed `decoder.js` file, your console should produce this exact output:

```text
[DECODING REPORT]
Clearance Level:      3
Message Cleaned:      the phoenix has landed. rendezvous at midnight. password: shadow
Keyword Found:        true
Key Extracted:        shadow
Agent ID Valid:       true

[FINAL VERDICT]
Mission success. The extracted key is: shadow. Proceed to extraction.
```

## Resources

- [MDN: String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [MDN: Conditionals (if...else)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN: Assignment Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators)
