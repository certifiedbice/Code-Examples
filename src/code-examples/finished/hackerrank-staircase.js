function staircase(n) {
	let spaces = 0;
	let hashmarks = n;
	let arr = [];

	while (spaces !== n) {
		let str = '';

		for (let i = 0; i < spaces; i++) {
			str += ' ';
		}
		
		for (let i = 0; i < hashmarks; i++) {
			str += '#';
		}
		
		arr.unshift(str)
		hashmarks--;
		spaces++;
	
	}

		for (let i = 0; i < arr.length; i++) {
			console.log(arr[i]);
		}


}


staircase(4);