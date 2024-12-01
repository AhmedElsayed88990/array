var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var o = ["th", "st", "nd", "rd"];

color.forEach(function(color, index) {
    var ordinal = index + 1;
    var suffix = o[(ordinal % 10) - 1] || o[0];
    if (ordinal % 100 >= 11 && ordinal % 100 <= 13) {
        suffix = o[0];
    }
    console.log('${ordinal}${suffix} choice is ${color}.');
});

