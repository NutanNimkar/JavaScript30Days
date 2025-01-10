const nameInput = document.getElementById("name");
const mobileInput = document.getElementById("mobile");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const mobileError = document.getElementById("mobileError");
const emailError = document.getElementById("emailError");
const submit = document.getElementById("submitBtn");
const dataTable = document.getElementById("dataTable").children[1];

// Validation functions
function validateName(name) {
  const regex = /^[a-zA-Z]{3,}$/; // Matches only letters, minimum 3 characters
  if (!regex.test(name)) {
    nameError.textContent = "Name should be all letters and at least 3 characters.";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateMobile(mobile) {
  const regex = /^\d{10}$/; // Matches exactly 10 digits
  if (!regex.test(mobile)) {
    mobileError.textContent = "Mobile should be exactly 10 digits.";
    return false;
  } else {
    mobileError.textContent = "";
    return true;
  }
}

function validateEmail(email) {
  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");
  const isValid =
    atIndex > 0 &&
    dotIndex > atIndex + 1 &&
    dotIndex < email.length - 1;

  if (!isValid) {
    emailError.textContent = "Please enter a valid email address.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

// Add row to the table
function addRowTable(name, mobile, email) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${mobile}</td>
    <td>${email}</td>
    <td><button class="deleteBtn">Delete</button></td>
  `;
  dataTable.appendChild(row);

  // Add delete functionality
  row.querySelector(".deleteBtn").addEventListener("click", () => {
    row.remove();
  });
}

// Event listener for submit button
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const mobile = mobileInput.value.trim();
  const email = emailInput.value.trim();

  const isValidName = validateName(name);
  const isValidMobile = validateMobile(mobile);
  const isValidEmail = validateEmail(email);

  if (isValidName && isValidMobile && isValidEmail) {
    // Add a row to the table
    addRowTable(name, mobile, email);

    // Clear form fields
    nameInput.value = "";
    mobileInput.value = "";
    emailInput.value = "";
  }
});
