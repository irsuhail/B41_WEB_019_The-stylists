document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the selected user data from localStorage
  const selectedUserCard = JSON.parse(localStorage.getItem("selectedUserCard"));

  if (!selectedUserCard) {
    alert("No user data available!");
    return;
  }

  // Extract user initials
  const [firstName, lastName] = selectedUserCard.cardholder_Name.split(" ");
  const userInitials = firstName[0] + (lastName ? lastName[0] : "");

  // Populate user badge
  document.getElementById("userInitials").textContent = userInitials.toUpperCase();
  document.getElementById("userFullName").textContent = selectedUserCard.cardholder_Name;

  // Populate the user details section
  const detailsContainer = document.getElementById("userDetails");
  detailsContainer.innerHTML = `
    <h2>Cardholder Details</h2>
    <p><strong>Name:</strong> ${selectedUserCard.cardholder_Name}</p>
    <p><strong>Card:</strong> ${selectedUserCard.card}</p>
    <p><strong>Spend This Month:</strong> ${selectedUserCard.Spend_This_Month}</p>
    <p><strong>Card Category:</strong> ${selectedUserCard.Card_Category}</p>
    <p><strong>Card Account:</strong> ${selectedUserCard.Card_Account}</p>
  `;
});
