$('.tabs').skeletabs({
    startIndex:-1,
    panelHeight: 'equal'
});


const activeLi = document.querySelector('.skltbs-active');
const activeTab = activeLi.querySelector('button')
const triangle = document.createElement('div');
triangle.className = "triangle-down";
triangle.style.transform = "translateY(-20%)"
activeTab.after(triangle)

document.querySelector('.skltbs-tab-group').addEventListener('click', (e)=>{
    const btn = e.target.closest('button')
    btn.after(triangle)
})



