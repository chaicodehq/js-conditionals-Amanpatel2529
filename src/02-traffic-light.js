/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
  // Your code here
  //color != string ->ye true h to return invalid 
  if (typeof color !== "string") {
    return "INVALID SIGNAL";
  }

 // color ko case insensitive me convert kro toLowerCase()
  const caseInSensitive = color.toLowerCase();

  //compare krenge case insensitive color ko 
  switch (caseInSensitive) {
    //green h to go
    case "green":
      return "GO";
    //yellow to slow krdo
    case "yellow":
      return "SLOW DOWN";
    //red h to stop krdo
    case "red":
      return "STOP";
    //red flash kr raha h to stop aur go 
    case "flashing red":
      return "STOP AND PROCEED WITH CAUTION";
    //color green, red, yellow nhi h to invalid color h
    default:
      return "INVALID SIGNAL";
  }
}
