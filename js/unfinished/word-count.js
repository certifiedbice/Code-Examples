// Count the number of word occurrences. 
function wordCount(input){
	if(input.length===0){return null;}
	input=input.toLowerCase();
	input=input.replace(/[^a-zA-Z]/g,' ');
	input=input.replace(/\s\s+/g,' ');
	// console.log(input);
	input=input.split(' ');
	// console.log(input);
	// Account for and remove array elements equal to '',
	// this happens because of the regex on line 6,
	// When the double quotes surrounding the entire string 
	// are removed, they are replaced with spaces and then 
	// they are pushed into the array. 
	input.forEach((element,idx)=>{
		if(element===''){input.splice(idx,1);}
	});
	// String now fully parsed and in array form for further processing.
	// console.log(input);
	
	// Object for tracking individual words and how many times they appear.
	let count={};
	input.forEach(item=>{
		if(!(item in count)){count[item]=1;}
        else{count[item]++;}
	});
	console.log(count);
}
wordCount(`"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`)
// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`