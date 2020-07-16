var str = 'Какая хорошая погода за окном';
var a = 'погода';
var b='привет'
var arr = str.split(' ');

function inArray(text, arr) {
    var res;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == text) {
            res = true;
        }
    }

    if(res == undefined) {
        res = false;
    }
    return res;
}

console.log(inArray(a, arr));
console.log(inArray(b, arr))
