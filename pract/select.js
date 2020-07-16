<script>option(['01','05','10','15','20','25'])</script>

function option(massive) {
let sys1 = '<option value="0.'
let sys2 = '">'
let sys3 = '</option>'
let result = "";
for (var i = 0; i < 6; i++) {
result+=sys1+massive[i]+sys2+Number(massive[i])+sys3;
}
document.getElementById("service_quality").innerHTML = result;
}