function fnOnLoad() {
window.speechSynthesis.cancel();  // 取消任何正在进行的TTS;
try{window.recognitionSystemInternal.stop();} catch(e){;}// 停止系统内部的语音识别
try{window.recognitionSystemExternal.stop();} catch(e){;}// 停止系统外部的语音识别
window.recognitionSystemInternal = null; // STT的系统内部实例声明或清空；
window.recognitionSystemExternal = null; // STT的系统外部实例声明或清空；
window.QwenAPIKey=""; // Qwen千问APIKey声明或清空；
//document.getElementById('btnSystemInternal').addEventListener("click", fnBtnSystemInternalOnClick, false);
//document.getElementById('btnSystemExternal').addEventListener("click", fnBtnSystemExternalOnClick, false);
document.getElementById('startBtnSystemInternal').addEventListener('click',fnStartBtnSystemInternalOnClick,false);          
document.getElementById('stopBtnSystemInternal').addEventListener('click',fnStopBtnSystemInternalOnClick, false); 
document.getElementById('startBtnSystemExternal').addEventListener('click',fnStartBtnSystemExternalOnClick,false);
document.getElementById('stopBtnSystemExternal').addEventListener('click',fnStopBtnSystemExternalOnClick,false);

document.getElementById('idQwenAPIKeyConfirm').addEventListener('click',fnidQwenAPIKeyConfirmOnClickSystemExternal,false);

//document.getElementById('btnSystemInternal').disabled=true;
//document.getElementById('btnSystemExternal').disabled=false;

//document.getElementById('startBtnSystemInternal').click(); // 页面加载后自动点击开始系统内部的录音按钮
}


function fnBtnSystemInternalOnClick() {
                window.speechSynthesis.cancel();  // 取消任何正在进行的TTS;
                //window.recognitionSystemInternal = null; // STT的系统内部实例声明或清空；
                window.recognitionSystemExternal = null; // STT的系统外部实例声明或清空；
                //window.QwenAPIKey=""; // Qwen千问APIKey声明或清空；
                document.getElementById('btnSystemInternal').disabled=true;
                document.getElementById('btnSystemExternal').disabled=false;
                document.getElementById('startBtnSystemInternal').disabled=false;
                document.getElementById('stopBtnSystemInternal').disabled=true; 
                document.getElementById('startBtnSystemExternal').disabled=true; 
                document.getElementById('stopBtnSystemExternal').disabled=true; 
                document.getElementById('startBtnSystemInternal').click();                
}

function fnBtnSystemExternalOnClick() {
               window.speechSynthesis.cancel();  // 取消任何正在进行的TTS;
                window.recognitionSystemInternal = null; // STT的系统内部实例声明或清空；
               // window.recognitionSystemExternal = null; // STT的系统外部实例声明或清空；
                //window.QwenAPIKey=""; // Qwen千问APIKey声明或清空；
                document.getElementById('btnSystemExternal').disabled=true;
                document.getElementById('btnSystemInternal').disabled=false;
                document.getElementById('startBtnSystemInternal').disabled=true;
                document.getElementById('stopBtnSystemInternal').disabled=true; 
                document.getElementById('startBtnSystemExternal').disabled=false; 
                document.getElementById('stopBtnSystemExternal').disabled=true; 
                document.getElementById('startBtnSystemExternal').click();
 }

 function fnTTSOnEndSystemInternal(){
 document.getElementById('stopBtnSystemInternal').click();
 document.getElementById('startBtnSystemInternal').click();
    }

 function fnTTSOnEndSystemExternal(){
 document.getElementById('stopBtnSystemExternal').click();
 document.getElementById('startBtnSystemExternal').click();
    }

