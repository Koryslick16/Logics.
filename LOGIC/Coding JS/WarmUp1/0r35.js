
// Return true if the given non-negative number is a multiple of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)

// or35(3) → true
// or35(10) → true
// or35(8) → false



function or35(n){
    return n % 3 == 0 || n % 5 == 0;
  }