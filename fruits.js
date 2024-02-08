const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'melon'];
function divideEvenOddLengths(list) {
  return _.groupBy(list, function (input) {
    return (input.length % 2) === 0 ? 'even' : 'odd';
  });
}

console.log(divideEvenOddLengths(fruits));
