

const middle = function(array) {
  let finalRes = [];
  if (array.length < 3) {
    return finalRes;
  }
  if (array.length % 2 === 0) {
    let middle = array.length / 2;
    finalRes.push(array[middle - 1]);
    finalRes.push(array[middle]);

    return finalRes;
  } else {
       
    let middle = Math.floor(array.length / 2);
    console.log(array[middle]);
        
    finalRes.push(array[middle]);

    return finalRes;
    
  }
};

module.exports = middle;




