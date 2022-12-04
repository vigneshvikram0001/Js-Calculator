let output = document.getElementById("input-value");
function fun(num){
    output.value += num;
}
function Calculator(){
    try{
        output.value = eval(output.value);
    }
    catch(error){
        alert("Invalid");
    }
}
function del(){
    output.value = output.value.slice(0, -1);
}
function clr(){
    output.value = "";
}