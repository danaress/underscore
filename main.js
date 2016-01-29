


var array = [7, 13, 11, 21, 42, 1880];

// create a new array where each element is 2x its original value

// var double = _.map(array, function(num){ 
// 	return num * 2; 
// });
// console.log(array, double);


//  Reduce

// start with a phrase "Gym Tan Laundry"

var v = 'Gym Tan Laundry';

var gtl = _.reduce(v.split(' '),
	function(runningTotal, currentWord){
		return runningTotal + currentWord[0] + '.'
	},
	''
)
console.log(gtl);

// console.log(gtl);


// FIND

var teddyBears = [
	{
		name : 'Steve',
		fliffiness : 1,
		diet : 'souls', 
		huggability : 5,
		ownedBySean : true
	},
	{
		name : 'Teddy Ruxspin',
		fliffiness : 10,
		diet : 'batteries', 
		huggability : 5,
		ownedBySean : false
	},
	{
		name : 'Ted',
		fliffiness : 1,
		diet : 'child tears', 
		huggability : 7,
		ownedBySean : true
	},
	{
		name : 'Hulk',
		fliffiness : 1,
		diet : 'batteries', 
		huggability : 7,
		ownedBySean : true
	}
]
// find bear with huggability of 5
var huggyBear = _.filter(teddyBears, function(bear){
	return bear.huggability === 5
})

console.log(huggyBear);

// Pluck

// Use pluck to make an array of dietary needs

var dietaryNeeds = _.pluck(teddyBears, 'diet');
console.log(dietaryNeeds);

//  Uniq

var unique = _.uniq(_.pluck(teddyBears, 'diet'));
console.log(unique);

// Chain

var result = _.chain(teddyBears)
	.pluck('diet')
	.uniq()
	.value()

console.log(result);



