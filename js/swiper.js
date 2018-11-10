(function() {
	var container = document.getElementById("container");
	var swiper = document.getElementById("swiper");
	var onLeft = document.getElementById("left");
	var onRight = document.getElementById("right");
	var page = document.getElementById("page");
	var child = page.getElementsByTagName("li");
	var len = child.length;
	var cur = 0;
	var timer = null;
	//定时调用，自动播放
	timer = setInterval(function () {
		goNext();
		pointMove();
	}, 3000);
	//前进
	function goNext() {
		cur = cur <= -300 ? 100 : cur;
		cur -= 100;
		swiper.style.left = cur + "%"; 
	}
	//后退
	function goPre() {
		cur = cur > -100 ? -400 : cur;
		cur += 100;
		swiper.style.left = cur + "%"; 
	}
	//左按钮点击事件
	onRight.onclick = function() {
		goNext();
		pointMove();
	}
	//右按钮点击事件
	onLeft.onclick = function() {
		goPre();
		pointMove();
	}
	//改变下标状态
	function pointMove() {		
		Array.prototype.forEach.call(child, function(item, index){
			if (Math.floor(Math.abs(cur/100)) == index) {
				item.className = "open";
			} else {
				item.className = "";
			}
		}); 
	}
// 	for (var i=0;i<len;i++) {
// 		
// 		child[i].onclick = function() {
// 			child[i].style.opacity = "1";
// 			cur = i*100 + "%";
// 			
// 		}
// 	}
	//下标点击事件
	Array.prototype.forEach.call(child, function(item, index) {
		item.onclick = function() {
			cur = index * (-100);
			swiper.style.left = cur + "%";
			pointMove();
		}
	})
	//鼠标放置在图片上，停止播放
	container.onmouseover = function() {
		clearInterval(timer);
	}
	//移开鼠标，继续播放
	container.onmouseout = function() {
		timer = setInterval(function () {
			goNext();
			pointMove();
		}, 3000);
	}
})();
