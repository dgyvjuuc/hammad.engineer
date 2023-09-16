

const searchBtn  = document.getElementById('searchBtn')
const btn2  = document.getElementById('btn2')
const CloseBtn  = document.getElementById('CloseBtn')
const menuBtn  = document.getElementById('menuBtn')
const userBtn = document.getElementById('userBtn')
const searchForm = document.querySelector('.search-form')
const navBar = document.querySelector('.navBar')
const UserForm = document.querySelector('.UserForm')
const text = document.querySelector('.multiple-text')
const info = document.querySelector('.info')
const scrollTop = document.querySelector('.scroll-top')

searchBtn.onclick = () => {
    searchForm.classList.toggle('active')
    UserForm.classList.remove('active');
}
userBtn.onclick = () => {
  UserForm.classList.toggle('active');
  searchForm.classList.remove('active')

}

btn2.onclick = () => {
  info.classList.toggle('active')
}

CloseBtn.onclick = () => {
    info.classList.remove('active')
  }
  menuBtn.onclick = () => {
    navBar.classList.toggle('active')
    menu.classList.toggle('bx-x')
  }

  window.onscroll = () => {
    navBar.classList.remove('active')
    UserForm.classList.remove('active');
    info.classList.remove('active')
    searchForm.classList.remove('active')

    if(window.scrollY > 60){
     scrollTop.classList.add('active')
    }else{
        scrollTop.classList.remove('active')  
    }
  }


  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150; 
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if(top >= offset && top < offset + height){
        navLinks.forEach(Link => {
         Link.classList.remove('active')
         document.querySelector('header nav a[href*=' + id +']').classList.add('active');
        })
      }
    })
    
    let header  = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100)
  }

  const textLoad = () => {
    setTimeout(()=> {
      text.textContent = "Frontend Developer";
    },0)
    setTimeout(()=> {
      text.textContent = "Software Engineer";
    },4000)
    setTimeout(()=> {
      text.textContent = "Web Developer";
    },8000)

    
  }
  textLoad();
  setInterval(textLoad, 12000)


  ScrollReveal({
    reset:true,
    distance: '80px',
    duration:2000,
    delay:200
  });
  ScrollReveal().reveal('.home-content , .heading', { origin:'top' });
  ScrollReveal().reveal('.home-img , .services-container , .portfolio-container', { origin:'bottom' });
  ScrollReveal().reveal('.about-img ,.map , .myname', { origin:'left' });
  ScrollReveal().reveal('.about-content,form ', { origin:'right' });
