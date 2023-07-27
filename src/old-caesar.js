// =========TO RESTART=====================

// const caesarModule = (function () {
//   function caesar(input, shift, encode = true) {
//   }

//   return {
//     caesar,
//   };
// })();
// =========TO RESTART ABOVE=====================

const caesarModule = (function () {

function caesar(input, shift, encode = true) {
    
let output = "";
let shiftValue = 0;

    // THIS CHECKS FOR BAD SHIFT
if(!shift || shift > 25 || shift < -25) {
     console.log(`shift: ${shift}`);
     return false;
    } //  END IF 30

  // LOOP THROUGH AND CONVERT INPUT TO LOWER CASE
    for (let i = 0; i < input.length; i++) {
      let inputCode = input.toLowerCase().charCodeAt(i);
      let inputCharacter = input[i];

      // +/- shift depending on encode is true or false
      encode === true ? shiftValue = inputCode + shift : shiftValue = inputCode - shift;


      if (encode){
        // upper: A = 65, Z = 90
        if(inputCode >= 65 && inputCode <= 90) {
          inputCharacter = String.fromCharCode(((shiftValue - 65 ) % 26) + 65);
          } // end if for upper
  
          // lower: a = 97, z = 122
          if(inputCode >= 97 && inputCode <= 122) {
            inputCharacter = String.fromCharCode(((shiftValue - 97 ) % 26) + 97);
          } // end if for lower

      } // end outer if
      if(!encode){
        let temp = inputCode - 97 - shift;  // results in a negatv?

        if( shiftValue >= 65 && shiftValue <= 122) { 
          inputCharacter = String.fromCharCode(shiftValue); 
        } //end if
        
        if (temp >= 0){    // forr cases temp >=0
          inputCharacter = String.fromCharCode(temp % 26 + 97);
        } else if (inputCode < 65 ){
          inputCharacter = String.fromCharCode(inputCode); 
        } else 
        {
          inputCharacter = String.fromCharCode (26 + temp + 97); 
        }
      } // end if

      // view 
      output += inputCharacter;
    } // end for
    console.log(`input:  ${input}`);
    console.log(`output: ${output}`);
    return output;
  }

  return {caesar};
})();

module.exports = caesarModule.caesar;
