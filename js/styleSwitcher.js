const links = document.querySelectorAll(".alternate-style"),
    totalLinks = links.length;

function setActiveStyle(color) {
    for (let i = 0; i < totalLinks; i++) {
        if (color === links[i].getAttribute("title")) {
            links[i].removeAttribute("disabled");
        } else {
            links[i].setAttribute("disabled", "true");
        }
    }
}

document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

//body skin

const bodySkin = document.querySelectorAll(".body-skin"),
    totalBodySkin = bodySkin.length;
for (let i = 0; i < totalBodySkin; i++) {
    bodySkin[i].addEventListener("change", function () {
        if (this.value === "dark") {
            document.body.classList="dark";
        } else {
            document.body.classList="";
        }
    })
}

// const links = document.querySelectorAll(".alternate-style"),
//     totalLinks = links.length;

// function setActiveStyle(color) {
//     for (let i = 0; i < totalLinks; i++) {
//         if (color == link[i].getAttribute("title")) {
//             links[i].removeAttribute("disabled");
//         } else {
//             links[i].setAttribute("disabled", "true");
//         }
//     }
// }

// const links = document.querySelectorAll(".alternate-style");
// console.log(links)

// function setActiveStyle(color) {
//     console.log(color)
// }