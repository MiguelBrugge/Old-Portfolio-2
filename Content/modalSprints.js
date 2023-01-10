const collapseYear1 = document.getElementById("collapse-year-1");
const dropdownYear1 = document.getElementById("dropdown-year-1");

const collapseYear2 = document.getElementById("collapse-year-2");
const dropdownYear2 = document.getElementById("dropdown-year-2");

const collapse = document.getElementsByClassName("collapse");

collapseYear1.onclick = function(){
    collapseYear1.classList.add("button-active");
    dropdownYear1.style.display = "block";
    dropdownYear2.style.display = "none";
    collapseYear2.classList.remove("button-active");
    removeTables();
};

collapseYear2.onclick = function(){
    collapseYear2.classList.add("button-active");
    dropdownYear2.style.display = "block";
    dropdownYear1.style.display = "none";
    collapseYear1.classList.remove("button-active");
    removeTables();
};

function removeTables(){
    for (var i = 0; i < collapse.length; i++) {
        collapse[i].classList.remove("show");
    }
}

// Remove table on click
for (var i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener('click', function() {
        removeTables();
        this.classList.add("show");
    }, false);
}