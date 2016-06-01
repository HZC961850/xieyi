$(function() {
	(function($) {
		var showFlag = true;
		$(" nav>div .box a").eq(6).on("click", function() {
			if (showFlag) {
				$(" nav").css({
					height: "256"
				});
				$(" nav .menu").show();
				$("#content .place").css({
					height: "257"
				});
				showFlag = !showFlag;
			} else {
				$(" nav").css({
					height: "70"
				});
				$(" nav .menu").hide();
				$("#content .place").css({
					height: "71"
				});
				showFlag = !showFlag;
			}
		});

		$(window).resize(function() {
			if ($(window).width() > 900) {
				$(" nav").css({
					height: "70"
				});
				$("nav .menu").hide();
				$("#content .place").css({
					height: "71"
				});
				showFlag = true;
			}
		})
	}(jQuery));
});