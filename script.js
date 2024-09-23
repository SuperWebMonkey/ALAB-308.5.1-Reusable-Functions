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

// rec(10, 1); // for the recursion method
