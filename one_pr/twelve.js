function getDivisors(x){
    let arr=[]; for(var i=1; i<=x; i++) {
        if(x%i==0){
            arr.push(i);
        } 
    } 
    return arr; 
}

console.log(getDivisors(15));