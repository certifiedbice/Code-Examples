// What is the input to the program?
	// base string

// What is the output of the program?
	// base string reversed

// What is the input to each recursive call?
	// base string.substring

// What is the output of each recursive call?
	// base string.substring+str[0]

const reverseString=str=>{
	return str ? reverseString(str.substr(1)) + str[0] : str;
};

// reverseString('fuck');
console.log(reverseString('fuck'));

debugger