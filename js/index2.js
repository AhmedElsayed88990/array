var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var frequency = {};
var maxCount = 0;
var mostFrequent;

arr1.forEach(function(item) {
    frequency[item] = (frequency[item] || 0) + 1;
    if (frequency[item] > maxCount) {
        maxCount = frequency[item];
        mostFrequent = item;
    }
});

console.log('${mostFrequent} (${maxCount} times)');

