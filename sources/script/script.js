function handleClick(navClick) {
    // Remove 'focused' class from all <li> elements
    var liElements = document.querySelectorAll('.nav-list li');
    
    liElements.forEach(function (li) {
        li.classList.remove('focused');
    });

    // Add 'focused' class to the clicked <li> element
    navClick.classList.add('focused');
}

function logoClick() {
    // Remove 'focused' class from all <li> elements
   
    var liElements = document.querySelectorAll('.nav-list li');
    liElements.forEach(function (li) {
        li.classList.remove('focused');
    });

}