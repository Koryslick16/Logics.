
// We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

// hasTeen(13, 20, 10) → true
// hasTeen(20, 19, 10) → true
// hasTeen(20, 10, 13) → true


function hasTeen(a, b, c){
    return a >= 13 && a < 20 || b >= 13 && b < 20 || c >= 13 && c < 20
  }