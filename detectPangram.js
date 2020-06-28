// Detect Pangram


function isPangram(string){
 
  let letterFrequency = {};
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let regex = /\s/g;
  let lowercase = string.toLowerCase().replace(regex, "");


  for (let i = 0; i < alphabet.length; i++) {
      if (lowercase.indexOf(alphabet[i]) === -1) {
        return false;
      }
  }
  return true;
}