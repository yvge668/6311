 var danmuList = [
  "我爱中国",
  "此生无悔入华夏",
  "祝愿祖国繁荣昌盛",
  "月是华夏明，家居祖国亲!",
  "改革开放魅力无限，和谐中国精彩有约"
];

function createDanmu() {
  var danmuText = danmuList[Math.floor(Math.random() * danmuList.length)];
  var danmuColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  var danmuSpeed = Math.floor(Math.random() * 10) + 5;
  var danmuTop = Math.floor(Math.random() * 150) + 25;

  var danmu = document.createElement('div');
  danmu.className = 'danmu';
  danmu.style.color = danmuColor;
  danmu.style.top = danmuTop + 'px';
  danmu.style.animation = 'danmu ' + danmuSpeed + 's linear';
  danmu.innerHTML = danmuText;

  var container = document.getElementById('danmu-container');
  container.appendChild(danmu);

  setTimeout(function() {
    danmu.remove();
  }, danmuSpeed * 1000);
}

function sendDanmu() {
  var danmuText = document.getElementById('danmu-text').value;
  if (danmuText.trim() !== '') {
    danmuList.push(danmuText);
    document.getElementById('danmu-text').value = '';
  }
}

document.getElementById('danmu-send').addEventListener('click', sendDanmu);

setInterval(function() {
  createDanmu();
}, 400);

document.getElementById('danmu-input').addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    sendDanmu();
  }
});