// let arr1 = [111, 222, 333, 444];
// console.log(arr1);
// console.log(arr1[0]);
// console.log(arr1[2]);
// console.log(typeof arr1);  // type of array is object. array is an object itself.
// console.log(arr1.length);
// let arr2 = [1, 2, 3, 0.001, 0.002, 0.003, "apple", "ball", "cat"];
// console.log(arr2);
// let arr3 = ;
// console.log(arr3);  // Output: ["apple", "ball", "cat"]
// let arr4 = new Array(1, 2, 3, 4);
// // console.log(arr4);
// let arr5 = [
// 	{
// 		name: "Abid Shahrier",
// 		marks: 99
// 	},
// 	{
// 		name: "Tamim Ahmed",
// 		marks: 80
// 	},
// 	{
// 		name: "Iqbal Hossain",
// 		marks: 87
// 	}
// ];
// console.log(arr5);  // Output: [{name: "Abid Shahrier", marks: 99},	{name: "Tamim Ahmed", marks: 80}, {name: "Iqbal Hossain", marks: 87}]
// console.log(arr5[1]);  // Output: {name: 'Tamim Ahmed', marks: 80}
// console.log(arr5[1].name);  // Output: Tamim Ahmed
// console.log(arr5[1].marks);  // Output: 80









// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.includes(4)); // Output: true, telling that it exists.
// console.log(arr1.includes(9)); // Output: false, it tells that the element exist or not










// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.indexOf(3)); // Output: 2, index of 3 is 2
// console.log(arr1.indexOf(9));  // Output: -1, if exist gives the index otherwise gives -1 means it doesn't exist.











// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = arr1.join();
// let arr3 = arr1.join(" ");
// let arr4 = arr1.join(",");
// let arr5 = arr1.join("-");
// console.log(arr1);  // Output: [1, 2, 3, 4, 5]
// console.log(arr2);  // Output: 1,2,3,4,5
// console.log(typeof arr2);  // Output: string
// console.log(arr3);  // Output: 1 2 3 4 5
// console.log(typeof arr3);  // Output: string
// console.log(arr4);  // Output: 1,2,3,4,5
// console.log(typeof arr4);  // Output: string
// console.log(arr5);  // Output: 1-2-3-4-5
// console.log(typeof arr5);  // Output: string











// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = arr1.slice(4);
// let arr3 = arr1.slice(2, 7);
// console.log(arr1);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr2);  // Output: [5, 6, 7, 8, 9]
// console.log(arr3);  // Output: [2, 3, 4, 5, 6]











// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = arr1.splice(3);
// console.log(arr1);  // Output: [0, 1, 2]
// console.log(arr2);  // Output: [3, 4, 5, 6, 7, 8, 9]


// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = arr1.splice(4,2);
// console.log(arr1);  // Output [1, 2, 3, 4, 7]
// console.log(arr2);  // Output [5, 6]


// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = arr1.splice(0);
// console.log(arr1);  // Output []
// console.log(arr2);  // Output [1, 2, 3, 4, 5, 6, 7]











// let arr1 = [1, 2, 3, 4, 5];
// arr1.push(6);
// console.log(arr1);  // Output: [1, 2, 3, 4, 5, 6] adds a value in the end of array.









// let arr1 = [1, 2, 3, 4, 5];
// arr1.pop();
// console.log(arr1);  // output: [1, 2, 3, 4] removes a value from end of the array.










// let arr1 = [1, 2, 3, 4, 5];
// arr1.shift(); // it doesn't take any parameter
// console.log(arr1);  // Output [2, 3, 4, 5] removes an element from the beginning









// let arr1 = [1, 2, 3, 4, 5];
// arr1.unshift(0);
// console.log(arr1); // Output [0, 1, 2, 3, 4, 5]










// let arr1 = [111, 222, 333, 444];
// let arr2 = [555, 666, 777, 888];
// arr1.push(arr2);
// console.log(arr1); // Output: [111, 222, 333, 444, [555, 666, 777, 888]]
// console.log(arr1[4][2]); // Output: 777 arr1's 3rd element's mean 4th index's 3rd element means 3rd index element.


// let arr3 = arr1.concat(arr2);
// console.log(arr3); // Output: [111, 222, 333, 444, 555, 666, 777, 888]









// let arr1 = [111, 222, 333, 444];
// let arr2 = [555, 666, 777, 888];
// let arr3 = [999, 0.001];
// let arr4 = [...arr1, ...arr2, ...arr3];
// console.log(arr4);









// console.log(Array.isArray("Abid"));
// console.log(Array.from("Abid"));

