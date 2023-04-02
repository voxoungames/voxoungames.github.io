function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 10 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) + 10

    );
}

document.addEventListener("scroll", (s) => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((e) => {
        if (isInViewport(e)){
            e.classList.add("show");
        }
        else{
            e.classList.remove("show");
        }
    })
});

const el = document.getElementById("fishgameweb");

function FishGameHover(){
    console.log("Hover")
    if (!document.body.classList.contains("bodyF")){
        document.body.classList.add("bodyF");
    }
}

function FishGameUnhover(){
    console.log("Unhover")
    if (document.body.classList.contains("bodyF")){
        document.body.classList.remove("bodyF");
    }
}

function PhotonVRHover(){
    console.log("Hover")
    if (!document.body.classList.contains("bodyP")){
        document.body.classList.add("bodyP");
    }
}

function PhotonVRUnhover(){
    console.log("Unhover")
    if (document.body.classList.contains("bodyP")){
        document.body.classList.remove("bodyP");
    }
}