const portfolioGridPage = document.querySelector("#portfolioGridPage");   // Main portfolio page
const portfolioFullNavigation = document.querySelector("#portfolio-Full-Navigation");   // Portfolio Full View Navigation Column

// CODE QUIZ
const CodeQuizButton = document.querySelector("#codeQuizBtn");   // Code Quiz view button
const CodeQuizPage = document.querySelector("#portfolio-CodeQuizFull");   // Code Quiz page
CodeQuizButton.addEventListener("click", function () {
    portfolioGridPage.style.display = "none";
    portfolioFullNavigation.style.display = "block";
    CodeQuizPage.style.display = "block";
});

// WEATHER DASHBOARD
const WeatherDashboardButton = document.querySelector("#WeatherDashboardBtn");   // Weather Dashboard button
const WeatherDashboardPage = document.querySelector("#portfolio-WeatherDashboardFull");   // Weather Dashboard page
WeatherDashboardButton.addEventListener("click", function () {
    portfolioGridPage.style.display = "none";
    portfolioFullNavigation.style.display = "block";
    WeatherDashboardPage.style.display = "block";
});