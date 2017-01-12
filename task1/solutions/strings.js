function reverseString(str) {
  var array = str.split("");
  var i = 0, j = array.length-1;
  var tmp;
  while (i < j) {
    tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
    i++;
    j--;
  }
  return array.join("");
}
console.log("reverseString tests:");
console.log(reverseString(""));
console.log(reverseString("test"));
console.log(reverseString("a"));
console.log(reverseString("abcd"));
console.log(reverseString("Hello, world!"));
console.log("========================================");

function endsWith(str, ending) {
  return str.endsWith(ending);
}
console.log("endsWith test: ");
console.log("Sting: ");
var str = "some string to test."
console.log(str);
console.log(endsWith(str, "test."));
console.log(endsWith(str, "return false"));
console.log("========================================");

function beginsWith(str, beginning) {
  return str.startsWith(beginning);
}
console.log("beginsWith test: ");
console.log("Sting: ");
var str = "some string to test."
console.log(str);
console.log(beginsWith(str, "some"));
console.log(beginsWith(str, "return false"));
console.log("========================================");


function camelCase(str) {
  var pattern = /^[a-z_]+/;
  return pattern.test(str);
}
console.log("camelCase test: ");
console.log(camelCase("camelCalseString"));
console.log(camelCase("_camelCalseString"));
console.log(camelCase("NonCamelCaseString"));
console.log("========================================");


function pascalCase(str) {
  var pattern = /^[A-Z_]+/;
  return pattern.test(str);
}
console.log("pascalCase test: ");
console.log(pascalCase("PascalCalseString"));
console.log(pascalCase("_PascalCalseString"));
console.log(pascalCase("nonPasclaCaseString"));
console.log("========================================");
