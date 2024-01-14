const top1 = document.querySelector('#top1');
const modaltop = document.querySelector('.modaltop')
const back1 = document.querySelector('#back1')

const bottom1 = document.querySelector('#bottom1');
const modalbottom = document.querySelector('.modalbottom')
const back2 = document.querySelector('#back2')

const left1 = document.querySelector('#left1');
const modalleft = document.querySelector('.modalleft')
const back3 = document.querySelector('#back3')


const right1 = document.querySelector('#right1');
const modalright = document.querySelector('.modalright')
const back4 = document.querySelector('#back4')

top1.addEventListener('click', function(){
    modaltop.style.transform = "translateY(0px)"
})
back1.addEventListener('click', function(){
    modaltop.style.transform = "translateY(-500px)"
})

bottom1.addEventListener('click', function(){
    modalbottom.style.transform = "translateY(0px)"
})
back2.addEventListener('click', function(){
    modalbottom.style.transform = "translateY(+500px)"
})

left1.addEventListener('click', function(){
    modalleft.style.transform = "translateX(0px)"
})
back3.addEventListener('click', function(){
    modalleft.style.transform = "translateX(+700px)"
})


right1.addEventListener('click', function(){
    modalright.style.transform = "translateX(0px)"
})
back4.addEventListener('click', function(){
    modalright.style.transform = "translateX(-700px)"
})



















