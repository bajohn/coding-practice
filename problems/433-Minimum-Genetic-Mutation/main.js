import { testCases } from "./testcases.js";

var main = function(startGene, endGene, bank) {
    return 2;
};

for (const testCase of testCases) {
    console.log(JSON.stringify(main(...testCase.input)) === JSON.stringify(testCase.output) ? 'pass' : 'fail',
        main(...testCase.input),
        testCase.output);

}