// 7 kyu
// Vowel Count
// JavaScript:

function getCount(str) {
  var vowelsCount = 0;
  const letters = str.split('');
  letters.forEach((letter) => { 
    
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      vowelsCount += 1;
    }
  });
  
  return vowelsCount;
}