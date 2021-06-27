const listType = document.querySelectorAll('.a_type');

listType.forEach((element) => {
    element.addEventListener("click", function(){
        element.classList.add("selected");
    })
})
console.log(listType)