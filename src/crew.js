import style from './style.css';
import {createNavbar, mobileBar, createMobileBar, closeMenu} from "./navbar";
import douglas from './asset/crew/image-douglas-hurley.png';
import mark from './asset/crew/image-mark-shuttleworth.png';
import victor from './asset/crew/image-victor-glover.png';
import anoush from './asset/crew/image-anousheh-ansari.png';

function createCrew(){
    const crewContainer = document.createElement('section');
    crewContainer.classList.add('crew_container');
    crewContainer.id = 'crew_container';

    const getNavbar = createNavbar();
    const getMobile = mobileBar();

    crewContainer.append(getNavbar, getMobile);

    let titleContainer = document.createElement('div');
    titleContainer.classList.add('crew_title_container');

    let titleNum = document.createElement('p');
    titleNum.classList.add('number_title-01');
    titleNum.innerText = '02';
    let titleContent = document.createElement('p');
    titleContent.classList.add('title_content_destination');
    titleContent.innerText = 'MEET YOUR CREW';

    titleContainer.append(titleNum, titleContent);


    let contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content_wrapper');
    contentWrapper.id = 'content_wrapper';

    contentWrapper.append(titleContainer);

    let midContentWrapper = document.createElement('div');
    midContentWrapper.classList.add('middle_content_wrapper');

    let contentContainer = document.createElement('div')
    contentContainer.classList.add('crew_content_container');

    midContentWrapper.append(contentContainer);

    let jobTitle = document.createElement('p');
    jobTitle.id = 'top_job_position';
    jobTitle.innerText = 'COMMANDER';

    let jobName = document.createElement('p');
    jobName.id = 'top_job_name';
    jobName.innerText = 'DOUGLAS HURLEY';

    let buttonSliderContainer = document.createElement('div');
    buttonSliderContainer.classList.add('button_slider_container');
    let btnOne = button('btn_one');
    let btnTwo = button('btn_two');
    let btnThree = button('btn_three');
    let btnFour = button('btn_four');
    buttonSliderContainer.append(btnOne, btnTwo, btnThree, btnFour);

    contentContainer.append(jobTitle, jobName,);

    let jobDescriptionContainer = document.createElement('div');
    jobDescriptionContainer.classList.add('job_description_container');

    let description = document.createElement('p');
    description.id = 'job_description';
    description.innerText = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.';
    
    jobDescriptionContainer.append(description);
    contentContainer.append(jobDescriptionContainer, buttonSliderContainer);
    
    let imgContainer = document.createElement('div');
    imgContainer.id = 'person_logo_container';

    let personLogo = document.createElement('img');
    personLogo.id = 'person_logo';
    personLogo.src = douglas;

    imgContainer.append(personLogo);

    midContentWrapper.append(imgContainer);
    contentWrapper.append(midContentWrapper);
    crewContainer.append(contentWrapper);

    return crewContainer;

}

function loadCrew(){
    const getBody = document.getElementsByTagName('body')[0];
    getBody.classList.add('crew_page');
    const crew = createCrew();
    const getCrew = document.getElementById('crew');
    
    getCrew.append(crew);

    const getHamburger = document.getElementById('hamburger_menu');
    getHamburger.addEventListener("click", function()
    {
        createMobileBar("crew_container", "content_wrapper");
    });

    const getCloseBtn = document.getElementById('close_btn');
    getCloseBtn.onclick = closeMenu;


    panelSelector();
}

function douglasPanel(){
    let getJobPosition = document.getElementById('top_job_position');
    getJobPosition.innerText = 'COMMANDER';

    let getJobName = document.getElementById('top_job_name');
    getJobName.innerText = 'DOUGLAS HURLEY';

    let getDescription = document.getElementById('job_description');
    getDescription.innerText = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.';
     
    let getLogo = document.getElementById('person_logo_container');
    getLogo.innerText = '';
    let personImg = document.createElement('img');
    personImg.src = douglas;
    personImg.id = 'person_logo';
    getLogo.append(personImg);
}



function markPanel(){
    let getJobPosition = document.getElementById('top_job_position');
    getJobPosition.innerText = 'MISSION SPECIALIST';

    let getJobName = document.getElementById('top_job_name');
    getJobName.innerText = 'MARK SHUTTLEWORTH';

    let getDescription = document.getElementById('job_description');
    getDescription.innerText = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.';
     
    let getLogo = document.getElementById('person_logo_container');
    getLogo.innerText = '';
    let personImg = document.createElement('img');
    personImg.src = mark;
    personImg.id = 'person_logo';
    getLogo.append(personImg)
}


function victorPanel(){
    let getJobPosition = document.getElementById('top_job_position');
    getJobPosition.innerText = 'PILOT';

    let getJobName = document.getElementById('top_job_name');
    getJobName.innerText = 'VICTOR GLOVER';

    let getDescription = document.getElementById('job_description');
    getDescription.innerText = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.';
     
    let getLogo = document.getElementById('person_logo_container');
    getLogo.innerText = '';
    let personImg = document.createElement('img');
    personImg.src = victor;
    personImg.id = 'person_logo';
    getLogo.append(personImg)
}


function anoushPanel(){
    let getJobPosition = document.getElementById('top_job_position');
    getJobPosition.innerText = 'FLIGHT ENGINEER';

    let getJobName = document.getElementById('top_job_name');
    getJobName.innerText = 'ANOUSHEH ANSARI';

    let getDescription = document.getElementById('job_description');
    getDescription.innerText = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.';
     
    let getLogo = document.getElementById('person_logo_container');
    getLogo.innerText = '';
    let personImg = document.createElement('img');
    personImg.src = anoush;
    personImg.id = 'person_logo';
    getLogo.append(personImg);
}

function panelSelector(){
    const one = document.getElementById('btn_one');
    one.addEventListener('click', douglasPanel);

    const two = document.getElementById('btn_two');
    two.addEventListener('click', markPanel);

    const three = document.getElementById('btn_three');
    three.addEventListener('click', victorPanel);

    const four = document.getElementById('btn_four');
    four.addEventListener('click', anoushPanel);
}

function button(name){
    let button = document.createElement('button');
    button.id = name;

    return button;
}


export default loadCrew;
loadCrew();