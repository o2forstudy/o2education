/** Text Animation */
const words = ["Patan's Best Education Platform.", "Best Spoken English & IELTS Learning Platform.", "Best Immigration Services.", "Oxegen for Your Bright Future.!!!!"];
let wi = 0, ci = 0, deleting = false;
let el = document.getElementById('animated-text');

function type() {
  const word = words[wi];

  if (!deleting) {
    el.textContent = word.slice(0, ++ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(type, 1500);  // pause before erasing
      return;
    }
  } else {
    el.textContent = word.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      wi = (wi + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 60 : 100);
}

window.onload = function () {
  requestAnimationFrame(type);
};





const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Comment: It is for upcount
        const speed = 200;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCount();
      observer.unobserve(counter); // Stop observing once animated
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(counter => {
  observer.observe(counter);
});

// Toggle mobile navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });
}
