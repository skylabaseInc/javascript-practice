var ANCESTRY_FILE = JSON.stringify([
    { "name": "Mary Jane", "sex": "f", "born": 1942, "died": 2017, "father": "John Paul", "mother": "Maria Paul" },
    { "name": "Maria Paul", "sex": "f", "born": 1900, "died": 1986, "father": "Peter Che", "mother": "Sophia Che" },
    { "name": "Sophia Che", "sex": "f", "born": 1873, "died": 1934, "father": "Ayuk Martin", "mother": "Laurentia Ayuk" },
    { "name": "Joe Suh", "sex": "m", "born": 1793, "died": 1864, "father": "Suh Martin", "mother": "Laurentine Suh" },
    { "name": "Andrew Bisong", "sex": "m", "born": 1703, "died": 1794, "father": "Ayuk Bisong", "mother": "Petra Bisong" },

])
var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf) {
    var groups = {};
    array.forEach(function (element) {
        var groupName = groupOf(element);
        if (groupName in groups)
            groups[groupName].push(element);
        else
            groups[groupName] = [element];
    });
    return groups;
}

var byCentury = groupBy(ancestry, function (person) {
    return Math.ceil(person.died / 100);
});

for (var century in byCentury) {
    var ages = byCentury[century].map(function (person) {
        return person.died - person.born;
    });
    console.log(century + ": " + average(ages));
}
