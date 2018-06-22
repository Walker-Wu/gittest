var map

function initBMap() {
    map = new BMap.Map("allmap", { enableMapClick: false });            // 创建Map实例，并关闭底图可点功能
    var point = new BMap.Point(lng, lat); // 创建点坐标
    map.centerAndZoom(point, 19);
    map.enableScrollWheelZoom();                 //启用滚轮放大缩小

    var top_left_control = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT });// 左上角，添加比例尺
    map.addControl(top_left_control);

    var canvasLayer = new BMap.CanvasLayer({
        update: update
    });

    map.addOverlay(canvasLayer);
}

function update() {
    var ctx = this.canvas.getContext("2d");

    if (!ctx) {
        return;
    }

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //ctx.fillStyle = "rgba(50, 50, 255, " + x + ")";
    ctx.fillStyle = "rgba(50, 50, 255, 0.3 )";
    ctx.strokeStyle = "rgba(50, 50, 255, 0.7)";

    var data = [];
    var dataNew = [];
    for (var i = 0; i < coordData.length; i++) {
        data.push(new BMap.Point(coordData[i][0], coordData[i][1]));
        dataNew.push(new BMap.Point((coordData[i][0] + 0.00018), (coordData[i][1]) + 0.00016));
    }

    drawGrids(data, dataNew, ctx);

}
function drawGrids(sw, ne, ctx) {

    for (var i = 0, len = sw.length; i < len; i++) {
        ctx.beginPath();

        // 绘制时需要对经纬度进行转换
        var pixel = map.pointToPixel(sw[i]);
        var pixelNew = map.pointToPixel(ne[i]);
        //ctx.fillRect(pixel.x, pixel.y, 10, 10);
        /*
         var pixelNew = {};
         pixelNew.x = pixel.x + 10;
         pixelNew.y = pixel.y + 10;
         */
        ctx.moveTo(pixel.x, pixel.y);
        ctx.lineTo(pixel.x, pixelNew.y);
        ctx.lineTo(pixelNew.x, pixelNew.y);
        ctx.lineTo(pixelNew.x, pixel.y);
        ctx.lineTo(pixel.x, pixel.y);
        //ctx.closePath();  //效率低于lineTo
        ctx.stroke();
        ctx.fill();
    }
 
}

