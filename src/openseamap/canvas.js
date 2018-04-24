var main = (function(){
    
    
    //init = function(){
        //var stage = new createjs.Stage("demoCanvas");
        //var circle = new createjs.Shape();
        //circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        //circle.x = 100;
        //circle.y = 100;
        //stage.addChild(circle);
        //stage.update();
    //};
    
(function () {
	function zeichnen() {
		var element = document.getElementById('map');
		if (element.getContext) {
			var context = element.getContext('2d');
			var grad = context.createLinearGradient(0, 0, 0, 30);
			grad.addColorStop(0, "white");
			grad.addColorStop(1, "#888888");
			context.fillStyle = grad;
			context.fillRect(0, 0, 150, 30);
		}
	}
	document.addEventListener("DOMContentLoaded", function () {
		zeichnen();
	});
}());

    
    
})();