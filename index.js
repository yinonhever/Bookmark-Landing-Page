// MANAGING THE MOBILE HEADER NAVIGATION

let menuOpen = false;

$(".header__nav-toggle").click(function () {
    menuOpen = !menuOpen;
    $(".header").toggleClass("stretch");
    $(".header__navigation").toggleClass("visible");
    $("body").toggleClass("no-scroll");

    if (menuOpen) {
        setTimeout(function () {
            $(".header__nav-toggle").prop("src", "images/icon-close.svg");
            $(".header .logo").prop("src", "images/logo-bookmark-white.svg");
        }, 300);
    }
    else {
        setTimeout(function () {
            $(".header__nav-toggle").prop("src", "images/icon-hamburger.svg");
            $(".header .logo").prop("src", "images/logo-bookmark.svg");
        }, 150);
    }
})


// MANAGING THE TAB SECTION

const firstTab = $(".tabs__tab:first-child");
let tabID = firstTab.attr("id");
let panelID = tabID + "__panel";

$("#" + tabID).addClass("active");
$("#" + panelID).addClass("active");

$(".tabs__tab").click(function () {
    $(".tabs__tab").removeClass("active");
    $(".tabs__panel").removeClass("active");

    tabID = $(this).attr("id");
    panelID = tabID + "__panel";

    $(this).addClass("active");
    $("#" + panelID).addClass("active");
})


// MANAGING THE ACCORDION

$(".accordion__top").click(function () {
    let topID = $(this).attr("id");
    let contentID = topID + "__content";

    $(this).toggleClass("active");
    $("#" + contentID).toggleClass("active");
})


// MANAGING THE FORM 

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

$(".newsletter__form").on("submit", function(event) {
    event.preventDefault();
    let email = $(".newsletter__input").val();
    
    if(validateEmail(email)) {
        $(".newsletter__form, .newsletter__input-wrapper, .newsletter__input").removeClass("error");
        $(".newsletter__input").val("");
        $(".newsletter__form").addClass("success");
    }
    else {
        $(".newsletter__form").removeClass("success");
        $(".newsletter__form, .newsletter__input-wrapper, .newsletter__input").addClass("error");
    }
})


