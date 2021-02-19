const nthTriangleNumber1=n=>{
	return n*(n+1)/2;
}

const nthTriangleNumber2=n=>{
	if(n<=1){
		return n;
	} 
	else{
	  return n+nthTriangleNumber2(n-1);
	}
}

const nthTriangleNumber3=n=>{
	return n<=1 ? n : n+nthTriangleNumber3(n-1);
};

console.log(nthTriangleNumber3(6));

debugger