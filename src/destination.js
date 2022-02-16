import createNavbar from "./navbar";
import moonLogo from './asset/destination/image-moon.png';
import marsLogo from './asset/destination/image-mars.png';
import europaLogo from './asset/destination/image-europa.png';
import titanLogo from './asset/destination/image-titan.png';
import style from './style.css';


function createDestination(){
    const getNavbar = createNavbar();

/************* Creating page container *****************/
    const destinationContainer = document.createElement('div');
    destinationContainer.classList.add('destination_container');
/************* Creating page container *****************/





/*************      Title Container      *****************/
    let titleContainer = document.createElement('div');
    titleContainer.classList.add('destination_title_container');

    let titleNum = document.createElement('p');
    titleNum.classList.add('number_title-01');
    titleNum.innerText = '01';
    let titleContent = document.createElement('p');
    titleContent.classList.add('title_content_destination');
    titleContent.innerText = 'PICK YOUR DESTINATION';

    titleContainer.append(titleNum, titleContent);




/***********        Main Container     *************/
    const mainContentContainer = document.createElement('div');
    mainContentContainer.classList.add('main_container');

                     /** moon */
    let moonContainer = document.createElement('div');
    moonContainer.classList.add('moon_container');
    moonContainer.id = 'moon_container';
    let moon = document.createElement('img');
    moon.classList.add('moon_logo');
    moon.src = moonLogo;
    moonContainer.append(moon);




                    /** Content */
    let contentContainer = document.createElement('div');
    contentContainer.classList.add('destination_content_container');

    let tabContainer = document.createElement('div');
    tabContainer.classList.add('tab_container');

    let moonBtn = button('moon_btn', 'MOON');
    let marsBtn = button('mars_btn', 'MARS');
    let europaBtn = button('europa_btn', 'EUROPA');
    let titanBtn = button('titan_btn', 'TITAN');
    tabContainer.append(moonBtn, marsBtn, europaBtn, titanBtn);



    let middleContainer = document.createElement('div');
    middleContainer.classList.add('middle_container');

    let midTitle = document.createElement('p');
    midTitle.classList.add('middle_title');
    midTitle.id = 'middle_title';
    midTitle.innerText = 'MOON'
    let midPara = document.createElement('p');
    midPara.classList.add('middle_para');
    midPara.id = 'middle_para';
    midPara.innerText = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
    middleContainer.append(midTitle, midPara);

    let divider = document.createElement('hr');
    divider.classList.add('content_divider');


    let endingContainer = document.createElement('div');
    endingContainer.classList.add('ending_container');

/************      Left Container     **************/  
    let leftContainer = document.createElement('div');
    leftContainer.classList.add('left_container');
    leftContainer.id = 'left_container';

    let leftContentAvg = document.createElement('p');
    leftContentAvg.classList.add('left_content_avg');
    leftContentAvg.innerText = 'AVG. DISTANCE ';

    let leftContentMile = document.createElement('p');
    leftContentMile.classList.add('left_content_mile');
    leftContentMile.innerText = '384,400 KM';

    leftContainer.append(leftContentAvg, leftContentMile);


/************      Right Container      ***********/    
    let rightContainer = document.createElement('div');
    rightContainer.classList.add('right_container');
    rightContainer.id = 'right_container';

    let rightContentEst = document.createElement('p');
    rightContentEst.classList.add('right_content_est');
    rightContentEst.innerText = 'EST. TRAVEL TIME';

    let rightContentDays = document.createElement('p');
    rightContentDays.classList.add('right_content_days');
    rightContentDays.innerText = '3 DAYS';

    rightContainer.append(rightContentEst, rightContentDays);
    endingContainer.append(leftContainer, rightContainer);

    contentContainer.append(tabContainer, middleContainer, divider, endingContainer);

    let moonAndContentContainer = document.createElement('div');
    moonAndContentContainer.classList.add('moon_and_content');
    moonAndContentContainer.append(moonContainer, contentContainer);

    mainContentContainer.append(titleContainer,moonAndContentContainer);

    destinationContainer.append(getNavbar, mainContentContainer);

    return destinationContainer;

}

function button(name, inner){
    let button = document.createElement('button');
    button.classList.add(name);
    button.id = name;
    button.innerText = inner;

    return button;
}

function loadDestination(){
    const getBody = document.getElementsByTagName('body')[0];
    getBody.classList.add('destination_page');
    const finishedDestination = createDestination();
    const desty = document.getElementById('dest');

    console.log('loading destination');
    
    desty.append(finishedDestination);

    panelSelector();

}


