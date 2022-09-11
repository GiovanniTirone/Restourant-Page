
function createHomepage () {
    console.log("create Homepage");

    let indian_food_img = document.createElement("img");
    indian_food_img.id ="indian_food_img";
    indian_food_img.setAttribute("src","./images/indian-foods.jpg");

    core.appendChild(indian_food_img);
    intro.innerHTML = "Welcome! Come to try the best indian food of Sondrio.";
    footer.innerHTML = "Image taken by ...";
}



export {createHomepage};

/*
let home_btn = document.createElement("button");
let menu_btn = document.createElement("button");
let opening_hours_btn = document.createElement("button");
let contacts_btn = document.createElement("button");
let indian_food_img = document.createElement("img");

home_btn.id= "home_btn";
menu_btn.id= "menu_btn";
opening_hours_btn.id = "opening_hours_btn";
contacts_btn.id = "contacts_btn";
indian_food_img.id ="indian_food_img";

home_btn.classList.add("main_bar_btn");
menu_btn.classList.add("main_bar_btn");
opening_hours_btn.classList.add("main_bar_btn");
contacts_btn.classList.add("main_bar_btn");

home_btn.innerHTML = "Home";
menu_btn.innerHTML = "Menu";
opening_hours_btn.innerHTML ="opening hours";
contacts_btn.innerHTML ="contacts";
indian_food_img.setAttribute("src","../images/indian-foods.jpg");
*/