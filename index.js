let cards= document.querySelector(".card");
let isRotated = false;
cards.addEventListener("click", function() {
    if(isRotated){
        cards.style.transform = "none";
        isRotated= false;
    } else {
        cards.style.transform = "rotateY(180deg)";
        isRotated = true;
    }
})


