let rating = 0;

$(".rating span").on("click", function(){

    $(".rating span").not(this).removeClass("click");
    $(this).toggleClass("click");
    rating = this.innerText;
})

$("button").on("click", function() {
    if($(".rating span").hasClass("click")){
        $(".card").hide();
        $(".selectedRating").text("You selected " + rating + " out of 5");
        $(".thankYouCard").show();
    }
})

