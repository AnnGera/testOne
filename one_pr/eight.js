var arr=[1,6,1,1,2,5,1];
var c=0;
var count=0;
var i=0;
    for(var j=0;j<arr.length;j++){
        if (c<=10){
        c=c+arr[j]
        count=count+1
    }  
}
console.log(count)