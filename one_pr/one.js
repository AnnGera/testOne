var str="privet mir";
 str=str[0].toUpperCase()+str.substring(1)
console.log(str)
//второй способ
function BigFirst(a){
    return a.charAt(0).toUpperCase()+a.substring(1);
}
BigFirst(str);
console.log(str)