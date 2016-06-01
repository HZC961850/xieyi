$(function() {
	(function($) {
		var index = 0;
		// 轮播图
		$(".swiper-inner a").eq(0).clone().appendTo($(".swiper-inner"));//克隆到结尾
		var timer = setInterval(function() {
			var perWidth = $(".swiper-container").width();//每一个轮播的宽度
			index++;
			$(".swiper-inner").stop().animate({
				left:-index * perWidth
			},function() {
				if (index == $(".swiper-inner a").size() - 1) {
					$(".swiper-inner").css("left",0);
					index = 0;
				}
			});
		},3000);
		
		// 底下的瀑布流
		var address = ["img/Drawing-1.png","img/Drawing-2.png","img/Drawing-3.png","img/Drawing-4.png","img/Drawing-5.png","img/Drawing-6.png","img/Drawing-7.png","img/Drawing-8.png","img/Drawing-9.png","img/Drawing-10.png","img/Drawing-11.png","img/Drawing-12.png"];
		
		function rnd(min, max) {
			return parseInt(Math.random()*(max-min+1))+min;
		} //随机函数
		
		var Value = [];
		while(Value.length < address.length) {
			var r = rnd(0, 11);
			if (Value.indexOf(r) == -1) {
				Value.push(r);
			}//将随机数加入到数组中
		}
		
		function create() {
			for (var i = 0; i < Value.length; i++) {
				zhi = Value[i];
//				console.log(zhi);
				var minHeight = $(".dynamic li").eq(0);
				for (var j = 0; j < $(".dynamic li").size(); j++) {
					if (minHeight.height() > $(".dynamic li").eq(j).height()) {
						minHeight = $(".dynamic li").eq(j);
					}
				}
				
				var Div = $("<div/>");//创建div
				Div.html("<div><div><img src='img/Drawing-seo.png'/><p>图片标题</p></div></div><img src=' "+ address[zhi] + "'/>");
				minHeight.append(Div);
			}
		}
		
		
		function getPosition(element) {
			var oP = element.offsetParent;
			var x = element.offsetLeft;
			var y = element.offsetTop;
			while(oP) {
				x = oP.clientLeft + x + oP.offsetLeft;
				y = oP.clientTop + y + oP.offsetTop;
				oP = oP.offsetParent;
			}
			return {
				x:x,
				y:y
			}
		}

		create();

		var wrap = document.getElementById('wrap');
		window.onscroll = function() {
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			if (getPosition(wrap).y + wrap.offsetHeight <= document.documentElement.clientHeight + scrollTop) {
				create();
			}
		}
		
		$(".block img").click(function() {
			//兼容ie
			$("html,body").animate({
				scrollTop:0
			},1000);
		});
	}(jQuery));
});