const sum = function (num) {
  let result = 0;
  for (let number of num) {
    result += number;
  }
  return result;
};

const arr = [1, 2, 3, 4];

console.log(sum(arr));
