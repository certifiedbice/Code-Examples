const stringSplitter2=(str1,str2,arr)=>{
	const delimiter='/';
	if(str1){
		if(typeof arr==='undefined'){arr=[];str2='';}
		if(str1.substr(0,1)!==delimiter){
			str2+=str1.substr(0,1);
			stringSplitter2(str1.substr(1),str2,arr);
		}
		if(str1.substr(0,1)===delimiter){
			arr.push(str2);
			str2='';
			stringSplitter2(str1.substr(1),str2,arr);
		}
	}
	else {
		arr.push(str2);
		str2='';
		console.log(arr);
	}
}

stringSplitter2('02/20/2020');

debugger