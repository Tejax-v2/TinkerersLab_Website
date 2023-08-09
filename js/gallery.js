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
    window.location.href = "index.html";
    const targetId = link.getAttribute('href');
    smoothScroll(targetId);
  });
});