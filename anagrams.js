/* Description:

Algorithm that uses brute force to permute
all character permutations in a given string.

Additional implementations:

count of all possible permutations
hash duplicate removal

Possible implementation:

Dictionary check to validate permutations.

*/

// Solution:
// Time complexity: O(n!)
// Space complexity: O(n)
const anagrams=(str)=>{
  // Meat & Potatos:
  // Count the number of possible permutations in the given string.
  const permutationCount=()=>{
    let n=str.length;
    let r=n;
    while(n>1){r=r*--n;}
    return r;
  };
  // console.log(permutationCount());
  // Convert the input word into an array for permutation.
  let strArray=str.split('');
  // Array to store all possible permutations, storing the first permutation.
  let permutations=[str];
  // Used to track the current array element to swap.
  let pointer=1;
  // Used to store the current combination str.
  let tmpStr=strArray.join('');
  while(permutations.length<permutationCount()){
    // Temporary variable to store an array element before the swap.
    let a=strArray[pointer];
    // Perform the swap.
    strArray[pointer]=strArray[pointer+1];
    strArray[pointer+1]=a;
    // Increment the pointer.
    if(pointer+1===str.length-1){
      pointer=1;
    }else{
      pointer++;
    }
    // Store the new permutation.
    tmpStr=strArray.join('');
    // Check for a duplicate string match, signifying cycle completion.
    if(tmpStr!==str){
      // Store the valid permutation.
      permutations.push(tmpStr);
    }else{
      // Account for duplicate push at the end via the if statement.
      if(permutations.length<permutationCount()){
        // Shift the array.
        let x=strArray.shift();
        // Push first element to last element in array.
        strArray.push(x);
        // Set str for the next cycle.
        str=strArray.join('');
        // Push the new string into permutations, signifying cycle start.
        permutations.push(str);
      }
    }
  }
  // Hash for duplicate removal.
  const hash={};
  for(let i=0;i<permutations.length;i++){
    if(!hash[permutations[i]]){
      hash[permutations[i]]=permutations[i];
    }
  }
  // Empty the permutations array.
  permutations=[];
  // Convert the list back from the hash to the permutations array.
  Object.keys(hash).forEach(item=>{
    permutations.push(item);
  });

  // At this point a dictionary check could be placed here
  // to validate the remaining permutations and strip out 
  // the invalid permutations.

  // Return the list of valid permutations with no duplicates.
  return permutations;
};
console.log(anagrams('east'));