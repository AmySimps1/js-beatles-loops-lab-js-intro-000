// add solution here

/* for loop-

for ([initialization]; [condition]; [iteration]) {
  [loopBody];
}
*/

function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}


/* while loop--

while ([condition]) {
  [loopBody with iteration statement];
}
*/
function johnLennonFacts(array) {
newArray = []
let i = 0
while (i < array.length) {
newArray.push(array[i].toString + " !!!")
  i += 1
}
return newArray 
}

/* Do-While Loop 

do {
  [loopBody];
} while ([condition]);

*/
/*
function iLoveTheBeatles(number) {
  var emptyArray = []
  do {
    console.log("I love the Beatles!")
  } while (15 < number)
} 
*/