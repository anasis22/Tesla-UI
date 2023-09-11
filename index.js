
// CONTAINER ONE

const bodyElement = document.querySelector('body')
const containerOne = document.querySelector('#containerOne')
const containerOneImg = document.querySelector('#containerOneImg');
const teslaLogo = document.querySelector('.teslaLogo');
const upperLists = document.querySelector('.upperLists');
const upperSideLists = document.querySelector('upperSideLists');
const blurredAll = document.querySelectorAll('.blurred');
const upperMenuBtn = document.querySelector('#menuBtn');
const menuSlideLists = document.querySelector('.menuSlideLists');
const menuClose = document.querySelector('.fa-times');
const modelNames3 = document.querySelector('#modelNames');
const model3Links = document.querySelector('.model3-links');
const downArrow = document.querySelector('.downArrow')
const scrolled = document.querySelectorAll('.scroll');
const imgTag = document.createElement('img');


window.addEventListener('load', () => {
    document.documentElement.scrollTop = 0;
})


// CONTAINER TWO 
const containerTwo = document.querySelector('.containerTwo');
const containerTwoImg = document.querySelector('#containerTwoImg')
const modelNamesY = document.querySelector('#modelNames-y');
const modelYLinks = document.querySelector('.modelY-links');



// CONTAINET THREE
const containerThree = document.querySelector('.containerThree');
const containerThreeImg = document.querySelector('#containerThreeImg');
const modelNamesS = document.querySelector('#modelNames-s');
const modelSLinks = document.querySelector('.modelS-links');


// CONTAINET FOUR
const containerFour = document.querySelector('.containerFour');
const containerFourImg = document.querySelector('#containerFourImg');
const modelNamesX = document.querySelector('#modelNames-x');
const modelXLinks = document.querySelector('.modelX-links');


// CONTAINER FIVE
const containerFive = document.querySelector('.containerFive');
const containerFiveImg = document.querySelector('#containerFiveImg');
const modelNamesSolar = document.querySelector('#modelNames-solar');
const modelSolarLinks = document.querySelector('.modelSolar-links');

// CONTAINER SIX
const containerSix = document.querySelector('.containerSix');
const containerSixImg = document.querySelector('#containerSixImg');
const modelNamesSolarRoof = document.querySelector('#modelNames-solarRoof');
const modelSolarLinksRoof = document.querySelector('.modelSolarRoof-links');


// CONTAINER SEVEN
const containerSeven = document.querySelector('.containerSeven');
const containerSevenImg = document.querySelector('#containerSevenImg');
const modelNamesAccessories = document.querySelector('#modelNames-accessories');
const modelAccessories = document.querySelector('.modelAccessories-links');
const bottom = document.querySelector('.bottom')



// window.addEventListener('click', (e) => {
//     console.log(bottomNav)
// })

// ==============================================


// SCROOLLL


