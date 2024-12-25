import { testCases } from "./testcases.js";

var main = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        const pvt = Math.floor((l + r) / 2);
        if (nums[pvt] === target) return pvt;
        else if (nums[pvt] > target) r = pvt - 1;
        else l = pvt + 1;
    }
    return l
}

for (const testCase of testCases) {
    console.log(main(...testCase.input) === testCase.output ? 'pass' : 'fail',
        main(...testCase.input),
        testCase.output);

}