//////////////所有全局对象
window.sBaseAddress = "https://localhost:5001";//JIT编译地配置控制C模型M交付的URL的基地址。
window.sBackgroundColorForsContentsEditable = "rgb(0,255,0)";
window.sBackgroundColorForsContentEditable = "rgb(0,255,0)";
window.oSrcElement = new Object();
window.oDiv = new Object();
window.sURLHeader;

//////////////////
// 判断是否为chrome内核浏览器

function isChromium() {
    var userAgent = navigator.userAgent.toLowerCase();
    var chromium = "mozilla/&&applewebkit/&&chrome/&&safari/".split("&&");
    for (var i = 0; i < chromium.length; i++)
        if (userAgent.indexOf(chromium[i]) < 0)
            return false;
    return true;
}

// 判断是否为webkit内核浏览器.WebKit 是一个开源的浏览器引擎.chrome的内核确切的说是Chromium引擎，它是使用苹果公司的WebKit作为浏览器内核原型，是WebKit内核的一个分支.现在一般将苹果的浏览器、chrome浏览器、移动端的一些浏览器都成为webkit内核不做细分.
function isWebkit() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("applewebkit/") < 0)
        return false;
    return true;
}

// 未检测到极速内核版本号时显示
function othersDisplay(userAgent) {
    var versionsObj = document.getElementById("version");
    versionsObj.innerHTML = "未能检测到极速内核版本号";
    var suggestionObj = document.getElementById("suggestion");
    suggestionObj.innerHTML = "请使用双核浏览器的极速模式或其他Chromium、Webkit内核浏览器进行检测。";
}


// 判断浏览器类型
function whatBrowser() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (isChromium(userAgent)) {
        chromiumDisplay(userAgent);
    } else if (isWebkit(userAgent)) {
        webkitDisplay(userAgent);
    } else {
        othersDisplay(userAgent);
    }
}

/**

function fnLoadJs(url, callback) {//动态添加js并即时调用.调用方式：JSfnLoadJs("test.js", function () {alert('done');});
    var oScript = document.createElement('script');
    oScript.type = "text/javascript";
    if (typeof (callback) != "undefined") {
        if (oScript.readyState) {
            oScript.onreadystatechange = function () {
                if (oScript.readyState == "loaded" || oScript.readyState == "complete") {
                    oScript.onreadystatechange = null;
                    callback();
                }
            }
        }
        else {
            oScript.onload = function () {
                callback();
            }
        }
    }
    oScript.src = url;
    document.body.appendChild(script);
}
**/

/**
  
function fnLoadJs(url) {//动态添加JS;
    var oScript = document.createElement('script');
    oScript.type = "text/javascript";
    oScript.src = url;
    document.body.appendChild(oScript);
}
**/
///////

