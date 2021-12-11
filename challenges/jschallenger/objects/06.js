// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction(obj) {
  for (let key in obj) {
    obj[obj[key]] = key;
    delete obj[key];
  }
  return obj;
}

// Author
// function myFunction(obj) {
//     return Object.keys(obj).reduce((acc, cur) => {
//       return {  ...acc, [obj[cur]]: cur };
//     }, {});
//   }

myFunction({ bear: "animal", sow: "female", boar: "male", cub: "young" });
// Expected
// { animal: 'bear', female: 'sow', male: 'boar', young: 'cub' }

myFunction({ sheep: "animal", ewe: "female", ram: "male", lamb: "young" });
// Expected
// { animal: 'sheep', female: 'ewe', male: 'ram', young: 'lamb' }

myFunction({ Berlin: "city", Germany: "country" });
// Expected
// { city: 'Berlin', country: 'Germany' }
