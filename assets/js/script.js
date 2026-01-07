'use strict';

// Simple page navigation function
function showPage(pageName) {
  // Hide all pages
  const pages = document.querySelectorAll('[data-page]');
  pages.forEach(page => page.classList.remove('active'));

  // Show target page
  const targetPage = document.querySelector(`[data-page="${pageName}"]`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Update nav buttons
  const navLinks = document.querySelectorAll('[data-nav-link]');
  navLinks.forEach(link => link.classList.remove('active'));

  const activeLink = document.querySelector(`[onclick="showPage('${pageName}')"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  window.scrollTo(0, 0);
}



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// validate function
const validateForm = function () {
  if (form.checkValidity()) {
    formBtn.removeAttribute("disabled");
  } else {
    formBtn.setAttribute("disabled", "");
  }
};

// add event to form (using delegation for better performance and reliability)
if (form) {
  form.addEventListener("input", validateForm);
  form.addEventListener("change", validateForm);

  // Initial check
  validateForm();
}

// Handle Formspree form submission via AJAX
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    // Disable button and show loading state
    if (formBtn) {
      formBtn.setAttribute("disabled", "");
      const originalText = formBtn.innerHTML;
      formBtn.innerHTML = '<span>Sending...</span>';

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            // Success! Clear form and show a message
            form.reset();
            alert("Thank you! Your message has been sent successfully.");
          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                alert(data["errors"].map(error => error["message"]).join(", "));
              } else {
                alert("Oops! There was a problem submitting your form");
              }
            })
          }
        })
        .catch((error) => {
          alert("Oops! There was a problem submitting your form");
        })
        .finally(() => {
          // Reset button state
          formBtn.innerHTML = originalText;
          // Re-validate form
          validateForm();
        });
    }
  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");



// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {


    const targetPage = this.textContent.toLowerCase().trim();


    // Remove active class from all pages first
    for (let j = 0; j < pages.length; j++) {
      pages[j].classList.remove("active");
    }

    // Add active class to target page
    for (let j = 0; j < pages.length; j++) {
      if (targetPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
        window.scrollTo(0, 0);
        break;
      }
    }

    // Update navigation link active states
    for (let j = 0; j < navigationLinks.length; j++) {
      navigationLinks[j].classList.remove("active");
    }
    this.classList.add("active");

  });
}