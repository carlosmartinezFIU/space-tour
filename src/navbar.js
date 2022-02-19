import logo from './asset/shared/logo.svg';
import ham from './asset/shared/icon-hamburger.svg'
import closeNavBtn from './asset/shared/icon-close.svg';

export function createNavbar()
{
    const navbarContainer = document.createElement('div');
    navbarContainer.id = 'navbar_container';

    const navButtonsContainer = document.createElement('div');
    navButtonsContainer.classList.add('nav_buttons_container');
    navButtonsContainer.id = 'nav_buttons_container';

    let logo1 = document.createElement('img');
    logo1.id = 'logo';
    logo1.src = logo;

    let hamburger = document.createElement('img');
    hamburger.id = 'hamburger_menu';
    hamburger.src = ham;
    hamburger.onclick = createMobileBar();


    let home_btn = button('home_btn', '00', 'HOME', 'index.html');
    let destination_btn = button('destination_btn', '01', 'DESTINATION', 'destination.html');
    let crew_btn = button('crew_btn', '02',  'CREW', 'crew.html');
    let technology_btn = button('technology_btn', '03', 'TECHNOLOGY', 'technology.html');

    navButtonsContainer.append(home_btn, destination_btn, crew_btn, technology_btn);
    navbarContainer.append(logo1, navButtonsContainer, hamburger);

    
    /**hamburger.addEventListener('click', createMobileBar);*/
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


export function mobileBar()
{
    const mobileContainer = document.createElement('div');
    mobileContainer.classList.add('mobile_navbar_container');
    mobileContainer.id = 'mobile_navbar_container';

    const navButtonsContainer = document.createElement('div');
    navButtonsContainer.classList.add('mobile_nav_buttons_container');
    navButtonsContainer.id = 'mobile_nav_buttons_container';


    let closeBtn = document.createElement('img');
    closeBtn.id = 'close_btn';
    closeBtn.src = closeNavBtn;

    let home_btn = button('home_btn', '00', 'HOME', 'index.html');
    let destination_btn = button('destination_btn', '01', 'DESTINATION', 'destination.html');
    let crew_btn = button('crew_btn', '02',  'CREW', 'crew.html');
    let technology_btn = button('technology_btn', '03', 'TECHNOLOGY', 'technology.html');

    navButtonsContainer.append(closeBtn, home_btn, destination_btn, crew_btn, technology_btn);
    mobileContainer.append(navButtonsContainer);


    return mobileContainer;
}



export function createMobileBar(homeContainer, contentContainerMobile){
    const mobile = document.getElementById('mobile_nav_buttons_container');

    let getMain = document.getElementById(homeContainer);
    const getMobileNavbar = document.getElementById('navbar_container');
    const getLogo = document.getElementById('logo');

    getMobileNavbar.style.display = "none";
    getMain.append(getLogo);

    console.log("this is main " + getMain);
    mobile.style.display = "flex";

    let getDescriptionContainer = document.getElementById(contentContainerMobile);
    if(getDescriptionContainer.id == 'description_container')
    {
        getDescriptionContainer.classList.add('mobile_look');
    }
    else if(getDescriptionContainer.id == "main_container")
    {
        getDescriptionContainer.classList.add('destination_mobile_container');
    }
    else 
        return;
    
}


export function closeMenu(){
    const getHamburger = document.getElementById('hamburger_menu');
    getHamburger.style.display = 'block';

    const getLogo = document.getElementById('logo');
    const getMobileNavbar = document.getElementById('navbar_container');
    getMobileNavbar.style.display = 'flex';
    getMobileNavbar.append(getLogo);

    const mobile = document.getElementById('mobile_nav_buttons_container');
    mobile.style.display = 'none';

}




