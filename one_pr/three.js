var str='https://yytu.ru/ghvg/iuu'
var stb='httprhus://yytu.ru/ghvg/iuu'
function checkStr(a){
    if(a.indexOf('https://')==0){
        console.log('true')
    }
    else{
        console.log('false')
    }
}
checkStr(str)
checkStr(stb)