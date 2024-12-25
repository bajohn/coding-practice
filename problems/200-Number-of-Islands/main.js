import { testCases } from "./testcases.js";

var main = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    let ctr = 0;
    if (!grid) {
        return ctr;
    }
    const dfs = (i, j) => {
        if (i >= m || j >= n || i < 0 || j < 0 || grid[i][j] !== '1') {
            return null;
        }
        grid[i][j] = 0;
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                ctr++;
                dfs(i, j);
            }
        }
    }
    return ctr;
};

for (const testCase of testCases) {
    console.log(JSON.stringify(main(...testCase.input)) === JSON.stringify(testCase.output) ? 'pass' : 'fail',
        main(...testCase.input),
        testCase.output);

}