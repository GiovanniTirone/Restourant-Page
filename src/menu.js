function createMenu () {

    let starter_div = document.createElement("div");
    let rice_dish_div = document.createElement("div");
    let tandori_div = document.createElement("div");
    let vegetables_dish_div = document.createElement("div");

    starter_div.id = "starter_div";
    rice_dish_div.id = "rice_dish_div";
    tandori_div.id = "tandori_div";
    vegetables_dish_div.id = "vegetables_dish_div";

    starter_div.classList.add("menu_div");
    rice_dish_div.classList.add("menu_div");
    tandori_div.classList.add("menu_div");
    vegetables_dish_div.classList.add("menu_div");

    let starter_btn = document.createElement("button");
    let rice_dish_btn = document.createElement("button");
    let tandori_btn = document.createElement("button");
    let vegetables_dish_btn = document.createElement("button");
    
    starter_btn.id = "starter_btn";
    rice_dish_btn.id = "rice_dish_btn";
    tandori_btn.id = "tandori_btn";
    vegetables_dish_btn.id = "vegetables_dish_btn";

    starter_btn.classList.add("btn","menu_btn");
    rice_dish_btn.classList.add("btn","menu_btn");
    tandori_btn.classList.add("btn","menu_btn");
    vegetables_dish_btn.classList.add("btn","menu_btn");

    starter_btn.innerHTML = "Starter";
    rice_dish_btn.innerHTML = "Dishes with rice";
    tandori_btn.innerHTML = "Tandori";
    vegetables_dish_btn.innerHTML = "Dishes with vegetables"; 

    /*starter_btn.setAttribute("press",false);
    rice_dish_btn.setAttribute("press",false);
    tandori_btn.setAttribute("press",false);
    vegetables_dish_btn.setAttribute("press",false);*/

    function pressMenu () {

        core.appendChild(starter_div);
        core.appendChild(rice_dish_div);
        core.appendChild(tandori_div);
        core.appendChild(vegetables_dish_div);

        starter_div.appendChild(starter_btn);
        rice_dish_div.appendChild(rice_dish_btn);
        tandori_div.appendChild(tandori_btn);
        vegetables_dish_div.appendChild(vegetables_dish_btn);


       starter_btn.addEventListener("click",press_menu_div);
       rice_dish_btn.addEventListener("click",press_menu_div);
       tandori_btn.addEventListener("click",press_menu_div);
       vegetables_dish_btn.addEventListener("click",press_menu_div);
    }


    function press_menu_div  (e)  {
        console.log(e);
        let target = e.target; 
        let btn_id = e.target.id;
        let div_id = btn_id.substring(0,btn_id.length-4) +"_div";
        let target_div = document.getElementById(div_id); 
        console.log("target: "+ target);
        console.log("div_id: "+div_id);
        console.log("target_div: "+target_div);
        if(target_div.lastElementChild == target){
            let recipes_div = div_id+"_recipes";
            let obj = Recipes[recipes_div];
            console.log(obj);
            for (let recipe in obj){
                console.log(Recipes);
                console.log(recipe);
                console.log(obj[recipe]);
                target_div.appendChild(obj[recipe]);
            }
        }  
        else { 
            let child = target_div.lastElementChild; 
            while (child.className=="recipe_container_div") {
            console.log("child: "+child);
            target_div.removeChild(child);
            child = target_div.lastElementChild;
            }
        }
    }

    let Recipes = {
        starter_div_recipes : {
            aloo_tikki : createRecipe("aloo_tikki","Aloo Tikki","Potatoes, peas and chickpea flour","../images/menu_images/aloo-tikki.jpg"),
            pakora: createRecipe("pakora","Pakora","Fried potatoes, onions, vegetable mix, chickpea flour and spices Indian ...","../images/menu_images/Pakora.webp"),
        },
        rice_dish_div_recipes : {
            jeera_rice : createRecipe("jeera_rice","Jeera Rice","Basmati rice and cumin","../images/menu_images/Jeera-rice.jpg"),
            chicken_biryani : createRecipe("chicken_biryani","Chicken Biryani","Basmati rice, chicken and Indian spices","../images/menu_images/chicke-biryani.jpg"),
        },
        tandori_div_recipes : {
            tikka_chicken : createRecipe("tikka_chicken","Tikka Chicken","Grilled chicken and marinated with spices","../images/menu_images/tikka-chicken.jpg"),
            tandori_chicken : createRecipe("tandori_chicken","Tandori Chicken","chicken legs marinated with spices","../images/menu_images/tandori-chicken.jpg"),
        },
        vegetables_dish_div_recipes : {
            saag_aloo : createRecipe("saag_aloo","Saag Aloo","Baby spinach and spices","../images/menu_images/Saag_aloo.jpg"),
            tarka_daal : createRecipe("tarka_daal","Tarka Daal","Lentil and spices","../images/menu_images/tarka-daal.jpg"),
        },
    }

    function createRecipe (id,name,description,img) {
        let recipe_container_div = document.createElement("div");
        let name_div = document.createElement("div");
        let description_div = document.createElement("div");
        let img_div = document.createElement("div");
        let recipe_img = document.createElement("img");
        let recipe_text_div = document.createElement("div");

        recipe_container_div.id = id+"_container_div"; 
        recipe_container_div.classList.add("recipe_container_div");
        
        name_div.id = id+"_name_div";
        name_div.classList.add("name_div");
        name_div.innerHTML = name; 
    
        description_div.id = id+"_description_div";
        description_div.classList.add("description_div");
        description_div.innerHTML = description;

        img_div.id = id+"_img_div";
        img_div.classList.add("recipe_img_div");

        recipe_text_div.id = id + "_text_div";
        recipe_text_div.classList.add("recipe_text_div");
        
        recipe_container_div.appendChild(img_div);
        recipe_container_div.appendChild(recipe_text_div);
        recipe_text_div.appendChild(name_div);
        recipe_text_div.appendChild(description_div);
        
        if(img!=null){
            recipe_img.src = img;
            recipe_img.classList.add("recipe_img");
            img_div.appendChild(recipe_img); 
         }

        return recipe_container_div;
        
    }
    

    let obj = {starter_div,rice_dish_div,tandori_div,vegetables_dish_div,
                starter_btn,rice_dish_btn,tandori_btn,vegetables_dish_btn,
                pressMenu}; 
    return obj ; 

}



export {createMenu};