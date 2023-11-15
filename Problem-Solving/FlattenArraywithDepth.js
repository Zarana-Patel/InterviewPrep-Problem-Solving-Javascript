var flat = function (arr, n) {
     if (n === 0) return arr;
    let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
         res.push(...flat(arr[i], n-1));
    
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

/*
console.log(flat([1,[34,6,4,5,7],[5,6,7,8,[9,2,[45,76]]]],1));
Output: [1, 34, 6, 4, 5, 7, 5, 6, 7, 8, [9, 2, [45, [76]]]]

console.log(flat([1,[34,6,4,5,7],[5,6,7,8,[9,2,[45,76]]]],2));
Output: [1, 34, 6, 4, 5, 7, 5, 6, 7, 8, 9, 2, [45, 76]]

*/