function marsTab(){
    const getMoon = document.getElementById('moon_container');

    let marsImg = document.createElement('img');
    marsImg.src = marsLogo;

    getMoon.innerText = '';
    getMoon.append(marsImg);

    const title = document.getElementById('middle_title');
    title.innerText = 'MARS';


    const midTitle = document.getElementById('middle_para');
    //midTitle.innerText = '';
    midTitle.innerText = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';

    let getLeftContainer = document.getElementById('left_container');
    getLeftContainer.innerText = '';

    let upperP = document.createElement('p');
    upperP.classList.add('left_content_avg');
    upperP.innerText = 'AVG. DISTANCE';
    let lowerP = document.createElement('p');
    lowerP.classList.add('left_content_mile');
    lowerP.innerText = '225 MIL. KM';

    getLeftContainer.append(upperP, lowerP);



    let getRightContainer = document.getElementById('right_container');
    getRightContainer. innerText = '';
    let upperP1 = document.createElement('p');
    upperP1.classList.add('right_content_est');
    upperP1.innerText = 'EST. TRAVEL TIME';
    let lowerP1 = document.createElement('p');
    lowerP1.classList.add('right_content_days');
    lowerP1.innerText = '9 MONTHS';

    getRightContainer.append(upperP1, lowerP1);
}



function europaTab(){
    const getMoon = document.getElementById('moon_container');

    let europaImg = document.createElement('img');
    europaImg.src = europaLogo;

    getMoon.innerText = '';
    getMoon.append(europaImg);

    const title = document.getElementById('middle_title');
    title.innerText = 'EUROPA';


    const midTitle = document.getElementById('middle_para');
    //midTitle.innerText = '';
    midTitle.innerText = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';

    let getLeftContainer = document.getElementById('left_container');
    getLeftContainer.innerText = '';

    let upperP = document.createElement('p');
    upperP.classList.add('left_content_avg');
    upperP.innerText = 'AVG. DISTANCE';
    let lowerP = document.createElement('p');
    lowerP.classList.add('left_content_mile');
    lowerP.innerText = '628 MIL. KM';

    getLeftContainer.append(upperP, lowerP);



    let getRightContainer = document.getElementById('right_container');
    getRightContainer. innerText = '';
    let upperP1 = document.createElement('p');
    upperP1.classList.add('right_content_est');
    upperP1.innerText = 'EST. TRAVEL TIME';
    let lowerP1 = document.createElement('p');
    lowerP1.classList.add('right_content_days');
    lowerP1.innerText = '3 YEARS';

    getRightContainer.append(upperP1, lowerP1);
}

function titanTab(){
    const getMoon = document.getElementById('moon_container');

    let titanImg = document.createElement('img');
    titanImg.src = titanLogo;

    getMoon.innerText = '';
    getMoon.append(titanImg);

    const title = document.getElementById('middle_title');
    title.innerText = 'TITAN';


    const midTitle = document.getElementById('middle_para');
    //midTitle.innerText = '';
    midTitle.innerText = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';

    let getLeftContainer = document.getElementById('left_container');
    getLeftContainer.innerText = '';

    let upperP = document.createElement('p');
    upperP.classList.add('left_content_avg');
    upperP.innerText = 'AVG. DISTANCE';
    let lowerP = document.createElement('p');
    lowerP.classList.add('left_content_mile');
    lowerP.innerText = '1.6 BIL. KM';

    getLeftContainer.append(upperP, lowerP);



    let getRightContainer = document.getElementById('right_container');
    getRightContainer. innerText = '';
    let upperP1 = document.createElement('p');
    upperP1.classList.add('right_content_est');
    upperP1.innerText = 'EST. TRAVEL TIME';
    let lowerP1 = document.createElement('p');
    lowerP1.classList.add('right_content_days');
    lowerP1.innerText = '7 YEARS';

    getRightContainer.append(upperP1, lowerP1);
}


function moonTab(){
    const getMoon = document.getElementById('moon_container');

    let moonImg = document.createElement('img');
    moonImg.src = moonLogo;

    getMoon.innerText = '';
    getMoon.append(moonImg);

    const title = document.getElementById('middle_title');
    title.innerText = 'MOON';


    const midTitle = document.getElementById('middle_para');
    //midTitle.innerText = '';
    midTitle.innerText = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';

    let getLeftContainer = document.getElementById('left_container');
    getLeftContainer.innerText = '';

    let upperP = document.createElement('p');
    upperP.classList.add('left_content_avg');
    upperP.innerText = 'AVG. DISTANCE';
    let lowerP = document.createElement('p');
    lowerP.classList.add('left_content_mile');
    lowerP.innerText = '384,400 KM';

    getLeftContainer.append(upperP, lowerP);



    let getRightContainer = document.getElementById('right_container');
    getRightContainer. innerText = '';
    let upperP1 = document.createElement('p');
    upperP1.classList.add('right_content_est');
    upperP1.innerText = 'EST. TRAVEL TIME';
    let lowerP1 = document.createElement('p');
    lowerP1.classList.add('right_content_days');
    lowerP1.innerText = '3 DAYS';

    getRightContainer.append(upperP1, lowerP1);
}

function panelSelector(){
    const mars = document.getElementById('mars_btn');
    mars.addEventListener('click', marsTab);

    const europa = document.getElementById('europa_btn');
    europa.addEventListener('click', europaTab);

    const titan = document.getElementById('titan_btn');
    titan.addEventListener('click', titanTab);

    const moon = document.getElementById('moon_btn');
    moon.addEventListener('click', moonTab);
}



export default loadDestination;

loadDestination();