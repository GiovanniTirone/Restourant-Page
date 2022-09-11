function createOpeningHours () {

let hours_container = document.createElement("div");
hours_container.id="hours_container";

let monday = document.createElement("div");
let monday_hours = document.createElement("div");
monday.innerHTML = "Monday: ";
monday_hours.innerHTML = "10-14  18-22";

let tuesday = document.createElement("div");
let tuesday_hours = document.createElement("div");
tuesday.innerHTML = "Tuesday";
tuesday_hours.innerHTML="10-14  18-22";

let wednesday = document.createElement("div");
let wednesday_hours = document.createElement("div");
wednesday.innerHTML="Wednesday";
wednesday_hours.innerHTML="10-14  18-22";

let thursday = document.createElement("div");
let thursday_hours = document.createElement("div");
thursday.innerHTML="Thursday";
thursday_hours.innerHTML="10-14  18-22";

let friday = document.createElement("div");
let friday_hours = document.createElement("div");
friday.innerHTML="Friday";
friday_hours.innerHTML="10-14  18-22";

let saturday = document.createElement("div");
let saturday_hours = document.createElement("div");
saturday.innerHTML="Saturday";
saturday_hours.innerHTML="10-14  18-22";

let sunday = document.createElement("div");
let sunday_hours = document.createElement("div");
sunday.innerHTML="Sunday";
saturday_hours="Closed";

core.appendChild(hours_container); 

hours_container.appendChild(monday);
hours_container.appendChild(monday_hours);
hours_container.appendChild(tuesday);
hours_container.appendChild(tuesday_hours);
hours_container.appendChild(wednesday);
hours_container.appendChild(wednesday_hours);
hours_container.appendChild(thursday);
hours_container.appendChild(thursday_hours);
hours_container.appendChild(friday);
hours_container.appendChild(friday_hours);
hours_container.appendChild(saturday);
hours_container.appendChild(saturday_hours);
hours_container.appendChild(sunday);
hours_container.appendChild(sunday_hours);



}

export{createOpeningHours};