function fnStartBtnSystemInternalOnClick() {
    window.speechSynthesis.cancel();
    try{window.recognitionSystemExternal.stop();}catch(e){;}// 停止系统内部的语音识别
    document.getElementById('startBtnSystemInternal').disabled=true; 
    document.getElementById('stopBtnSystemInternal').disabled=false; 
    document.getElementById('startBtnSystemExternal').disabled=false; 
    document.getElementById('stopBtnSystemExternal').disabled=true; 

    window.recognitionSystemInternal = null; // STT的系统内部实例声明或清空；
    window.recognitionSystemExternal = null; // STT的系统外部实例声明或清空；

    window.recognitionSystemInternal = new window.SpeechRecognition();
    window.recognitionSystemInternal.lang = 'zh-CN'; // 设置语言为中文
    window.recognitionSystemInternal.interimResults = true; // 启用中间结果
    window.recognitionSystemInternal.continuous = true; // 启用连续识别

    window.recognitionSystemInternal.onstart =fnSTTOnStartSystemInternal; // 语音识别开始时的回调            
    window.recognitionSystemInternal.onerror=fnSTTOnErrorSystemInternal; //// 语音识别出错时的回调(event)参数不知是否正确传递了。            
    window.recognitionSystemInternal.onend=fnSTTOnEndSystemInternal;// 语音识别结束时的回调
    window.recognitionSystemInternal.onresult=fnSTTOnResultSystemInternal;//(event)参数不知是否正确传递了。

    document.getElementById('transcriptSystemInternal').innerText='"段落": []'; // 清空显示区域
    window.speechContentParagraphsSystemInternal = { paragraphs: [] }; // 重置识别内容
    window.speechContentSentencesSystemInternal = { sentences: [] }; // 重置当前段落
   
    if (window.recognitionSystemInternal && !window.isRecognizingSystemInternal) {
           window.recognitionSystemInternal.start(); // 启动语音识别
       }
    }

function fnStartBtnSystemExternalOnClick() {
    window.speechSynthesis.cancel();
    try{window.recognitionSystemInternal.stop();}catch(e){;}// 停止系统内部的语音识别
    if(window.QwenAPIKey==""){
        alert("您可能还没输入并确认您的Qwen千问APIKey！");
                }
    else{
     document.getElementById('startBtnSystemInternal').disabled=false; 
     document.getElementById('stopBtnSystemInternal').disabled=true; 
     document.getElementById('startBtnSystemExternal').disabled=true; 
     document.getElementById('stopBtnSystemExternal').disabled=false; 

    window.recognitionSystemInternal = null; // STT的系统内部实例声明或清空；
    window.recognitionSystemExternal = null; // STT的系统外部实例声明或清空；
    

    window.recognitionSystemExternal = new window.SpeechRecognition();
    window.recognitionSystemExternal.lang = 'zh-CN'; // 设置语言为中文
    window.recognitionSystemExternal.interimResults = true; // 启用中间结果
    window.recognitionSystemExternal.continuous = true; // 启用连续识别

    window.recognitionSystemExternal.onstart =fnSTTOnStartSystemExternal; // 语音识别开始时的回调            
    window.recognitionSystemExternal.onerror=fnSTTOnErrorSystemExternal; // 语音识别出错时的回调(event)参数不知是否正确传递了。            
    window.recognitionSystemExternal.onend=fnSTTOnEndSystemExternal;// 语音识别结束时的回调
    window.recognitionSystemExternal.onresult=fnSTTOnResultSystemExternal;//(event)参数不知是否正确传递了。

    document.getElementById('transcriptSystemExternal').innerText='"段落": []'; // 清空显示区域
    window.speechContentParagraphsSystemExternal = { paragraphs: [] }; // 重置识别内容
    window.speechContentSentencesSystemExternal = { sentences: [] }; // 重置当前段落
   
    if (window.recognitionSystemExternal && !window.isRecognizingSystemExternal) {
           window.recognitionSystemExternal.start(); // 启动语音识别
       }            
    }
  }

