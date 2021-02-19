/* Description:

Return a boolean if the sum of two movie times in a list are equal the flight time.

*/

let flightLength=160;
let movies=[80, 110, 40];
let movies2=[50, 110, 40];

// Solution A:
// Time complexity: O(n)
// Space complexity: O(n)
function sumOfTwoMovieTimesEqualsFlightLength_A(flightLength,movieList){
  const movies={};
  for(let i=0;i<movieList.length;i++){
    let target=flightLength-movieList[i];
    if(movies[target]){
      console.log(true);
      return true;
    }
    movies[movieList[i]]='*';
  }
  console.log(false);
  return false;
}
sumOfTwoMovieTimesEqualsFlightLength_A(flightLength,movies);
sumOfTwoMovieTimesEqualsFlightLength_A(flightLength,movies2);

// Solution B:
// Time complexity: O(n2)
// Space complexity: O(1)
function sumOfTwoMovieTimesEqualsFlightLength_B(flightLength,movieList){
  for(let i=0;i<movieList.length;i++){
    for(let j=0;j<movieList.length;j++){
      if(i!==j){
        if(movieList[i]+movieList[j]===flightLength){
          console.log(true);
          return true;
        }
      }
    }
  }
  console.log(false);
  return false;
}
sumOfTwoMovieTimesEqualsFlightLength_B(flightLength,movies);
sumOfTwoMovieTimesEqualsFlightLength_B(flightLength,movies2);
