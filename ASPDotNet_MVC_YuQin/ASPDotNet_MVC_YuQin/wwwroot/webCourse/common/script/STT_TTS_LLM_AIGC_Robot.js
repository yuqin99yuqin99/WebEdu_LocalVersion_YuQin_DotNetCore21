//注：API 密钥建议通过后端代理转发请求,不要将密钥直接暴露在前端代码。不同LLM的API请参考官方文档调整。
function updateTranscript() {
                // 将speechContent对象格式化为JSON字符串，并显示在页面上
               document.getElementById('transcript').textContent = JSON.stringify(speechContent, null, 2); 
            }

function fnOnLoad() {                     
            var isRecognizing = false; // 是否正在识别
            var recognition = null; // 语音识别实例
           var speechContent = {  paragraphs: []   }; // 存储识别内容
          // var speechContent = {[]}; // 存储识别内容
            var currentParagraph = { sentences: [] }; // 当前段落
           // var currentParagraph = { [] }; // 当前段落
           var initialText =  document.getElementById('transcript').textContent; // 是否已初始化
            window.transcriptForTTS="";
            
            window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
                        
            if (!window.SpeechRecognition) {
                alert("您的浏览器不支持语音识别。请使用最新版本的 Chrome 或 Edge。");
                document.getElementById('startBtnSystemInternal').disabled = true;
                return;
            }

            // 创建语音识别实例
            recognition = new window.SpeechRecognition();
            recognition.lang = 'zh-CN'; // 设置语言为中文
            recognition.interimResults = true; // 启用中间结果
            recognition.continuous = true; // 启用连续识别

            // 语音识别开始时的回调
            recognition.onstart = () => {
              //  console.log('语音识别已启动。');
                isRecognizing = true;
            //   document.getElementById('startBtnSystemInternal').disabled=true; 
            //   document.getElementById('stopBtnSystemInternal').disabled=false; 
            //   document.getElementById('startBtnSystemExternal').disabled=false; 
            //   document.getElementById('stopBtnSystemExternal').disabled=true; 
            };
           
            // 语音识别出错时的回调
            recognition.onerror = (event) => {
             //   console.error('语音识别错误:', event.error);
                alert(`语音识别错误: ${event.error}`);
                isRecognizing = false;
             //  document.getElementById('startBtnSystemInternal').disabled=false; 
             //  document.getElementById('stopBtnSystemInternal').disabled=true;
             //  document.getElementById('startBtnSystemExternal').disabled=false; 
              // document.getElementById('stopBtnSystemExternal').disabled=true; 
            };
            
            // 语音识别结束时的回调
            recognition.onend = () => {
               // console.log('语音识别已结束。');
                isRecognizing = false;
               // document.getElementById('startBtnSystemInternal').disabled=false; 
               // document.getElementById('stopBtnSystemInternal').disabled=true; 
               // document.getElementById('startBtnSystemExternal').disabled=false; 
              //  document.getElementById('stopBtnSystemExternal').disabled=true; 
            };
            
            // 语音识别结果时的回调
            recognition.onresult = (event) => {
                // 遍历所有识别结果
                for (var i = event.resultIndex; i < event.results.length; i++) {
                    const result = event.results[i];
                    const transcript = result[0].transcript.trim(); // 获取识别的文本
                   window.transcriptForTTS=transcript;
                    const isFinal = result.isFinal; // 是否为最终结果

                    if (isFinal) {
                        // 如果是最终结果，将句子添加到当前段落
                        currentParagraph.sentences.push({ finalTranscript: transcript });
                        speechContent.paragraphs.push(currentParagraph); // 将段落添加到speechContent
                        currentParagraph = { sentences: [] }; // 重置当前段落
                    } else {
                        // 如果是临时结果，更新当前段落的最后一个句子
                        if (currentParagraph.sentences.length === 0) {
                            // 如果当前段落没有句子，添加一个临时句子
                            currentParagraph.sentences.push({ interimTranscript: transcript });
                        } else {
                            // 更新最后一个句子的临时文本
                            currentParagraph.sentences[currentParagraph.sentences.length - 1].interimTranscript = transcript;
                        }
                    }
                }
                //更新显示区域。奇怪，函数出错，但同函数一样的语句出错！这里如果实时更新会导致TTS读不完？
                //updateTranscript();
               document.getElementById('transcript').textContent = JSON.stringify(speechContent, null, 2);
                           //TTS
        // if(!("speechSynthesis" in window)) {throw alert("对不起，您的浏览器不支持字符自动朗读");}
         window.speechSynthesis.cancel();
       //  const utterance = new SpeechSynthesisUtterance(document.getElementById('transcript').textContent);
        const utterance = new SpeechSynthesisUtterance(window.transcriptForTTS);
         window.speechSynthesis.speak(utterance);
               
            };
            

           
            document.getElementById('startBtnSystemInternal').addEventListener('click', () => {
                 window.speechSynthesis.cancel();
                 document.getElementById('transcript').innerText='"段落": []'; // 清空显示区域
                    speechContent = { paragraphs: [] }; // 重置识别内容
                   // speechContent =initialText;
                    currentParagraph = { sentences: [] }; // 重置当前段落
                    window.transcriptForTTS="";
                    document.getElementById('stopBtnSystemInternal').disabled=false; 
                    document.getElementById('startBtnSystemInternal').disabled=true; 
                  //  document.getElementById('startBtnSystemExternal').disabled=true; 
                   // document.getElementById('stopBtnSystemExternal').disabled=true; 
                if (recognition && !isRecognizing) {
                    recognition.start(); // 启动语音识别
                }
            });
            
            // 停止录音按钮的点击事件

             document.getElementById('stopBtnSystemInternal').addEventListener('click', () => {
                  window.speechSynthesis.cancel();
                   document.getElementById('transcript').innerText= '"段落": []'; // 清空显示区域
                    speechContent = { paragraphs: [] }; // 重置识别内容
                   // speechContent =initialText;
                    currentParagraph = { sentences: [] }; // 重置当前段落
                    window.transcriptForTTS="";     
                   document.getElementById('startBtnSystemInternal').disabled=false;
                   document.getElementById('stopBtnSystemInternal').disabled=true; 
                 //  document.getElementById('startBtnSystemExternal').disabled=true; 
                  // document.getElementById('stopBtnSystemExternal').disabled=true; 
                if (recognition && isRecognizing) {
                    recognition.stop(); // 停止语音识别
                }
            });
             document.getElementById('startBtnSystemExternal').addEventListener('click', () => {
                  window.speechSynthesis.cancel();
                  alert("需要连接AIGC服务，尚在开发之中...");
            });
            document.getElementById('stopBtnSystemExternal').addEventListener('click', () => {
                  window.speechSynthesis.cancel();
                  alert("需要连接AIGC服务，尚在开发之中...");
            });
        document.getElementById('startBtnSystemInternal').click(); // 页面加载后自动点击开始录音按钮

            // 更新显示区域的函数
        // document.getElementById('transcript').textContent = JSON.stringify(speechContent, null, 2); 
         //updateTranscript();
}