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


let logos = document.getElementsByClassName("app-image");
console.log(logos);
if (innerWidth <768){
    logos[0].style.display = "block";
    logos[1].style.display = "none";
}
else{
    logos[0].style.display = "none";
    logos[1].style.display = "block";
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
  
  // function fadeOutAndHide() {
  //   const divToAnimate = document.getElementById("myDiv");
  //   divToAnimate.style.opacity = "0"; // Set opacity to 0 for fade-out effect
  //   setTimeout(function() {
  //     divToAnimate.style.display = "none"; // After the animation, hide the div
  //   }, 500); // Set the timeout to match the transition duration (0.5s in this example)
  // }

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
  if(innerWidth < 768){
    x1.classList.remove("slide-left");
    x1.classList.add("scale-up");
  }
  else{
    x1.classList.add("slide-left");
    x1.classList.remove("scale-up");
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
    distance: '300px',
    duration: 2000,
    easing: 'ease-in-out',
  });

  ScrollReveal().reveal('.slide-up', {
    origin: 'bottom',
    distance: '300px',
    duration: 2000,
    easing: 'ease-in-out',
  });

  ScrollReveal().reveal('.slide-down', {
    origin: 'top',
    distance: '300px',
    duration: 2000,
    easing: 'ease-in-out',
  });

  ScrollReveal().reveal('.scale-up', {
    scale: 0.7,
    duration: 2000,
    easing: 'ease-in-out',
    opacity: 0,
  });