function fnStopBtnSystemInternalOnClick() {
    
    document.getElementById('transcriptSystemInternal').innerText= '"段落": []'; // 清空显示区域
    window.speechSynthesis.cancel();  // 取消任何正在进行的TTS;
    window.recognitionSystemInternal.stop();
    try{window.recognitionSystemExternal.stop();}catch(e){;}// 停止系统内部的语音识别
     /** 
   if (window.recognitionSystemInternal && window.isRecognizingSystemInternal) {
                    window.recognitionSystemInternal.stop(); // 停止语音识别
                }
                **/
     document.getElementById('startBtnSystemInternal').disabled=false;
     document.getElementById('stopBtnSystemInternal').disabled=true; 
     document.getElementById('startBtnSystemExternal').disabled=false; 
     document.getElementById('stopBtnSystemExternal').disabled=true; 

    
    window.recognitionSystemInternal = null; // STT的系统内部实例声明或清空；
    window.recognitionSystemExternal = null; // STT的系统外部实例声明或清空；
    }

function fnStopBtnSystemExternalOnClick() {
     document.getElementById('transcriptSystemInternal').innerText= '"段落": []'; // 清空显示区域
    window.speechSynthesis.cancel();  // 取消任何正在进行的TTS;
    window.recognitionSystemExternal.stop();
    try{window.recognitionSystemInternal.stop();}catch(e){;}// 停止系统内部的语音识别
    /** 
    if (window.recognitionSystemExternal && window.isRecognizingSystemExternal) {
                    window.recognitionSystemExternal.stop(); // 停止语音识别
                } 
    **/
    document.getElementById('startBtnSystemInternal').disabled=false;
    document.getElementById('stopBtnSystemInternal').disabled=true; 
    document.getElementById('startBtnSystemExternal').disabled=false; 
    document.getElementById('stopBtnSystemExternal').disabled=true; 
    window.recognitionSystemInternal = null; // STT的系统内部实例声明或清空；
     window.recognitionSystemExternal = null; // STT的系统外部实例声明或清空；
    //window.QwenAPIKey=""; // Qwen千问APIKey声明或清空；               
   }
 function fnSTTOnErrorSystemInternal(event) {
alert(`系统内部语音对话时候的语音识别错误: ${event.error}`);
 window.isRecognizingSystemInternal = false;
       }

function fnSTTOnErrorSystemExternal(event) {
alert(`系统外部语音对话时候的语音识别错误: ${event.error}`);
 window.isRecognizingSystemExternal = false;
       }
function fnSTTOnStartSystemInternal() {
    window.isRecognizingSystemInternal = true;
       }
function fnSTTOnStartSystemExternal() {
    window.isRecognizingSystemExternal = true;
       }
function fnSTTOnEndSystemInternal() {
    window.isRecognizingSystemInternal = false;
    window.speechSynthesis.cancel();
    //TTS
    const utteranceInternal = new SpeechSynthesisUtterance("您需要"+window.transcriptSystemInternal+"对吗？"); 
    utteranceInternal.onend=fnTTSOnEndSystemInternal;// 语音朗读结束时的回调;
    window.speechSynthesis.speak(utteranceInternal); 
       }
function fnSTTOnEndSystemExternal() {
    window.isRecognizingSystemExternal = false;
     window.speechSynthesis.cancel(); 
       //TTS      
    const utteranceExternal = new SpeechSynthesisUtterance("您需要"+window.transcriptSystemExternal+"对吗？"); 
    /** 
    var sKeywordsForAIGC = window.transcriptSystemExternal;
    var url = "/QWen/index?queryString=" +sKeywordsForAIGC;
     open(url, "AIGCAnswerCharactor");
     **/
    utteranceExternal.onend=fnTTSOnEndSystemExternal;// 语音朗读结束时的回调;
     window.speechSynthesis.speak(utteranceExternal);  
    alert(fnCallAIGCQwen(window.transcriptSystemExternal));
    fnCallAIGCQwen(window.transcriptSystemExternal).then(answer => {
    // Do something with the answer
    alert(answer);
});
 window.speechSynthesis.cancel(); 
 var answerFromAIGCQwen=fnCallAIGCQwen(window.transcriptSystemExternal);
   const utteranceExternalAIGC = new SpeechSynthesisUtterance("千问AIGC的回答是："+answerFromAIGCQwen); 
   utteranceExternalAIGC.onend=fnTTSOnEndSystemExternal;// 语音朗读结束时的回调;
    window.speechSynthesis.speak(utteranceExternalAIGC);  
    alert("千问AIGC的回答是："+answerFromAIGCQwen);
    }

