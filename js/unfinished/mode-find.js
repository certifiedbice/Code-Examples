// Given a list of integers find the mode and the frequency of the mode. 
// The mode in a list of numbers is the value that occurs the most often. 
// If no number in the list is repeated, then there is no mode for the list.


// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`

function mode(list){
	// Some simple parsing.
	list=list.replace(/\s+/g,'');
	list=list.split(',');
	// Object for tracking numbers and how many times they appear.
	let modeInfo={};
	list.forEach(number=>{
		if(!(number in modeInfo)){modeInfo[number]=1;}
        else{modeInfo[number]++;}
	});
	// Vars to store the good stuff.
	let mode;
	let frequency=0;
	// Iteration to populate the good stuff.
	Object.keys(modeInfo).forEach(item=>{
		if(modeInfo[item]>frequency){
			mode=item;
			frequency=modeInfo[item];
		}
	});
	// Return what we were looking for all along.
	return `Mode=${mode}, Frequency=${frequency}`;
}
console.log(mode(`1, 2, 3, 6, 10, 3, 5, 6, 3, 3`));