var arr = [3,2,9,6,1,6,4];

function Output(arr) {
    console.log(arr.shift());
    if (arr.length > 0) {
        Output(arr);
    }
}
Output(arr);