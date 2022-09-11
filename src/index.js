import {createHomepage} from './homepage';
import {createMenu} from './menu';
import {createOpeningHours} from './openingHours';
import {createContacts} from './contacts';
import './style.css';
import './homepage.css';
import './menu.css';
import './contacts.css';
import './openingHours.css';


//let main_bar = document.getElementById("main_bar"); non serve
let intro = document.getElementById("intro");
let core = document.getElementById("core");
let footer = document.getElementById("footer");

function clearWindow () {
    intro.innerHTML="";
    footer.innerHTML="";
    
    remvoveAllChild(core);
   /* let child = core.lastElementChild; 
    while (child) {
        console.log("child: "+child);
        core.removeChild(child);
        child = core.lastElementChild;
    }*/
}

function remvoveAllChild (container) {
    let child = container.lastElementChild;
    while (child) {
        if(child.lastElementChild==null){
            container.removeChild(child);
            child = container.lastElementChild;
        } else {
            remvoveAllChild(child);
        }
    }
}


createHomepage();
let Menu = createMenu();
console.log(Menu);


function clickMenu () {
    clearWindow();
    Menu.pressMenu();
}

function clickHome () {
    clearWindow(); 
    createHomepage();
}

function clickOpeningHours () {
    clearWindow();
    createOpeningHours();
}

function clickContacts () {
    clearWindow();
    createContacts();
}

menu_btn.addEventListener("click",clickMenu);
home_btn.addEventListener("click",clickHome);
opening_hours_btn.addEventListener("click",clickOpeningHours);
contacts_btn.addEventListener("click",clickContacts);




