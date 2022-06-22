/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    let result = [];
    for (let j = 0; j < queries.length; j++) {
        let matched_output = 0
        for (let i = 0; i < strings.length; i++) {
            if (strings[i] === queries[j]) {
                matched_output++
            }
        }
        result.push(matched_output)
    }
    return result;
}