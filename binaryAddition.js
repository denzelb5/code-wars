// 7 kyu
// Binary Addition
// JavaScript:

function addBinary(a,b) {
  const sum = a + b;
  
  if (sum >= 0) {
    const stringSum = sum.toString(2);
    return stringSum;
    }
  
}