let navbar = document.querySelector('.nav');

window.addEventListener("scroll", function(){
    navbar.classList.toggle("fixed", window.scrollY > 150)

})

let monthlyPlan = document.querySelector('.monthly-plan');
let yearlyPlan = document.querySelector('.yearly-plan');
let monthBtn =document.querySelector('.month-btn');
let yearBtn =document.querySelector('.year-btn');


monthBtn.addEventListener('click', function(){
    monthlyPlan.classList.add('active')
    yearlyPlan.classList.remove('active')
})

yearBtn.addEventListener('click', function(){
    monthlyPlan.classList.remove('active')
    yearlyPlan.classList.add('active')
})

let icons = document.querySelectorAll('.icon');

function iconRemove(i) {
    icons[i].innerHTML = "";
    console.log(i);
}

icons.forEach( (i) => {
    iconRemove(i)
})
