const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

// Keeping track of scroll using an event listener 
window.addEventListener('scroll', () => {
    // Grab the current section
    let current = ''
    // To see active scrolling in the console log: 
    // console.log(pageYOffset);
    // Loop through all the sections 
    sections.forEach(section => {
        // Calculate distance to the page top
        const sectionTop = section.offsetTop;

        // Get the section height 
        const sectionHeight = section.clientHeight;

        // Need to know how much we have scrolled until the page is highlighted in menu
        // Change item highlighted on menu once you scroll 1/3 of page
        if(pageYOffset >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id');
        }
    })
    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)) {
        li.classList.add('active')
        }
    })
})