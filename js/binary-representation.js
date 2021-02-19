/* Description:

Write a recursive function that prints out the binary representation of a given number. 
For example, the program should take 3 as an input and print 11 as output, 
or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

*/

// Solution A:
// Time complexity:
// Space complexity:
function decimalToBinary(num,hash){
  // Initialize the hashmap.
  if(hash===undefined){
    hash={};
  }
  // Account for (num) having a zero value.
  if(num===0){
    return 0;
  }else if(num===1){
    return 1;
  }
  // Temporary exponential multiplication product storage for iteration control.
  let tmp=2;
  // Exponent.
  let exponent=0;
  // Product of exponential multiplication.
  let product=2;
  // Begin deconstructing.
  while(tmp<=num){
    console.log(`exponent=${exponent}`);
    // Skipping the power of zero, and starting at 1st power.
    if(exponent>0){
      console.log(`product=${product}`);
      // Store the binary value in the hashmap.
      if(product<num&&product*2>num){
        console.log('Happy Time!!!!!');
        hash[exponent]=1;
        console.log(`!!!!${num-product}!!!!`);
        console.log('---------------------------');
        decimalToBinary(num-product,hash);
      }
      else{
        console.log(`PRODUCT=====${product}`);
      }
      // Account for and store the product before it is larger than the original number (num).
      product=tmp*2;
      // Temporary exponential multiplication product storage for iteration control.
      tmp=tmp*2;
    }
    // Increment the exponent.
    exponent++;
    console.log('---------------------------');
  }
  return hash;
}
console.log(decimalToBinary(78));

// 78	1001110
// ----------
// 64	1000000
// 8	   1000
// 4	    100
// 2	     10
// ----------
// 	  1001110