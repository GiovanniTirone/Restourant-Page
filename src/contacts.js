function createContacts () {
    let contacts_div = document.createElement("div");
    contacts_div.id = "contacts_div";
    contacts_div.innerHTML = "+39 235945049584";

    core.appendChild(contacts_div);
}

export {createContacts};