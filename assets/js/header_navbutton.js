window.onload = ()=> {
  document.querySelector(".btn_nav").addEventListener("click", ()=> {
  document.querySelector("#nav_toggle").classList.toggle("nav-active");
  document.querySelector(".nav").classList.toggle("nav-active");
  })
}

var header = document.querySelector('#background');
  var stickyY = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  function onScroll(e) {
    window.scrollY >= stickyY ? header.classList.add('bg_on') :
                                  header.classList.remove('bg_on');
  }
  document.addEventListener('scroll', onScroll);
