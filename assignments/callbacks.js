// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
 return cb(arr.length);
}

getLength(items, function(length){
  console.log(length)
});

//------------------------------

function lastItem(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr.pop());
}

lastItem(items, function(last){
  console.log(last)
});

//---------------------------------

ffunction sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x,y);
}


function add(x,y) {
  console.log(x+y);
  }

sumNums(7, 5, add);

//---------------------------------

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x,y);
}

function multiply(x,y){
  console.log(x*y);
}

multiplyNums(7, 5, multiply);

//---------------------------------


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb (item, list);

}

function isThere(item, list) {
 console.log(list.includes(item));
}

contains('Notebook', items, isThere);

//---------------------------------


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