window.addEventListener('scroll', (e) => {
    let scroll = this.scrollY;
    if (scroll > 150) {
        modelNames3.classList.add('scrollOpacity');
        model3Links.classList.add('scrollOpacity');
        // console.log(scroll)

    }
    else {
        modelNames3.classList.remove('scrollOpacity');
        model3Links.classList.remove('scrollOpacity');
    }




    if (scroll > 300) {
        modelNamesY.classList.add('scrollOpacityY');
        modelYLinks.classList.add('scrollOpacityY')
    }
    else {
        modelNamesY.classList.remove('scrollOpacityY');
        modelYLinks.classList.remove('scrollOpacityY');

    }

    if (scroll > 450 && scroll < 600) {
        modelNamesY.classList.remove('scrollOpacityY');
        modelYLinks.classList.remove('scrollOpacityY')
    }

    if (scroll > 1100) {
        modelNamesY.classList.remove('scrollOpacityY');
        modelYLinks.classList.remove('scrollOpacityY');
    }






    if (scroll > 1150) {
        modelNamesS.classList.add('scrollOpacityS');
        modelSLinks.classList.add('scrollOpacityS')
    } else {
        modelNamesS.classList.remove('scrollOpacityS');
        modelSLinks.classList.remove('scrollOpacityS')

    }

    if (scroll > 1800) {
        modelNamesS.classList.remove('scrollOpacityS');
        modelSLinks.classList.remove('scrollOpacityS')
    }


    if (scroll > 1900) {
        modelNamesX.classList.add('scrollOpacityX');
        modelXLinks.classList.add('scrollOpacityX')
    }
    else {
        modelNamesX.classList.remove('scrollOpacityX');
        modelXLinks.classList.remove('scrollOpacityX')
    }
    if (scroll > 2600) {
        modelNamesX.classList.remove('scrollOpacityX');
        modelXLinks.classList.remove('scrollOpacityX')
    }




    if (scroll > 2900) {
        modelNamesSolar.classList.add('scrollOpacitySolar');
        modelSolarLinks.classList.add('scrollOpacitySolar')
    }
    else {
        modelNamesSolar.classList.remove('scrollOpacitySolar');
        modelSolarLinks.classList.remove('scrollOpacitySolar')
    }
    if (scroll > 3350) {
        modelNamesSolar.classList.remove('scrollOpacitySolar');
        modelSolarLinks.classList.remove('scrollOpacitySolar')
    }



    if (scroll > 3550) {
        modelNamesSolarRoof.classList.add('scrollOpacitySolarRoof');
        modelSolarLinksRoof.classList.add('scrollOpacitySolarRoof');
    }
    else {
        modelNamesSolarRoof.classList.remove('scrollOpacitySolarRoof');
        modelSolarLinksRoof.classList.remove('scrollOpacitySolarRoof');
    }
    if (scroll > 4250) {
        modelNamesSolarRoof.classList.remove('scrollOpacitySolarRoof');
        modelSolarLinksRoof.classList.remove('scrollOpacitySolarRoof');
    }


    if (scroll > 4350) {
        modelNamesAccessories.classList.add('scrollOpacityAccessories');
        modelAccessories.classList.add('scrollOpacityAccessories');
    }
    else {
        modelNamesAccessories.classList.remove('scrollOpacityAccessories');
        modelAccessories.classList.remove('scrollOpacityAccessories');
    }

    if(scroll > 4880){
        modelNamesAccessories.classList.remove('scrollOpacityAccessories');
        modelAccessories.classList.add('position');

    } 

    if (scroll > 4400) {
        bottom.classList.add('bottomNavOpacity')
    }
    else {
        bottom.classList.remove('bottomNavOpacity')

    }

    


})









// CONTAINER ONE


upperMenuBtn.addEventListener('click', () => {
    menuSlideLists.classList.add('menuOpenToggle')
    menuSlideLists.classList.remove('menuCloseToggle')
    menuSlideLists.classList.add('menuZindex')
    for (let i = 0; i < blurredAll.length; i++) {
        blurredAll[i].classList.add('blurAdd')
    }
})

menuClose.addEventListener('click', () => {
    menuSlideLists.classList.add('menuCloseToggle')
    menuSlideLists.classList.remove('menuZindex')
    for (let i = 0; i < blurredAll.length; i++) {
        blurredAll[i].classList.remove('blurAdd')
    }
})




containerOneImg.addEventListener('click', () => {
    for (let i = 0; i < menuSlideLists.classList.length; i++) {
        if (menuSlideLists.classList[i] === 'menuOpenToggle') {
            menuSlideLists.classList.remove('menuOpenToggle')
            menuSlideLists.classList.add('menuCloseToggle');
            for (let i = 0; i < blurredAll.length; i++) {
                blurredAll[i].classList.remove('blurAdd')
            }
        }
    }
})

containerTwoImg.addEventListener('click', () => {
    for (let i = 0; i < menuSlideLists.classList.length; i++) {
        if (menuSlideLists.classList[i] === 'menuOpenToggle') {
            menuSlideLists.classList.remove('menuOpenToggle')
            menuSlideLists.classList.add('menuCloseToggle');
            for (let i = 0; i < blurredAll.length; i++) {
                blurredAll[i].classList.remove('blurAdd')
            }
        }
    }
})

containerThreeImg.addEventListener('click', () => {
    for (let i = 0; i < menuSlideLists.classList.length; i++) {
        if (menuSlideLists.classList[i] === 'menuOpenToggle') {
            menuSlideLists.classList.remove('menuOpenToggle')
            menuSlideLists.classList.add('menuCloseToggle');
            for (let i = 0; i < blurredAll.length; i++) {
                blurredAll[i].classList.remove('blurAdd')
            }
        }
    }
})

