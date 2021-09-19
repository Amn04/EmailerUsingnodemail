const contactform= document.querySelector('.contact-form');
let name = document.getElementById('name');
let mobile =document.getElementById('mobile');
let email = document.getElementById('email');
let message= document.getElementById('message');

contactform.addEventListener('submit', (e)=>{
    e.preventDefault();
    let formData = { 
        name: name.value,
        mobile: mobile.value,
        email: email.value,
        message: message.value
    }
    console.log(formData);
    let xhr= new XMLHttpRequest;
    xhr.open('POST', '/')
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function (){
        console.log(xhr.responseText);
        
    }
    xhr.send(JSON.stringify(formData));
}) 