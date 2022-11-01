//bringing in all the panels in the JS file - then select all them with querySelectorAll()

// querySelectorAll() - instead of just selecting the element directly, it puts all the panels into what's called the node list, 
//which is similar to an array.
const panels = document.querySelectorAll('.panel') 
//looping thorugh a node list: 
//we need to pass in the arrow function whatever we want to use for each iteration.
panels.forEach((panel) => {
//We want to have an event listener on each of these so that if we click it, something happens.
//So we'll take each panel and say, Add event listener and I want to listen for a click.
//And when that click happens, we're going to run a function.
    panel.addEventListener('click', () => {
        removeActiveClasses()
//So I want to whatever one we click on, I want to add a class of active.
        panel.classList.add('active') //now all the cards are expanding and no one is retracting
        //So what we'll do is before we put a class of active, let's remove the class of active on all of the other ones.
        //So I'm going to have a function here called remove active classes and we'll create that down here as 
        // a function, remove active classes. see removeActiveClasses()
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
} 