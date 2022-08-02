$(".js-open-modal").on("click", (event) => {
	$(".modal").fadeIn();
	$(".overlay").fadeIn();
});

$(".js-close-modal").on("click", (event) => {
	$(".modal").fadeOut();
	$(".overlay").fadeOut();
	$(".js-open-modal").fadeOut();
});
