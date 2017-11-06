var ANCESTRY_FILE = JSON.stringify([
  { "name": "Mary Jane", "sex": "f", "born": 1942, "died": 2017, "father": "John Paul", "mother": "Maria Paul" },
  { "name": "Maria Paul", "sex": "f", "born": 1900, "died": 1986, "father": "Peter Che", "mother": "Sophia Che" },
  { "name": "Sophia Che", "sex": "f", "born": 1873, "died": 1934, "father": "Ayuk Martin", "mother": "Laurentia Ayuk" },
])
var ancestry = JSON.parse(ANCESTRY_FILE);
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function (person) {
  byName[person.name] = person;
});

var differences = ancestry.filter(function (person) {
  return byName[person.mother] != null;
}).map(function (person) {
  return person.born - byName[person.mother].born;
});

console.log(average(differences));
// → 31.2