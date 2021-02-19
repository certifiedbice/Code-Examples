// What is the input to the program?
	// base integer and the exponent

// What is the output of the program?
	// base integer raised to the power of the exponent

// What is the input to each recursive call?
	// base integer

// What is the output of each recursive call?
	// base integer raised by a power
	
function powerCalculator1(base,exponent){
	if(exponent>=0){
		console.log(Math.pow(base, exponent));
		return Math.pow(base, exponent);
	}
}

const powerCalculator2=(base,exponent)=>{
	if(exponent===2){
		base*=base;
		console.log(base);
		return;
	}
	base*=base;
	exponent-=1;
	console.log(base);
	powerCalculator2(base,exponent)
}

powerCalculator2(10,4);

debugger