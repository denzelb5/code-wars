// 6 kyu
// Replace With Alphabet Position


function alphabetPosition(text) {

  let result = "";
    for (let i = 0; i < text.length; i++) {
      const code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length - 1);
    
  
  }