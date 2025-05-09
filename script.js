document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("emailInput").value;

  // 🔁 Smart environment check
  const baseURL = window.location.hostname === "localhost"
    ? "http://localhost:8080"
    : "https://wambo.onrender.com";

  // Log to console (for testing)
  console.log("Collected email:", email);

  // Store in localStorage (optional)
  localStorage.setItem("userEmail", email);

  // Send to backend
  fetch(`${baseURL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email })
  })
    .then(res => res.text())
    .then(message => {
      console.log("Server said:", message);
      alert("Thanks for signing up!");
      document.getElementById("thankYouMessage").style.display = "block";
      document.getElementById("signupForm").reset();
    })
    .catch(err => {
      console.error("Error:", err);
      alert("There was an issue. Please try again.");
    });
});
