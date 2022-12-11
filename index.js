function hasTargetSum(array, target) {
  // Write your algorithm here
  let difference
  const numbers = new Set();
  for (let i = 0; i <= array.length; i++) {
    difference = target - array[i];

    if (numbers.has(difference)) {
      return true;
    }
    numbers.add(array[i]);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2) - two loops
*/

/* 
  Add your pseudocode here
  Iterate through array
  Create algorithm for difference
  Check if difference is in array
  log true if difference exists, false if its absent

  /*
    new Set();
    for loop {
      difference
      check for existence
      maintain set
    }
  */
*/

/*
  Add written explanation of your solution here
  - Working backwards, determine the difference between target and each element of the array.
  - Iterate through array(use Set() iterable) with for loop to subtract array values from the target.
  - Use .has which returns true if the value exists or false if it is absent within the array
  - Use .add return original set (value exists)

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 38, 82, 11, 7], 89));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 38, 81, 11, 7], 89));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 14, 38, 81, 11, 7], 89));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
