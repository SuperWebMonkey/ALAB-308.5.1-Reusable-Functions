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
