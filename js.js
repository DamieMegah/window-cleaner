let navbar = document.querySelector('.navbar'); //this is calling the class navbar and assigning it to the  variable navbar

document.querySelector('#menu-btn').onclick= () =>
{
    navbar.classList.toggle('active');
    loginform.classList.remove('active');
}

 


let loginform = document.querySelector('.login-form'); //this is calling the class login-form and assigning it to the  variable loginform

document.querySelector('#ct').onclick = () =>{
    loginform.classList.toggle('active');
    navbar.classList.remove('active');

}

window.ondblclick = () =>{
    navbar.classList.remove('active');
    loginform.classList.remove('active');
    cancel.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginform.classList.remove('active');
    cancel.classList.remove('active');
}
 
 
 
 
 
 
 
 
 
 /* let login = document.querySelector('.login-form');
 let header = document.querySelector('.header');

document.querySelector('#login-btn').onclick= () =>
    {

   
 if ( login.classList.contains('active')) {
        login.classList.remove('active');
        document.querySelector('.header').style="gap:18rem";
    
    }else{
        login.classList.toggle('active');
        header.style="gap:2rem";
    
    }
   
    }
   

window.onscroll = () =>{
   
    login.classList.remove('active');
    login.style="display:none";
}

if (style="top:1rem") {
    login.style="display:block";
    
} else {
    login.style="display:none";
    
}*/