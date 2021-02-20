/* Description:

Create an algorithm that mimics the concept of counting sheep.

*/

const countSheep=(sheep,init=1)=>{
  if(init===1){
    console.log('A sheep jumps over the fence');
  }else if(sheep>1&&sheep!==0){
    console.log('Another sheep jumps over the fence');
  }else{
    console.log('All sheep have jumped over the fence');
  }
  return sheep>1?countSheep((sheep-1),init=0):sheep; 
};
countSheep(6);