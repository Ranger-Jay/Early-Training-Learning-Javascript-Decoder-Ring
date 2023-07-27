const caesarModule = (function () {

  let alphabet = ["a", "b", "c", "d", "e",
                    "f", "g", "h", "i", "j",
                    "k", "l", "m", "n", "o",
                    "p", "q", "r", "s", "t",
                    "u", "v", "w", "x", "y",
                    "z"];

  function caesar(input, shift, encode = true) {
    let inputs = input.toLowerCase();
    let result = [];
    let inputLetters = [];
    
      //helper shift left
  function shiftLeft(inputs, shift, inputLetters, alphabet, result){
   
    for (let i = 0; i < inputs.length; i++){
      // comparing, push to inputs lower case into inputLetters into array.
      inputLetters.push(inputs[i]);
    }
   for (let ix = 0; ix < inputLetters.length; ix++){
      if (!alphabet.includes(inputLetters[ix])){
        result.push(inputLetters[ix]);
      }
      for (let j = 0; j < alphabet.length; j++){
        if (inputLetters[ix] === alphabet[j]) {
          if ((alphabet.indexOf(alphabet[j]) + shift) < 0){
            diff = (alphabet.indexOf(alphabet[j]) + shift);
            result.push(alphabet[alphabet.length + diff]);
          }else{
            result.push(alphabet[j+shift]);
          }
        }
      }
    } 
    return result;
  }
  //helper shift right
  function shiftRight(inputs, shift, inputLetters, alphabet, result){
    
    for (let i = 0; i < inputs.length; i++){
      inputLetters.push(inputs[i]);
    }
  
    for (let iy = 0; iy < inputLetters.length; iy++){
      if (!alphabet.includes(inputLetters[iy])){
        result.push(inputLetters[iy]);
      }
      for (let j=0; j<alphabet.length; j++){
        if (inputLetters[iy] === alphabet[j]) {
          if ((alphabet.indexOf(alphabet[j]) + shift) >= alphabet.length){
            diff = (alphabet.length - alphabet.indexOf(alphabet[j]));
            
            result.push(alphabet[0 + shift - diff]);
          }else{
            result.push(alphabet[j+shift]);
          }
        }
      }
    }
    return result;  
  } 
    
    if (shift === 0 || shift < -25 || shift > 25 || shift === null || shift === "" || shift === false) {   
    
//    if (shift === 0 || shift < -25 || shift > 25 || shift === null || shift === false) {
    return false; // if shift is within the parameters = early exit.
      
    }else if (encode === true && shift < 0){
    shiftLeft(inputs, shift, inputLetters, alphabet, result); //negative shift on encode
    }else if(encode === true && shift > 0){
    shiftRight(inputs, shift, inputLetters, alphabet, result); //positive shift on encode
    }
    else if(encode === false && shift < 0){
   shiftRight(inputs, Math.abs(shift), inputLetters, alphabet, result); // postive shift on decode
    }
    else if (encode === false && shift > 0){
    shiftLeft(inputs, -Math.abs(shift), inputLetters, alphabet, result); //negative shift on decode
    }
    return result.join("");
  }
  

  return {
  caesar,
  };
})();

module.exports = caesarModule.caesar;
