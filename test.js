import { cssBgParser } from "./index.js";

const res = cssBgParser.parseElementStyle(`
body {
  background-color: red;
}
`);
console.log(res);
