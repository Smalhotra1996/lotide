const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Paseed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion failed :[${actual}] !=== [${expected}]`);

  }
};

const findKey = function(obj,callback){
  for(let i in obj){
    // console.log(callback);
    // console.log(obj[i])
    if (callback(obj[i])=== true){
      
      console.log(i);
      return obj[i];
    }else{
      return undefined;
    }
  }
  
}


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
