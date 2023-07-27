const substitutionModule = (function () {

  function inputChecker(alphabet){
    switch(true){
      case (alphabet === undefined):
      return false;
      case (alphabet.length != 26):
      return false;  
      default:
      for (letters of alphabet){
      if(alphabet.indexOf(letters)!= alphabet.lastIndexOf(letters)) return false;
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
