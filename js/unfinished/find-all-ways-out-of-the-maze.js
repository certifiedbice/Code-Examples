let maze1 = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze2 = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const solveMaze=(maze,x,y,currentSolution,solutions)=>{
	// Initialize function settings.
	if(typeof x===`undefined`&&typeof y===`undefined`){
		console.log(`-------------------------------`);
		console.log(`initializing solveMaze settings`);
		console.log(`-------------------------------`);

		// Print the current maze.
		console.log(`\nmaze=\n`);
		for(let i=0;i<maze.length;i++){console.log(maze[i],`\n`);}

		// Declare initial pointer values.
		console.log('setting initial pointers:');
		x=0;
		console.log(`x=${x}`);
		y=0;
		console.log(`y=${y}`);

		// Initialize the rootSquare.
		rootSquare=[x,y];

		// Intialize currentSolution and solutions arrays.
		currentSolution=[];
		console.log(`currentSolution=`);
		console.log(currentSolution);
		solutions=[];
		console.log(`solution=`);
		console.log(solutions);

		// Initialize pushToCurrentSolution function.
		pushToCurrentSolution=(x,y)=>{
			console.log(`\n----pushToCurrentSolution----`)
			currentSquare=[x,y];
			// console.log(`currentSquare=`);
			// console.log(currentSquare);
			// console.log(`last entry in currentSolution=`);
			// console.log(currentSolution[currentSolution.length-1])
			// Push coordinates.
			if(currentSolution.length===0){
				currentSolution.push(currentSquare);
				console.log(currentSolution);
				return true;
			}
			// Account for a duplicate push to currentSolution.
			else if(currentSolution[currentSolution.length-1][currentSolution[currentSolution.length-1]]!==currentSquare){
				currentSolution.push([x,y]);
				console.log(currentSolution);
				return true;
			}
			else{return false;}
		}
		
		// Initialize the recursion trigger.
		recursion=true;
		// Begin navigating the maze.
		console.log(`\n-------------------------------`);
		console.log(`starting navigation`);
		console.log(`-------------------------------\n`);
	}
	
	isBlocked=(sign,coordinate)=>{
		// sign contains a binary value, it determines whether to add or subtract.
		// coordinate determines which boundary to work with.
		// x / y will never be a negative number when inBounds is called.
		block='*';
		if(coordinate==='x'){
			if(sign){ // If next in column.
				if(maze[x+1]!==undefined){return maze[x+1][y]===block?true:false;} // true - is blocked.
			}
			else{ // If previous in column.
				if(maze[x-1]!==undefined){return maze[x-1][y]===block?true:false;} // true - is blocked.
			}
		}
		if(coordinate==='y'){
			if(sign){ // If next in row.
				if(maze[y+1]!==undefined){return maze[x][y+1]===block?true:false;} // true - is blocked.
			}
			else{ // If previous in row.
				if(maze[y-1]!==undefined){return maze[x][y-1]===block?true:false;}  // true - is blocked.
			}
		}
	}

	inBounds=(sign,coordinate)=>{
		// sign contains a binary value, it determines whether to add or subtract.
		// coordinate determines which boundary to work with.
		// x / y will never be a negative number when inBounds is called.

		// Initialize the boundaries.
		columnBoundary=maze.length-1;
		rowBoundary=maze[0].length-1;
		
		if(coordinate==='x'){
			if(sign){ // If greater than column end boundary.
				return x+1<=columnBoundary?true:false // true - in bounds.
			}
			else{ // If less than column start boundary.
				return x-1>=0?true:false  // true - in bounds.
			}
		}
		if(coordinate==='y'){
			if(sign){ // If greater than row end boundary.
				return y+1<=rowBoundary?true:false // true - in bounds.
			}
			else{ // If less than row start boundary.
				return y-1>=0?true:false  // true - in bounds.
			}
		}
	}

	isValid=(x,y)=>{
		console.log(`\nChecking if [${x}][${y}] is valid`);
		if(maze[x][y]===' '){console.log(`[${x}][${y}] is valid`);return true;}
		else{console.log(`[${x}][${y}] is not valid`);return false;}
	}

	nextInRow=()=>{
		console.log(`\nChecking next in row [${x}][${y+1}]`);
		return isValid(x,y+1);
		// if(maze[x][y+1]===' '){console.log(`[${x}][${y+1}] is valid`);return true;}
		// else if(maze[x][y+1]==='*'||maze[x][y+1]!==undefined){console.log(`[${x}][${y+1}] is not valid`);return false;}
		// else{console.log(`[${x}][${y+1}] is not valid`);return false;}
		// if(inBounds(1,'y') && isBlocked(1,'y')){console.log(`[${x}][${y+1}] is not valid - inBounds/isBlocked`);return false;}
		// if(inBounds(1,'y') && !isBlocked(1,'y')){console.log(`[${x}][${y+1}] is valid`);return true;}
		// if(!inBounds(1,'y') && isBlocked(1,'y')){console.log(`[${x}][${y+1}] is not valid - !inBounds/isBlocked`);return false;}
		// if(!inBounds(1,'y') && !isBlocked(1,'y')){console.log(`[${x}][${y+1}] is not valid - !inBounds/!isBlocked`);return false;}
	}

	previousInRow=()=>{
		console.log(`\nChecking previous in row [${x}][${y-1}]`);
		return isValid(x,y-1);
		// if(maze[x][y-1]===' '){console.log(`[${x}][${y-1}] is valid`);return true;}
		// else if(maze[x][y+1]==='*'||maze[x][y+1]!==undefined){console.log(`[${x}][${y+1}] is not valid`);return false;}
		// else{console.log(`[${x}][${y-1}] is not valid`);return false;}
		// if(inBounds(1,'y') && isBlocked(1,'y')){console.log(`[${x}][${y+1}] is not valid - inBounds/isBlocked`);return false;}
		// if(inBounds(1,'y') && !isBlocked(1,'y')){console.log(`[${x}][${y+1}] is valid`);return true;}
		// if(!inBounds(1,'y') && isBlocked(1,'y')){console.log(`[${x}][${y+1}] is not valid - !inBounds/isBlocked`);return false;}
		// if(!inBounds(1,'y') && !isBlocked(1,'y')){console.log(`[${x}][${y+1}] is not valid - !inBounds/!isBlocked`);return false;}
	}

	nextInColumn=()=>{
		console.log(`\nChecking next in column [${x+1}][${y}]`);
		return isValid(x+1,y);
		// if(maze[x+1][y]==='e'){console.log(`[${x+1}][${y}] is exit`);return;}
		// if(maze[x+1][y]===' '){console.log(`[${x+1}][${y}] is valid`);return true;}
		// else if(maze[x][y+1]==='*'||maze[x][y+1]!==undefined){console.log(`[${x}][${y+1}] is not valid`);return false;}
		// else{console.log(`[${x+1}][${y}] is not valid`);return false;}
		// if(inBounds(1,'y') && isBlocked(1,'y')){console.log(`[${x}][${y+1}] is not valid - inBounds/isBlocked`);return false;}
		// if(inBounds(1,'y') && !isBlocked(1,'y')){console.log(`[${x}][${y+1}] is valid`);return true;}
		// if(!inBounds(1,'y') && isBlocked(1,'y')){console.log(`[${x}][${y+1}] is not valid - !inBounds/isBlocked`);return false;}
		// if(!inBounds(1,'y') && !isBlocked(1,'y')){console.log(`[${x}][${y+1}] is not valid - !inBounds/!isBlocked`);return false;}
	}
	
	previousInColumn=()=>{
		console.log(`\nChecking previous in column [${x-1}][${y}]`);
		return isValid(x-1,y);
		// if(maze[x-1][y]===' '){console.log(`[${x-1}][${y}] is valid`);return true;}
		// else if(maze[x][y+1]==='*'||maze[x][y+1]!==undefined){console.log(`[${x}][${y+1}] is not valid`);return false;}
		// else{console.log(`[${x-1}][${y}] is not valid`);return false;}
		// if(inBounds(1,'y') && isBlocked(1,'y')){console.log(`[${x}][${y+1}] is not valid - inBounds/isBlocked`);return false;}
		// if(inBounds(1,'y') && !isBlocked(1,'y')){console.log(`[${x}][${y+1}] is valid`);return true;}
		// if(!inBounds(1,'y') && isBlocked(1,'y')){console.log(`[${x}][${y+1}] is not valid - !inBounds/isBlocked`);return false;}
		// if(!inBounds(1,'y') && !isBlocked(1,'y')){console.log(`[${x}][${y+1}] is not valid - !inBounds/!isBlocked`);return false;}
	}

	isExit=()=>{
		if(x===maze.length-1){
			if(y===maze[0].length-1){return true;}
			else{return false;}
		}
	}
	// if(x>0){console.log(`****recursion****`)}
	console.log(`\nrootSquare=[${rootSquare[0]},${rootSquare[1]}]`);
	console.log(`currentSquare=[${x},${y}]`);
	
	// console.log(recursion)
	
	//   recursion=true;
	//console.log(recursion)
	
	if(isExit()){
		console.log('\nExit found!')
		pushToCurrentSolution(x,y);
		// Push the current solution to the solutions array.
		solutions.push(currentSolution);
		// Reset currentSolution.
		// currentSolution.length=0;
		currentSolution.length-=1;
		console.log(currentSolution);

		// x=rootSquare[0];
		// y=rootSquare[1];
		//recursion=false;
		console.log('------------------------------------------------------------')
		console.log('------------------------------------------------------------')
		console.log('------------------------------------------------------------')
		console.log('------------------------------------------------------------')
		return;
	}
	else{
		if(isValid(x,y)){pushToCurrentSolution(x,y);}
		
		if(nextInRow()){

			// here needs to be a check, push if not equal to last element

			//call solveMaze with adjusted coordinates.
			solveMaze(maze,x,y+1,currentSolution,solutions);
		}
		
		if(nextInColumn()){
			//call solveMaze with adjusted coordinates.
			solveMaze(maze,x+1,y,currentSolution,solutions);
		}
		
		if(previousInRow()){
			//call solveMaze with adjusted coordinates.
			solveMaze(maze,x,y-1,currentSolution,solutions);
		}
		
		if(previousInColumn()){
			//call solveMaze with adjusted coordinates.
			solveMaze(maze,x-1,y,currentSolution,solutions);
		}

		else{
			//recursion=true;
			console.log('I\'m lost!');
			// return;
		}
	}
	solutions.forEach(solution=>console.log(solution));
}

solveMaze(maze1);