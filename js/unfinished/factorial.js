const factorial=(n,x)=>{
	if(n>0){
		console.log(n);
		if(typeof x==='undefined'){x=n*(n-1);}
		else{if(n-1!==0){x=x*(n-1);}}
		n--;
		factorial(n,x);
	}
	else console.log(x)
}

factorial(9);

debugger