const panels = document.querySelectorAll('.client-feedback-panel')
const avatars = document.querySelectorAll('.slider-client-avatar')


document.querySelector('.feedback-avatars').addEventListener('click', (event)=>{
    const clickedAvatar = event.target.closest('.slider-client-avatar')
    if (!clickedAvatar){return}


    const activeAvatar = document.querySelector('.active-avatar')
    const indexActiveAvatar = Array.prototype.indexOf.call(avatars, activeAvatar)
    panels.item(indexActiveAvatar).classList.add('client-panel-hide')
    activeAvatar.classList.remove('active-avatar')
    const indexClickedAvatar = Array.prototype.indexOf.call(avatars, clickedAvatar)
    panels.item(indexClickedAvatar).classList.remove('client-panel-hide')
    clickedAvatar.classList.add('active-avatar')

})

document.querySelector('.feedback-avatars').addEventListener('click', (event)=>{
    const leftArrow = event.target.closest('.arrow-left')
    const rightArrow = event.target.closest('.arrow-right')

    if (!leftArrow && !rightArrow){return}

    const activeAvatar = document.querySelector('.active-avatar')
    let indexActiveAvatar = Array.prototype.indexOf.call(avatars, activeAvatar)

    if (rightArrow && indexActiveAvatar===(avatars.length-1)){return}
    if (leftArrow && indexActiveAvatar===0){return}



    panels.item(indexActiveAvatar).classList.add('client-panel-hide')
    activeAvatar.classList.remove('active-avatar')
    if (rightArrow && indexActiveAvatar!==(avatars.length-1)){
        indexActiveAvatar++
        panels.item(indexActiveAvatar).classList.remove('client-panel-hide')
        avatars.item(indexActiveAvatar).classList.add('active-avatar')
    }

    if (leftArrow && indexActiveAvatar!==0){
        indexActiveAvatar--
        panels.item(indexActiveAvatar).classList.remove('client-panel-hide')
        avatars.item(indexActiveAvatar).classList.add('active-avatar')
    }
})