// var name = document.getElementById("name");
// var button = document.getElementById("button");
// button.addEventListener("click", function(){
//     var name = document.getElementById("name");
//     var message = name.value;
//     alert("Thank you "+message+ ", you have successfully contacted us and will be responded to in due time");
//     name.value="";
// })



let slides = document.querySelectorAll('slide-cont');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

var navlinks = document.getElementById('#navlinks');
function showmenu(){
    navlinks.style.right = "0";
}
function hidemenu(){
    navlinks.style.right = "-200px";
} 



//registeration js//
let names = document.getElementById("name");
let email = document.getElementById("email");
let text = document.getElementById("text");
let button = document.getElementById('button');
button.addEventListener("click", function(){
    let message = names.value;
    if(names!='' && email!='' && course!='' && level!=''){
        alert('Thank you, '+message+ ' you will be emailed to receive details about the registration');
    }else{
        alert('Please ensure to fill all the areas');
    }
})
names.value = '';
//regristeration js//