//���JS
(function () {
  'use strict';

  // TODO add service worker code here
    if ('serviceWorker' in navigator) { //������HTTPSЭ�飨δ����ʹ��HTTPSЭ��ʱ�޷�ʵ�����߻��桢����֪ͨ�ȵȣ�����������ݣ���������һ��˵���DevTools��Application���鿴��
    navigator.serviceWorker
        .register('./ServiceWorkers.js')  //Web������� Service Workers���������ϵ�ж���Э��ʵ��PWA���ܡ�һ��Service worker�ļ�������sw.js��Ҫ�����������ڸ�Ŀ¼�У������PWA�п�ʼservice workers��������Ӧ�ó����JS�ļ���app.js������Ҫȥע��service workers�����app.js�ļ�
             .then(function() { console.log('Service Worker Registered'); });
  }


})();