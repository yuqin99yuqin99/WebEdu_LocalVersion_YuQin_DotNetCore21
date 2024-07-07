//起点JS
(function () {
  'use strict';

  // TODO add service worker code here
    if ('serviceWorker' in navigator) { //必须是HTTPS协议（未真正使用HTTPS协议时无法实现离线缓存、推送通知等等？）。相关数据，在浏览器右击菜单的DevTools的Application面板查看。
    navigator.serviceWorker
        .register('./ServiceWorkers.js')  //Web浏览器的 Service Workers组件，包含系列对象，协助实现PWA功能。一个Service worker文件，例如sw.js需要像这样放置在根目录中，在你的PWA中开始service workers，如果你的应用程序的JS文件是app.js，你需要去注册service workers在你的app.js文件
             .then(function() { console.log('Service Worker Registered'); });
  }


})();