/**
 * Created by mariano on 2/11/17.
 */

function init() {
    // code here.


    var stage = new createjs.Stage("game_canvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    stage.update();
}

$('#toggle').click(function () {
    screenfull.toggle($('#game_canvas')[0]);
});