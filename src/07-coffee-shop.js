/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  //size valid h ki nhi check kro
  if(size !== "small" && size !=="medium" && size !=="large"){
    return -1;
  }

  //type valid h ki nhi check kro
  if(type !=="regular" && type !=="latte" && type !=="cappuccino" && type !=="mocha"){
    return -1;
  }

  //variable total 0 se initialize kro
  let total = 0;

  //size ke hisab se total add krdo
  if (size === "small") total = 3.00;
  else if (size === "medium") total = 4.00;
  else if (size === "large") total = 5.00;

  // type ke hisab se total add krdo
  if (type === "latte") total += 1.00;
  else if (type === "cappuccino") total += 1.50;
  else if (type === "mocha") total += 2.00;

  // extra ke hisab se total add krdo
  if (extras.whippedCream) total += 0.50;
  if (extras.extraShot) total += 0.75;

  // 5. Round to 2 decimal places
  return Math.round(total * 100) / 100;
  
}
