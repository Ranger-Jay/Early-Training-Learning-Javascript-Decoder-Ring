const polybiusModule = (function () {
      const alphabet = { a: 11, b: 21, c: 31, d: 41, e: 51, f: 12,
                         g: 22, h: 32, "(i/j)": 42, k: 52, l: 13,
                         m: 23, n: 33, o: 43, p: 53, q: 14, r: 24,
                         s: 34, t: 44, u: 54, v: 15, w: 25, x: 35,
                         y: 45, z: 55, 
                       }; //END OF ALPHABET CODE ARRAY
                        
                   // 42: i || 42: j,  (TO DO: TEST): FAILED
                   //  "[i/j]": 42,   (TO DO: TEST): FAILED
                  // (i = 42), || (j = 42),  (TO DO: TEST): FAILED

 function polybius(input, encode = true) {
      // your solution code here
      let result = "";
   // 'i WILL BE THE EARLY EXIT IF INPUT IS FALSE ON 23
      if (!input) {return false};
      if (encode) {
        for (let i = 0; i < input.length; i++) {
           const letter = input[i].toLowerCase();
           if (letter === "i" || letter === "j") {
       // NOTE TO SELF - SOMETHING MAY BE WRONG WITH LOGIC ON 27 AND 29
              result += 42;
            } else if (letter === " ") {
              result += " ";
            } else
            { const pairs = Object.entries(alphabet).find(
              (pair) => letter === pair[0]);  // CLOSER FOR PAIRS FIND 33
              result += pairs[1]; // result += pairs[1] (TO DO: TEST): FAILED
              }  // END OF THE REEGULAR ELSE 32
          } // END OF THE FOR LOOP 25
      } // END OF THE ENCODE IF 24
      
      if (!encode) {
        const checkLength = input.split(/\s/).join("");
          if (checkLength.length % 2 !== 0) return false;
          for (let i = 0; i < checkLength.length; i += 2){
             const firstIndex = input[i];
             const secondIndex = input[i + 1];
             const combinedIndex = firstIndex + secondIndex;
             if (firstIndex === " "){
             result += " ";
              i -= 1;
                  continue;
              } else {
               result += Object.keys(alphabet).find(
               (key) => alphabet[key] == combinedIndex
                  );
              } // END ELSE
          } // END FOR LOOP
      } // END IF
      console.log(`input:  ${input}`);
      console.log(`result: ${result}`);
      return result;
    } // end function
  
    return {
      polybius,
    };
  })();
  
  module.exports = polybiusModule.polybius;

/* PREVIOUS VERSION ATTTEMPT
      const alphabet = { a: 11, b: 21, c: 31, d: 41, e: 51, f: 12,
                         g: 22, h: 32, i: 42, j: 42, k: 52, l: 13,
                         m: 23, n: 33, o: 43, p: 53, q: 14, r: 24,
                         s: 34, t: 44, u: 54, v: 15, w: 25, x: 35,
                         y: 45, z: 55, 
                       }; //end of array
*/
