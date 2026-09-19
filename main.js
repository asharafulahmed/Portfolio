/* ========== Toggle icon navbar==========*/

let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navBar.classList.toggle("active");
};

/* ========== sticky navbar ==========*/

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 100);
});

/* ========== removed toggle icon and navbar ==========*/

menuIcon.classList.remove('fa-xmark');
navBar.classList.remove('active');

/* ========== Typing effect here for home section ==========*/

let typing = document.querySelector("#typing")

const words = ["Frontend Developer", "Web Developer", "Python Developer"];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {
    let word = words[wordIndex]

    if (!deleting) {
        typing.textContent = word.slice(0, charIndex++);
    }
    else {
        typing.textContent = word.slice(0, charIndex--);
    }
    if (charIndex === word.length+1) {
        deleting = true;
        setTimeout(typingEffect,1000);
        return;
    }
    if (charIndex === 0 && deleting) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length
    }
    setTimeout(typingEffect, deleting ? 50:100)
}
typingEffect()

/* ========== About me Read More text for Every BUTTON ==========*/

let Btn = document.getElementById("btn1")
let Text = document.getElementById("more-text")

Btn.addEventListener("click", () => {
    Text.classList.toggle("show")

    if(Text.classList.contains("show")){
        Btn.textContent = "Read less"
    }
    else {
        Btn.textContent = "Read more"
    }
});

/* ========== About me Read More text for Every BUTTON ==========*/

let serviceBox = document.querySelectorAll(".service-box");

serviceBox.forEach(box => {

    let btn = box.querySelector(".butn")
    let text = box.querySelector("p")

    btn.addEventListener("click", () => {
        text.classList.toggle("show")

        if(text.classList.contains("show")){
            btn.textContent = "Read less"
        }
        else {
            btn.textContent = "Read more"
        }
    })
})

/* ========== Contorl scroll behevior ==========*/

window.history.scrollRestoration = "manual";

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});
/* ========== Adding amemation in section ==========*/

let sections = document.querySelectorAll("section");
let navlink = document.querySelectorAll(".navbar a")

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")

            navlink.forEach(link => {
                link.classList.remove("active")

                if (link.getAttribute("href") === "#" + entry.target.id) {
                    link.classList.add("active")
                }
            });
        }
        else{
            entry.target.classList.remove("show")

            entry.target.classList.remove("active")
        }
    })
},{
    threshold:0.2
})
sections.forEach(section => {
    observer.observe(section)
})
