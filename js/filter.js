
document.querySelector('nav').addEventListener('click', (event) => {
    const filterBox = document.querySelectorAll('.box');

    if (event.target.tagName !== 'LI') return false;
    const menuList = document.querySelectorAll('[data-f]')
    menuList.forEach((item)=>{item.classList.remove('checked-menu-element')})
    const currentLink = event.target
    currentLink.classList.add('checked-menu-element')

    let filterClass = event.target.dataset['f'];

    filterBox.forEach((elem) => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });

});