function fnOnload() {
//在线框架修改为框架后的修改代码断，因为框架文档无法直接使用JScript编程，只好在title中间接赋予，而尽量避免在线框架修改为框架后不修改代码。
    if (!isChromium()) { alert("本系统目前仅在Chromium内核的浏览器进行了测试！您当前使用的浏览器不是Chromium内核，请切换为Chromium内核浏览器，以免不兼容！！！"); }
    //window.onfocus = fnWindowOnFocus;//由于目录面板、内容面板的事件冒泡尚未取消，暂时取消标题菜单的此功能
    //window.addEventListener("focus", fnGetFocus, false); //模式窗口相关，暂时未使用。
   //fnLoadJs("script/ShowModelDiallog.js");//如果和目录保存相关的，就需要动态卸载。这个动态加载不需要。
    window.oDiv = document.getElementById("popupDiv");//为右键菜单作准备。
    window.addEventListener("focus", fnContentsGetFocus, false); //目录框架的模式窗口相关。
   window.addEventListener("click", fnContentsGetFocus, false); //目录框架的模式窗口相关。    
    parent.sRunFrom = parent.parent.sRunFrom;
    document.body.style.zoom = "100%";
    parent.document.body.scroll = "no";
parent.iNewZoom=screen.width/1024*100;
//parent.parent.window.iNewZoom=screen.width/1024*100;//已经在index.asp中实现
//parent.document.body.style.zoom=parent.iNewZoom+"%";//已经在index.asp中实现
parent.sFramesetBookRowsDefault=parent.document.getElementById("sFramesetBook").rows;
parent.sFramesetMiddleColsDefault="224,*";//应相应改变
parent.sFramesetMiddleColsTemp="";
parent.sPathContentsNow=parent.parent.sPathContentsNow+parent.document.getElementById("sIframeContents").src.substring(parent.document.getElementById("sIframeContents").src.lastIndexOf("/")+1,parent.document.getElementById("sIframeContents").src.length)+"/";//不放在onload事件函数中是因为onload事件函数中可能正装载时各框架无法获取。
parent.sHTTPHeader=parent.document.URL.substring(0,parent.document.URL.lastIndexOf("common/initial.html"));//因为initial.asp是固定的，所以此时获得的sHTTPHeader是确定的，以便其它框架调用，便于虚拟目录的变动而便于维护,相关的文件夹名称也在此定义全局变量（但因时间关系，还未如此实现），但相对路径必须保持，webedusystem已在此屏蔽。不放在onload事件函数中是因为onload事件函数中可能正装载时各框架无法获取。
parent.sContentsPath="lessons/";
parent.sTitlePath="common/";
parent.sLessonsPath="content"+parent.document.getElementById("sIframeContents").src.substring(parent.document.getElementById("sIframeContents").src.lastIndexOf("contents")+8,parent.document.getElementById("sIframeContents").src.lastIndexOf("."))+"/";//为多个分课作准备。
parent.sOptionsPath="options/";
parent.sContentsName=parent.document.getElementById("sIframeContents").src.substring(parent.document.getElementById("sIframeContents").src.lastIndexOf("/")+1+4,parent.document.getElementById("sIframeContents").src.length);
parent.sContentStartName=parent.document.getElementById("sIframeContent").src.substring(parent.document.getElementById("sIframeContent").src.lastIndexOf("/")+1+4,parent.document.getElementById("sIframeContent").src.length);
//alert(parent.sFramesetBookRowsDefault+parent.sFramesetMiddleColsDefault+parent.sPathContentsNow+" "+parent.sHTTPHeader+" "+parent.sLessonsPath);
//全局变量最好全部一起在此定义，易于维护。不过要在其它同时装载的文档中的onload事件中调用的变量不能在此定义，一定要在文档中定义，不然可能因为变量还没定义就被调用而出错。
window.sURLHeader=document.URL.substring(0,document.URL.lastIndexOf("common/"));//因为common下可控制不再在字符串的最后出现“Common”字符，所以是确定的。必须固定initial.asp或initial.asp（既主界面文档）的放置位置，从而获得整个应用的URL根，其它文档中全部使用相对URL，便于维护和移植。  
//document.body.onbeforeunload=fnIsSaved;
//document.body.oncontextmenu=fnTitlePopup;//
    window.oncontextmenu = fnTitlePopup;
    //window.onclick = fnWindowOnClick;// 以后全部改为类似window.addEventListener("click", fnContentsGetFocus, false);。
window.document.body.scroll="no";
//window.document.getElementById("sMarqueeLogo").innerHTML=document.getElementById("sMarqueeLogo").innerHTML;//如果不进行该操作，没有修改Marquee设置时就保存会多出fnMarqueeLogo等字符串！！！！！！
//window.sMarqueeLogo=document.getElementById("sMarqueeLogo").innerHTML;//可用于判断Marquee是否因在线编辑而有了改变，从而可提醒用户保存有改变的目录。由于时间显示的不断改变，所以不能用Body等来判断！！！
    parent.document.getElementById("sIframeContents").src = "../" + parent.sContentsPath + "contents.htm";
    document.body.onmousewheel = fnMouseWheel;//通过滚动条不显示实现
    window.onmousewheel = fnMouseWheel;
    fnShowTime();
    fnNotification('欢迎合作：', '使用帮助，请咨询：QQ：43930878；如果正使用手机浏览，请设置横屏！', '/favicon.ico');
}



function fnWritePopupContent(src){
window.oPopup.document.write(src);//待修改
}


function fnIsTitleChanged(){
if(document.getElementById("sMarqueeLogo").innerHTML===window.sMarqueeLogo){
return false;
}
else{
return true;
}
}

function fnIsSaved(){
if(!fnIsTitleChanged()){
//event.returnValue="";
;
}
else{
event.returnValue='您已在线编辑改变了“标题”，但还没有最后保存!单击“确定”按钮将继续，而且不保存已编辑过的目录;单击“取消”按钮将返回,返回后，目录框架的右击菜单中选择"保存"菜单项可保存标题的改变！';
}
}

