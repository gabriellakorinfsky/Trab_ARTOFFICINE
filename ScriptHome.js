let carrossel = document.getElementById('carrossel')
let imgContainer = document.getElementsByClassName('imgContainer')
let img = document.querySelectorAll('.imgContainer img')
let desliza = 1;

setInterval(()=>{
    for(let i=0; i<imgContainer.length; i++){
        imgContainer[i].style.transform = `translate(${-desliza * img[i].width}px)`
    }
    
    desliza++
    if(desliza >= imgContainer.length){
        desliza = 0
    }
},10000)
carrossel.addEventListener('click', ()=>{
    for(let i=0; i<imgContainer.length; i++){
        imgContainer[i].style.transform = `translate(${-desliza * img[i].width}px)`
    }
    
    desliza++
    if(desliza >= imgContainer.length){
        desliza = 0
    }
})