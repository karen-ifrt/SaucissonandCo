// navigation éléments navbar

$(function () {

    $(".navbar a").on("click", function (e) {

        e.preventDefault();
        let hash = this.hash;

        $('html').animate({ scrollTop: $(hash).offset().top }, 800, function () { window.location.hash = hash; });

    });

})

// bouton retour en haut

mybutton = document.getElementById("myBtn");

window.addEventListener("scroll", function(){
  if (document.documentElement.scrollTop > 200) {
    mybutton.style.bottom = "40px";

  } else {
    mybutton.style.bottom = "-100px";
  }
});

function topFunction() {
    $("html").animate({ scrollTop: "0" }, "1500");
}