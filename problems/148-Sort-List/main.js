import { testCases } from "./testcases.js";

var main = function (head) {
  
};

for (const testCase of testCases) {
    console.log(main(...testCase.input) === testCase.output ? 'pass' : 'fail',
        main(...testCase.input),
        testCase.output);

}