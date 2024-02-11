let squares = document.getElementsByName("nam");
const button = document.getElementById("btnSkip");
const iconHeadphone = document.getElementById("icon-headphones");
const iconReload = document.getElementById("icon-reload");
const iconInfo = document.getElementById("icon-information");
let tik = document.getElementsByClassName("tik");
let keyword = document.getElementById("identifier");
var images = ["karo.jpg","pexels-valeria-boltneva-1805164.jpg","the new.jpg","pexels-trace-constant-707046.jpg","images (5).jpeg","pexels-evg-kowalievska-1174746.jpg"];
let imgDisplayed = document.getElementById("image-identifier");
let total = 0;
let target = 57;
let attempts = 2;



randomiseImage(images);


function randomiseImage(images1){
    let randIndex = Math.floor(Math.random()*6);
    console.log(randIndex);
    imgDisplayed.src = images1[randIndex];

    function setTarget(number){
        switch(true){
            case number == 0:
                keyword.innerHTML = "Beautiful Woman";
                target = 57;
                break;
            case number == 1:
                target = 62;
                keyword.innerHTML = "Dog";
                break;
            case number == 2:
                target = 75;
                keyword.innerHTML = "Beautiful Couple";
                break;
            case number == 3:
                target = 29;
                keyword.innerHTML = "Sports Car";
                break;
            case number == 4:
                target = 73;
                keyword.innerHTML = "Beautiful Girl";
                break;
            case number == 5:
                target = 36;
                keyword.innerHTML = "Game Controller";
                break;
            default:
                break;
        }
    }
    setTarget(randIndex);
}


squares.forEach((element, index, clicked) => {
    clicked = false;
    let id = element.id;
    id = Number(id);
    element.addEventListener("click", squareSelect);
    function squareSelect(){
        
        button.innerHTML = "VERIFY";
        button.title = "verify";
        if(!clicked){
            total += id;
            console.log("total ",total);
            tik[index].style.visibility = "visible";
            element.style.backgroundColor = "rgba(0,0,0,0.4)";
            element.style.border = "3px solid rgba(250,250,250,1.0)";
            clicked = true;
        }else{
            total -= id;
            console.log("total ",total);
            tik[index].style.visibility = "hidden";
            element.style.backgroundColor = "rgba(0,0,0,0.0)";
            element.style.border = "none"
            element.style.borderLeft = "1px solid rgba(0,0,0,0.5)";
            clicked = false;
        }
    }
});

button.addEventListener("click", confirmation)

  

function confirmation(){
    attempts -= 1;
    switch(true){
        case attempts <= 0:
            console.log("You have ran out of attempts");
            window.close();
            break;
        case total == target:
            console.log("success!!");
            window.location.href = "https://google.com";
            break;
        case total != target:
            console.log("Unsuccessful Atempts");
            total = 0;
           // randomiseImage(images);
            window.location.href = "ReCaptcha.html";
            break; 
        default:
            break;
    }
}
