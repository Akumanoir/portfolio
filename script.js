let buttons = [...document.querySelectorAll('.nav')]
let para_container = [...document.querySelectorAll('p.paragraph')]
let section = {homeTitle: document.getElementById('home_title'), projects: document.getElementById('projects')}
let modal = [...document.querySelectorAll('.button')]
let modal_cont = [...document.querySelectorAll('.modal_container')]
let close = [...document.querySelectorAll('.close')]
let show = {nav: document.getElementsByTagName('nav')[0], main: document.getElementsByTagName('main')[0], footer: document.getElementsByTagName('footer')[0]}

function menu() {
    show.nav.classList.add('nav_activate')
    show.main.classList.add('main_dactivate')
    show.footer.classList.add('main_dactivate')
}

function close_menu() {
    show.nav.classList.remove('nav_activate')
    show.main.classList.remove('main_dactivate')
    show.footer.classList.remove('main_dactivate')
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        let item = buttons[i]

        switch (item) {
            case buttons[0] : 
                para_container[0].classList.add('show')
                para_container[1].classList.remove('show')
                section.projects.classList.add('section_deactive')
                section.homeTitle.classList.remove('section_deactive');
            break;
            case buttons[1] : 
                para_container[1].classList.add('show')
                para_container[0].classList.remove('show')
                section.projects.classList.add('section_deactive')
                section.homeTitle.classList.remove('section_deactive');
            break;
            case buttons[2] : 
                para_container[0, 1].classList.remove('show')
                section.projects.classList.remove('section_deactive')
                section.homeTitle.classList.add('section_deactive');
            break;
        }
        if (show.nav.classList.contains('nav_activate')) {
            show.nav.classList.remove('nav_activate')
            show.main.classList.remove('main_dactivate')
            show.footer.classList.remove('main_dactivate')
        }
    })
}

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