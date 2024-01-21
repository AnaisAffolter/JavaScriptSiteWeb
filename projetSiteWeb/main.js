var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

let darkMode = document.querySelector('.darkMode')
darkMode.addEventListener('click', () => {
  let body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    body.classList.remove('dark')
  } else {
    body.classList.add('dark')
  }
})