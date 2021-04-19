// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function inputChecker(alphabet){
    switch(true){
      case (alphabet === undefined):
      return false;
      case (alphabet.length != 26):
      //return false;  What is this one doing???
      default:
      for (letters of alphabet){
      if(alphabet.indexOf(letters)!= alphabet.IndexOf(letters)) return false;
      };
    };
  };

  function substitution(input, alphabet, encode = true) {
    if (inputChecker(alphabet)===false) return false;
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz ";
    const codeAlphabet = [...alphabet," "];
    input = input.toLowerCase();
    const coded = [];

    if (encode === true){
    for (let i = 0; i <= input.length; i++){
    coded.push(codeAlphabet[realAlphabet.indexOf(input[i])
           ]);
      };
    } // end if 
    else {
      for (let i = 0; i < input.length; i++){
        coded.push(realAlphabet[codeAlphabet.indexOf(input[i])]);
      } // end for
    } // end else
    return coded.join("");
  } // end function

  return {substitution};
})(); // end const sub

module.exports = substitutionModule.substitution;