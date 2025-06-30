💱 Currency Converter Web Application
A fully responsive and interactive Currency Converter Web App built using HTML, CSS, and Vanilla JavaScript, which fetches real-time exchange rates via a public REST API. This project demonstrates your understanding of DOM manipulation, asynchronous API calls, dynamic content rendering, and basic web styling—all without any external frameworks.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🧩 Project Overview
This project allows users to:

Convert a given amount from one currency to another instantly.

Select from over 160 global currencies.

Automatically view the latest exchange rate.

Visually recognize selected currencies via country flags.

Experience a clean, user-friendly interface.

It’s ideal for travel planning, quick conversions, and demonstrates practical usage of APIs and dynamic form handling in frontend web development.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🎯 Objectives
Master the basics of JavaScript and DOM Manipulation.

Learn to work with fetch API and handle asynchronous data.

Apply responsive design using CSS Flexbox.

Dynamically populate dropdowns and update UI elements based on user interactions.

Use public APIs for real-world application development.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🛠️ Tech Stack & Tools
Technology	Purpose
HTML5	Page structure
CSS3	Styling and layout
JavaScript (ES6)	Interactivity, API calls, DOM updates
Currency API	Real-time exchange rates
Font Awesome	Iconography
FlagsAPI	Country flag rendering
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📦 Folder Structure
currency-converter/
├── index.html         # HTML structure
├── style.css          # All styling rules
├── app.js             # Core logic: DOM, API fetch, update handling
├── codes.js           # Currency-code to country-code mapping
└── README.md          # Project documentation
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🖥️ How It Works
👨‍💻 User Interaction:
Input Amount – User enters an amount in the input field.

Select Currencies – Choose currencies from dropdowns (e.g., USD to INR).

Fetch Rate – Click the "Get Exchange Rate" button.

Real-Time Response – The app fetches the latest exchange rate and displays the converted amount dynamically.

Flag Update – The app auto-updates flags based on selected currencies.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔄 Behind the Scenes:
codes.js contains a mapping of currency codes to country codes (e.g., INR → IN) for flag rendering.

On every selection change or form submission:

The app builds a dynamic API URL using the selected currency.

Uses fetch() to retrieve JSON data from the jsDelivr-hosted Currency API.

Multiplies the exchange rate with the entered amount.

Updates the message box with the final result.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
📷 Screenshots
Desktop View:
![image](https://github.com/user-attachments/assets/ccc5169d-879c-4b47-8a24-dd006366e301)
Mobile View:
![WhatsApp Image 2025-06-30 at 11 12 00_a0deb15c](https://github.com/user-attachments/assets/1fafdbdc-8a9f-41d0-a639-dfd403ead259)


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🚀 Live Demo
👉 Click here to try it live

https://ameyxyz.github.io/Currency-Converter/
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📚 What I Learned
✅ Working with asynchronous operations using async/await
✅ Populating elements dynamically using JavaScript
✅ Handling user input validation and edge cases
✅ Using external APIs for real-world data
✅ Enhancing UX with visual feedback (icons, flags, error messages)
✅ Writing clean, maintainable code with comments
