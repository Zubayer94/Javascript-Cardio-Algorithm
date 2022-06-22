/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    for (let i = 0; i < d; i++) {
        let removed = arr.shift();
        arr.push(removed);
    }
    return arr;
}
