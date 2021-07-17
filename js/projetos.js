// Menu Selector

const menuItems = document.querySelectorAll(".item_menu")

function onItemClick(item) {
    menuItems.forEach(function(element){
        if(element.classList.contains("selected")){
            element.classList.remove("selected");
            element.classList.add("disable");
        }
    });
    item.classList.add("selected");
    item.classList.remove("disable");
}
