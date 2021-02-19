// Given a string, write an algorithm to count the number of words in the string 
// that are palindromes. The output must include a list of the palindromes and the 
// number of palindromes.

//  - Input: `"Dad gave mom a Tesla as a racecar"`
//  - Output: `Dad, mom, racecar, 3 Palindromes`


function palindromeCount(str){
	// Check for an empty input str.
	if(str.length===0){return null;}
	// Some parsing this way comes.
	str=str.toLowerCase();
	str=str.replace(/[^a-zA-Z]/g,' ');
	str=str.replace(/\s\s+/g,' ');
	str=str.split(' ');
	// Account for and remove array elements equal to '',
	// this happens because of the regex on line 6,
	// When the double quotes surrounding the entire string 
	// are removed, they are replaced with spaces and then 
	// they are pushed into the array. 
	str.forEach((element,idx)=>{
		if(element===''){str.splice(idx,1);}
	});
	// Storage for palindromes and their count.
	let palindromes={};
	// Iterate through the array of words.
	str.forEach((element,idx)=>{
		// Reverse the word.
		tmp=element.split('').reverse().join('');
		// Check for a palindrome match.
		if(element===tmp&&element.length>1){
			// We found the good stuff, time to store it.
			palindromes[element]=true;
		}
	});
	// Vars to store the good stuff.
	let returnStr='';
	let count=0;
	// Iteration to populate the good stuff.
	Object.keys(palindromes).forEach(item=>{
		count++;
		returnStr+=item+', ';
	});
	// Return what we were looking for all along.
	return `${returnStr}${count} Palindromes`;
}

console.log(palindromeCount(`"Dad gave mom a Tesla as a racecar"`));