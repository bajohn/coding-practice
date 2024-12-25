import { testCases } from "./testcases.js";

var main = function (input1, input2) {
    return input1 + input2;
};

for (const testCase of testCases) {
    console.log(main(...testCase.input) === testCase.output ? 'pass' : 'fail',
        main(...testCase.input),
        testCase.output);

}