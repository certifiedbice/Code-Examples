let arr = [-4, 3, -9, 0, 4, 1]; 

function plusMinus() {
    
	let count = {
        positive:0,
        negative:0,
        zero:0
	};
	
    arr.forEach(item =>{
		console.log(item);
		// if zero
        if(Math.sign(item) === 0){
            count.zero++;
		}
		// if positive
        else if(Math.sign(item) === 1){
            count.positive++;
        }
        // if negative
        else if(Math.sign(item) === -1){
            count.negative++;
        }
		console.log(count);
	});
	
    Object.keys(count).forEach(item => {
        let ratio = count[item] / arr.length;
        console.log(ratio.toFixed(arr.length));
    });
}

plusMinus();