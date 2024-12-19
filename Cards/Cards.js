// Toggle Filter Popup
function toggleFilterPopup() {
  const popup = document.getElementById("filterPopup");
  const filterSummary = document.getElementById("filterSummary");

  if (popup.style.display === "flex") {
    popup.style.display = "none"; // Hide popup
  } else {
    popup.style.display = "flex"; // Show popup

    // Update filter summary
    const activeTabs = document.querySelectorAll(".filter-sidebar .tab.active");
    const selectedFilters = Array.from(activeTabs).map(
      (tab) => tab.textContent
    );

    if (selectedFilters.length > 0) {
      filterSummary.textContent = `Filters applied: ${selectedFilters.join(
        ", "
      )}`;
    } else {
      filterSummary.textContent = "No filters applied";
    }
  }
}

// Change Active Tab (Filter Selection)
function changeTab(ele, section) {
  const tabs = document.querySelectorAll(".filter-sidebar .tab");
  const isActive = ele.classList.contains("active");

  tabs.forEach((tab) => tab.classList.remove("active"));

  if (!isActive) {
    ele.classList.add("active");
    console.log(`${section} tab selected`);
  }
}

// Select All Checkboxes
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".filter-sidebar .tab");
  tabs.forEach((tab) => tab.classList.remove("active")); // Remove active class

  // Ensure filter popup is hidden initially
  const popup = document.getElementById("filterPopup");
  popup.style.display = "none";
});

// Select All Checkboxes
function selectAllCheckboxes() {
  const checkboxes = document.querySelectorAll(".account-checkbox");
  const areAllChecked = Array.from(checkboxes).every(
    (checkbox) => checkbox.checked
  );

  checkboxes.forEach((checkbox) => (checkbox.checked = !areAllChecked));

  console.log(
    areAllChecked ? "All checkboxes deselected" : "All checkboxes selected"
  );
}

// Move Money Button Example
function handleMoveMoney() {
  alert("Move Money button clicked!");
}

// Tabs
document.addEventListener("DOMContentLoaded", function () {
  // Get all tabs
  const tabs = document.querySelectorAll(".tab");

  // Add click event listener to each tab
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove 'active' class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));

      // Add 'active' class to the clicked tab
      tab.classList.add("active");
    });
  });
});

const firstNames = [
  "John",
  "Jane",
  "Alice",
  "Bob",
  "Charlie",
  "Daisy",
  "Ella",
  "Frank",
  "Grace",
  "Henry",
  "Isabella",
  "Jack",
  "Kate",
  "Lucy",
  "Michael",
  "Nina",
  "Oliver",
  "Patricia",
  "Quincy",
  "Rebecca",
  "Samuel",
  "Tessa",
  "Uma",
  "Victor",
  "Wendy",
  "Xavier",
  "Yolanda",
  "Zachary",
];
const lastNames = [
  "Black",
  "Doe",
  "Smith",
  "Johnson",
  "Brown",
  "Miller",
  "Fitzgerald",
  "Sinatra",
  "Hopper",
  "Ford",
  "Davis",
  "Martin",
  "Thompson",
  "White",
  "Harris",
  "Jackson",
  "Williams",
  "Jones",
  "Garcia",
  "Martinez",
  "Rodriguez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
];
const cardTypes = ["Office Card", "Intern Card", "Service Card", "Frozen"];
const cardCategories = ["Virtual", "Physical"];
const accountTypes = ["Credit Card", "Payroll", "AR"];

const UserCard = [];
for (let i = 0; i < 200; i++) {
  const user = {
    cardholder_Name: `${
      firstNames[Math.floor(Math.random() * firstNames.length)]
    } ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
    card: `${Math.floor(Math.random() * 9000) + 1000} ${
      cardTypes[Math.floor(Math.random() * cardTypes.length)]
    }`,
    Spend_This_Month: `$${Math.floor(Math.random() * 50000).toLocaleString(
      "en-US",
      { minimumFractionDigits: 2 }
    )}`,
    Card_Category:
      cardCategories[Math.floor(Math.random() * cardCategories.length)],
    Card_Account: `${
      accountTypes[Math.floor(Math.random() * accountTypes.length)]
    } ${Math.floor(Math.random() * 9000) + 1000}`,
  };
  UserCard.push(user);
}
// console.log(UserCard);


// Toggle Create Card Popup
document.getElementById('createCardBtn').addEventListener('click', function() {
  document.getElementById('createCardPopup').style.display = 'flex';
});

// Close Popup
document.getElementById('closePopupBtn').addEventListener('click', function() {
  document.getElementById('createCardPopup').style.display = 'none';
});

// Handle Form Submission to Add Card
document.getElementById('createCardForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const cardholder = document.getElementById('cardholder').value;
  const card = document.getElementById('card').value;
  const spend = document.getElementById('spend').value;
  const type = document.getElementById('type').value;
  const account = document.getElementById('account').value;

  // Add new card to the UserCard array
  const newCard = {
    cardholder_Name: cardholder,
    card: card,
    Spend_This_Month: `$${parseFloat(spend).toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
    Card_Category: type,
    Card_Account: account,
  };

  UserCard.push(newCard);

  // Update the table with the new card
  const tableBody = document.getElementById('cardsBody');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${cardholder}</td>
    <td>${card}</td>
    <td>${`$${parseFloat(spend).toLocaleString('en-US', { minimumFractionDigits: 2 })}`}</td>
    <td>${type}</td>
    <td>${account}</td>
  `;
  tableBody.appendChild(row);

  // Save updated data to localStorage
  saveToLocalStorage();

  // Close the popup
  document.getElementById('createCardPopup').style.display = 'none';
});

// Function to populate the table dynamically
function populateTable(data) {
  const tableBody = document.getElementById("cardsBody");

  // Loop through the data and create table rows
  data.forEach((card) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${card.cardholder_Name}</td>
          <td>${card.card}</td>
          <td>${card.Spend_This_Month}</td>
          <td>${card.Card_Category}</td>
          <td>${card.Card_Account}</td>
      `;

    tableBody.appendChild(row);
  });
}

// Call the function to populate the table
populateTable(UserCard);

// Adding Usercard data in local Storage
function saveToLocalStorage() {
  const key = "userCardsData"; // Key for localStorage
  localStorage.setItem(key, JSON.stringify(UserCard));
  console.log(`Data saved to localStorage with key: "${key}"`);
}
// Call the function to save the data
saveToLocalStorage();
