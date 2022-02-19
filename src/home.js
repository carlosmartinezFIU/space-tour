import style from './style.css';
import {createNavbar, mobileBar, createMobileBar, closeMenu} from "./navbar";

function createHome(){

    const getNavbar = createNavbar();
    const getMobile = mobileBar();

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home_container');
    homeContainer.id = 'home_container';

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description_container');
    descriptionContainer.id = 'description_container';

    const descriptionContent = document.createElement('div');
    descriptionContent.classList.add('description_content');

    let title = document.createElement('p');
    title.classList.add('title_home');
    title.innerHTML = 'SO, YOU WANT TO TRAVEL TO';

    let space = document.createElement('p');
    space.classList.add('space_home')
    space.innerHTML = 'SPACE';

    let paragrpagh = document.createElement('p');
    paragrpagh.classList.add('paragraph_home');
    paragrpagh.innerHTML = 'Lets face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because well give you a truly out of this wolrd experience!';

    descriptionContent.append(title, space, paragrpagh)

    let exploreLogo = document.createElement('div');
    exploreLogo.classList.add('explore_logo_home');
    let explore = document.createElement('p');
    explore.innerText = 'EXPLORE';

    exploreLogo.append(explore);

    descriptionContainer.append(descriptionContent, exploreLogo);

    homeContainer.append(getNavbar, getMobile, descriptionContainer);
/** 
    const getContent = document.getElementById('content');
    getContent.append(homeContainer);
    */
    console.log('loading Home');

    return homeContainer;

}



function loadHome(){
    const getBody = document.getElementsByTagName('body')[0];
    getBody.classList.add('home_page');
    const finishHome = createHome();
    const getContent = document.getElementById('content');
    console.log("tetsing");
    getContent.append(finishHome);


    const getHamburger = document.getElementById('hamburger_menu');
    getHamburger.onclick = function(){
        createMobileBar('home_container', 'description_container');
    }

    const getCloseBtn = document.getElementById('close_btn');
    getCloseBtn.onclick = closeMenu;

}

function createMobileBar(homeContainer, contentContainerMobile){
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

function closeMenu(){
    const getHamburger = document.getElementById('hamburger_menu');
    getHamburger.style.display = 'block';

    const getLogo = document.getElementById('logo');
    const getMobileNavbar = document.getElementById('navbar_container');
    getMobileNavbar.style.display = 'flex';
    getMobileNavbar.append(getLogo);

    const mobile = document.getElementById('mobile_nav_buttons_container');
    mobile.style.display = 'none';

}



export default loadHome;

loadHome();
