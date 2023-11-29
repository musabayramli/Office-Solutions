const downLi = document.querySelectorAll('#down-li > li');
const backgroundDiv = document.getElementById('background-div');
const drop = document.querySelector('.drop');
const down = document.querySelector('.down');
const header = document.querySelector('header');




let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});




const data = [
    { img: './img/office_supplies.jpeg' },
    { img: './img/Office-Furniture.jpeg' },
    { img: './img/SDA-survey_NewsInline.jpeg' },
    { img: './img/Office-Equipment.jpeg' },
    { img: './img/food.jpeg' },
    { img: './img/household-goods.jpeg' }

];
console.log(downLi);
downLi.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        backgroundDiv.style.backgroundImage = `url(${data[index].img})`;
        backgroundDiv.style.backgroundSize = 'cover';
        backgroundDiv.style.backgroundPosition = 'center';


    });
});

drop.addEventListener('mouseover', () => {
    down.style.display = 'flex';
    header.style.background = '#fff';
})
down.addEventListener('mouseleave', () => {
    down.style.display = 'none';
    header.style.background = 'transparent';
})


// owl carusel
$(document).ready(function () {
    $(".owl-carousel_1").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
});


const burgerButton = document.querySelector('.brg');


const menu = document.getElementById('menu');


burgerButton.addEventListener('click', function () {
    menu.classList.toggle('active');
    backgroundDiv.classList.toggle('active');
});




const cardData = [
    { name: 'Dəftərxana Məhsulları', icon: 'fa-regular fa-heart', img: './img/cart1.jpeg', def: 'KağızA4, 80g Office Print (class C, CİE 148%)', stoc: 'Stokda var', a: 'Mehsula bax' },
    { name: 'Təsərrüfat malları', icon: 'fa-regular fa-heart', img: './img/cart2.jpeg', def: 'Ariel Əl ilə yumaq üçün 450q', stoc: 'Stokda var', a: 'Mehsula bax' },
    { name: 'Dəftərxana Məhsulları', icon: 'fa-regular fa-heart', img: './img/cart1.jpeg', def: 'KağızA4, 80g Office Print (class C, CİE 148%)', stoc: 'Stokda var', a: 'Mehsula bax' },
    { name: 'Məişət texnikası', icon: 'fa-regular fa-heart', img: './img/cart3.jpeg', def: 'Çaydan Tefal, RM-032 (2.0L)', stoc: 'Stokda var', a: 'Mehsula bax' },
    { name: 'Mebel', icon: 'fa-regular fa-heart', img: './img/cart5.jpeg', def: 'Kreslo SPRINT', stoc: 'Stokda var', a: 'Mehsula bax' },
    { name: 'Məişət texnikası', icon: 'fa-regular fa-heart', img: './img/cart3.jpeg', def: 'Çaydan Tefal, RM-032 (2.0L)', stoc: 'Stokda var', a: 'Mehsula bax' },
    { name: 'Təsərrüfat malları', icon: 'fa-regular fa-heart', img: './img/cart2.jpeg', def: 'Ariel Əl ilə yumaq üçün 450q', stoc: 'Stokda var', a: 'Mehsula bax' },
    { name: 'Mebel', icon: 'fa-regular fa-heart', img: './img/cart5.jpeg', def: 'Kreslo SPRINT', stoc: 'Stokda var', a: 'Mehsula bax' },
    { name: 'Mebel', icon: 'fa-regular fa-heart', img: './img/cart4.jpeg', def: 'Kreslo ALVEST, AV222', stoc: 'Stokda var', a: 'Mehsula bax' }

]




/* const ites = document.querySelectorAll('.ite');  */
const ites = document.getElementById('carousel');
const maxCardsToShow = 5;
let kod = '';

for (let i = 0; i < cardData.length; i++) {
    const item = cardData[i];
    kod +=
        `<div class="cart">
            <div class="cart-hover">
                <div class="cart-top">
                <div class="top-content flex">
                    <h5>${item.name}</h5>
                    <i onclick='show(this)' class='new-icon ${item.icon}'></i>
                </div>
                </div>
                <div class="cart-body">
                    <img src="${item.img}" alt="">
                    <p>${item.def}</p>
                </div>
            </div>
            <div class="cart-bottom flex">
                <span class="check"><i class="fa-solid fa-check"></i></span>
                <span>${item.stoc}</span>
                <a href="#">${item.a}</a>
            </div>
         </div>`;
}

ites.innerHTML = kod;

$(document).ready(function () {
    $(".owl-carousel_2").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});



function show(x) {
    x.classList.toggle('fa-solid');
}


const targetValues = [22, 4000, 30, 200, 10, 200];

let currentValues = [0, 0, 0, 0, 0, 0];


const animationDuration = 9000000;
const updateInterval = 100;

const elements = document.querySelectorAll('.col.col-2 span');

function updateNumbers() {
    elements.forEach((element, index) => {
        const targetValue = targetValues[index];
        const currentValue = currentValues[index];

        if (currentValue < targetValue) {
            const increment = Math.ceil((targetValue - currentValue) / (animationDuration / updateInterval));
            currentValues[index] += increment;
            element.textContent = '+' + currentValues[index];


            setTimeout(updateNumbers, updateInterval);
        }
    });
}

updateNumbers();