function fnSaveSettings(){
	window.open("../common/saving.htm", "saving","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//显示“正在保存...”，一直到保存目录的saveContents.asp网页的运行结果返回到该窗口，即“Saving”窗口
	var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sSaveTitleForm"></form>');//在Bottom框架动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.
	var oInput1=parent.frames("sIframeBottom").document.createElement('<input type="text" name="docTitle" id="docTitle></input>');
	var oInputSubmit=parent.frames("sIframeBottom").document.createElement('<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>');
	var oInsertForm=parent.frames("sIframeBottom").document.body.appendChild(oForm);
	var oInsertInput1=oInsertForm.appendChild(oInput1);
	var oInsertInputSubmit=oInsertForm.appendChild(oInputSubmit);
	parent.frames("sIframeBottom").document.getElementById("docTitle").value=document.getElementById("sMarqueeLogo").innerHTML;	
	parent.frames("sIframeBottom").document.getElementById("sSaveTitleForm").action="../common/saveSettings.aspx";
	parent.frames("sIframeBottom").document.getElementById("sSaveTitleForm").target="saving";
	parent.frames("sIframeBottom").document.getElementById("sSaveTitleForm").submit();
	parent.frames("sIframeBottom").document.getElementById("sSaveTitleForm").removeNode("true");
	window.sMarqueeLogo=document.getElementById("sMarqueeLogo").innerHTML;//该全局变量用来判断是否已保存。本来应该从服务器返回的字符串实现，暂时没有时间，所以用全局变量实现，易出错，待优化！！！！
}



function fnShowTime(){
var today=new Date();
var minutes=today.getMinutes();
var sMinute;
if (minutes<10) sMinute="0"+minutes;
else sMinute=""+minutes;
studyTime.innerText=today.getHours()+":"+sMinute;
window.setTimeout("fnShowTime();",60000);
}

function fnDefaultScreen(){
event.returnValue=false;
if(parent.document.getElementById("sFramesetMiddle").cols==parent.sFramesetMiddleColsDefault){
    alert("目录和内容面板现在都是默认宽度!您可以单击“目录渐宽”等改变目录面板、内容面板的宽度！您还可以拖曳目录和内容之间的边界自由调整目录和内容的宽度!（此功能浏览器兼容性问题有待解决！）");
parent.document.getElementById("sFramesetMiddle").cols=parent.sFramesetMiddleColsDefault;
}
else{
parent.document.getElementById("sFramesetMiddle").cols=parent.sFramesetMiddleColsDefault;
}
}

function fnPause(){
event.returnValue=false;
try{
open('../options/pause.asp','pause','fullscreen=1',false);
}
catch(e){
alert('Error Found!');
return;
}
finally{
return;
}
}

function fnEnlargeVolume(){
event.returnValue=false;
if(document.getElementById("idBackgroundSound").src!="../options/backgroundMusic.mp3"){
document.getElementById("idBackgroundSound").src="../options/backgroundMusic.mp3";
}
else{
if(document.getElementById("idBackgroundSound").volume<0){
document.getElementById("idBackgroundSound").volume+=500;
}
else{
document.getElementById("idBackgroundSound").volume=0;
alert("背景音量已经最大!");
}
}
}

function fnReduceVolume(){
event.returnValue=false;
if(document.getElementById("idBackgroundSound").volume>-9500){
document.getElementById("idBackgroundSound").volume-=500;
}
else{
document.getElementById("idBackgroundSound").volume=-10000;
alert("背景音量已经最小!");
}
}

function fnLoudestSound(){
event.returnValue=false;
if(document.getElementById("idBackgroundSound").src!="../options/backgroundMusic.mp3"){
document.getElementById("idBackgroundSound").src="../options/backgroundMusic.mp3";
}
else if(document.getElementById("idBackgroundSound").volume<0)
document.getElementById("idBackgroundSound").volume=0;
}

function fnWeakestSound(){
event.returnValue=false;
if(document.getElementById("idBackgroundSound").volume>-10000)
document.getElementById("idBackgroundSound").volume=-10000;
}

function fnAbout(){
event.returnValue=false;
if(event.altKey){
fnPause();
}
else{
alert("Web-Based Instructional System,authored by HuangJingbi(MCP+),GuangXi Teacher's College,jbhuang99@hotmail.com");
}
}

function help(){
event.returnValue=false;
window.open("help/help.asp","help","fullscreen=no,left=200,top=150,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbar=yes,status=no,resizable=yes,copyhistory=no,width=400px,height=300px",false);
}

function fnExit(){
event.returnValue=false;
parent.close();
}



function fnNext() {
event.returnValue=false;
   // var cLiNow = parent.frames.item("sIframeContents").document.getElementsByTagName("LI");
    //console.log(parent.document.getElementById("sIframeContents").contentWindow.document.getElementById("sDiv").innerHTML);
    var cLiDiv = parent.document.getElementById("sIframeContents").contentWindow.document.getElementById("sDiv");
    var cLi = cLiDiv.getElementsByTagName("LI");
var intLi=cLi.length;
    var intTargetNum;
   // console.log(intLi);
    for (var i = 0; i < intLi; i++){
      //  console.log(i + ";" + cLiNow[i].getElementsByTagName("SPAN").item(1).style.color + ";" + parent.document.getElementById("sIframeContents").contentWindow.sColorClicked);
	//if(cLiNow[i].getElementsByTagName("SPAN").item(1).style.color==parent.frames.item("sIframeContents").sColorClicked){
   
        if (cLi[i].getElementsByTagName("SPAN").item(1).style.color.replace(/\s*/g, "") == parent.document.getElementById("sIframeContents").contentWindow.sColorClicked) {
            intTargetNum=i;
		break;
	}
    }

   
    if (intTargetNum < intLi - 1) {
        if (intTargetNum == 0) {
            cLi[intTargetNum+1].getElementsByTagName("SPAN").item(1).click();
        }
        else {
            cLi[intTargetNum+1].getElementsByTagName("SPAN").item(1).click();
            var oTemp = cLi[intTargetNum+1];
            while (oTemp.parentNode.parentNode.nodeName != "DIV") {
                var cChildNodesTemp = oTemp.parentNode.childNodes;
                for (intR = 0; intR < cChildNodesTemp.length; intR++) {
                    if (cChildNodesTemp[intR].nodeName == "LI") {
                        cChildNodesTemp[intR].style.display = "list-item";
                        if (cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif") > 0) {
                            if (cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display == "list-item") {
                                cChildNodesTemp[intR].childNodes[0].src = "../common/image/plusTran.gif";
                            }
                        }
                    }
                }
                oTemp = oTemp.parentNode;
            }

            if (oTemp.childNodes[0].src.lastIndexOf("plus.gif") > 0 && oTemp.getElementsByTagName("SPAN").item(1).style.color.replace(/\s*/g, "") != window.sColorClicked) {
                oTemp.childNodes[0].src = "../common/image/plusTran.gif";
            }
        }
        cLi[intTargetNum+1].scrollIntoView(true);
}

else{
	alert("已经是目录的最后一个条目!");
	}
}

function fnNextOld() {// 还有点小问题！！！需要参考fnPre
    event.returnValue = false;
    // var cLiNow = parent.frames.item("sIframeContents").document.getElementsByTagName("LI");
    //console.log(parent.document.getElementById("sIframeContents").contentWindow.document.getElementById("sDiv").innerHTML);
    var cLiDiv = parent.document.getElementById("sIframeContents").contentWindow.document.getElementById("sDiv");
    var cLiNow = cLiDiv.getElementsByTagName("LI");
    var intLi = cLiNow.length;
    var intTarget;
    // console.log(intLi);
    for (var i = 0; i < intLi; i++) {
        //  console.log(i + ";" + cLiNow[i].getElementsByTagName("SPAN").item(1).style.color + ";" + parent.document.getElementById("sIframeContents").contentWindow.sColorClicked);
        //if(cLiNow[i].getElementsByTagName("SPAN").item(1).style.color==parent.frames.item("sIframeContents").sColorClicked){

        if (cLiNow[i].getElementsByTagName("SPAN").item(1).style.color.replace(/\s*/g, "") == parent.document.getElementById("sIframeContents").contentWindow.sColorClicked) {
            intTarget = i;
            break;
        }
    }


    if (intTarget < intLi - 1) {
        var intLoop = intTarget;
        while (cLiNow[intLoop].parentNode.parentNode.nodeName != "DIV") {//有点问题，可能不能<div>判断。奇怪的是上翻又实现了。浏览器的bug?

            if (cLiNow[intLoop].nodeName == "LI")
                cLiNow[intLoop].style.display = "list-item";
            if (cLiNow[intLoop].childNodes[0].src.lastIndexOf("plus.gif") > 0) {
                cLiNow[intLoop].childNodes[0].click();
                cLiNow[intLoop].childNodes[0].src = "../common/image/plusTran.gif";
            }
            intLoop = intLoop - 1;
        }
        if (cLiNow[intTarget + 1].childNodes[0].src.lastIndexOf("plus.gif") < 0) {
            cLiNow[intTarget + 1].getElementsByTagName("SPAN").item(1).click();
        }
        else {
            cLiNow[intTarget + 1].childNodes[0].click();
            cLiNow[intTarget + 1].getElementsByTagName("SPAN").item(1).click();
        }
        cLiNow[intTarget].scrollIntoView(true);
    }

    else {
        alert("已经是目录的最后一个条目!");
    }
}

function fnPre() {//
    event.returnValue = false;
    //var cLiNow = parent.document.getElementById("sIframeContents").contentWindow.document.getElementsByTagName("LI");
    var cLiDiv = parent.document.getElementById("sIframeContents").contentWindow.document.getElementById("sDiv");
    var cLi = cLiDiv.getElementsByTagName("LI");

    var intLi = cLi.length;
    var intTargetNum;

    for (var i = 0; i < intLi; i++) {
        //if(cLiNow[i].getElementsByTagName("SPAN").item(1).style.color==parent.frames.item("sIframeContents").sColorClicked){
        if (cLi[i].getElementsByTagName("SPAN").item(1).style.color.replace(/\s*/g, "") == parent.document.getElementById("sIframeContents").contentWindow.sColorClicked) {

            intTargetNum = i;
            break;
        }
    }

    if (intTargetNum > 0) {        
        if (intTargetNum == 0) {
            cLi[intTargetNum ].getElementsByTagName("SPAN").item(1).click();
        }
        else {
            cLi[intTargetNum - 1].getElementsByTagName("SPAN").item(1).click();
            var oTemp = cLi[intTargetNum - 1];
            while (oTemp.parentNode.parentNode.nodeName != "DIV") {
                var cChildNodesTemp = oTemp.parentNode.childNodes;
                for (intR = 0; intR < cChildNodesTemp.length; intR++) {
                    if (cChildNodesTemp[intR].nodeName == "LI") {
                        cChildNodesTemp[intR].style.display = "list-item";
                        if (cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif") > 0) {
                            if (cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display == "list-item") {
                                cChildNodesTemp[intR].childNodes[0].src = "../common/image/plusTran.gif";
                            }
                        }
                    }
                }
                oTemp = oTemp.parentNode;
            }

            if (oTemp.childNodes[0].src.lastIndexOf("plus.gif") > 0 && oTemp.getElementsByTagName("SPAN").item(1).style.color.replace(/\s*/g, "") != window.sColorClicked) {
                oTemp.childNodes[0].src = "../common/image/plusTran.gif";
            }
        }
        cLi[intTargetNum - 1].scrollIntoView(false);
    }
    else {
        alert("已经是目录的第一个条目!");
    }
}

function fnPreOld(){//
event.returnValue=false;
//var cLiNow = parent.document.getElementById("sIframeContents").contentWindow.document.getElementsByTagName("LI");
    var cLiDiv = parent.document.getElementById("sIframeContents").contentWindow.document.getElementById("sDiv");
    var cLiNow = cLiDiv.getElementsByTagName("LI");

var intLi=cLiNow.length;
var intTarget;

for(var i=0;i<intLi;i++){
	//if(cLiNow[i].getElementsByTagName("SPAN").item(1).style.color==parent.frames.item("sIframeContents").sColorClicked){
    if (cLiNow[i].getElementsByTagName("SPAN").item(1).style.color.replace(/\s*/g, "") == parent.document.getElementById("sIframeContents").contentWindow.sColorClicked) {
    
	intTarget=i;
	break;
}
}

if(intTarget>0){
	var intLoop=intTarget-1;
	while(cLiNow[intLoop].parentNode.parentNode.nodeName!="DIV"){
		if(cLiNow[intLoop].nodeName=="LI")
		cLiNow[intLoop].style.display="list-item";
        if (cLiNow[intLoop].childNodes[0].src.lastIndexOf("plus.gif") > 0) {
            cLiNow[intLoop].childNodes[0].click();
			cLiNow[intLoop].childNodes[0].src="../common/image/plusTran.gif";            
		}
		intLoop=intLoop-1;
		}
	if(cLiNow[intLoop].childNodes[0].src.lastIndexOf("plus.gif")>0){
		cLiNow[intLoop].childNodes[0].src="../common/image/plusTran.gif";
																	}
	cLiNow[intTarget-1].getElementsByTagName("SPAN").item(1).click();
    cLiNow[intTarget-1].scrollIntoView(false);
}
else{
	alert("已经是目录的第一个条目!");
 }
}

function fnChangeIcon(){
//alert(event.srcElement.src.substring(0,event.srcElement.src.indexOf("vertical.gif"))+"horizontal.gif");
if(event.srcElement.src.indexOf("vertical.gif")>0){
event.srcElement.src=event.srcElement.src.substring(0,event.srcElement.src.indexOf("vertical.gif"))+"horizontal.gif";
}
else if(event.srcElement.src.indexOf("horizontal.gif")>0){
event.srcElement.src=event.srcElement.src.substring(0,event.srcElement.src.indexOf("horizontal.gif"))+"zoom.gif";
}
else{
event.srcElement.src=event.srcElement.src.substring(0,event.srcElement.src.indexOf("zoom.gif"))+"vertical.gif";
}
}

/**此功能已放弃 function fnToggleEditContent(){
event.returnValue=false;
if(parent.frames.item("sIframecontent").document.URL==parent.sHTTPHeader+"options/contentStart.htm"||parent.frames.item("sIframecontent").document.URL==parent.sHTTPHeader+"lessons/contents.htm"){
	alert("该课文是根条目的课文,不允许编辑！");
}
else{
	if(event.srcElement.style.backgroundColor==""){
		event.srcElement.style.backgroundColor=window.sBackgroundColorForsContentEditable;
		//event.srcElement.innerText="退出编辑";
		parent.frames.item("sIframecontent").document.URL="HTMLEditor/WebEditor.aspx?sEditorPage="+parent.frames.item("sIframecontent").document.URL;
	}
	else{
		event.srcElement.style.backgroundColor="";
		//event.srcElement.innerText="编辑课文";
		parent.frames.item("sIframecontent").Exit();
	}

}
}
**/
/**function fnToggleToobarDisplay(){
if(parent.frames.item("sIframecontent").document.URL==parent.sHTTPHeader+"options/contentStart.asp"||parent.frames.item("sIframecontent").document.URL==parent.sHTTPHeader+"lessons/contents.asp"){
	alert("该内容框架的内容是初始内容或在目录中直接链接的非.asp文件，不支持使用工具栏在线编辑！");
}
else{
if(document.getElementById("sContentEditable").style.backgroundColor==window.sBackgroundColorForsContentEditable){
	if(parent.frames.item("sIframecontent").oToolBar.style.display=="none"){
		parent.frames.item("sIframecontent").oToolBar.style.display="inline";
	}
	else{
		parent.frames.item("sIframecontent").oToolBar.style.display="none";
	}
	}
else{
	alert("请事先切换到'内容编辑'状态,然后才能使用'工具栏显示切换'功能切换工具栏的显示以编辑内容！");
}
}
}**/

/** function fnToggleEditContents(){
event.returnValue=false;
if(event.srcElement.style.backgroundColor==""){
	event.srcElement.style.backgroundColor=window.sBackgroundColorForsContentsEditable;
	parent.frames.item('sIFrameContents').sContentsPopUpState=1;
}
else{
	event.srcElement.style.backgroundColor="";
	parent.frames.item('sIFrameContents').sContentsPopUpState=0;
}

}**/


function fnDefaultZoom(){
    event.returnValue = false;
    //浏览器菜单栏的放缩JS无法读写？
    // if (parent.document.getElementById('sIframeContents').contentWindow.document.getElementById("sDiv").style.zoom == "100%" && parent.document.getElementById('sIframeContent').contentWindow.document.body.style.zoom == "100%"&& document.body.style.zoom == "100%")
    
    if (parent.document.getElementById('sIframeContents').contentWindow.document.body.style.zoom == "100%" && parent.document.getElementById('sIframeContent').contentWindow.document.body.style.zoom == "100%" && document.body.style.zoom == "100%") 
    {
        alert("标题面板、目录面板、内容面板现在都是默认放缩!您可以按住Ctrl键,同时滚动鼠标分别放缩标题面板、目录面板、内容面板。（请注意：本系统的放缩是基于浏览器放缩之上的放缩！默认可以按F11键切换浏览器全屏！）");
    }
    else {
        document.body.style.zoom = "100%";
        //parent.document.getElementById('sIframeContents').contentWindow.document.getElementById("sDiv").style.zoom = "100%";
      
        parent.document.getElementById('sIframeContents').contentWindow.document.body.style.zoom = "100%";
        parent.document.getElementById('sIframeContent').contentWindow.document.body.style.zoom = "100%";
    }
}

function fnForword(){//由于时间关系，还没有实现获取内容框架的内容为图象等时的URL，从而在前进后退时标识当前条目为红色！！！！！！
    event.returnValue = false;
   // alert(window.history.length);
if(window.history.length>0){
	window.history.go(1);
		/**没成功!
	var sPathPart=parent.frames.item("sIframeContent").document.URL.substring(parent.frames.item("sIframeContent").document.URL.lastIndexOf("/")+1,parent.frames.item("sIframeContent").document.URL.lastIndexOf("."));
	alert(sPathPart);
	var cA=parent.frames.item("sIframeContents").document.getElementsByTagName("A");
	var cALength=cA.length;
	for(i=0;i<cALength;i++){
		if(cA[i].style.color==parent.frames.item("sIframeContents").sColorClicked){
			cA[i].style.color=parent.frames.item("sIframeContents").sColorNormal;
			break;
																					}
							}
	if(sPathPart=="contentStart"){
	    cA[0].style.color=parent.frames.item("sIframeContents").sColorClicked;
	    						}
	else{
		for(i=0;i<cALength;i++){
			 if(cA[i].attributes.getNamedItem("text").nodeValue==sPathPart){
				cA[i].style.color=parent.frames.item("sIframeContents").sColorClicked;		
				break;
																			}
								}
		}
		**/
}
else{
	alert("历史记录尚为空!");
}
}

function fnBackword(){
event.returnValue=false;
if(window.history.length>0){
	window.history.go(-1);
	/**没成功!
	var sPathPart=parent.frames.item("sIframeContent").document.URL.substring(parent.frames.item("sIframeContent").document.URL.lastIndexOf("/")+1,parent.frames.item("sIframeContent").document.URL.lastIndexOf("."));
	var sPathPart=fnGetHistoryURL();
	alert(sPathPart);
	var cA=parent.frames.item("sIframeContents").document.getElementsByTagName("A");
	var cALength=cA.length;
	for(i=0;i<cALength;i++){
		if(cA[i].style.color==parent.frames.item("sIframeContents").sColorClicked){
			cA[i].style.color=parent.frames.item("sIframeContents").sColorNormal;
			break;
																					}
							}
	if(sPathPart=="contentStart"){
	    	cA[0].style.color=parent.frames.item("sIframeContents").sColorClicked;
	    						}
	else{
		for(i=0;i<cALength;i++){
			 if(cA[i].attributes.getNamedItem("text").nodeValue==sPathPart){
				cA[i].style.color=parent.frames.item("sIframeContents").sColorClicked;		
				break;
																			}
								}
		}**/
}
else{
	alert("历史记录尚为空!");
}
}

function fnGetHistoryURL(){
	//alert(parent.frames("sIframeContent").document.readyState);
	if(parent.frames("sIframeContent").document.readyState=="complete"){
		var sPathPart=parent.frames.item("sIframeContent").document.URL.substring(parent.frames.item("sIframeContent").document.URL.lastIndexOf("/")+1,parent.frames.item("sIframeContent").document.URL.lastIndexOf("."));
	 	return sPathPart;
	}
	setTimeout("fnGetHistoryURL();",6000);
}

function fnSettingMarquee(){
document.getElementById("sMarqueeLogo").innerHTML=window.sReturnOrganization+"<br/>"+window.sReturnContact+"<br/>"+window.sReturnThinking;
}

function fnShowSettingMarqueeModalDialog(){
window.sReturnOrganization="";
window.sReturnContact="";
window.sReturnThinking="";
parent.showModalDialog("configure.aspx", window,"help:0;resizable:1;dialogWidth:800px;dialogHeight:600px;status:0");
}

  //已经做了修改,是否保存
function IsHaveSave(){
   alert();
  if( parent.sIframeContent.HtmlEdit.document.body.parentElement.outerHTML==sEditorTempHtml ){
    return true;
    }
    else{
    return false;
    }
}

function fnOnDBLClick() {//暂时改写，因为获取不到iframeTitle。
    try {
        window.event.returnValue = false;//去除双击时的默认选定文本效果
    }
    catch (e) {//考虑目录框架的右键菜单中的命令。
        return;
    }
    finally {
        //if (parent.document.getElementById("sFramesetMiddle").cols == "1022,*") {
        if (parent.document.getElementById("sFramesetMiddle").cols == "100%,*") {
            parent.document.getElementById("sFramesetMiddle").cols = parent.sFramesetMiddleColsTemp;
        }
        else {
            parent.sFramesetMiddleColsTemp = parent.document.getElementById("sFramesetMiddle").cols;
            //parent.document.getElementById("sFramesetMiddle").cols = "1022,*";
            parent.document.getElementById("sFramesetMiddle").cols = "100%,*";
        }
    }
}
function fnToggleScreenStepByStep() {//暂时改写，因为获取不到iframeTitle。
    try {
        window.event.returnValue = false;//去除双击时的默认选定文本效果
    }
    catch (e) {//考虑目录框架的右键菜单中的命令。
        return;
    }
    finally {
        //if (parent.document.getElementById("sFramesetMiddle").cols == "1022,*") {
        if (parent.document.getElementById("sFramesetMiddle").cols == "100%,*") {
            alert("目录已经是最宽了");
        }
        else {
            //parent.sFramesetMiddleColsTemp = parent.document.getElementById("sFramesetMiddle").cols;
            //parent.document.getElementById("sFramesetMiddle").cols = "1022,*";
            parent.document.getElementById("sFramesetMiddle").cols = parseInt(parent.document.getElementById("sFramesetMiddle").cols) + 10 + "%,*";
        }
    }
}
function fnToggleScreen() {
    try {
        window.event.returnValue = false;//去除双击时的默认选定文本效果
    }
    catch (e) {//考虑目录框架的右键菜单中的命令。
        return;
    }
    finally {
        //if (parent.document.getElementById("sFramesetMiddle").cols == "1022,*") {
        if (parent.document.getElementById("sFramesetMiddle").cols == "0%,*") {
            parent.document.getElementById("sFramesetMiddle").cols = parent.sFramesetMiddleColsTemp;
        }
        else {
            parent.sFramesetMiddleColsTemp = parent.document.getElementById("sFramesetMiddle").cols;
            //parent.document.getElementById("sFramesetMiddle").cols = "1022,*";
            parent.document.getElementById("sFramesetMiddle").cols = "0%,*";
        }
    }
}

function fnMouseWheel() {    
    if (event.ctrlKey) {
        event.returnValue = false;
        var iCount = 0;
        if (event.wheelDelta >= 120)
            //iCount -= 10;
            iCount += 10;
        else if (event.wheelDelta <= -120)
            // iCount += 10;
            iCount -= 10;
        document.body.style.zoom = parseInt(document.body.style.zoom) + iCount + "%";
    }
}

function fnWindowOnFocus() {
    parent.document.getElementById("sIFrameTitle").contentWindow.document.getElementById("idForPanelToolbar").innerHTML = "";//好像浏览器有Bug，只好灵活助理下。
    //console.log(parent.document.getElementById("sIFrameTitle").contentWindow.document.getElementById("popupDiv").innerHTML);
    var sPopupMenu = parent.document.getElementById("sIFrameTitle").contentWindow.document.getElementById("popupDiv").innerHTML.replace(new RegExp("<div", "g"), "<span").replace(new RegExp("</div>", "g"), "</span>");
    //console.log(sPopupMenu);
    alert("");
   parent.document.getElementById("sIFrameTitle").contentWindow.document.getElementById("idForPanelToolbar").innerHTML = '<div id="popupDiv" onmouseover="parent.document.getElementById(' + "'" + 'sIFrameTitle' + "'" + ').contentWindow.fnPopupMouseOver(); " onmouseout="parent.document.getElementById(' + "'" + 'sIFrameTitle' + "'" + ').contentWindow.fnPopupMouseOut(); " style=" font-size: 9px;font-family:Times New Roman; cursor: default;overflow: auto ">' + '<span  style="font-weight:bold">标题面板右键菜单：</span>' + sPopupMenu + "</div>";
   //  parent.document.getElementById("sIFrameTitle").contentWindow.document.getElementById("idForPanelToolbar").innerHTML = '<div id="popupDiv" style="overflow: auto" onmouseover="parent.document.getElementById(' + "'" + 'sIFrameTitle' + "'" + ').contentWindow.fnPopupMouseOver(); " onmouseout="parent.document.getElementById(' + "'" + 'sIFrameTitle' + "'" + ').contentWindow.fnPopupMouseOut(); " style=" font-size: 9px;font-family:Times New Roman; cursor: default ">' + '<span  style="font-weight:bold">标题面板右键菜单：</span>' + sPopupMenu + "</div>";
    
}

function fnContentsGetFocus() {
        parent.document.getElementById("sIframeContents").contentWindow.fnGetFocus(); 
    /**
           try {
               if (typeof (parent.document.getElementById("sIframeContents").contentWindow.childWindow) != "undefined") {//如果子窗口存在，将焦点转到子窗口
                  
                   parent.document.getElementById("sIframeContents").contentWindow.childWindow.focus();
                   console.log(parent.document.getElementById("sIframeContents").contentWindow.childWindow.document.body.innerHTML);
            //window.focus();
               }
              
    }
    catch (e) { return; }
    **/
}

function fnSystemInfo() {   
    var sSystemVersion = "";
    var sSystemRunningDir = "";
    var sURLOfGetSystemVersion = "/SystemInfo/GetSystemVersion";
    var sURLOfGetRunningDir = "/SystemInfo/GetSystemRunningDir";   

   
    var xmlHttpRequestForSystemVersion = new XMLHttpRequest();
    xmlHttpRequestForSystemVersion.open('GET', sURLOfGetSystemVersion, true);//不让使用false。所以只好使用了三个alert()。提示对话框是异步的。如果是post：xmlHttpRequest.open('POST',sURL , true);
    // sSearched = xhr.responseText;
    xmlHttpRequestForSystemVersion.send();////如果是post：xmlHttpRequest.setRequestHeader('content-type', 'application/x-www-form-urlencoded');  //设置请求头说明文档类型   xhr.send(data);  //send里传递数据
    xmlHttpRequestForSystemVersion.onreadystatechange = function () {  //如果readyState发生变化的时候执行的函数

        if (xmlHttpRequestForSystemVersion.readyState == 4) {  //ajax为4说明执行完了

            if (xmlHttpRequestForSystemVersion.status == 200) { //如果是200说明成功
                //如果函数存在的话执行
                sSystemVersion = xmlHttpRequestForSystemVersion.responseText;
                 alert("系统版本是：" + sSystemVersion + "\n");
            }
            else {
                alert('获取系统版本出错了：' + xmlHttpRequestForSystemVersion.status);
            }
        }
    }
    

    var xmlHttpRequestForRunningDir = new XMLHttpRequest();
    xmlHttpRequestForRunningDir.open('GET', sURLOfGetRunningDir, true);//不让使用false。所以只好使用了三个alert()。提示对话框是异步的。如果是post：xmlHttpRequest.open('POST',sURL , true);
    // sSearched = xhr.responseText;
    xmlHttpRequestForRunningDir.send();////如果是post：xmlHttpRequest.setRequestHeader('content-type', 'application/x-www-form-urlencoded');  //设置请求头说明文档类型   xhr.send(data);  //send里传递数据
    console.log(xmlHttpRequestForRunningDir.readyState);
    xmlHttpRequestForRunningDir.onreadystatechange = function () {  //如果readyState发生变化的时候执行的函数

        if (xmlHttpRequestForRunningDir.readyState == 4) {  //ajax为4说明执行完了
            
            if (xmlHttpRequestForRunningDir.status == 200) { //如果是200说明成功
                //如果函数存在的话执行
                sSystemRunningDir = xmlHttpRequestForRunningDir.responseText;
                alert("系统当前的本机运行目录是：" + sSystemRunningDir + "\n");
                //alert(sSystemRunningDir + ";" + xmlHttpRequestForRunningDir.responseText);
            }
            else {
                alert('获取系统运行目录出错了：' + xmlHttpRequestForRunningDir.status);
            }
        }
    }


   
   
   
    getUserIP(function (ip) {
        alert("系统当前的本机IP地址是：" + ip);
    });
}

//实时通讯技术WebRTC(Web Real-Time Communications),建立浏览器之间点对点（Peer-to-Peer）的连接，实现视频流、音频流等实施通信。可以使用WebRTC获取ip地址。只要浏览器内置WebRTC功能就能正常运行。
function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
        iceServers: []
    }),
        noop = function () { },
        localIPs = {},
        ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
        key;
    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }
    //create a bogus data channel
    pc.createDataChannel("");
    // create offer and set local description
    pc.createOffer().then(function (sdp) {
        sdp.sdp.split('\n').forEach(function (line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });
        pc.setLocalDescription(sdp, noop, noop);
    }).catch(function (reason) {
        // An error occurred, so handle the failure to connect
    });
    //sten for candidate events
    pc.onicecandidate = function (ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
}


