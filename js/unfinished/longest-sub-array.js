/* Complete the 'longestSubarray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function longestSubarray(arr) {
	// Constraint:
	// 2 distinct integers, who's value is not separated by more than one.

	console.log(arr);

	let valA;
	let valB;

	for(let i=0;i<arr.length;i++){
		console.log('---------------------\n');
		console.log(arr[i]);
		console.log('---------------------\n');

		for(let j=0;j<arr.length;j++){
			// Account for the same element
			if(j>i){
				console.log('Good Point');

				console.log(`arr[i]=${arr[i]}, arr[j]=${arr[j]}`);
				
				// Is the next element equal to arr[i] ? - Then continue.
				
				if(arr[i]===arr[j]){
					console.log('Equal');
				}

				// Is the next element within +1/-1 of arr[i] ? - Then continue.

				else if(arr[j]===(arr[i]-1)){
					console.log('Within -1 constraint');
				}

				else if(arr[j]===(arr[i]+1)){
					console.log('Within +1 constraint');
				}

				// Not within the constraints, break the loop.
				else{
					console.log('Not within constraints');
					break;
				}
			}
			else{
				console.log('Bad Point');
			}
		}
	}
}

longestSubarray([3,2,2,1]);
// longestSubarray([3,8,0,1,6,7,7,7,2,2,1]);
// longestSubarray([3,2,4,5,5,2,1]);
// longestSubarray([5, 1, 2, 3, 4, 5]);