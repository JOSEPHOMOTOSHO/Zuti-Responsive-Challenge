const harmburger = document.querySelector(".icon")
const links =  document.querySelector(".nav-links")

function bringOutMenu(){
    console.log("yam")
if (links.style.display === "block") {
     links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}


harmburger.addEventListener("click",bringOutMenu)




