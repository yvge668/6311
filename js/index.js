// 获取要固定位置的div元素和它距离顶部的距离
var myDiv = document.getElementById("myDiv");
var offsetTop = myDiv.offsetTop;

// 获取返回顶部的按钮元素
var backToTopBtn = document.getElementById("backToTop");

// 监听页面的滚动事件
window.addEventListener("scroll", function() {
//   获取当前滚动距离
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  
  if (scrollTop > offsetTop) {
    // 当滚动距离超过一定值时，固定位置的div元素会停止滚动，返回顶部的按钮会显示出来
    myDiv.style.position = "fixed";
    myDiv.style.top = 0; // 固定距离值为50px
    backToTopBtn.style.display = "block";
  } else {
    // 否则它们会隐藏
    myDiv.style.position = "absolute";
    myDiv.style.top = '90px';
    backToTopBtn.style.display = "none";
  }
});

function centerDiv() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var divWidth = myDiv.offsetWidth;
    var divHeight = myDiv.offsetHeight;
    var left = (screenWidth - divWidth) / 2;
    var top = (screenHeight - divHeight) / 2;
    myDiv.style.left = left + "px";
    myDiv.style.top = top + "px";
  }
  window.onload = centerDiv;
  window.onresize = centerDiv;

// 监听返回顶部按钮的点击事件
backToTopBtn.onclick = function() {
  // 使用JavaScript的scrollTo方法将页面滚动到顶部
  window.scrollTo(0, 0);
}

function centerDiv() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var divWidth = myDiv.offsetWidth;
    var divHeight = myDiv.offsetHeight;
    var left = (screenWidth - divWidth) / 2;
    var top = (screenHeight - divHeight) / 2;
    myDiv.style.left = left + "px";
    myDiv.style.top = top + "px";
  }
  window.onload = centerDiv;
  window.onresize = centerDiv;