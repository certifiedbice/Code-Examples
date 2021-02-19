// 11. Tower of Hanoi

// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

//     There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
//     The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk

// Input:
// Rod A 	Rod B 	Rod C
// ---- 		
// --------- 		
// ------------- 		

// Output:
// Rod A 	Rod B 	Rod C
// 		----
// 		---------
// 		-------------

//     Derive an algorithm to solve the Tower of Hanoi puzzle.
//     Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
//     If you are given 5 disks, how do the rods look like after 7 recursive calls?
//     How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
//     What is the runtime of your algorithm?
//---------------------------------------------------------------------------------------------------------------------

// The goal of the puzzle is to move the entire stack of rods to another rod 
// (can't be the original rod where it was stacked before) 
// where it will be stacked in the ascending order as well. 

// Rules:

// i) Only one disk may be moved at a time.

// ii) Each move consists of taking the upper disk from one of the rods and sliding it 
// onto another rod, on top of the other disks that may already be present on that rod.

// iii) A larger disk may not placed on top of a smaller disk.


// moves:

// 1. d1 from b to a - smallest to empty
// 2. d2 from b to c - medium to empty
// 3. d1 from a to c - smallest to medium
// 4. d3 from b to a - largest to empty
// 5. d1 from c to a - smallest to largest
// 6. d2 from c to b - medium to largest
// 7. d1 from a to c - smallest to largest
// 8. d2 from b to a *
// 9. d1 from c to a *

const towerOfHanoi=disks=>{
	let rodA=[];
	let rodB=[...disks.sort((a,b)=>b-a)];
	let rodC=[];
	console.log(rodB);

	let currentDisk;
	let currentRod;
	//while(rodb.length!==0){
		
	//}
		//find the smallest disk(currentDisk) move it to another rod,
				//if (!rodA.length && !rodB.length) move currentDisk to random rod(1st move)

				//if one rod is empty,
					//if currentDisk > currentRod[currentRod.length] move currentDisk to empty rod
				//if no rods are empty,
					//
}
debugger