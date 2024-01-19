const targetDiv = document.querySelector('.target-div');

function isElementInViewport(element) {
    // The isElementInViewport function remains unchanged
}

function handleScroll() {
    if (isElementInViewport(targetDiv)) {
        targetDiv.classList.add('animation-triggered');
    } else {
        targetDiv.classList.remove('animation-triggered');
    }
}

window.addEventListener('scroll', handleScroll);



// function handleClick(navClick) {
//     // Remove 'focused' class from all <li> elements
//     var liElements = document.querySelectorAll('.nav-list li');
    
//     liElements.forEach(function (li) {
//         li.classList.remove('focused');
//     });

//     // Add 'focused' class to the clicked <li> element
//     navClick.classList.add('focused');
// }

// function logoClick() {
//     // Remove 'focused' class from all <li> elements
   
//     var liElements = document.querySelectorAll('.nav-list li');
//     liElements.forEach(function (li) {
//         li.classList.remove('focused');
//     });

// }


// const navLinkEls = document.querySelectorAll('.nav-link');
// const sectionEls = document.querySelectorAll('.section-padding');

// let currentSection = 'intro';
// window.addEventListener('scroll', () => {
//     sectionEls.forEach(sectionEl => {
//         if (window.scrollY >= sectionEl.offsetTop) {
//             currentSection = sectionEl.id;
//         }
//     });

//     navLinkEls.forEach(navLinkEl => {
//         if (navLinkEl.href.includes(currentSection)) {
//             document.querySelector('.active').classList.remove('active'); 
//             navLinkEl.classList.add('active');
//         }
//     });
//     console.log(sectionEls);
// });

// document.querySelector('#test').addEventListener('scroll', function(){
    
//     var top = this.scrollTop;
//     var bottom = top+this.offsetHeight;
//     var arr = [];
    
//     var divs = this.querySelectorAll("section")
//     for (var i=0; i<divs.length; i++){
//       if (
//         (divs[i].offsetTop < top && top <divs[i].offsetTop+divs[i].offsetHeight) ||
//         (divs[i].offsetTop < bottom && bottom <divs[i].offsetTop+divs[i].offsetHeight)
//       ){
//         arr.push(divs[i].id);
//       }
//     }
//       /* document.getElementById("status").innerHTML = arr.join(",") */
    
//   });

document.querySelector('#building').addEventListener('scroll', function(){
    var top = this.scrollTop;
    var bottom = top+this.offsetHeight;
      var arr = [];
   
    var divs = this.querySelectorAll("section")
    for (var i=0; i<divs.length; i++){
      if (
        (divs[i].offsetTop < top && top <divs[i].offsetTop+divs[i].offsetHeight) ||
        (divs[i].offsetTop < bottom && bottom <divs[i].offsetTop+divs[i].offsetHeight)
      ){
        arr.push(divs[i].id);
      }
    }
      document.getElementById("status").innerHTML = arr.join(",") 
     
  });
  var test = "yow";
    console.log(test);