let number1 = +prompt("Number1");
let number2 = +prompt("Nnumber2");
let min;
let max;
let random;
if(number1>number2){
    max=number1;
    min=number2;
    random = Math.random() * (max-min) + min;
    alert(" random: " + random);
}else if(number1<number2){
    max=number2;
    min=number1;
    random = Math.random() * (max-min) + min;
    alert(" random: " + random);
}else{
    alert("2 SO = NHAU K CO SO GIUA");
}