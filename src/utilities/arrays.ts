// Concatenate two arrays

export const concatArr = (arr1: (string | number)[], arr2: (string | number)[]): (number | string)[] => {
  return [...arr1, ...arr2];
};

// Add numbers in an array

export const addArr = (arr: number[]): number => {
  let total = 0;
  arr.forEach((x) => {
    total += x;
  });
  return total;
};

// Find the largest number in an array
export const lgNum = (arr: number[]): number => {
  let largest = 0;
  arr.forEach((x) => {
    if (x > largest) {
      largest = x;
    }
  });
  return largest;
};

// Remove the 3rd item from an array
export const cut3 = (arr: (string | number)[]): (number | string)[] => {
  arr.splice(2, 1);
  return arr;
};

// module.exports = {
//   concatArr,
//   addArr,
//   lgNum,
//   cut3,
// };
