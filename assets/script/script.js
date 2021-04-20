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
    });
    $(".right").click(function () {
        $("#carousel").carousel("next");
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