document.addEventListener("DOMContentLoaded", (event) => {
  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active", // Default active class name
    },
  });

  // Event listener for modal
  const myModal = document.getElementById("exampleModal");
  myModal.addEventListener("show.bs.modal", function (event) {
    console.log("Modal is about to be shown");
  });

  myModal.addEventListener("shown.bs.modal", function (event) {
    console.log("Modal is now shown");
  });

  myModal.addEventListener("hide.bs.modal", function (event) {
    console.log("Modal is about to be hidden");
  });

  myModal.addEventListener("hidden.bs.modal", function (event) {
    console.log("Modal is now hidden");
  });

  // Form submission

  // Retrieve input values
  var email = document.getElementById("exampleInputEmail1");
  var firstName = document.getElementById("first-name");
  var lastName = document.getElementById("last-name");

  // Form submission function
  function submitForm(event) {
    event.preventDefault(); // Prevent default form submission behavior

    var emailValue = email.value;
    var firstNames = firstName.value;
    var lastNames = lastName.value;
    console.log(
      "Email:",
      emailValue,
      "First Name:",
      firstNames,
      "Last Name:",
      lastNames
    );

    // Validate email

    // Perform form submission
    const object = {
      email: emailValue,
      firstName: firstNames,
      lastName: lastNames,
    };
    axios
      .post("https://getform.io/f/pboxjyma", object, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        console.log("Form submitted successfully:", response);
        // email.value = "";
        // password.value = "";
        email.value = "";
        firstName.value = "";
        lastName.value = "";

        alert("Form submitted successfully");
      })
      .catch((error) => {
        console.log("Error submitting form:", error);
        alert("Error submitting form");
      });
  }

  // Event listener for form submission
  const sections = document.querySelectorAll(".c-child");
  const images = document.querySelectorAll(".img-card");

  // Function to handle the click event
  function handleClick(index) {
    // Remove active class from all images and sections
    images.forEach((img) => img.classList.remove("active"));
    sections.forEach((sec) => sec.classList.remove("active"));

    // Add active class to the clicked section and corresponding image
    images[index].classList.add("active");
    sections[index].classList.add("active");
  }

  // Add click event listeners to each section
  sections.forEach((section, index) => {
    section.addEventListener("click", function () {
      handleClick(index);
    });
  });

  handleClick(0);

});
