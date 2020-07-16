function option(arr) {
var a = '<option value="0.',
 b = '">',
 c = '</option>';
let result = "";
for (var i = 0; i < 6; i++) {
result+=a+arr[i]+b+Number(arr[i])+c;
}
document.getElementById("service_quality").innerHTML = result;
}