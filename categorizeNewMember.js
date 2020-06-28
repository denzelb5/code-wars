// 7 kyu
// Categorize New Member
// JavaScript:

function openOrSenior(data){
  // ...
  const clubList = [];
  for (let i = 0; i < data.length; i++) {
     if (data[i] [0] >= 55 && data[i] [1] > 7) {
       clubList.push('Senior')
     } else {
       clubList.push('Open')
      }
    }
    return clubList;
}