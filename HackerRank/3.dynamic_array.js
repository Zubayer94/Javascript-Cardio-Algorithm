/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    const sequences = [];
    let lastAnswer = 0;
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        const [q, x, y] = queries[i];
        const seqIndex = (x ^ lastAnswer) % n;
        if (!sequences[seqIndex]) {
            sequences[seqIndex] = [];
        }
        if (q === 1) {
            sequences[seqIndex].push(y);
            console.log(sequences[seqIndex]);
        }
        else if (q === 2) {
            lastAnswer = sequences[seqIndex][y % sequences[seqIndex].length];
            result.push(lastAnswer);
        }
    }
    return result;

}