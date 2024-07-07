function fnOnload(){
//在线框架修改为框架后的修改代码断，因为框架文档无法直接使用JScript编程，只好在title中间接赋予，而尽量避免在线框架修改为框架后不修改代码。
parent.sRunFrom=parent.parent.sRunFrom;
parent.document.body.scroll="no";
parent.iNewZoom=screen.width/1024*100;
//parent.parent.window.iNewZoom=screen.width/1024*100;//已经在index.asp中实现
//parent.document.body.style.zoom=parent.iNewZoom+"%";//已经在index.asp中实现
parent.sFramesetBookRowsDefault=parent.document.getElementById("sFramesetBook").rows;
parent.sFramesetMiddleColsDefault="224,*";//应相应改变
parent.sFramesetMiddleColsTemp="";
parent.sPathContentsNow=parent.parent.sPathContentsNow+parent.document.getElementById("sIframeContents").src.substring(parent.document.getElementById("sIframeContents").src.lastIndexOf("/")+1,parent.document.getElementById("sIframeContents").src.length)+"/";//不放在onload事件函数中是因为onload事件函数中可能正装载时各框架无法获取。
parent.sHTTPHeader=parent.document.URL.substring(0,parent.document.URL.lastIndexOf("common/initial.asp"));//因为initial.asp是固定的，所以此时获得的sHTTPHeader是确定的，以便其它框架调用，便于虚拟目录的变动而便于维护,相关的文件夹名称也在此定义全局变量（但因时间关系，还未如此实现），但相对路径必须保持，webedusystem已在此屏蔽。不放在onload事件函数中是因为onload事件函数中可能正装载时各框架无法获取。
parent.sContentsPath="lessons/";
parent.sTitlePath="common/";
parent.sLessonsPath="content"+parent.document.getElementById("sIframeContents").src.substring(parent.document.getElementById("sIframeContents").src.lastIndexOf("contents")+8,parent.document.getElementById("sIframeContents").src.lastIndexOf("."))+"/";//为多个分课作准备。
parent.sOptionsPath="options/";
parent.sContentsName=parent.document.getElementById("sIframeContents").src.substring(parent.document.getElementById("sIframeContents").src.lastIndexOf("/")+1+4,parent.document.getElementById("sIframeContents").src.length);
parent.sContentStartName=parent.document.getElementById("sIframeContent").src.substring(parent.document.getElementById("sIframeContent").src.lastIndexOf("/")+1+4,parent.document.getElementById("sIframeContent").src.length);
//alert(parent.sFramesetBookRowsDefault+parent.sFramesetMiddleColsDefault+parent.sPathContentsNow+" "+parent.sHTTPHeader+" "+parent.sLessonsPath);
//全局变量最好全部一起在此定义，易于维护。不过要在其它同时装载的文档中的onload事件中调用的变量不能在此定义，一定要在文档中定义，不然可能因为变量还没定义就被调用而出错。
window.sBackgroundColorForsContentsEditable="rgb(0,255,0)";
window.sBackgroundColorForsContentEditable="rgb(0,255,0)";
window.oSrcElement=new Object();
window.sURLHeader=document.URL.substring(0,document.URL.lastIndexOf("common/"));//因为common下可控制不再在字符串的最后出现“Common”字符，所以是确定的。必须固定initial.asp或initial.asp（既主界面文档）的放置位置，从而获得整个应用的URL根，其它文档中全部使用相对URL，便于维护和移植。
window.oPopup=window.createPopup();
document.body.onbeforeunload=fnIsSaved;
document.body.oncontextmenu=fnPopup;
window.document.getElementById("sDownload").startDownload(window.sURLHeader+"common/popupTitle.asp",fnWritePopupContent);//不知道为什么直接调用parent.sURLHeader出错！必须固定initial.asp或initial.asp（既主界面文档）的放置位置，从而获得整个应用的URL根，其它文档中全部使用相对URL，便于维护和移植。
window.document.getElementById("sIdTitle").onclick=fnAbout;
window.document.body.scroll="no";
window.document.getElementById("sMarqueeLogo").innerHTML=document.getElementById("sMarqueeLogo").innerHTML;//如果不进行该操作，没有修改Marquee设置时就保存会多出fnMarqueeLogo等字符串！！！！！！
window.sMarqueeLogo=document.getElementById("sMarqueeLogo").innerHTML;//可用于判断Marquee是否因在线编辑而有了改变，从而可提醒用户保存有改变的目录。由于时间显示的不断改变，所以不能用Body等来判断！！！
parent.document.getElementById("sIframeContents").src="../"+parent.sContentsPath+"contents.asp";
fnShowTime();
}

