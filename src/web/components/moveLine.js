function $(id) {
	return document.getElementById(id)
}
window.onload = function() {
	var oBox = $("box"),
		omoveLeft = $("moveLeft"),
		omoveRight = $("moveRight"),
		oLine = $("line");
	oLine.onmousedown = function(e) {
		var disX = (e || event).clientX;
		oLine.left = oLine.offsetLeft;
		document.onmousemove = function(e) {
			var iT = oLine.left + ((e || event).clientX - disX);
			var e = e || window.event,
				tarnameb = e.target || e.srcElement;
			var maxT = oBox.clientWight - oLine.offsetWidth;
			oLine.style.margin = 0;
			iT < 0 && (iT = 0);
			iT > maxT && (iT = maxT);
			oLine.style.left = omoveLeft.style.width = iT + "px";
			omoveRight.style.width = oBox.clientWidth - iT + "px";
			$("msg").innerText = 'top.width:' + oLine.style.width + '---bottom.width:' + omoveRight.style.width + '---oLine.offsetLeft:' + oLine.offsetLeft + '---disX:' + disX + '---tarnameb:' + tarnameb.tagName;
			return false
		};
		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
			oLine.releaseCapture && oLine.releaseCapture()
		};
		oLine.setCapture && oLine.setCapture();
		return false
	};
};

