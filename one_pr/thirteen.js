var str = "var_text_hello";
var slesh = "";
var a = "";
 
slesh=str.split("_");
 
for (var word in slesh) {
    b = slesh[word].charAt(0).toUpperCase() + slesh[word].slice(1);
    a = a + b;
};
console.log(a)


