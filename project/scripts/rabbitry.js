function sanitizeHTML(str) {
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');

  const lastModifiedElement = document.getElementById('lastModified');
  const currentYearElement = document.getElementById('currentyear');

  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
  } else {
    console.error('Element with ID "lastModified" not found');
  }

  // Update Current Year
  if (currentYearElement) {
    currentYearElement.textContent = `Current Year: ${new Date().getFullYear()}`;
  } else {
    console.error('Element with ID "currentyear" not found');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('#nav-menu ul');

    if (!hamburger) {
      console.error('Hamburger menu not found');
      return;
    }

    if (!navMenu) {
      console.error('Navigation menu not found');
      return;
    }

    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('show');
      this.classList.toggle('active');

      // Toggle aria-expanded for accessibility
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
    });
  });

  const triviaArray = [
    'Hopping Trivia: The Rhinelander has a distinctive butterfly marking on its nose.',
    'Hopping Trivia: The Rhinelander is a rare breed of rabbit.',
    'Hopping Trivia: Rhinelanders weigh between 6.5 to 10 pounds.',
    'Hopping Trivia: Rhinelanders are intelligent and trainable.',
    'Hopping Trivia: The Rhinelanders originated in Germany.',
    'Hopping Trivia: Rabbit ears move independently by 180 degrees, enabling them to hear from two directions at once.',
    'Hopping Trivia: A rabbit’s sense of smell is even better than their eyesight.',
    'Hopping Trivia: Rabbits can run up to 18 miles per hour.',
    'Hopping Trivia: Rabbit tails are used to distract predators during a chase and to signal danger to other rabbits.',
    'Hopping Trivia: Rabbits have nearly 360° panoramic vision, allowing them to detect predators from almost any direction.',
    'Hopping Trivia: Rhinelanders were created by crossing a Japanese Harlequin and a Checkered Giant.',
    'Hopping Trivia: Rabbits are herbivores.',
    'Hopping Trivia: Rabbits are crepuscular, meaning they are most active at dawn and dusk.',
    'Hopping Trivia: Rabbits are social animals.',
    'Hopping Trivia: Rabbits communicate through body language.',
    'Hopping Trivia: Rabbits will give you kisses to show affection.',
    'Hopping Trivia: Rabbits are prey animals.',
    'Hopping Trivia: Rabbits have a third eyelid called a nictitating membrane.',
    'Hopping Trivia: Rabbits love to eat dandelion leaves, roses and flowers.',
    'Hopping Trivia: Rhinelanders are known for their friendly and outgoing personalities.',
    'Hopping Trivia: Rhinelanders are known for their playful and curious nature.',
    'Hopping Trivia: Temperatures above 85 degrees Fahrenheit sterilize bucks.',
    'Hopping Trivia: The Rhinelander is known for their distinctive coat markings.',
    'Hopping Trivia: A rabbit doe has 2 uteruses.',
    'Hopping Trivia: Rabbits have 2 sets of incisors.',
    'Hopping Trivia: Rabbits have 28 teeth.',
    'Hopping Trivia: Rabbits have a lifespan of 1.6-12 years.',
    'Hopping Trivia: Rhinelanders require daily interaction and mental stimulation.',
  ];

  function displayRandomTrivia() {
    const randomTrivia =
      triviaArray[Math.floor(Math.random() * triviaArray.length)];
    const triviaElement = document.getElementById('random-trivia');
    if (triviaElement) {
      triviaElement.textContent = randomTrivia;
    } else {
      console.error('Element with ID "random-trivia" not found');
    }
  }

  displayRandomTrivia();

  if (window.location.pathname.includes('contact-us.html')) {
    const contactForm = document.getElementById('contactForm');
    let isSubmitting = false;

    console.log('Attaching form submit event listener');

    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (isSubmitting) return;
        isSubmitting = true;

        const name = document.getElementById('name')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const message = document.getElementById('message')?.value.trim() || '';

        const formData = {
          name: name,
          email: email,
          message: message,
        };
        localStorage.setItem('contactFormData', JSON.stringify(formData));

        console.log('Form submitted');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        localStorage.setItem('hasDisplayedHelloMessage', 'false');

        sessionStorage.setItem('showSubmissionMessage', 'true');

        contactForm.reset();
        isSubmitting = false;

        const submissionMessageElement =
          document.getElementById('submissionMessage');
        if (submissionMessageElement) {
          submissionMessageElement.innerHTML = `<h2>Hello ${sanitizeHTML(
            name
          )}, thank you for your inquiry. I\'ll get back to you shortly.</h2>`;
          submissionMessageElement.style.display = 'block';
        } else {
          console.error('Element with ID "submissionMessage" not found');
        }
      });
    } else {
      console.error('Contact form not found');
    }

    const showMessage = sessionStorage.getItem('showSubmissionMessage');
    if (showMessage === 'true') {
      const submittedDataElement = document.getElementById('submittedData');
      if (submittedDataElement) {
        submittedDataElement.innerHTML = `<h2><h2>Hello ${sanitizeHTML(
          name
        )}, thank you for your inquiry. I\'ll get back to you shortly.</h2>`;
        submittedDataElement.style.display = 'block';
      } else {
        console.error('Element with ID "submittedData" not found');
      }
      sessionStorage.removeItem('showSubmissionMessage');
    }

    const hasDisplayedHelloMessage = localStorage.getItem(
      'hasDisplayedHelloMessage'
    );

    if (hasDisplayedHelloMessage !== 'true') {
      const storedData = JSON.parse(localStorage.getItem('contactFormData'));
      if (storedData) {
        const personalizedMessageElement = document.getElementById(
          'personalizedMessage'
        );
        if (personalizedMessageElement) {
          personalizedMessageElement.innerHTML = `
                          <h2>Hello again ${sanitizeHTML(
                            storedData.name
                          )}, we'll get back to you soon!</h2>
                      `;
          personalizedMessageElement.style.display = 'block';
          localStorage.setItem('hasDisplayedHelloMessage', 'true');
        } else {
          console.error('Element with ID "personalizedMessage" not found');
        }
      }
    }
  }
});