function fnWritePopupContent(src){
window.oPopup.document.write(src);
}

function fnPopup() {
oSrcElement=event.srcElement;
window.event.returnValue=false;
var iLeft = event.screenX+10;
var iTop = event.screenY+10;
window.oPopup.document.body.style.backgroundColor="lightyellow";
window.oPopup.document.body.style.border="solid black 1px";
window.oPopup.document.body.style.fontSize=11;
window.oPopup.document.body.style.cursor="default";
var iMaxLength=0;
var sString="";
var oDiv=window.oPopup.document.getElementById("popupDiv");
var iChildNumber=oDiv.children.length;
for(var i=0; i<iChildNumber; i++){
sString=oDiv.children[i].innerHTML;
if(sString.length>iMaxLength){
    iMaxLength=sString.length;
}
}
window.oPopup.show(iLeft,iTop,iMaxLength*15,iChildNumber*15);
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
	window.open("../common/saving.asp", "saving","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//显示“正在保存...”，一直到保存目录的saveContents.asp网页的运行结果返回到该窗口，即“Saving”窗口
	var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sSaveTitleForm"></form>');//在Bottom框架动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.
	var oInput1=parent.frames("sIframeBottom").document.createElement('<input type="text" name="docTitle" id="docTitle></input>');
	var oInputSubmit=parent.frames("sIframeBottom").document.createElement('<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>');
	var oInsertForm=parent.frames("sIframeBottom").document.body.appendChild(oForm);
	var oInsertInput1=oInsertForm.appendChild(oInput1);
	var oInsertInputSubmit=oInsertForm.appendChild(oInputSubmit);
	parent.frames("sIframeBottom").document.getElementById("docTitle").value=document.getElementById("sMarqueeLogo").innerHTML;	
	parent.frames("sIframeBottom").document.getElementById("sSaveTitleForm").action="../common/saveSettings.asp";
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
alert("内容和目录窗口现在都是默认宽度!您可以拖曳目录和内容之间的边界自由调整目录和内容的宽度!");
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



function fnNext(){
event.returnValue=false;
var cLiNow=parent.frames.item("sIframeContents").document.getElementsByTagName("LI");
var intLi=cLiNow.length;
var intTarget;

for(var i=0;i<intLi;i++){
	if(cLiNow[i].getElementsByTagName("SPAN").item(1).style.color==parent.frames.item("sIframeContents").sColorClicked){
		intTarget=i;
		break;
	}
}

if(intTarget<intLi-1){
	if(cLiNow[intTarget].childNodes[0].src.lastIndexOf("plus.gif")<0){
		cLiNow[intTarget+1].getElementsByTagName("SPAN").item(1).click();
																		}
	else{
		cLiNow[intTarget].childNodes[0].src="../common/image/plusTran.gif";
		//var iLength=cLiNow[intTarget].children[2].children.length;
		var iLength=cLiNow[intTarget].getElementsByTagName("UL").item(0).children.length;//children与childNodes不同？试验后好象一样
		for(var i=0;i<iLength;i++){
			//cLiNow[intTarget].children[2].children[i].style.display="list-item";
			cLiNow[intTarget].getElementsByTagName("UL").item(0).children(i).style.display="list-item";
									}
		cLiNow[intTarget+1].getElementsByTagName("SPAN").item(1).click();
		}
		cLiNow[intTarget+1].scrollIntoView(true);
}

else{
	alert("已经是目录的最后一个条目!");
	}
}

function fnPre(){
event.returnValue=false;
var cLiNow=parent.frames.item("sIframeContents").document.getElementsByTagName("LI");
var intLi=cLiNow.length;
var intTarget;

for(var i=0;i<intLi;i++){
	if(cLiNow[i].getElementsByTagName("SPAN").item(1).style.color==parent.frames.item("sIframeContents").sColorClicked){
	intTarget=i;
	break;
}
}

if(intTarget>0){
	var intLoop=intTarget-1;
	while(cLiNow[intLoop].parentNode.parentNode.nodeName!="DIV"){
		if(cLiNow[intLoop].nodeName=="LI")
		cLiNow[intLoop].style.display="list-item";
		if(cLiNow[intLoop].childNodes[0].src.lastIndexOf("plus.gif")>0){
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

function fnToggleEditContent(){
event.returnValue=false;
//alert("新开一个窗口,该窗口提供在线编辑网页的工具栏,可用来编辑当前课文,编辑后可保存!该编辑功能的所有文件放在common\\HTMLEditor文件夹下,当前课文所引用的所有文件上传到该课文文件的目录或子目录下，不允许引用其它目录的文件！逐步加强完善编辑功能");
if(parent.frames.item("sIframecontent").document.URL==parent.sHTTPHeader+"options/contentStart.asp"||parent.frames.item("sIframecontent").document.URL==parent.sHTTPHeader+"lessons/contents.asp"){
	alert("该课文是根条目的课文,不允许编辑！");
}
else{
	if(event.srcElement.style.backgroundColor==""){
		event.srcElement.style.backgroundColor=window.sBackgroundColorForsContentEditable;
		parent.frames.item("sIframecontent").document.URL="HTMLEditor/WebEditor.asp?sEditorPage="+parent.frames.item("sIframecontent").document.URL;
	}
	else{
		event.srcElement.style.backgroundColor="";
		parent.frames.item("sIframecontent").Exit();
	}

}
/**if(parent.frames.item("sIframecontent").document.URL==parent.sHTTPHeader+"options/contentStart.asp"||parent.frames.item("sIframecontent").document.URL==parent.sHTTPHeader+"lessons/contents.asp"){
	if(event.srcElement.style.backgroundColor==""){
		parent.frames.item("sIframecontent").document.body.contentEditable="true";
		event.srcElement.style.backgroundColor=window.sBackgroundColorForsContentEditable;
	}
	else{
		parent.frames.item("sIframecontent").document.body.contentEditable="false";
		event.srcElement.style.backgroundColor="";
	}
	//alert("该内容框架的内容是初始内容或在目录中直接链接的非.asp文件，不允许在线编辑！");
}
else{
parent.frames.item("sIframecontent").oToolBar.style.display="none";
//if(parent.frames.item("sIframecontent").document.getElementById("oDivForContentEdit").contentEditable=="false"||parent.frames.item("sIframecontent").document.getElementById("oDivForContentEdit").contentEditable=="inherit"||parent.frames.item("sIframecontent").document.getElementById("oDivForContentEdit").contentEditable==""){
if(parent.frames.item("sIframecontent").document.getElementById("oDivForContentEdit").contentEditable=="false"){
parent.frames.item("sIframecontent").document.getElementById("oDivForContentEdit").contentEditable="true";
parent.frames.item("sIframecontent").document.getElementById("oDivForContentEdit").unselectable="off";
event.srcElement.style.backgroundColor=window.sBackgroundColorForsContentEditable;
//parent.frames.item("sIframecontent").document.body.oncontextmenu="";
parent.frames.item("sIframecontent").document.body.onmousemove="";
parent.frames.item("sIframecontent").document.body.onmousedown="";
parent.frames.item("sIframecontent").document.body.onmouseup="";
}
else{
parent.frames.item("sIframecontent").document.getElementById("oDivForContentEdit").contentEditable="false";
event.srcElement.style.backgroundColor="";
parent.frames.item("sIframecontent").document.getElementById("oDivForContentEdit").unselectable="on";
//parent.frames.item("sIframecontent").document.body.oncontextmenu=parent.frames.item("sIframecontent").fnPopup;
parent.frames.item("sIframecontent").document.body.onmousemove=parent.frames.item("sIframecontent").fnPane;
parent.frames.item("sIframecontent").document.body.onmousedown=parent.frames.item("sIframecontent").fnMouseDown;
parent.frames.item("sIframecontent").document.body.onmouseup=parent.frames.item("sIframecontent").fnMouseUp;
}

}**/
}

function fnToggleToobarDisplay(){
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
}

function fnToggleEditContents(){
event.returnValue=false;
if(event.srcElement.style.backgroundColor==""){
event.srcElement.style.backgroundColor=window.sBackgroundColorForsContentsEditable;
}
else{
event.srcElement.style.backgroundColor="";
}

}


function fnDefaultZoom(){
event.returnValue=false;
if(parent.frames.item("sIframeContents").document.getElementById("sDiv").style.zoom=="100%"&&parent.frames.item("sIframeContent").document.body.style.zoom=="100%"){
alert("内容和目录窗口现在都是默认放缩!您可以按住Ctrl键,同时滚动鼠标放缩内容和目录窗口");
}
else{
parent.frames.item("sIframeContents").document.getElementById("sDiv").style.zoom="100%";
parent.frames.item("sIframeContent").document.body.style.zoom="100%";
}
}

function fnForword(){//由于时间关系，还没有实现获取内容框架的内容为图象等时的URL，从而在前进后退时标识当前条目为红色！！！！！！
event.returnValue=false;
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
parent.showModalDialog("configure.asp", window,"help:0;resizable:1;dialogWidth:800px;dialogHeight:600px;status:0");
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
  
function fnUploadBackgroundMusic(){
 	showModalDialog("uploadFileInterface.asp",window,"help:0;resizable:1;dialogWidth:600px;dialogHeight:300px;status:0");
 	
}

