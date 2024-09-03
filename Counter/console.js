let increaseBtn=document.getElementById("plusButton");
let decreaseBtn=document.getElementById("minusButton");
let resetBtn=document.getElementById("resetButton");
let resultValue=document.getElementById("counterValue")
count=0

increaseBtn.addEventListener("click", function(){
    count++;
    resultValue.innerText=count
});

decreaseBtn.addEventListener("click", function(){
    count--;
    resultValue.innerText=count
});

resetBtn.addEventListener("click", function(){
    count=0;
    resultValue.innerText=count
});