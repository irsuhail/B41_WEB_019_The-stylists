// Toggle Filter Popup
function toggleFilterPopup() {
  const popup = document.getElementById("filterPopup");
  if (popup.style.display =="flex") {
    popup.style.display = "none"; // Hide the popup
  } else {
    popup.style.display = "flex"; // Show the popup
  }
}

// Change Active Tab
function changeTab(ele, section) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("active"));
  ele.classList.add("active");
  console.log(`${section} tab clicked`);
}

// Select All Checkboxes
function selectAllCheckboxes() {
    const checkboxes = document.querySelectorAll(".account-checkbox");
    const areAllChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
  
    checkboxes.forEach((checkbox) => (checkbox.checked = !areAllChecked));
  
    if (areAllChecked) {
      console.log("All checkboxes deselected");
    } else {
      console.log("All checkboxes selected");
    }
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
  tabs.forEach(tab => {
      tab.addEventListener("click", () => {
          // Remove 'active' class from all tabs
          tabs.forEach(t => t.classList.remove("active"));
          
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
for (let i = 0;i<200;i++) {
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
