document.addEventListener("DOMContentLoaded", function(event){
function calculate(){
var bill_count = document.getElementById('bill_count').value;
//if(bill_count===0){
   // document.getElementById('bill_count').style.borderColor='red';    
//}
var service_qualety = document.getElementById('service_qualety').value
var people_num = document.getElementById('people_num').value


//Simple validation
if(!bill_count || service_qualety){
    alert('Please enter values!')
    return;
}
//Check value
if(!people_num ||  people_num<=1){
    people_num=1;

}

//Calculate tips
var total = (bill_count*service_qualety)/people_num;
console.log(total)
}
//round value
total=Math.round(total*100)/100;
total=total.toFixed(2);

document.getEllementById('totalTip').style.display='block';
document.getEllementById('tip').innerHTML=total;

//Hide tips element on load
concole.log(document.getEllementById('totalTip'));
document.getEllementById('totalTip').style.display='none';
document.getEllementById('each').style.display='none';

document.getEllementById('calculate').onclick = function(){
    calculate();
}
});