// console.log(Array.from({name: "Abid"})); // it will give empty array because it doesn't know which one to convert into  array, key or value. it needs prompt key or value to transform.


// let score1 = 111;
// let score2 = 222;
// let score3 = 333;
// let scr = Array.of(score1, score2, score3);
// console.log(scr);









// let arr = [1, 2, 3, [4, 5, 6], 7, 8, [1, 2, 3, [4, 5, 6, [7, 8, 9]]]];
// let arr2 = arr.flat();
// console.log(`array2: ${arr2}`);
// console.log(arr);









// ///////////////////////////////////////////////////////////////////

// Loops with array








// let arr1 = [1, 2, 3, 4, 5];
// for (let i of arr1) {
// 	console.log(i);
// }
// for (let i of arr1) {
// 	console.log(arr1);
// }
// for (let i of arr1) {
// 	console.log(arr1[i]);  // it will not print 1 because first iteration is 1 and index 1 is 2, for this reason it won't print 1 and in the end it will give undefined because last iteration is 5 and there index 5 doesn't exist
// }











// let obj = {name: "abid", age: 23};
// for (let i in obj){
// 	console.log(obj[i]);
// }
// for (let i of obj){  // it won't work here
// 	console.log(obj[i]);
// }










// let arr1 = ["apple", "banana", "grapes", "papaya"];
// for (let key in arr1) {
// 	console.log(key);
// 	console.log(arr1[key]);
// 	console.log(`${key} => ${arr1[key]}`);
// }

	
	
	
	
	





// let arr1 = ["apple", "banana", "grapes", "papaya"];

// arr1.forEach(function (val) {
// 	console.log(val);
// });

// const value = arr1.forEach(function (val) {
// 	console.log(val);
// });
// console.log(value);

// const value = arr1.forEach(function (val) {
// 	// console.log(val);
// });
// console.log(value);

// const value = arr1.forEach(function (val) {  // forEach loop doesn't returns anything
// 	return val;
// });
// console.log(value);

// arr1.forEach(function (val, idx) {
// 	console.log(idx);
// });

// arr1.forEach(function (val, idx, arr) {
// 	console.log(arr);
// });

// arr1.forEach(function (val, idx, arr) {
// 	console.log(val, idx, arr);
// });


// arr1.forEach((val) => {
// 	console.log(val);
// });

// arr1.forEach((val, idx) => {
// 	console.log(idx);
// });

// arr1.forEach((val, idx, arr) => {
// 	console.log(arr);
// });

// arr1.forEach((val, idx, arr) => {
// 	console.log(val, idx, arr);
// });


// function printMe1(item) {
// 	console.log(item);
// }

// function printMe2(a, b) {
// 	console.log(b);
// }

// function printMe3(a, b, c) {
// 	console.log(c);
// }

// function printMe4(a, b, c) {
// 	console.log(a, b, c);
// }

// arr1.forEach(printMe1);
// arr1.forEach(printMe2);
// arr1.forEach(printMe3);
// arr1.forEach(printMe4);



// let arr2 = [
// 	{
// 		name: "Abid Shahrier",
// 		marks: 99
// 	},
// 	{
// 		name: "Tamim Ahmed",
// 		marks: 80
// 	},
// 	{
// 		name: "Iqbal Hossain",
// 		marks: 87
// 	}
// ];

// arr2.forEach(function(val) {
// 	console.log(val);
// });

// arr2.forEach(function(val, idx) {
// 	console.log(idx);
// });

// arr2.forEach(function(val, idx, arr) {
// 	console.log(arr);
// });

// arr2.forEach(function(val, idx, arr) {
// 	console.log(val, idx, arr);
// });

// arr2.forEach(function(val) {
// 	console.log(val.name);
// 	console.log(val.marks);
// });















// // Map: map isn't iterable
// /////////////////////////////////////////////////////////////////////////////////////////


// let map = new Map();
// map.set("BD", "Bangladesh");
// map.set("IN", "India");
// map.set("USA", "United State America");
// map.set("UK", "United Kingdom");
// map.set("IN", "India");  // It won't add india again because it add only unique key, value pairs and don't adds existing ones


// console.log(map);  // Output: {'BD' => 'Bangladesh', 'IN' => 'India', 'USA' => 'United State America', 'UK' => 'United Kingdom'}; [[Entries]] => index:0 => {"BD" => "Bangladesh"}, index:1 => {"IN" => "India"}, index:2 => {"USA" => "United State America"}, index:3 => {"UK" => "United Kingdom"}, length: 4


// for (let i of map) {
// 	console.log(i);
// }


