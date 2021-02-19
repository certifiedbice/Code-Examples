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

// Counter for tracking iterations.
let counter=0;

const solveMaze=(maze,p1,p2,solution)=>{
	// Counter change.
	console.log(`\n`);
	counter++;
	console.log(counter-1,`\n`);

	// Initialize function variables.
	if(typeof p1===`undefined`&&typeof p2===`undefined`){
		// Print the current maze.
		console.log(`\n maze= \n`);
		for(let i=0;i<maze.length;i++){console.log(maze[i],`\n`);}

		// Initialize the walls.
		wallV=maze.length-1;
		console.log(`wallV=${wallV}`);
		wallH=maze[0].length-1;
		console.log(`wallH=${wallH}`);

		// Intialize solution array.
		solution=[[0,0]];
		console.log(`solution=`);
		console.log(solution);

		// Initialize push to solution array.
		solutionEntryPush=(x,y)=>{
			if(maze[x][y]!=='*'&&p2<=wallH+1&&maze[x][y]!==solution[solution.length]){
				console.log(`pushing [${x},${y}] to the solution array\n`);
				solution.push([x,y]);
			}
			else{console.log(`pushing nothing to solution array, [${x},${y}] is invalid\n`);}
		}

		// Initialize the block.
		block=`*`;
		console.log(`block=${block}`);

		// Declare initial pointer values.
		console.log('setting initial pointers');
		p1=0;
		console.log(`p1=${p1}`);
		p2=0;
		console.log(`p2=${p2}`);

		// Begin navigating the maze.
		console.log(`\n starting navigation \n`);
	}
	
	// Check if exit.
	if(p1===wallV&&p2===wallH){
		console.log(`exit found`);
		console.log(`solution=`);
		console.log(solution);
		return;
	}

	// Check maze[p1][(p2+1)] for row possibility.
	else if(maze[p1][p2]!=='*'&&p2<=wallH){
		console.log(`\n [${p1}][${p2}] is valid \n`);
		p2++;
		// Log solution entry.
		solutionEntryPush(p1,p2);
		console.log(`begin row dive`);
		solveMaze(maze,p1,p2,solution);
	}

	// Check maze[(p1+1)][p2] for column possibility.
	else if(maze[p1][(p2)]!=='*'||p2<=wallH){
		console.log(`cannot row dive \n`);
		console.log(`begin column dive`);
		p1++;
		p2--;
		console.log(`\n [${p1}][${p2}] is valid \n`);
		// Log solution entry.
		solutionEntryPush(p1,p2);
		solveMaze(maze,p1,p2,solution);
	}

	// Something happened, the program is lost.
	else{
		console.log(`I\'m lost`);
		return;
	}
}

solveMaze(maze2);

debugger