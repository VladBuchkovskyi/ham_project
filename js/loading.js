const loadBtn = document.querySelector('.load-more-button')
const loader = document.querySelector('.loading-container')
let urlsState = 0
loadBtn.addEventListener('click', ()=>{
    loader.classList.remove('hide-loading')
    setTimeout(()=>{
        loader.classList.add('hide-loading')
        preloadImages(urls[urlsState], insertImages)
        urlsState++
        if (urlsState === urls.length){
            loadBtn.remove()
        }
    }, 2000)
})

const urls1 = [
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

const urls2 = [
    'img/graphic_design/graphic-design7.jpg',
    'img/web_design/web-design7.jpg',
    'img/landing_page/landing-page7.jpg',
    'img/wordpress/wordpress7.jpg',
    'img/graphic_design/graphic-design8.jpg',
    'img/web_design/web-design1.jpg',
    'img/landing_page/landing-page1.jpg',
    'img/wordpress/wordpress8.jpg',
    'img/graphic_design/graphic-design9.jpg',
    'img/web_design/web-design2.jpg',
    'img/landing_page/landing-page2.jpg',
    'img/wordpress/wordpress9.jpg'
]

const urls = [urls1, urls2]

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
        item.firstElementChild.classList.remove('hide')
    })
    document.querySelectorAll('[data-f]').forEach((item)=>{
        item.classList.remove('checked-menu-element')
    })
    document.querySelector('[data-f="all"]').classList.add('checked-menu-element')

}