// for (let i in map) {  // it won't work here because it isn't iterable
// 	console.log(map[i]);
// }
// for (let i in map) {  // it won't work here because it isn't iterable
// 	console.log(map);
// }
// for (let i in map) {  // it won't work here because it isn't iterable
// 	console.log(i);
// }


// for (let [key, value] of map) {
// 	console.log(key);
// 	console.log(value);
// 	console.log(key, value);
// }
















//  Filter
// ////////////////////////////////////////////////////////////////////////////////////////


// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let arr2 = arr1.filter(function(val) {
// 	val > 3;
// 	// return val > 3;	 // without this line it won't return anything
// });
// console.log(arr1);
// console.log(arr2);

// let arr3 = arr1.filter((val) => {
// 	val > 3;
// 	// return val > 3;  // without this line it won't return anything
// });
// console.log(arr1);
// console.log(arr3);


// let arr4 = arr1.filter((val) => val > 3 );  // The arrow function (val) => val > 3 has a single expression val > 3, and because it's a concise arrow function without curly braces, the result of val > 3 is implicitly returned. Therefore, you don't need to explicitly use the return keyword in this case.
// console.log(arr1);
// console.log(arr4);

// let arr5 = arr1.filter((val) => (val > 3));
// console.log(arr1);
// console.log(arr5);


// let arr6 = [];
// arr1.forEach(function(val) {
// 	if (val > 3) {
// 		arr6.push(val);
// 	}
// });
// console.log(arr6);












//  // filter

// let books = [
// 	{
// 		title: "Book One", genre: "Fiction", publish: 1981, edition: 2004
// 	},
// 	{
// 		title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008
// 	},
// 	{
// 		title: "Book Three", genre: "History", publish: 1999, edition: 2007
// 	},
// 	{
// 		title: "Book Four", genre: "Science", publish: 1989, edition: 2010
// 	},
// 	{
// 		title: "Book Five", genre: "Non-Fiction", publish: 2009, edition: 2014
// 	},
// 	{
// 		title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010
// 	},
// 	{
// 		title: "Book Seven", genre: "History", publish: 1986, edition: 1996
// 	},
// 	{
// 		title: "Book Eight", genre: "Science", publish: 2011, edition: 2016
// 	},
// 	{
// 		title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989
// 	},
// 	{
// 		title: "Book Ten", genre: "Fiction", publish: 1988, edition: 2005
// 	},
// ];

// let userBooks1 = books.filter((book) => book.genre === "History");
// console.log(userBooks1);

// let userBooks2 = books.filter((book) => book.publish > 1995);
// console.log(userBooks2);

// let userBooks3 = books.filter((book) => book.publish > 1995 && book.genre === "Science");
// console.log(userBooks3);












//  // map

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let arr2 = arr1.map((num) => num + 10);
// console.log(arr2);  // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// let arr3 = arr1.map((num) => num * 10).map((num) => num + 2);
// console.log(arr3); // Output: [12, 22, 32, 42, 52, 62, 72, 82, 92, 102]

// let arr4 = arr1.map((num) => num * 5).map((num) => num - 1).filter((num) => num >= 20);
// console.log(arr4); // Output: [24, 29, 34, 39, 44, 49]











// // reduce

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let total1 = arr1.reduce(function(acc, curr) {
// 	return acc + curr;
// }, 2);
// console.log(total1);  // Output: 57

// let total2 = arr1.reduce((acc, curr) => acc + curr, 0);
// console.log(total2);

// let total3 = arr1.reduce((acc, curr) => (acc - curr), 0);
// console.log(total3);


// let shoppingCart = [
// 	{
// 		itemName: "js course",
// 		price: 29
// 	},
// 	{
// 		itemName: "py course",
// 		price: 999,
// 	},
// 	{
// 		itemName: "mobile dev",
// 		price: 5999
// 	}
// ];
// let total4 = shoppingCart.reduce((acc, item) => acc + item.price, 0);
// console.log(total4);







// // shallow copy and deep copy


// // shallow copy

// let arr1 = [1, 2, 3, 4, 5];

// let arr2 = arr1;
// console.log(arr2);
// arr2[2] = 1;
// console.log(arr2);
// console.log(arr1);
// console.log("aaaa");



// // deep copy

// let arr3 = [1, 2, 3, 4, 5];

// let _ = require("lodash");
// let arr4 = _.cloneDeep(arr3);
// console.log("arr4 - before", arr4);
// arr4[2] = 1;
// console.log("arr4 - after", arr4);
// console.log("arr3 - ", arr3);