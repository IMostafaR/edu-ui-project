 // Toggle password visibility
 const togglePassword = document.getElementById("togglePassword");
 const password = document.getElementById("password");
 const passwordIcon = document.getElementById("password-icon");

 togglePassword.addEventListener("click", () => {
   if (password.type === "password") {
     password.type = "text";
     passwordIcon.className = "bi bi-eye-slash";
   } else {
     password.type = "password";
     passwordIcon.className = "bi bi-eye";
   }
 });

 // Form validation
 const formSignup = document.getElementById("form-signup");
 const firstName = document.getElementById("firstName");
 const lastName = document.getElementById("lastName");
 const email = document.getElementById("email");
 const passwordInput = document.getElementById("password");

 const errorFirstName = document.getElementById("error-firstName");
 const errorLastName = document.getElementById("error-lastName");
 const errorEmail = document.getElementById("error-email");
 const errorPassword = document.getElementById("error-password");

 formSignup.addEventListener("submit", (e) => {
   e.preventDefault();
   let isValid = true;

   // Reset error messages
   errorFirstName.style.display = "none";
   errorLastName.style.display = "none";
   errorEmail.style.display = "none";
   errorPassword.style.display = "none";

   // First Name validation
   if (!firstName.value.trim()) {
     errorFirstName.style.display = "block";
     isValid = false;
   }

   // Last Name validation
   if (!lastName.value.trim()) {
     errorLastName.style.display = "block";
     isValid = false;
   }

   // Email validation
   const emailRegex = /\S+@\S+\.\S+/;
   if (!email.value.trim() || !emailRegex.test(email.value)) {
     errorEmail.style.display = "block";
     isValid = false;
   }

   // Password validation
   if (!passwordInput.value.trim()) {
     errorPassword.style.display = "block";
     isValid = false;
   }

   if (isValid) {
     alert("Sign Up Successful!");
   }
 });