containerFourImg.addEventListener('click', () => {
    for (let i = 0; i < menuSlideLists.classList.length; i++) {
        if (menuSlideLists.classList[i] === 'menuOpenToggle') {
            menuSlideLists.classList.remove('menuOpenToggle')
            menuSlideLists.classList.add('menuCloseToggle');
            for (let i = 0; i < blurredAll.length; i++) {
                blurredAll[i].classList.remove('blurAdd')
            }
        }
    }
})

containerFiveImg.addEventListener('click', () => {
    for (let i = 0; i < menuSlideLists.classList.length; i++) {
        if (menuSlideLists.classList[i] === 'menuOpenToggle') {
            menuSlideLists.classList.remove('menuOpenToggle')
            menuSlideLists.classList.add('menuCloseToggle');
            for (let i = 0; i < blurredAll.length; i++) {
                blurredAll[i].classList.remove('blurAdd')
            }
        }
    }
})


containerSixImg.addEventListener('click', () => {
    for (let i = 0; i < menuSlideLists.classList.length; i++) {
        if (menuSlideLists.classList[i] === 'menuOpenToggle') {
            menuSlideLists.classList.remove('menuOpenToggle')
            menuSlideLists.classList.add('menuCloseToggle');
            for (let i = 0; i < blurredAll.length; i++) {
                blurredAll[i].classList.remove('blurAdd')
            }
        }
    }
})

containerSevenImg.addEventListener('click', () => {
    for (let i = 0; i < menuSlideLists.classList.length; i++) {
        if (menuSlideLists.classList[i] === 'menuOpenToggle') {
            menuSlideLists.classList.remove('menuOpenToggle')
            menuSlideLists.classList.add('menuCloseToggle');
            for (let i = 0; i < blurredAll.length; i++) {
                blurredAll[i].classList.remove('blurAdd')
            }
        }
    }
})

// ================================================



// ========================
//        RESPONSIVE
// ==========================




window.addEventListener('resize', (e) => {
    const containerOneImgResponse = containerOneImg
    const containerTwoImgResponse = containerTwoImg
    const containerThreeImgResponse = containerThreeImg
    const containerFourImgResponse = containerFourImg
    const containerFiveImgResponse = containerFiveImg
    const containerSixImgResponse = containerSixImg
    const containerSevenImgResponse = containerSevenImg






    if (window.innerWidth < 800 && window.innerWidth > 20) {

        containerOneImgResponse.src = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/9160c5a3-b818-42dd-bb98-b8597948c636/bvlatuR/std/1927x4096/M3-Homepage-Mobile-LHD';
        containerTwoImgResponse.src = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/3304be3b-dd0a-4128-9c26-eb61c0b98d61/bvlatuR/std/800x2100/Mobile-ModelY';
        containerThreeImgResponse.src = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/f85de5bf-09b6-41f8-a5e6-acc634f68550/bvlatuR/std/1927x4096/MS-Homepage-Mobile-LHD';
        containerFourImgResponse.src = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/0e05bf87-dbad-45a6-b1cc-ca4a6d74b068/bvlatuR/std/1928x4096/MX-Homepage-Mobile-LHD';
        containerFiveImgResponse.src = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/066f19b7-d68e-45e2-8575-ad0a6f8375a8/bvlatuR/std/600x1576/_25-HP-SolarPanels-M';
        containerSixImgResponse.src = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/20c666b9-d09b-4687-bb37-22c8500489c5/bvlatuR/std/750x850/HP-SR-Design-M';
        containerSevenImgResponse.src = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/69095129-86c5-4f6c-a77a-740ceac04e82/bvlatuR/std/800x2100/Mobile-Accessories';

    }
    else {
        containerOneImgResponse.src = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD';
        containerTwoImgResponse.src = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70';
        containerThreeImgResponse.src = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/54a21504-fab5-4e4e-b1d0-bb5ba934c86d/bvlatuR/std/4096x2560/MS-Homepage-Desktop-LHD';
        containerFourImgResponse.src = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/27fd9006-d653-4d01-bc64-f30df30de1a4/bvlatuR/std/4096x2560/MX-Homepage-Desktop-LHD';
        containerFiveImgResponse.src = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D';
        containerSixImgResponse.src = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D';
        containerSevenImgResponse.src = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories';

    }

    if(window.innerWidth < 800) {
        bottom.classList.add('scroll')
    }
    else{
        bottom.classList.remove('scroll')
    }
   


})






