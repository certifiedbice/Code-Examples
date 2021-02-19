const efficientSearch=(array, item)=>{
	let minIndex = 0;
	console.log(`minIndex=${minIndex}`)
    let maxIndex = array.length - 1;
	console.log(`maxIndex=${maxIndex}`)
	let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
		console.log(`currentIndex=${currentIndex}`)
        currentElement = array[currentIndex];
		console.log(`currentElement=${currentElement}`)

        if (currentElement < item) {
            minIndex = currentIndex + 1;
			console.log(`if - minIndex=${minIndex}`)
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
			console.log(`else if - maxIndex=${maxIndex}`)
        }
        else {
			console.log(`else - currentIndex=${currentIndex}`)
            return currentIndex;
        }
    }
    return -1;
}
debugger