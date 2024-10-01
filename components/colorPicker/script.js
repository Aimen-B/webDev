var values = document.getElementById("colorscontent");
var startColor = "#8d69fb";
document.body.style.backgroundColor = startColor;

var colorPicker = new iro.ColorPicker("#picker", {
  width: 250,
  color: startColor,
	borderWidth: 1,
  borderColor: "#fff",
});

colorPicker.on('color:change', function(color) {
	values.innerHTML = [
		"hex: " + color.hexString,
		"rgb: " + color.rgbString,
		"hsl: " + color.hslString,
	].join("<br>");
	if(color.hsl.l < 25 || (color.hsl.l < 60 && (color.hsl.h < 45 || color.hsl.h > 180))) {
		document.getElementById('colorscontent').style.color = '#fff';
	} else {
		document.getElementById('colorscontent').style.color = '#2f3640';
	}
	document.body.style.backgroundColor = color.hexString;
});