async function fnCallAIGCQwen(prompt) {
    const response = await fetch('https://qwen-api.aliyun.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': window.QwenAPIKey // Replace with your actual key, or use a backend proxy
        },
        body: JSON.stringify({
            model: 'qwen-turbo', // Use the correct model name per Qwen docs
            prompt: prompt,
            max_tokens: 100,
            temperature: 0.7
        })
    });

    if (!response.ok) {
        throw new Error('Qwen API call failed!');
    }

    const data = await response.json();
    console.log(data.choices[0].text); // Output the generated text
    return data.choices[0].text;
}

function fnSTTOnResultSystemInternal(event) {
    // 遍历所有识别结果
    for (var i = event.resultIndex; i < event.results.length; i++) {
    var result = event.results[i];//const result = event.results[i];
    window.transcriptSystemInternal = result[0].transcript.trim();//const transcriptSystemInternal = result[0].transcript.trim(); // 获取识别的文本
    var isFinal = result.isFinal;// const isFinal = result.isFinal; // 是否为最终结果
                    
     if (isFinal) {
      // 如果是最终结果，将句子添加到当前段落
      window.speechContentSentencesSystemInternal.sentences.push({ finalTranscript: window.transcriptSystemInternal});
     window.speechContentParagraphsSystemInternal.paragraphs.push(window.speechContentSentencesSystemInternal); // 将段落添加到speechContent。window.speechContent=window.speechContentSentencesSystemInternal
      window.speechContentSentencesSystemInternal = { sentences: [] }; // 重置当前段落。
                    } 
     else {
     // 如果是临时结果，更新当前段落的最后一个句子
         if (window.speechContentSentencesSystemInternal.sentences.length === 0) {
         // 如果当前段落没有句子，添加一个临时句子
         window.speechContentSentencesSystemInternal.sentences.push({ interimTranscript: window.transcriptSystemInternal });
          } 
          else {
             // 更新最后一个句子的临时文本
             window.speechContentSentencesSystemInternal.sentences[window.speechContentSentencesSystemInternal.length - 1].interimTranscript = window.transcriptSystemInternal;
               }
            }
         }
           
     document.getElementById('transcriptSystemInternal').textContent = JSON.stringify(window.speechContentParagraphsSystemInternal, null, 2);
     window.recognitionSystemInternal.stop(); // 停止语音识别，进行TTS         
}

function fnSTTOnResultSystemExternal(event) {
    // 遍历所有识别结果
    for (var i = event.resultIndex; i < event.results.length; i++) {
    var result = event.results[i];//const result = event.results[i];
    window.transcriptSystemExternal = result[0].transcript.trim();//const transcriptSystemInternal = result[0].transcript.trim(); // 获取识别的文本
    //window.transcriptForTTSSystemInternal=transcript;
    var isFinal = result.isFinal;// const isFinal = result.isFinal; // 是否为最终结果
                    
     if (isFinal) {
      // 如果是最终结果，将句子添加到当前段落
      window.speechContentSentencesSystemExternal.sentences.push({ finalTranscript: window.transcriptSystemExternal});//
     window.speechContentParagraphsSystemExternal.paragraphs.push(window.speechContentSentencesSystemExternal); // 将段落添加到speechContent。window.speechContent=window.speechContentSentencesSystemInternal
      window.speechContentSentencesSystemExternal = { sentences: [] }; // 重置当前段落。
                    } 
     else {
     // 如果是临时结果，更新当前段落的最后一个句子
         if (window.speechContentSentencesSystemExternal.sentences.length === 0) {
         // 如果当前段落没有句子，添加一个临时句子
         window.speechContentSentencesSystemExternal.sentences.push({ interimTranscript: window.transcriptSystemExternal });
          } 
          else {
             // 更新最后一个句子的临时文本
             window.speechContentSentencesSystemExternal.sentences[window.speechContentSentencesSystemExternal.length - 1].interimTranscript = transcriptSystemExternal;
               }
            }
         }      
     document.getElementById('transcriptSystemExternal').textContent = JSON.stringify(window.speechContentParagraphsSystemExternal, null, 2);    
     window.recognitionSystemExternal.stop(); // 停止语音识别，进行TTS    
}



