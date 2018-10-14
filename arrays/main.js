const frank = {
  name: 'Frank',
  age: 35,
};

const joe = {
  name: 'Joe',
  age: 23,
};

const aaron = {
  name: 'Aaron',
  age: 69,
};

const nameArr = [frank, joe, aaron];


const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [2, 3, 4, 5, 6, 7];

arr1.push(8);
arr2.pop();

arr1.concat(7, 8, 9);

arr2.slice(3, 6);

arr1.splice(2, 0, 4, 5);

// const arrFilled = new Array(5).fill(1);

nameArr.sort((a, b) => a.name > b.name);

arr1.indexOf(1);
arr1.lastIndexOf(1);

console.log(nameArr);

const arr3 = [5, 7, 12, 15, 17];
arr3.some(x => x % 2 === 0);
arr3.every(x => x % 2 === 0);

// const arrReduce = [1, 2, 3, 4];
// const sum = arrReduce.reduce((a, x) => a += x, 0);
// console.log(sum);

const arrStr = ['a', 'b', 'c'];

const combinedArrStr = arrStr.join(',');

console.log(combinedArrStr);
