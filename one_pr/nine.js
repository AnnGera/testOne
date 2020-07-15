var arr=[2,6,3,9,4,2,8,5,3];
for(var i=0;i<(arr.length/2);i++){
    j=arr.length-i-1;
    var a=arr[j];
    arr[j]=arr[i];
    arr[i]=a;
}
console.log(arr)