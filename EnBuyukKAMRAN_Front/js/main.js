if (window.scrollY != 0) {
    $(".navbar-scrolled").css({
        "box-shadow": "0 10px 20px #ccc"
    })

} else {
    $(".navbar-scrolled").css({
        "box-shadow": "0 0 0"
    })
}

// slider show and hide

$(window).scroll(function () {

    var top = 300;

    var changelogo = $(".navbar-scrolled").data("src");

    var img = $(".navbar-scrolled img");

    if (window.scrollY == 0) {

        $(".navbar-scrolled").slideDown("1000");

        img.attr("src", "img/logo-dark.png");

        $(".navbar-scrolled a").css({
            "color": "#fff",

        }); 

        $(".navbar-scrolled").css({
            "box-shadow": "0 0 0"
        })


    } else {

        if (window.scrollY < top) {

            $(".navbar-scrolled").hide();

            img.attr("src", `img/${changelogo}`);

            $(".navbar-scrolled a").css("color", "black");

            $(".navbar-scrolled").css({
                "box-shadow": "0 10px 20px #ccc"
            })

            $(".navbar-scrolled").css({
                "position": "fixed",
                "width": "100%",
                "background-color": ""
            })


        } else {
            $(".navbar-scrolled").slideDown("fast");

            img.attr("src", `img/${changelogo}`);

            $(".navbar-scrolled").css({
                "position": "fixed",
                "width": "100%",
                "background-color": "#fff"
            })

        }
    }


})


var slider = document.querySelector("#slider");
var right = document.querySelector(".right");
var left = document.querySelector(".left");

// Novbeti shekle kece bilmesi ucun funksiya yaziriq

function rightSide() {
    var active = document.querySelector(".activeImg");
    if (active.nextElementSibling != null) {

        active.nextElementSibling.classList.add("activeImg");
        active.classList.remove("activeImg");
    } else {
        slider.children[0].children[0].classList.add("activeImg");
        active.classList.remove("activeImg");
    }
}

function leftSide() {
    var active = document.querySelector(".activeImg");
    if (active.previousElementSibling != null) {
        active.previousElementSibling.classList.add("activeImg");
        active.classList.remove("activeImg");
    } else {
        var count = slider.children[0].childElementCount;
        slider.children[0].children[count - 1].classList.add("activeImg");
        active.classList.remove("activeImg");
    }
}

// click event'inde novbeti shekle kecsin deye
right.addEventListener("click", rightSide);
left.addEventListener("click", leftSide);

// sol ve ya sag buttonu basanda novbeti shekle kecsin deye
document.body.addEventListener("keydown", function (e) {
    console.log(e.which);
    if (e.which == 39) {
        rightSide();
    }
});

document.body.addEventListener("keydown", function (e) {
    if (e.which == 37) {
        leftSide();
    }
});



$("#left").click(function () {

    var slide = $(".slider-content").children(".anim");

    if (slide.next().length != 0) {
        slide.animate({ "margin-right": "0" });
        slide.animate({ "margin-left": "-=1140px" }, 1000);
        slide.next().animate({ "margin-left": "0" }, 1000)
        slide.next().addClass("anim");
        slide.removeClass("anim");
    }

})


$("#right").click(function () {

    var slide = $(".slider-content").children(".anim");

    if (slide.prev().length != 0) {
        slide.animate({ "margin-right": "0" });
        slide.animate({ "margin-left": "+=1140px" }, 1000);
        slide.prev().animate({ "margin-left": "+=1140" }, 1000)
        slide.prev().addClass("anim");
        slide.removeClass("anim");
    }
})


