var arr=[];
var num=1;
var elMas='1'
for (var i=0;i<8;i++){
arr.push(elMas)
num+=1
elMas=num.toString();
for(var j=0;j<=i;j++){
    elMas+=num;
}
}
console.log(arr)