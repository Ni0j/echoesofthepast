var map = L.map('map').setView([40.73610, -73.99093], 20);

// 添加OpenStreetMap的瓦片图层
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href=" ">OpenStreetMap</a > contributors'
}).addTo(map);

// 准备多个坐标数据
var locations = [
    { lat: 40.73610, lng: -73.99093, url: 'https://example.com/location1', img: './img/1.jpg' },
    { lat: 51.51, lng: -0.1, url: 'https://example.com/location2', img: 'images/marker-icon.png' },
    { lat: 51.515, lng: -0.12, url: 'https://example.com/location3', img: 'images/marker-icon.png' }
];

// 遍历每个坐标，添加标记
locations.forEach(function(location) {
    // 创建一个自定义图标
    var customIcon = L.icon({
        iconUrl: location.img, // 使用本地图片路径
        iconSize: [50, 50], // 图标大小
        className: 'bouncing-icon' // 使用CSS类使图标“弹跳”
    });

    // 添加标记并绑定点击事件
    var marker = L.marker([location.lat, location.lng], { icon: customIcon }).addTo(map);
    marker.on('click', function() {
        window.location.href = location.url; // 点击后跳转到指定页面
    });
});