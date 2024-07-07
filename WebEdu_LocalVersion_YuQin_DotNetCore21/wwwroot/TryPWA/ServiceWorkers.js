var cacheName = 'pwa-commits-v3'; //声明缓存存储的名称。

var filesToCache = [ //PWA应用软件的静态基本框架（也称为Shell壳），基于静态基本框架，更新动态数据。
    './',
    './css/style.css',
    './images/books.png',
    './images/Home.svg',
    './images/ic_refresh_white_24px.svg',
    './images/profile.png',
    './images/push-off.png',
    './images/push-on.png',
    './js/app.js',
    './js/menu.js',
    './js/offline.js',
    './js/toast.js'
];

// Install Service Worker
self.addEventListener('install', function (event) { //Install(service workers的生命周期之一)：在用户第一次访问HTML/Razor时触发安装事件。在这个阶段中，service workers被安装在浏览器中。在安装过程中，您可以将Web app的所有静态资产缓存下来。

    console.log('Service Worker: Installing....');

    event.waitUntil(

        // Open the Cache
        caches.open(cacheName).then(function(cache) {
            console.log('Service Worker: Caching App Shell at the moment......');

            // Add Files to the Cache
            return cache.addAll(filesToCache); //变量代表的所有文件要缓存的阵列
        })
    );
});


// Fired when the Service Worker starts up
self.addEventListener('activate', function (event) { //activate(service workers的生命周期之一)：当service worker启动时，此事件将被触发.在这里， service worker每当应用壳(app shell)文件更改时都更新其缓存。

    console.log('Service Worker: Activating....');

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(cacheNames.map(function(key) {
                if( key !== cacheName) {
                    console.log('Service Worker: Removing Old Cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});


self.addEventListener('fetch', function (event) { //Fetch(service workers的生命周期之一)：：此事件作用与于从服务器端的数据缓存到 app壳中。caches.match()解析了触发Web请求的事件，并检查它是否在缓存中获得数据。然后，它要么响应于缓存版本的数据，要么用fetch从网络中获取数据。用 e.respondWith()方法来响应返回到Web页面。

    console.log('Service Worker: Fetch', event.request.url);

    console.log("Url", event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});


// triggered everytime, when a push notification is received.
self.addEventListener('push', function(event) {

  console.info('Event: Push');

  var title = 'New commit on Github Repo: RIL';

  var body = {
    'body': 'Click to see the latest commit',
    'tag': 'pwa',
    'icon': './images/48x48.png'
  };

  event.waitUntil(
    self.registration.showNotification(title, body)
  );
});


self.addEventListener('notificationclick', function(event) {

  var url = './latest.html';

  event.notification.close(); //Close the notification

  // Open the app and navigate to latest.html after clicking the notification
  event.waitUntil(
    clients.openWindow(url)
  );

});

