// navigation éléments navbar

$(function () {

    $(".navbar a").on("click", function (e) {

        e.preventDefault();
        let hash = this.hash;

        $('html').animate({ scrollTop: $(hash).offset().top }, 800, function () { window.location.hash = hash; });

    });

})

// bouton retour en haut

