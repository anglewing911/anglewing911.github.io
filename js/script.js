window.addEventListener("load", function () {
    document.querySelector(".preloader").classList.add("opacity-0");
    // setTimeout(() =>{
    //     document.querySelector(".preloader").style.display="none";
    // },1000)

    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";
    }, 1000)
})


// Porfolio Item Filter
const filterContainer = document.querySelector(".portfolio-filter"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalportfolioItems = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for (let k = 0; k < totalportfolioItems; k++) {
            if (filterValue === portfolioItems[k].getAttribute("data-category")) {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            } else {
                portfolioItems[k].classList.add("hide");
                portfolioItems[k].classList.remove("show");
            }
            if (filterValue === "all") {
                portfolioItems[k].classList.add("show");
            }

        }
    })

}



// Portfolio Lightbox
const lightbox = document.querySelector(".lightbox"),
    lightboxClose = lightbox.querySelector(".lightbox-close"),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxText = lightbox.querySelector(".lightbox-text"),
    lightboxCounter = lightbox.querySelector(".lightbox-counter");
let itemIndex = 0;

for (let i = 0; i < totalportfolioItems; i++) {
    portfolioItems[i].addEventListener("click", function () {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}

function nextItem() {
    if (itemIndex == totalportfolioItems - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
}

function prevItem() {
    if (itemIndex == 0) {
        itemIndex = totalportfolioItems - 1;
    } else {
        itemIndex--;
    }
    changeItem();
}

function toggleLightbox() {
    lightbox.classList.toggle("open");
}

function changeItem() {
    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalportfolioItems;
}

//close Lightbox

lightbox.addEventListener("click", function (event) {
    if (event.target === lightboxClose || event.target === lightbox) {
        toggleLightbox();
    }
    console.log(event.target)
})



//Aside Navbar

const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li"),
    totalNavlist = navlist.length
allSection = document.querySelectorAll(".section");
totalSection = allSection.length;

for (let i = 0; i < totalNavlist; i++) {
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function () {
        // remove back section class
        // for (let i = 0; i < totalSection; i++) {
        //     allSection[i].classList.remove("back-section");
        // }
        removeBackSectionClass();

        for (let j = 0; j < totalNavlist; j++) {
            if (navlist[j].querySelector("a").classList.contains("active")) {
                //add back section class
                addBackSectionClass(j);

            }
            navlist[j].querySelector("a").classList.remove("active");
        }

        this.classList.add("active");
        showSection(this);

        // aside go away with full display
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSectionClass() {
    // remove back section class
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSectionClass(num) {
    // add back section class
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}


// update name for the aside bar with hire me
function updateName(element) {
    for (let i = 0; i < totalNavlist; i++) {
        navlist[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navlist[i].querySelector("a").classList.add("active");
        }
    }
}

// document.querySelector(".hire-me").addEventListener("click", function () {
//     const sectionIndex = this.getAttribute("data-section-index");
//     // console.log(sectionIndex)
//     showSection(this);
//     updateName(this);
//     removeBackSectionClass();
//     addBackSectionClass(sectionIndex);
// })

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

// method 2:
navTogglerBtn.addEventListener("click", asideSectionTogglerBtn)

// method 1:
// navTogglerBtn.addEventListener("click",() =>{
//     asideSectionTogglerBtn();
// })

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}
