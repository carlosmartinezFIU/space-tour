import logo from './asset/shared/logo.svg';
import ham from './asset/shared/icon-hamburger.svg'


function createNavbar()
{
    const navbarContainer = document.createElement('div');
    navbarContainer.id = 'navbar_container';

    const navButtonsContainer = document.createElement('div');
    navButtonsContainer.classList.add('nav_buttons_container');

    let logo1 = document.createElement('img');
    logo1.id = 'logo';
    logo1.src = logo;

    let hamburger = document.createElement('img');
    hamburger.id = 'hamburger_menu';
    hamburger.src = ham;

    let home_btn = button('home_btn', '00', 'HOME', 'index.html');
    let destination_btn = button('destination_btn', '01', 'DESTINATION', 'destination.html');
    let crew_btn = button('crew_btn', '02',  'CREW', 'crew.html');
    let technology_btn = button('technology_btn', '03', 'TECHNOLOGY', 'technology.html');

    navButtonsContainer.append(home_btn, destination_btn, crew_btn, technology_btn);
    navbarContainer.append(logo1, navButtonsContainer, hamburger);

    return navbarContainer;

}

function button(name, innerOne, innerTwo, source){
    let button = document.createElement('a');
    button.href = source;
    button.id = name;

    let ink = document.createElement('p');
    ink.innerText = innerOne;
    ink.id = 'navbar_number';

    let inks = document.createElement('p');
    inks.innerText = innerTwo;
    inks.id = 'navbar_title';

    button.append(ink, inks);


    return button;
}



export default createNavbar;
