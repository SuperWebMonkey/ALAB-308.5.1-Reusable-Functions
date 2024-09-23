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
function longest(strAry) {
  let len = strAry.length;
  let max = 0;
  for (let i = 0; i < len; i++) {
    if (strAry[i].length > max) {
      max = strAry[i].length;
    }
  }
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

rec(10, 1);
