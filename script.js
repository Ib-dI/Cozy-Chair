console.log('Hello World')

const vignettes = [...document.querySelectorAll('.small')]
const fullImg = document.getElementById('full')
const divVign =  [...document.querySelectorAll('.vignette')]
const btnCoeur = document.querySelector('.btn-heart')

const btnPlus = document.getElementById('plus')
const btnMoins = document.getElementById('moins')

const nbChair = document.getElementById('nb-chair')
const nbFull = document.getElementById('nb-full')

const prevBtn = document.getElementById('btn-left')
const nextBtn = document.getElementById('btn-right')

const colorChair = [...document.querySelectorAll('.color')]
let currentIndex = 0

let compteur = 1

colorChair.forEach(color => {
    color.addEventListener('click', () => {
        colorChair.forEach(item => {
            item.classList.remove('active-color')
        })
        color.classList.add('active-color')
    })
})
btnPlus.addEventListener('click', ()=>{
    compteur++
    nbChair.innerHTML = compteur
})
btnMoins.addEventListener('click', ()=>{
    compteur > 0 ? compteur-- : compteur = 0
    nbChair.innerHTML = compteur
})
divVign.forEach(item => {
    item.addEventListener('click', activeImg)
})


changerImages()

btnCoeur.addEventListener('click', ()=>{
    const imageCr = btnCoeur.querySelector('img')
    console.log(imageCr.src)
    if (imageCr.src.endsWith('SolarHeartAngleBroken.svg')){
        imageCr.src = './assets/icon/SolarHeartAngleBold.svg'
    }else {
        imageCr.src = './assets/icon/SolarHeartAngleBroken.svg'
    }
})

prevBtn.addEventListener('click', ()=>{
    divVign.forEach(item =>{
        item.classList.remove(`img-active`)
    })
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = divVign.length - 1
    }
    divVign[currentIndex].classList.add('img-active')
    afficheNum()
    changerImgRow()


})

nextBtn.addEventListener('click', ()=>{
    divVign.forEach(item =>{
        item.classList.remove(`img-active`)
    })
    currentIndex++
    if (currentIndex > divVign.length - 1) {
        currentIndex = 0
    }
    divVign[currentIndex].classList.add('img-active')

    afficheNum()
    changerImgRow()
    

})

function afficheNum () {
    let indexToShow = divVign.findIndex(it => it.classList.contains('img-active')) + 1

    indexToShow = indexToShow < 10 ? '0' + indexToShow : indexToShow

    nbFull.innerHTML = ` <p id="nb-full">
    ${indexToShow} <span class="gray">/ 05</span>`
}

function activeImg(e) {
    divVign.forEach((item) => {
        item.classList.remove(`img-active`)
    })
    const target =  e.target
    if (target.parentNode.classList.contains('vignette')){
        console.log('oui')
        target.parentNode.classList.add(`img-active`)
        currentIndex = divVign.indexOf(target.parentNode)
    }else {
        target.classList.add(`img-active`)
        currentIndex = divVign.indexOf(target)
    }
    
    afficheNum()
}
function changerImgRow() {
    divVign.forEach(it => {
        const image = it.querySelector('.small');
        const nomDeImage = image.src.split('/').pop()
        if (it.classList.contains('img-active')) {

            fullImg.src = `./assets/img/trans/${nomDeImage}`
        }
    })
}
function changerImages() {

    divVign.forEach(item => {
        const image = item.querySelector('.small');
        const nomDeImage = image.src.split('/').pop()

        item.addEventListener('click', ()=>{
            if (item.classList.contains('img-active')) {

                fullImg.src = `./assets/img/trans/${nomDeImage}`
            }
        })
        
    });
}