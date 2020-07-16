var a = '4582580';
var b='97345'

function SumNum (a) {
    var arr=a.split('');
    var sum=0;
    for(var i=0; i < arr.length; i++){
        sum += +arr[i];
    }
    if (sum > 9){
        SumNum(sum+'');
    }else{
        console.log(sum);
    }
}
SumNum(a)
SumNum(b)