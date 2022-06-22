/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {

    const arr = Array(n + 1);
    let maxValue = 0,
        currentNumber = 0;
    queries.forEach(([startRange, endRange, value]) => {
        //  console.log('loop')            
        arr[startRange] = arr[startRange] || { start: 0, end: 0 };
        arr[endRange] = arr[endRange] || { start: 0, end: 0 };
        //  console.log(arr)             
        arr[startRange].start += value;
        arr[endRange].end += value;
        //  console.log(arr)   
        //  console.log('===========================')          
    });
    //  console.log(arr)
    arr.forEach((cell) => {
        if (cell) {
            // console.log(cell)
            currentNumber += cell.start;
            // console.log('adin start',currentNumber)

            if (currentNumber > maxValue) {
                maxValue = currentNumber;
            }
            currentNumber -= cell.end;
            // console.log('subtracting end',currentNumber) 
            // console.log('----------------')          

        }
    });
    return maxValue;

    // let arr = [];
    // // let arr = Array(n).fill(0);
    // let max = 0;
    // for(let i = 0; i<queries.length; i++){
    //     console.log(queries[i])
    //     let a = queries[i][0]-1;
    //     let b = queries[i][1]-1;
    //     let k = queries[i][2];

    //     for(let m = a; m <= b; m++){
    //         if(!arr[m])
    //             arr[m] = 0
    //         arr[m] = arr[m] + k;

    //         if(arr[m] > max){
    //             max = arr[m];
    //         }
    //     }   
    // }
    // return max;
}