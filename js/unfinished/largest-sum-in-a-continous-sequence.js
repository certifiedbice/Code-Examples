/* Description:

Given a dataset containing positive and negative integers,
Write an algorithm to find the largest sum in a continuous sequence.

*/


// Expected output:
// [0, 0, 1, 0 1] => 2
// [-7, -2, 3, 1, -2, 4] => 6

// Solution:
// Time complexity: O(2n)
// Space complexity: O(n)
function largestSumInContinousSequence(seq){
  let sum=0;
  let sumArr=[];
  while(seq.length>0){
    for(let i=0;i<seq.length;i++){
      sum+=seq[i];
    }
    sumArr.push(sum);
    sum=0;
    seq=seq.splice(1,seq.length-1);
  }
  for(let i=0;i<sumArr.length;i++){
    if(sumArr[i]>sum){
      sum=sumArr[i];
    }
  }
  return sum;
}
console.log(largestSumInContinousSequence([-7, -2, 3, 1, -2, 4]));
console.log(largestSumInContinousSequence([0, 0, 1, 0, 1]));