function fnUpdateTranscriptSystemInternal() {
document.getElementById('transcriptSystemInternal').textContent = JSON.stringify(speechContentParagraphsSystemInternal, null, 2); // 将speechContentParagraphsSystemInternal对象格式化为JSON字符串，并显示在页面上
            }

function fnUpdateTranscriptSystemExternal() {
document.getElementById('transcriptSystemExternal').textContent = JSON.stringify(speechContentParagraphsSystemExternal, null, 2); // 将speechContentParagraphsSystemExternal对象格式化为JSON字符串，并显示在页面上
            }

function fnidQwenAPIKeyConfirmOnClickSystemExternal(){
    window.QwenAPIKey=document.getElementById('idQwenAPIKeyInput').value;
    document.getElementById('idQwenAPIKeyInput').value="";
    document.getElementById('idQwenAPIKeyInput').placeholder="您已键入Qwen千问的API Key";
    //alert(window.QwenAPIKey);
    alert(document.getElementById('idQwenAPIKeyInput').placeholder);
}


/**
 function fnMatchCommandSystemInternal(){
 var trueorfalse=prompt("主人，您是需要查看当前条目的作业与测验，对吗？"); 
 if(trueorfalse){
     opener.parent.document.getElementById("sIFrameContents").contentWindow..fnMargee();
     opener.parent.document.getElementById("sIFrameContents").contentWindow.fnViewHomeworkAndTest();
     }
 else{
     window.speechSynthesis.cancel();
     const utterance = new SpeechSynthesisUtterance("好的，主人，请重新说出您的需求！");     
     window.speechSynthesis.speak(utterance);
     }
 }

async function fnFetchNunStreamDataSystemExternal(prompt){//浏览器Prompt AIGC后的非流式返回answer。系统外部的调用AIGC的语音对话注意事项：API 密钥安全性 不要将密钥直接暴露在前端代码中，建议通过后端代理转发请求。兼容性处理 不同大模型（例如，ChatGPT、Qwen）的 API 参数可能略有不同，请参考官方文档调整
    const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': window.QwenAPIKey
    },
    body: JSON.stringify({
    model: 'gpt-4',
    prompt: prompt,
    max_tokens: 100,
    temperature: 0.7
    //stream: true // 如果启用流式响应
    })
    });

    if (!response.ok) {
    throw new Error('未能收到AIGC的答复！');
    }

    const data = await response.json();
    console.log(data.choices[0].text); // 输出生成的文本
    return data;
   //案例：fnFetchNunStreamData('请翻译教育数字思维成为英文');
 }

 async function fnFetchStreamDataSystemExternal(prompt){ //浏览器Prompt AIGC后的流式返回answer  //系统外部的调用AIGC的语音对话注意事项：API 密钥安全性 不要将密钥直接暴露在前端代码中，建议通过后端代理转发请求。兼容性处理 不同大模型（例如，ChatGPT、Qwen）的 API 参数可能略有不同，请参考官方文档调整
    const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer YOUR_API_KEY`
    },
    body: JSON.stringify({
    model: 'gpt-4',
    prompt: prompt,
    stream: true // 启用流式响应
    })
    });

    if (!response.ok) {
    throw new Error('未能收到AIGC的答复！');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let done = false;

    while (!done) {
    const { value, done: readerDone } = await reader.read();
    done = readerDone;
    const chunk = decoder.decode(value, { stream: true });
    console.log(chunk); // 实时输出每块数据
    return chunk;
    }
    //案例：fnFetchStreamData("请翻译教育数字思维成为英文");
}

**/
