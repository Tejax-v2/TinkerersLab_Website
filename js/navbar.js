// Function to handle smooth scrolling when a navbar link is clicked
function smoothScroll(targetId) {
  const target = document.querySelector(targetId);
  const offsetTop = target.getBoundingClientRect().top;
  const navbarHeight = document.querySelector('.navbar-collapse').offsetHeight;
  const scrollTarget = offsetTop + window.scrollY - navbarHeight;

  window.scroll({
    top: scrollTarget,
    behavior: 'smooth'
  });
}

// Attach click event listeners to navbar links
document.querySelectorAll('.navbar-collapse    a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementsByClassName('navbar-toggle')[0].click();
    const targetId = link.getAttribute('href');
    smoothScroll(targetId);
  });
});

document.getElementById("btn2").addEventListener('click', (event) => {
  event.preventDefault();
  const targetId = document.getElementById("btn2").getAttribute('href');
  smoothScroll(targetId);
});