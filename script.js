let buttons = {home: document.getElementById('00'), aboutMe: document.getElementById('01'), projects: document.getElementById('02')}
let paraCont = document.getElementsByTagName('p') [0]
let paraCont02 = document.getElementsByTagName('p') [1]
let section = {homeTitle: document.getElementById('home_title'), projects: document.getElementById('projects')}

buttons.home.addEventListener('click', homeBnt)
buttons.aboutMe.addEventListener('click', aboutBnt)
buttons.projects.addEventListener('click', projectsBnt)

window.onload = function() {
    paraCont.classList.add('show')
    section.projects.classList.add('section_deactive')
    if(window.innerWidth <= 912) {
        homeTitle.style.height = '180px'
    }
}

function changesize() {
    if(paraCont02.classList.contains('show')) {
        if(window.innerWidth <= 912) {
            homeTitle.style.height = '330px'
        } else {
            homeTitle.style.height = '230px'
        }
    }   
}

function homeBnt() {
    if(section.homeTitle.classList.contains('section_deactive')){
        section.homeTitle.classList.remove('section_deactive')
        section.projects.classList.add('section_deactive')
    }
    paraCont.style.textIndent = ''
    if(paraCont02.classList.contains('show') || section.projects.classList.contains('section_deactive')) {
        paraCont.classList.add('show')
        paraCont02.classList.remove('show')
    }
}

function aboutBnt() {
    if(section.homeTitle.classList.contains('section_deactive')){
        section.homeTitle.classList.remove('section_deactive')
        section.projects.classList.add('section_deactive')   
    }
    paraCont02.style.textIndent = '5%'
    if(paraCont.classList.contains('show') || section.projects.classList.contains('section_deactive')) {
        paraCont02.classList.add('show')
        paraCont.classList.remove('show')
        if(window.innerWidth <= 912) {
            homeTitle.style.height = '330px'
        }
    }   
}

function projectsBnt() {
    if(paraCont.classList.contains('show') || paraCont02.classList.contains('show')){
        paraCont.classList.remove('show')
        paraCont02.classList.remove('show')
    }
    if(section.projects.classList.contains('section_deactive')) {
        section.projects.classList.remove('section_deactive')
        section.homeTitle.classList.add('section_deactive')
    }
}

let modal = [...document.querySelectorAll('.button')]
let modal_cont = [...document.querySelectorAll('.modal_container')]
let close = [...document.querySelectorAll('.close')]

for (i = 0; i < close.length; i++) {
    close[i].addEventListener('click', (e) => {
        for (y = 0; y < modal_cont.length; y++) {
        modal_cont[y].classList.remove('show_modal')
        }
    })
}
   
for (let i = 0; i < modal.length; i++) {
    modal[i].addEventListener('click', (e) => {
        let item = modal[i]

        switch (item) {
            case modal[0] : 
                modal_cont[i].classList.add('show_modal');
            break;
            case modal[1] : 
                modal_cont[i].classList.add('show_modal');
            break;
            case modal[2] : 
                modal_cont[i].classList.add('show_modal');
            break;
            case modal[3] : 
                modal_cont[i].classList.add('show_modal');
            break;
            case modal[4] : 
                modal_cont[i].classList.add('show_modal');
            break;
        }
    })
}



