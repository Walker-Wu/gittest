//生成指定范围内的随机数
//公式：Math.floor(Math.random()*(max-min+1)+min);
// max - 期望的最大值
// min - 期望的最小值

var lng = 113.364805;
var lat = 23.140929;


var coordData = [];
for (var i = 0; i < 200; i++) {
    coordData.push([lng + Math.random() / 1000, lat + Math.random() / 1000]);
    coordData.push([lng + Math.random() / 1000, lat - Math.random() / 1000]);
    coordData.push([lng - Math.random() / 1000, lat - Math.random() / 1000]);
    coordData.push([lng - Math.random() / 1000, lat + Math.random() / 1000]);
}

var gridArr = [];// minLng, minLat, maxLng, maxLat
var opt = {};
var gridData = [];
for (var i = 0; i < 100; i++) {
    gridArr[0] = lng - Math.random() / 1000;// minLng
    gridArr[1] = lat + Math.random() / 1000;// minLat
    gridArr[2] = lng + Math.random() / 1000;// maxLng
    gridArr[3] = lat - Math.random() / 1000;// maxLat
    opt.fillStyle = "rgba(50, 50, 255, 0.3 )";
    opt.strokeStyle = "rgba(50, 50, 255, 0.7)";
    gridData.push({ gridArr, opt });
}
