
let cardContainer = document.querySelector(".cardContainer");


function createCard() {

    for (let i = 1; i < 11; i++) {

        let swiperWrapper = document.querySelector(".swiper-wrapper");

        let swiperSlide = document.createElement("div");
        swiperSlide.classList = "swiper-slide";
        swiperWrapper.appendChild(swiperSlide);
        let card = document.createElement("div");
        card.classList = "card";
        swiperSlide.appendChild(card);

        let img = document.createElement("img");
        card.appendChild(img);
        img.src = `card${i}.jpg`;

        let cardBottom = document.createElement("div");
        cardBottom.classList = "card-bottom";
        card.appendChild(cardBottom);

        let a = document.createElement("a");
        a.innerText = "Puff Chair";
        cardBottom.appendChild(a);

        let span = document.createElement("span");
        span.innerText = "$287,00";
        cardBottom.appendChild(span);

        if (i < 6) {
            swiperSlide.appendChild(card);
        } else {
            swiperSlide.appendChild(card);
        }
    }
}
createCard();

function createCard2() {

    for (let i = 1; i < 4; i++) {

        let swiperWrapper = document.querySelector(".swiper-wrapper2");

        let swiperSlide = document.createElement("div");
        swiperSlide.classList = "swiper-slide swiper-slide2";
        swiperWrapper.appendChild(swiperSlide);
        let card = document.createElement("div");
        card.classList = "card";
        swiperSlide.appendChild(card);

        let img = document.createElement("img");
        card.appendChild(img);
        img.src = `cart${i}.jpg`;

        let cardBottom = document.createElement("div");
        cardBottom.classList = "card-bottom";
        card.appendChild(cardBottom);

        let a = document.createElement("a");
        a.innerText = "Puff Chair";
        cardBottom.appendChild(a);

        let span = document.createElement("span");
        span.innerText = "$287,00";
        cardBottom.appendChild(span);

        if (i < 6) {
            swiperSlide.appendChild(card);
        } else {
            swiperSlide.appendChild(card);
        }
    }
}
createCard2();

let bar = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar ul");

bar.addEventListener("click", ()=>{
    navbar.classList.toggle("openNavbar");


});