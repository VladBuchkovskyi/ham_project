const loadBtn = document.querySelector('.load-more-button')
const loader = document.querySelector('.loading-container')
loadBtn.addEventListener('click', ()=>{
    loader.classList.remove('hide-loading')
    setTimeout(()=>{
        loader.classList.add('hide-loading')
        preloadImages(urls, insertImages)
    }, 2000)
})



function preloadImages(imageURLs, onAllLoaded){
    let imgsLeftForLoad = imageURLs.length
    const images = []


    for (let url of imageURLs){
        const image = new Image()
        image.src = url
        image.classList.add('work-picture')
        images.push(image)
        image.addEventListener('load', ()=>{
            imgsLeftForLoad--
            if (imgsLeftForLoad===0) onAllLoaded(images)
        })
    }
}

const urls = [
    'img/graphic_design/graphic-design4.jpg',
    'img/web_design/web-design4.jpg',
    'img/landing_page/landing-page4.jpg',
    'img/wordpress/wordpress4.jpg',
    'img/graphic_design/graphic-design5.jpg',
    'img/web_design/web-design5.jpg',
    'img/landing_page/landing-page5.jpg',
    'img/wordpress/wordpress5.jpg',
    'img/graphic_design/graphic-design6.jpg',
    'img/web_design/web-design6.jpg',
    'img/landing_page/landing-page6.jpg',
    'img/wordpress/wordpress6.jpg'
]

function insertImages(imgs){
    const classes = ['graphic_design', 'web_design','landing_pages','wordpress']
    const imgsContainer = document.querySelector('.block-cover')
    const boxList = []
    for (let i=0; i<12; i++){
        const imgBox = document.createElement('div')
        imgBox.classList.add('box')
        imgBox.classList.add(classes[i%4])

        imgBox.append(imgs[i])
        boxList.push(imgBox)
    }
    imgsContainer.append(...boxList)
    document.querySelectorAll('.box').forEach((item)=>{
        item.classList.remove('hide');
    })
    document.querySelectorAll('[data-f]').forEach((item)=>{
        item.classList.remove('checked-menu-element')
    })
    document.querySelector('[data-f="all"]').classList.add('checked-menu-element')

}

