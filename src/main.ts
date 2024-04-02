import { generateTable } from "./tableReader";
import { mapToNumbers } from "./mapping";



const inputString = "Hello word how are you doing today";
const key = "1235";
const result = mapToNumbers(inputString, key);
console.log(result);
