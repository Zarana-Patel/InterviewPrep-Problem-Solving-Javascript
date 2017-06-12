function incrementLast(array) {
    return array.map(
        function(elt, i, arr) {
            return elt + (i === arr.length - 1);
        }
    );
}
console.log(incrementLast([1,2,3]));