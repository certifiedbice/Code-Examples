// Time complexity: O(N)
// Space complexity: Constant
function fibonacci_while(itr8){
  let a=0;
  let b=1;
  let seqArr=[];
  while(itr8>0){
    // Account for first number in sequence [0]
    if(seqArr.length===0){seqArr.push(a);}
    else{
      let tmp=a;
      a=a+b;
      b=tmp;
      seqArr.push(a);
    }
    itr8--;
  }
  for(let i=0;i<seqArr.length;i++){console.log(seqArr[i]);}
}
fibonacci_while(13);

// Time complexity: O(2^N) (Exponential)
// Space complexity: O(n)
function fibonacci_recursive(n,seqArr){
  // Given the start of Fibonacci is [0,1]
  if(typeof seqArr==='undefined'){seqArr=[0,1];}
  if(seqArr.length!==n){
    let a=seqArr[seqArr.length-2];
    let b=seqArr[seqArr.length-1];
    seqArr.push(a+b);
    fibonacci_recursive(n,seqArr);
  }
  else{
    for(let i=0;i<seqArr.length;i++){console.log(seqArr[i]);}
  }
}
// fibonacci_recursive(13)


// Memoization
// Time complexity: O(2N)
// Space complexity: O(n)
// Performs nearly identically to fibonacci_while
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}