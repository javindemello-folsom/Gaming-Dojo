// Banner Images
var imageindex = 2;
function nextImage(){
    if (imageindex < 6){
        imageindex ++;
    }
    if(imageindex == 5){
        imageindex = 1;
    }
    changeImage(imageindex);
}

function previousImage(){
    if (imageindex > 0){
        imageindex --;
    }
    if(imageindex == 0){
        imageindex = 4;
    }
    changeImage(imageindex);
}

function changeImage(index){
    var image = document.getElementById('banner-image');
    if(index == 1){
        image.src = "images/games.jpg";
        document.getElementById("tab1").style.backgroundColor = "rgb(166, 58, 255)";
        document.getElementById("tab2").style.backgroundColor = "gray";
        document.getElementById("tab3").style.backgroundColor = "gray";
        document.getElementById("tab4").style.backgroundColor = "gray";
        imageindex = 1;
    }
    if(index == 2){
        image.src = "images/stonepunk.png";
        document.getElementById("tab1").style.backgroundColor = "gray";
        document.getElementById("tab2").style.backgroundColor = "rgb(166, 58, 255)";
        document.getElementById("tab3").style.backgroundColor = "gray";
        document.getElementById("tab4").style.backgroundColor = "gray";
        imageindex = 2;
    }
    if(index == 3){
        image.src = "images/pixel-ninjas-2.png";
        document.getElementById("tab1").style.backgroundColor = "gray";
        document.getElementById("tab2").style.backgroundColor = "gray";
        document.getElementById("tab3").style.backgroundColor = "rgb(166, 58, 255)";
        document.getElementById("tab4").style.backgroundColor = "gray";
        imageindex = 3;
    }
    if(index == 4){
        image.src = "images/cafe-neko.png";
        document.getElementById("tab1").style.backgroundColor = "gray";
        document.getElementById("tab2").style.backgroundColor = "gray";
        document.getElementById("tab3").style.backgroundColor = "gray";
        document.getElementById("tab4").style.backgroundColor = "rgb(166, 58, 255)";
        imageindex = 4;
    }
    console.log("Image #: "+imageindex);
}

// Purchase Game
var cartcount = 0;
cartcountElement = document.getElementById("cart-count");

function buyGame(game){
    cartcount ++;
    cartcountElement.innerHTML = cartcount;
    alert(game+" added to cart!");
    console.log(game+" Purchased! Cart: "+cartcount);
}

// System Support
function gameSupport(OS){
    alert("This game is supported on "+OS+".");
}