// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function holyCaesar(name) {
  //const name = "Claudius";
  console.log(`My name is ${name} and I am a fool`);
  debugger;
  
    function revolution() {
      const rebelYell = "Egads, there is no need to revolt.";
      console.log(`My fellow Romans, I am ${name}. ${rebelYell}`)
      debugger;
      
      function downWithCaesar() {
        const emp = "Caesar"
        console.log(`Down with ${emp}. Down with ${emp}`);
        debugger;
      }
       downWithCaesar();
   }
    revolution();
}

holyCaesar("Claudius");


// ==== Challenge 2: Create a counter function ====
  // Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const counter = () => {
  
  let count = 0;
  function increment(){
    return count++;
  }
  return increment;  
};

const newCounter = counter();

newCounter();




/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
