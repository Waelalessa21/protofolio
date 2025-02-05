function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}


AOS.init({offset:0});




const modal = document.getElementById("video-modal");
const abshermodal = document.getElementById("absher-modal");
const btn = document.getElementById("bar");
const absherbtn = document.getElementById("absher");
const closeBtn = document.querySelector(".close");
const ABSHERcloseBtn = document.querySelector(".close1");



absherbtn.addEventListener("click", () => {
    abshermodal.style.display = "block";
});

ABSHERcloseBtn.addEventListener("click", () => {
    abshermodal.style.display = "none";
});

btn.addEventListener("click", () => {
    modal.style.display = "block";
});

window.addEventListener("click", (event) => {
    if (event.target === abshermodal) {
        abshermodal.style.display = "none";
    }
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});




document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); 

            const targetId = this.getAttribute("href"); 
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                let zoomScale;
                if (window.innerWidth < 844) {
                    zoomScale = 1.02; 
                } else {
                    zoomScale = 1.1;
                }

                targetSection.style.transform = `scale(${zoomScale})`;
                targetSection.style.transformOrigin = "center";

                targetSection.scrollIntoView({ behavior: "smooth" });

                setTimeout(() => {
                    targetSection.style.transform = "scale(1)";
                }, 1000); 
            }
        });
    });
});