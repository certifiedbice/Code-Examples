/* Description:

Given a square matrix, calculate the absolute difference between the sums of its diagonals. 

diagonalDifference takes the following parameter:

    int arr[n][m]: an array of integers

Return

    int: the absolute diagonal difference

Input Format

The first line contains a single integer,
, the number of rows and columns in the square matrix .
Each of the next lines describes a row, , and consists of space-separated integers

.

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

*/

// Solution A:
// Time complexity: O(n2)
// Space complexity: O(1)
function diagonalDifference_A(arr){
    let d1=0;
    let d2=arr.length;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(j===i){
                d1+=arr[i][j];
            }
            if(i===arr.length-j-1){
                d2+=arr[i][j]-1;
            }
         }
    }
    return Math.abs(d2-d1);
}
console.log(diagonalDifference_A([[11,2,4],[4,5,6],[10,8,-12]]));

// Solution B:
// Time complexity: O(n)
// Space complexity: O(1)
function diagonalDifference_B(arr){
    // Length of the diagonal, and iteration control.
    let i=arr[0].length;
    // 1st dimension array pointer.
    let x=0;
    // 2 dimension array pointer.
    let y=2;
    // Left to right diagonal.
    let d1=0;
    // Right to left diagonal
    let d2=0;
    // Iterate bi-directionally through the array creating the sums.
    while(i!==0){
        // Addition.
        d1+=arr[x][x];
        d2+=arr[x][y];
        // Increment pointer.
        x++;
        // Decrement pointer.
        y--;
        // Decrement iteration control.
        i--;
    }
    // Return the absolute difference of the two sums created.
    return Math.abs(d1-d2);
}
console.log(diagonalDifference_B([[11,2,4],[4,5,6],[10,8,-12]]));