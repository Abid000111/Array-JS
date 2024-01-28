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
// console.log(arr4);









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
