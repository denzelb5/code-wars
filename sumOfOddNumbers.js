// 7 kyu
// Sum of odd numbers
// JavaScript:

function rowSumOddNumbers(n) {
  
  var total = 0;
   for (var i = 0; i < n; i++) {
       total += i;
   }
   
   var firstNum = 2 * total + 1;
   var sum = 0;
   for (j = 0; j < n; j++) {
       sum += firstNum;
       firstNum += 2;
       
   }
   return sum
  
}