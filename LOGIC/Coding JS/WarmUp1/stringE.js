
// Return true if the given string contains between 1 and 3 'e' chars.

// stringE('Hello') → true
// stringE('Heelle') → true
// stringE('Heelele') → false


function stringE(str){
    let count = 0
    for(let i = 0; i < str.length; i++){
    if(str[i] === "e"){
     count += 1
    }
    }
    return count >= 1 && count <= 3 ;
  }