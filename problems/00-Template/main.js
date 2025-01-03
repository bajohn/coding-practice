import { testCases } from "./testcases.js";

var main = function (input1, input2) {
    return input1 + input2;
};

for (const testCase of testCases) {
    console.log(JSON.stringify(main(...testCase.input)) === JSON.stringify(testCase.output) ? 'pass' : 'fail',
        main(...testCase.input),
        testCase.output);

}