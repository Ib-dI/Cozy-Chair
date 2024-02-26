console.log('Hello World')

const vignettes = [...document.querySelectorAll('.small')]
const fullImg = document.getElementById('full')
const divVign =  [...document.querySelectorAll('.vignette')]
const btnCoeur = document.querySelector('.btn-heart')

const btnPlus = document.getElementById('plus')
const btnMoins = document.getElementById('moins')

const nbChair = document.getElementById('nb-chair')
const nbFull = document.getElementById('nb-full')

let compteur = 1
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

// divVign.forEach(item => {
//     const indexToShow = divVign.findIndex(it => it.classList.contains('img-active'))
//     console.log(indexToShow)
//     item.addEventListener('click')
    
//     // const  af = indexToShow + 1

//     // af < 10 ? '0' + af : af

//     // nbFull.innerHTML = ` <p id="nb-full">
//     // ${af} <span class="gray">/ 05</span>`
// })


btnCoeur.addEventListener('click', ()=>{
    const imageCr = btnCoeur.querySelector('img')
    console.log(imageCr.src)
    if (imageCr.src.endsWith('SolarHeartAngleBroken.svg')){
        imageCr.src = './assets/icon/SolarHeartAngleBold.svg'
    }else {
        imageCr.src = './assets/icon/SolarHeartAngleBroken.svg'
    }
})

function activeImg(e) {
    e.stopPropagation()
    divVign.forEach((item) => {
        item.classList.remove(`img-active`)
    })
    const target =  e.target
    target.parentNode.classList.add(`img-active`)
    
    let indexToShow = divVign.findIndex(it => it.classList.contains('img-active')) + 1
    console.log(indexToShow)

    indexToShow = indexToShow < 10 ? '0' + indexToShow : indexToShow

    console.log(indexToShow)

    nbFull.innerHTML = ` <p id="nb-full">
    ${indexToShow} <span class="gray">/ 05</span>`

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