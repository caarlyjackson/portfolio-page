const portfolioHoriseon = {
    title: "Horiseon Website",
    date: "APR2021",
    description: "For the client, Horiseon, we refactored their existing code, and therefore, website, using HTML semantic structure to build and improve their current website to the set of standards of new technology, as well as optimising the site for search engines. In doing this, the following semantic elements were incorporated: article, aside, header and footer, sucessfully replacing the vastly used division element.",
    linkWebsite: "",
    linkGitHub: "https://caarlyjackson.github.io/Horiseon_Website/"
}
const portfolioTravelApp = {
    title: "The ANZAC Travel App",
    date: "APR2021",
    description: "The ANZAC Bubble Travel App is a dynamic, user friendly, and convenient travel and accomodation searcher for Australians that are keen to visit our New Zealand neighbours! The application provides each user with the option to search by a range of categories, including the prefered city they'd like to explore, the price range of their choosing and the number of adults traveling. Additionally, the app provides the keen traveller with the current weekly weather forecast of their chosen city, displaying a brief description, temperature reading, the average wind speed, humidity percentage and a cute weather icon for the day.",
    linkWebsite: "https://caarlyjackson.github.io/The-ANZAC-Bubble-Travel-App/",
    linkGitHub: "https://github.com/caarlyjackson/The-ANZAC-Bubble-Travel-App"
}

const count = "";

$(document).ready(function () {
    // Activate Carousel
    $("#carousel").carousel({ interval: 700, pause: "hover" });

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#carousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#carousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#carousel").carousel(2);
    });
    $(".item4").click(function () {
        $("#carousel").carousel(3);
    });

    // Enable Carousel Controls
    $(".left").click(function () {
        $("#carousel").carousel("prev");
        count++;
        $("#PortfolioCard").text(portfolioHoriseon[count]);
        console.log(count);
    });
    $(".right").click(function () {
        $("#carousel").carousel("next");
        count--;
    });


    // Append Portfolio text content cards

    // Situation two: if the slide is active (viewing), the class "active" is appended. If not the class is removed.
    // On "active" class, the style.display = "block", which then shows the card with that particular slide's description.
    if ($(".item") === $(".active")) {
        $(".isActive").style.display = "block";
    }

    // Situation one: if the slide === true - it's currently active (being viewed) the appropriate card is appended.
    if ($(".item1") === true) {
        var PortfolioContentCard = $("<div>").attr("class", "PortfolioContentCard");
        // Date, Title, Description
        var date = $("<h6>").text("APR2021");
        var workTitle = $("<h4>").text("Horiseon Website").attr("class", "website-1-heading");
        var description = $("<p>").text("For the client, Horiseon, we refactored their existing code, and therefore, website, using HTML semantic structure to build and improve their current website to the set of standards of new technology, as well as optimising the site for search engines. In doing this, the following semantic elements were incorporated: article, aside, header and footer, sucessfully replacing the vastly used division element.").attr("class", "portfolioDescription");
        var linkToWebsiteTEXT = $("<p>").text("<a href='https://caarlyjackson.github.io/Horiseon_Website/'>GitHub</a>").attr("class", "PortfolioTextLink");
        var linkToWebsiteHTML = $("<p>").html("<a href='https://caarlyjackson.github.io/Horiseon_Website/'>GitHub</a>").attr("class", "PortfolioTextLink");
        var linkToGitHub = $("<p>").text("Humidity: " + filteredForecast[i].main.humidity + '%').attr("class", "websiteLink");
        PortfolioContentCard.append(date, workTitle, description, p3);
        $("#PortfolioCard").append($(PortfolioContentCard));
    }
});

function matchimage() {
    var targetposition = Math.abs($('.carousel-indicators').position().left);
    var matchthis = targetposition;
    var visible = $('.carousel-indicators li').filter(function () { return $(this).position().left == matchthis }).index();
    var value = $('.slider img').value;
    $("#count").html(portfolioHoriseon);
}




const portfolioPageViewButton = document.querySelector("#portfolioButton");
const homeButtonTitle = document.querySelector(".secondTitle"); // Title link
const homeButtonNav = document.querySelector("#HomeButton"); // Small Navigation link

const portfolioPage = document.querySelector(".portfolioPage")
const home = document.querySelector(".home")

// Home
homeButtonNav.addEventListener("click", function () {
    portfolioPage.style.display = "none";
    home.style.display = "block";
});

homeButtonTitle.addEventListener("click", function (event) {
    event.preventDefault();
    portfolioPage.style.display = "none";
    home.style.display = "block";
})

// Portfolio
portfolioPageViewButton.addEventListener("click", function () {
    home.style.display = "none";
    portfolioPage.style.display = "block";
});


function copyEmail() {
    /* Get the text field */
    var copyText = document.getElementById("emailCopyContent").value;

    /* Select the text field */
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    const div = document.createElement("div")
    div.classList.add("alertMessage");
    const copiedAlertDisplay = document.createTextNode('email successfully copied');
    div.appendChild(copiedAlertDisplay);
    document.body.appendChild(div);
}
