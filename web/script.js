function openNav(event){
    document.getElementById('menu-mobile').style.height =('100%');
    event.preventDefault();
}
function closeNav(event){
    document.getElementById('menu-mobile').style.height = ('0%');
    event.preventDefault();
}

const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}