/**
 *
 * ALAB - 308.5.1 Reusable Functions
 *
 */

/**
 *
 * Part 1 - Thinking functionally
 *
 */
// sum all items in ary
function sum(ary) {
  let sum = 0;
  for (let i = 0; i < ary.length; i++) {
    sum += ary[i];
  }
  return sum;
}

// get the avg of all items in ary
function avg(ary) {
  let len = ary.length;
  let total = 0;
  for (let i = 0; i < len; i++) {
    total += ary[i];
  }
  return total / len;
}

// get longest str in str ary
function longestString(strAry) {
  let len = strAry.length;
  let max = 0;
  let tracker = 0;
  for (let i = 0; i < len; i++) {
    if (strAry[i].length > max) {
      //   console.log(max);
      max = strAry[i].length;
      tracker = i;
    }
  }
  //   console.log(strAry[tracker]);
  return strAry[tracker];
}

// string longer than
function stringsLongerThan(ary, n) {
  let aryLStr = [];
  for (let i = 0; i < ary.length; i++) {
    if (ary[i].length > n) {
      aryLStr.push(ary[i]);
    }
  }
  return aryLStr;
}

// recursions
function rec(n, i) {
  if (i > n) {
    return;
  } else {
    console.log(i);
    i++;
    rec(n, i);
  }
}

// used for longest str ary
const strAry = ["a", "bbb", "abcd", "ccc"];
const longestStr = longestString(strAry);
console.log(longestStr);

// used for the longer than n function
const lStrAry = stringsLongerThan(["say", "hello", "in", "the", "morning"], 3);
console.log(lStrAry);

// rec(10, 1); // for the recursion method

/**
 *
 * Part 2 - thinking methodically
 *
 */
const personAry = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// console.log(personAry);

// sorting by age
personAry.sort((a, b) => a.age - b.age); // sorting the array by age
// console.log(personAry);

// filter ary for age
const filteredAry = personAry.filter((person) => person.age < 50);
console.log(filteredAry);

// using map function to change the key and increment all ages by 1
const newPersonAry = personAry.map((person) => ({
  id: person.id,
  name: person.name,
  job: person.occupation,
  age: Number(person.age) + 1,
}));

console.log("new person ary change by map:", newPersonAry);

// Use reduce to sum the ages
const len = newPersonAry.length;
// console.log(len);

const sumOfAges = newPersonAry.reduce((total, person) => {
  return total + person.age;
}, 0);

console.log("total:", sumOfAges);

const average = sumOfAges / len;
console.log("average:", average);
