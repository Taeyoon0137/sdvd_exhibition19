window.onload = ()=> {
  //header color


  //nav button
  document.querySelector(".btn_nav").addEventListener("click", ()=> {
  document.querySelector("#nav_toggle").classList.toggle("nav-active");
  document.querySelector(".nav").classList.toggle("nav-active");
  })
}

//window.addEventListener('scroll', function() {
//var el = document.querySelector('.header_background');

//if(window.scrollY >= 300px) el.classList.add('background');
//else el.classList.remove('background');
//});
