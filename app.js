const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// Get dropdowns for "from" and "to" currency selectors
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate currency options in both dropdowns
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let option = document.createElement("option"); // Create a new <option> tag
    option.value = currCode;       // Set its value to currency code like 'USD'
    option.innerText = currCode;   // Display currency code in dropdown

    // Set default selection: USD for "from" and INR for "to"
    if (select.name === "from" && currCode === "USD") {
      option.selected = true;
    } else if (select.name === "to" && currCode === "INR") {
      option.selected = true;
    }

    select.appendChild(option); // Add option to the dropdown
  }

  // Update flag image when a different currency is selected
  select.addEventListener("change", (e) => updateFlag(e.target));
}

// This function updates the flag image based on the selected currency
function updateFlag(element) {
  let currCode = element.value;              // Get selected currency code
  let countryCode = countryList[currCode];   // Get matching country code
  if (countryCode) {
    const newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    element.parentElement.querySelector("img").src = newSrc; // Change image source
  }
}

// This function fetches and updates the exchange rate
async function updateExchangeRate() {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;

  // Check if input is valid; if not, set it to 1
  if (amtVal === "" || isNaN(amtVal) || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  // Build API URL for selected "from" currency
  const url = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

  try {
    // Fetch exchange rate data from the API
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    // Get the conversion rate from selected "from" to "to" currency
    const rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    if (!rate) throw new Error("Rate not found");

    // Multiply input amount by conversion rate and show the result
    const finalAmount = (amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (err) {
    msg.innerText = "Failed to fetch exchange rate.";
    console.error("Error:", err);
  }
}

// When the "Get Exchange Rate" button is clicked, fetch and display the rate
btn.addEventListener("click", (e) => {
  e.preventDefault();        // Prevent form from reloading the page
  updateExchangeRate();      // Call the function to update rate
});

// Automatically show exchange rate when the page loads
window.addEventListener("load", updateExchangeRate);
