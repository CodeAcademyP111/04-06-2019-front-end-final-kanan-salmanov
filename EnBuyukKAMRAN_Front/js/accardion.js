$(document).ready(function () {

    $("h6").click(function () {
        if (!$(this).next().hasClass("stop")) {
            $(this).next().addClass("stop");
            $(this).next().hide(100);
            this.lastChild.children[0].classList.replace("fa-minus", "fa-plus")
        } else {
            $(this).next().removeClass("stop");
            $(this).next().show(100);
            this.lastChild.children[0].classList.replace("fa-plus", "fa-minus")
        }
    })
  

        $(window).scroll(function() {
            if (scrollY > 140) {
                $("header").css("boxShadow","0 10px 20px #ccc");
            } else {
                $("header").css("boxShadow","0px 0px 0px lightgray");
            }
        })
    

})