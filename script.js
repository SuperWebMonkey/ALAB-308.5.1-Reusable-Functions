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

/**
 *
 * Part 3 - Thinking Critically
 *
 */
function manipObj(obj) {
  if (!obj.hasOwnProperty("age")) {
    obj.age = 0;
  }

  obj["age"] += 1;

  const copy = { ...obj };
  copy["updated_at"] = new Date();

  return copy;
}

function byRef(obj) {
  if (!obj.hasOwnProperty("age")) {
    obj.age = 0;
  }

  obj["age"] += 1;

  const copy = obj;
  copy["updated_at"] = new Date();

  return copy;
}

const obj = { name: "peter", age: 25 };
// const obj2 = { name: "melissa" };

const newObj = byRef(obj); // manipObj(obj);

console.log("new object:", newObj, "\nold object:", obj);

// using setTime function
const newTime = new Date(2023, 0, 1);
// console.log(newTime);
newObj.updated_at.setTime(newTime);

// Since the newObj references the old, updated_at is also changed
console.log("check date for new obj:", newObj.updated_at);
console.log("check date for old obj:", obj.updated_at);

// to remediate this, the ... can be used to pass by value
// to the newObj
const obj2 = { name: "Mahoney", age: 40 };

const newObj2 = manipObj(obj2);

const newTime2 = new Date(2024, 5, 5);
newObj2.updated_at.setTime(newTime2);

console.log("Obj 2:", obj2);
console.log("New Obj 2:", newObj2);

// The old object is not affected if the spread operator is used
// to create the new obj.
