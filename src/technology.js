import createNavbar from "./navbar";
import style from './style.css';
import shuttle from './asset/technology/image-launch-vehicle-portrait.jpg';
import capsule from './asset/technology/image-space-capsule-portrait.jpg';
import spaceport from './asset/technology/image-spaceport-portrait.jpg';
import backgroundLogo from './asset/technology/background-technology-desktop.jpg';

function createTech(){
    const getNavbar = createNavbar();

    const techContainer = document.createElement('div');
    techContainer.id = 'tech_container';
    
    let createdTitle = titleContainer();
    techContainer.append(getNavbar, createdTitle);

    const mainContainer = document.createElement('div');
    mainContainer.id = 'main_container_tech';

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('tech_button_container');

    let btnOne = button('tech_btn_one', '1');
    let btnTwo = button('tech_btn_two', '2');
    let btnThree = button('tech_btn_three','3');

    buttonContainer.append(btnOne, btnTwo, btnThree);

    mainContainer.append(buttonContainer);
    techContainer.append(mainContainer);

    let contentContainer = document.createElement('div');
    contentContainer.id = 'content_container';

    let firstHeading  = document.createElement('p');
    firstHeading.id = 'tech_first_heading';
    firstHeading.innerText = 'THE TERMINOLOGY';

    let secondHeading  = document.createElement('p');
    secondHeading.id = 'tech_second_heading';
    secondHeading.innerText = 'LAUNCH VEHICLE';

    let thirdHeading  = document.createElement('p');
    thirdHeading.id = 'tech_third_heading';
    thirdHeading.innerText = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";

    contentContainer.append(firstHeading, secondHeading, thirdHeading);
    mainContainer.append(contentContainer);

    let imageContainer = document.createElement('div');
    imageContainer.id = 'image_container';
    imageContainer.classList.add('landscape_vehicle');
    let img = document.createElement('img');
    img.id = 'tech_image';
    img.src = shuttle;

    imageContainer.append(img);

    mainContainer.append(imageContainer);
    techContainer.append(mainContainer);


    return techContainer;

}

function titleContainer(){
    
    let titleContainer = document.createElement('div');
    titleContainer.classList.add('destination_title_container');
    
    let titleNum = document.createElement('p');
    titleNum.classList.add('number_title-01');
    titleNum.innerText = '03';
    let titleContent = document.createElement('p');
    titleContent.classList.add('title_content_destination');
    titleContent.innerText = 'SPACE LAUNCH 101';

    titleContainer.append(titleNum, titleContent);

    return titleContainer;
}


function button(name, number){
    let button = document.createElement('button');
    button.id = name;
    button.innerText = number;

    return button;
}


function loadTech(){
    const getBody = document.getElementsByTagName('body')[0];
    getBody.classList.add('technology_page');
    const getTech = document.getElementById('tech');
    const finishedTech = createTech();

    getTech.append(finishedTech);
    panelSelector();
}


function panelVehicle(){
    const secondHeading = document.getElementById('tech_second_heading');
    secondHeading.innerText = 'LAUNCH VEHICLE';

    const thirdHeading = document.getElementById('tech_third_heading');
    thirdHeading.innerText = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";

    const getLogo = document.getElementById('image_container');
    getLogo.classList.add('landscape_vehicle');
    getLogo.classList.remove('landscape_spaceport');
    getLogo.classList.remove('landscape_capsule');

    getLogo.classList.add('mobile_landscape_vehicle');
    getLogo.classList.remove('mobile_landscape_spaceport');
    getLogo.classList.remove('mobile_landscape_capsule');

    getLogo.innerText = '';

    let firstImg = document.createElement('img');
    firstImg.src = shuttle;

    let getBtn;
    if(getBtn = document.getElementById('not_active_btn')){
        getBtn.id = 'tech_btn_one';
    }

    getLogo.append(firstImg);
}

function panelPort(){
    const secondHeading = document.getElementById('tech_second_heading');
    secondHeading.innerText = 'SPACEPORT'

    const thirdHeading = document.getElementById('tech_third_heading');
    thirdHeading.innerText = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.';

    const getLogo = document.getElementById('image_container');
    getLogo.classList.add('landscape_spaceport');
    getLogo.classList.remove('landscape_vehicle');
    getLogo.classList.remove('landscape_capsule');


    getLogo.classList.add('mobile_landscape_spaceport');
    getLogo.classList.remove('mobile_landscape_vehicle');
    getLogo.classList.remove('mobile_landscape_capsule');

    getLogo.innerText = ''

    let secondImg = document.createElement('img');
    secondImg.src = spaceport;

    let getBtn;
    if(getBtn = document.getElementById('tech_btn_one')){
        getBtn.id = 'not_active_btn';
    }

    getLogo.append(secondImg);
}

function panelCapsule(){
    const secondHeading = document.getElementById('tech_second_heading');
    secondHeading.innerText = 'SPACE CAPSULE'

    const thirdHeading = document.getElementById('tech_third_heading');
    thirdHeading.innerText = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";

    const getLogo = document.getElementById('image_container');
    getLogo.classList.add('landscape_capsule');
    getLogo.classList.remove('landscape_spaceport');
    getLogo.classList.remove('landscape_vehicle');

    getLogo.classList.add('mobile_landscape_capsule');
    getLogo.classList.remove('mobile_landscape_spaceport');
    getLogo.classList.remove('mobile_landscape_vehicle');

    getLogo.innerText = ''

    let thirdImg = document.createElement('img');
    thirdImg.src = capsule;

    let getBtn;
    if(getBtn = document.getElementById('tech_btn_one')){
        getBtn.id = 'not_active_btn';
    }


    getLogo.append(thirdImg);
}

function panelSelector(){
    const one = document.getElementById('tech_btn_one');
    one.addEventListener('click', panelVehicle);

    const two = document.getElementById('tech_btn_two');
    two.addEventListener('click', panelPort);

    const three = document.getElementById('tech_btn_three');
    three.addEventListener('click', panelCapsule);
}


loadTech();