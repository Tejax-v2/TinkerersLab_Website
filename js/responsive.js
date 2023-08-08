window.addEventListener('DOMContentLoaded', () => {
    const responsiveParagraph = document.getElementById('info');
    
    function updateParagraphContent() {
        const screenWidth = window.innerWidth;

        // Check the screen width and update the content accordingly
        if (screenWidth < 1200 ) {
            responsiveParagraph.textContent = `Welcome to Tinkerers' Lab! We foster a creative and collaborative environment where ideas thrive, and innovation flourishes. Our state-of-the-art tools empower people of all ages to explore and bring imaginative concepts to life. With hands-on workshops, vibrant community, and classes, we ignite curiosity, nurture a love for tinkering, and inspire the inventors. Join us on an exciting journey of discovery and creation!`;
        } 
        // else if (screenWidth < 992 && screenWidth >= 768) {
        else{
            responsiveParagraph.textContent = `Welcome to Tinkerers' Lab! We are a dedicated space for all the passionate tinkerers out there. Our lab is designed to provide a creative and collaborative environment where ideas thrive and innovation flourishes. Equipped with state-of-the-art tools and resources, we empower individuals of all ages to explore, experiment, and bring their imaginative concepts to life. Through hands-on workshops, classes, and a vibrant community, we aim to nurture a love for tinkering, ignite curiosity, and inspire the next generation of inventors and problem solvers. Join us at Tinkerers' Lab and embark on an exciting journey of discovery and creation.`;
        }
    }



    // Call the function on page load and whenever the window is resized
    updateParagraphContent();
    window.addEventListener('resize', updateParagraphContent);
});

// JavaScript to simulate slow loading
function simulateSlowLoading() {
    return new Promise((resolve) => {
      // Simulate a delay of 3 seconds (adjust this as needed)
      setTimeout(resolve, 4000);
    });
  }
  

  // Function to hide the splash screen and show the website content
  function showWebsiteContent() {
    const splashScreen = document.getElementById("fullScreenOverlay");
    // const content = document.getElementById("content");
    splashScreen.style.opacity = "0"; // Set opacity to 0 for fade-out effect
    setTimeout(function() {
      splashScreen.style.display = "none"; // After the animation, hide the div
    }, 500); // Set the timeout to match the transition duration (0.5s in this example)
    // Hide the splash screen
    // splashScreen.style.display = "none";
    // Show the website content
    // content.style.display = "block";
  }

  window.addEventListener('load', function () {
    const splashScreen = document.getElementById("fullScreenOverlay");
    // const content = document.getElementById("content");
    splashScreen.style.opacity = "0"; // Set opacity to 0 for fade-out effect
    setTimeout(function() {
      splashScreen.style.display = "none"; // After the animation, hide the div
    }, 500); // Set the timeout to match the transition duration (0.5s in this example)
    // Hide the splash screen
    // splashScreen.style.display = "none";
    // Show the website content
    // content.style.display = "block";
  });
  
  // Call the function to simulate slow loading
  simulateSlowLoading().then(showWebsiteContent);
  


  x1 = document.querySelector("#top .content");
  x2 = document.querySelector("#about .content");
  x2img = document.querySelector("#about .app-image");
  if(innerWidth < 768){
    x1.classList.remove("slide-left");
    x1.classList.add("scale-up");
    x2.classList.remove("slide-right");
    x2.classList.add("slide-up");
    if(x2img){
      const parentElement = x2img.parentNode;
      parentElement.removeChild(x2img);
    }
  }
  else{
    x1.classList.add("slide-left");
    x1.classList.remove("scale-up");
    // x2.classList.remove("slide-up");
    // x2.classList.add("slide-right");
  }


  ScrollReveal().reveal('.show-once', {
    reset: false,
  });

  ScrollReveal().reveal('.slide-left', {
    origin: 'left',
    distance: '300px',
    duration: 2000,
    easing: 'ease-in-out',
  });

  ScrollReveal().reveal('.slide-right', {
    origin: 'right',
    distance: '100px',
    duration: 2000,
    easing: 'ease-in-out',
  });

  ScrollReveal().reveal('.slide-up', {
    origin: 'bottom',
    distance: '100px',
    duration: 1000,
    easing: 'ease-in-out',
    interval: 200,
  });

  ScrollReveal().reveal('.slide-down', {
    origin: 'top',
    distance: '300px',
    duration: 2000,
    easing: 'ease-in-out',
  });

  ScrollReveal().reveal('.scale-up', {
    scale: 0.7,
    duration: 1000,
    easing: 'ease-in-out',
    opacity: 0,
    interval: 200,
  });










