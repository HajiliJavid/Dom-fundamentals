let btn=document.getElementById("button-submit");
console.dir(btn);
console.log(btn.innerText)

let btnReset=document.getElementById("button-reset");


let card=document.getElementById("main-card");
console.dir(card);


let cardHeader=document.getElementById("cardHeader");
console.dir(cardHeader);

let cardTitle=document.getElementById("cardTitle");
console.dir(cardTitle);
let cardText=document.getElementById("cardText");
console.dir(cardText);

card.style.maxWidth="25rem"
card.className="card text-bg-danger mb-3"
btn.addEventListener("click", function(){
    card.className="card text-bg-success mb-3"
    btn.className="btn btn-warning"
    cardTitle.style.color= "black"
    
});

btnReset.addEventListener("click", function(){
    card.className="card text-bg-danger mb-3"
    btn.className="btn btn-primary"
    cardTitle.style.color= "white"
});

cardHeader.innerHTML=" Header <span class='badge text-bg-secondary'>4</span> "
cardTitle.innerText=" Coders  "
cardHeader.style.color= "yellow"

cardText.innerText="Salam adim Caviddi"