function fnNotification(sStringTitle, sStringBody, sStringIcon) {  //不知为什么放在initial.html中的JS时，本地运行可以，但外网不行。所以只好移动到了title.html的JS，本地、外网都可以。
    if (window.Notification) {

        var popNotice = function () {
            if (Notification.permission == "granted") {
                var notification = new Notification(sStringTitle, { body: sStringBody,icon:sStringIcon });

                notification.onclick = function () {
                    alert("如果正使用手机浏览，请设置横屏！");
                    notification.close();
                };
            }
        };
        if (Notification.permission == "granted") {
            popNotice();
        }
        else if (Notification.permission != "denied") {
            Notification.requestPermission(function (permission) {
                popNotice();
            });
        }
    }
    else {
        alert('浏览器不支持通知功能');
    }
}

function fnTTS_Play() {
    if(!("speechSynthesis" in window)) {
		throw alert("对不起，您的浏览器不支持");
		}
       /** 
        var sTextToSpeak = "";
    if (parent.document.getElementById("sIframeContent").contentWindow.getSelection) {
        sTextToSpeak = parent.document.getElementById("sIframeContent").contentWindow.getSelection().toString();
    } else if (parent.document.getElementById("sIframeContent").contentWindow.document.selection) {
        sTextToSpeak = parent.document.getElementById("sIframeContent").contentWindow.document.selection.createRange().text;
    }
    if (sTextToSpeak == "") {
        alert("请先选定要朗读的文本！");
        return;
    }
    var msg = new SpeechSynthesisUtterance();
    msg.text = sTextToSpeak;
    msg.lang = 'zh-CN'; //中文
    //msg.lang = 'en-US'; //英文
    msg.volume = 1; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 1; //0 to 2
    window.speechSynthesis.speak(msg);
    **/
   const utterance = new SpeechSynthesisUtterance(parent.document.getElementById("sIframeContent").contentWindow.document.body.textContent);
   window.speechSynthesis.speak(utterance);
}

function fnTTS_Pause() {
    window.speechSynthesis.pause();
}

function fnTTS_Resume() {
    window.speechSynthesis.resume();
}

function fnTTS_Cancel() {
    window.speechSynthesis.cancel();
}


// Usage

/** function fnUploadBackgroundMusic(){
 	showModalDialog("uploadFileInterface.aspx",window,"help:0;resizable:1;dialogWidth:600px;dialogHeight:300px;status:0");
 	
}**/

