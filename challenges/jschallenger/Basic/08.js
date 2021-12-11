// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(stringA, stringB) {
  const a = stringA.replace(/[^a-zA-Z ]/g, "");
  const b = stringB.replace(/[^a-zA-Z ]/g, "");
  return (
    a.charAt(0).toUpperCase() + a.slice(1) + b.split("").reverse().join("")
  );
}

//  Expected
// 'Javascript'
myFunction("java", "tpi%rcs");
//  Expected
//  'Countryside'
myFunction("c%ountry", "edis");
// Expected
// 'Downtown'
myFunction("down", "nw%ot");
