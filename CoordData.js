var lng = 113.364805;
var lat = 23.140929;


var coordData = [];
for (var i = 0; i < 100; i++) {
    coordData.push([lng + Math.random() / 100, lat + Math.random() / 100]);
    coordData.push([lng + Math.random() / 100, lat - Math.random() / 100]);
    coordData.push([lng - Math.random() / 100, lat - Math.random() / 100]);
    coordData.push([lng - Math.random() / 100, lat + Math.random() / 100]);
}
