// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]




var moveZeros = function (arr) {
  var zeros = [];
  var otherElements = [];
  
  
    arr.forEach((element) => {
      if (element === 0 || element === 0.0) {
        zeros.push(element)
      } else {
      otherElements.push(element);
      }
      
    });
    const newArray = otherElements.concat(zeros);
   
    return newArray;
  }