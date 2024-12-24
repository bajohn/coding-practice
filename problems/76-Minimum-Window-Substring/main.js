import { testCases } from "./testcases.js";

var main = function (s, t) {
    if (t.length === 0) {
        return '';
    }
    const checkValid = (sStack, tStack) => {
        for (const x of Object.keys(tStack)) {
            if (!(x in sStack && sStack[x] >= tStack[x])) {
                return false;
            }
        }
        return true;
    };

    const buildStack = (str) => {
        const ret = {};
        for (const x of str) {
            x in ret ? ret[x]++ : ret[x] = 1;
        }
        return ret;
    };

    const sStack = {};
    const tStack = buildStack(t);
    let ret = '';
    const sLen = s.length;
    let l = 0;
    let r = 0;
    let isValid = false;

    while (!(r == sLen && !isValid)) {
        if (!isValid) {
            r++;
            // Note - careful! r index is off by 1 to match .substring() behavior.
            const cur = s[r - 1];
            cur in sStack ? sStack[cur]++ : sStack[cur] = 1;
        } else {
            const cur = s[l];
            sStack[cur]--;
            l++;
        }
        // TODO - We don't need two stacks and iteration every time
        // More optimal - just init a stack from t, and +/- from it 
        // as you go.
        isValid = checkValid(sStack, tStack);
        if (isValid) {
            const cand = s.substring(l, r);
            if (ret.length === 0 || cand.length < ret.length) {
                ret = cand;
            }
        }
    };

    return ret;
};

for (const testCase of testCases) {
    console.log(main(...testCase.input) === testCase.output ? 'pass' : 'fail',
        main(...testCase.input),
        testCase.output);

}