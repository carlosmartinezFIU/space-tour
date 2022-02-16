import style from './style.css';
import createNavbar from "./navbar";

function createHome(){

    const getNavbar = createNavbar();
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home_container');

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description_container');

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

    homeContainer.append(getNavbar, descriptionContainer);
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

}

export default loadHome;

loadHome();
