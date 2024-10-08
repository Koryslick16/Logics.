
// Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.


// close10(8, 13) → 8
// close10(13, 8) → 8
// close10(13, 7) → 0


function close10(a, b){
    let diff1 = a-10;
    let diff2 = b-10;
    
    if(Math.abs(diff1) == Math.abs(diff2)){
       return 0;
    }
    if( Math.abs(diff2) >  Math.abs(diff1) ){
      return a;
    }
    if( Math.abs(diff1) >  Math.abs(diff2) ){
      return b;
    }
    
    
  }