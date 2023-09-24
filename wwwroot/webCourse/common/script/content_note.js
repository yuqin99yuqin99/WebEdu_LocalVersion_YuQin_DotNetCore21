function fnOnLoad(){
document.getElementById("sIdDownloadFilesForDynFunctions").startDownload("../../../../common/popupContent_note.htm",fnOnDownLoad);
//全局变量在此一起定义，而不要分散定义，因为全局变量在各函数中都可调用，分散定义不便查找维护！！！
window.oPopup=new Object();
window.oPopup=window.createPopup();
document.body.oncontextmenu=fnPopup;
window.oSrcElement=new Object();
window.bMovable=false;
window.bFrameMovable=false;
window.iFrameMouseX;
window.iMouseX;
window.iMouseY;
window.sInitColor=null;//sInitColor is a global variable. It holds the value of the selected color in the color dialog box when it displays.Create a global variable called sInitColor and set it equal to null. This variable holds the color that is chosen by the user when the color dialog box displays. The application "remembers" this choice and it will be the selected color the next time the color dialog box displays
window.sDivForContentEditInnerHTML="";//可用于判断该内容框架是否因在线编辑而有了改变，从而可提醒用户保存。
//以上定义全局变量
//事件句柄在此定义，以便查找维护！！！
//document.body.onbeforeunload=fnIsSaved;//检查内容框架是否因编辑而有变化而提示保存等,由于有图象等链接时相对URL会变为绝对，一时无法处理，只好暂时关闭该功能！！！！！！
document.body.onmousemove=fnPane;
document.body.onmousewheel=fnMouseWheel;
document.body.onmousedown=fnMouseDown;
document.body.onmouseup=fnMouseUp;
//document.body.setAttribute("CONTENTEDITABLE","true");
//document.body.attributes.getNamedItem("CONTENTEDITABLE").nodeValue=true;
//document.body.ondblclick=fnToggleScreen;
//以上定义事件句柄
document.body.scroll="no";
var sHTMLOuterHTML=document.getElementsByTagName("HTML")(0).outerHTML;
var sBodyInnerHTML=document.body.innerHTML;
window.sDocumentHeader=sHTMLOuterHTML.substring(0,sHTMLOuterHTML.indexOf(sBodyInnerHTML));
window.sDocumentEnder=sHTMLOuterHTML.substring(sHTMLOuterHTML.indexOf(sBodyInnerHTML)+sBodyInnerHTML.length,sHTMLOuterHTML.length);
//alert(sDocumentHeader);
//alert(sDocumentEnder);
try{
	document.body.style.zoom=parent.frames("sIframeContents").document.getElementById("sDiv").style.zoom;
}
catch(e){
	document.body.style.zoom="100%";
}

//fnInitForEdit();
}

function fnMouseWheel(){
try{//独立课文窗口时使用
	event.returnValue=false;
	if(event.shiftKey){
		var iCount=0;
		if (event.wheelDelta>=120)
		        iCount-=10;
		else if(event.wheelDelta<=-120)
		        iCount+=10;
		var iScrollTop=document.body.scrollTop;
		var iScrollLeft=document.body.scrollLeft;
		iScrollLeft+=iCount;
		window.scroll(iScrollLeft,iScrollTop);
	}
	
	else if(event.ctrlKey){
		var iCount=0;
		if (event.wheelDelta>=120)
		        iCount-=10;
		else if(event.wheelDelta<=-120)
		        iCount+=10;
		document.body.style.zoom=parseInt(document.body.style.zoom)+iCount+"%";
	}
	
	else if(event.altKey){
		var iCount=0;
		if (event.wheelDelta>=120)
		        iCount-=10;
		else if(event.wheelDelta<=-120)
		        iCount+=10;
		var iScrollTop=document.body.scrollTop;
		var iScrollLeft=document.body.scrollLeft;
		iScrollTop+=iCount;
		window.scroll(iScrollLeft,iScrollTop);
	}
	
	else{
		if(parent.frames("sIframeTitle").document.getElementById("sScrollIcon").src.indexOf("vertical.gif")>0){
		var iCount=0;
		if (event.wheelDelta>=120)
		        iCount-=10;
		else if(event.wheelDelta<=-120)
		        iCount+=10;
		var iScrollTop=document.body.scrollTop;
		var iScrollLeft=document.body.scrollLeft;
		iScrollTop+=iCount;
		window.scroll(iScrollLeft,iScrollTop);
		}
		if(parent.frames("sIframeTitle").document.getElementById("sScrollIcon").src.indexOf("horizontal.gif")>0){
		var iCount=0;
		if (event.wheelDelta>=120)
		        iCount-=10;
		else if(event.wheelDelta<=-120)
		        iCount+=10;
		var iScrollTop=document.body.scrollTop;
		var iScrollLeft=document.body.scrollLeft;
		iScrollLeft+=iCount;
		window.scroll(iScrollLeft,iScrollTop);
		}
		if(parent.frames("sIframeTitle").document.getElementById("sScrollIcon").src.indexOf("zoom.gif")>0){
		var iCount=0;
		if (event.wheelDelta>=120)
		        iCount-=10;
		else if(event.wheelDelta<=-120)
		        iCount+=10;
		document.body.style.zoom=parseInt(document.body.style.zoom)+iCount+"%";
		}
	}
}
catch(e){
	//alert("该功能被禁用!请按下Ctrl,Alt,Shift键并滚动鼠标或直接拖动鼠标试验课文的滚动或放缩");
	var iCount=0;
	if (event.wheelDelta>=120)
	        iCount-=10;
	else if(event.wheelDelta<=-120)
	        iCount+=10;
	var iScrollTop=document.body.scrollTop;
	var iScrollLeft=document.body.scrollLeft;
	iScrollTop+=iCount;
	window.scroll(iScrollLeft,iScrollTop);
}

}


function fnMouseDown(){
if(document.body.style.cursor=="w-resize"){
window.bFrameMovable=true;
document.body.style.cursor="w-resize";
iFrameMouseX=event.x;
}
else if(document.body.contentEditable!="true"){
{
if(event.button==1&&!event.altKey){
window.bMovable=true;
document.body.style.cursor="move";
iMouseX=event.x;
iMouseY=event.y;
}
}
}
}

function fnMouseUp(){
window.bMovable=false;
window.bFrameMovable=false;
document.body.style.cursor="default";
}

function fnPane(){
if(event.x<=2){
document.body.style.cursor="w-resize";
}
else{
document.body.style.cursor="default";
}
if(window.bMovable){
event.returnValue=false;
window.scrollTo(document.body.scrollLeft+event.x-iMouseX,document.body.scrollTop+event.y-iMouseY);
}
}



function fnOnDownLoad(src){
window.oPopup.document.write(src);
}


function fnPopup(){
	window.oSrcElement=event.srcElement;
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
	window.oPopup.show(iLeft,iTop,iMaxLength*13,iChildNumber*15);
}

function fnSave(){
if(document.URL==parent.sHTTPHeader+parent.sOptionsPath+parent.sContentStartName||document.URL==parent.sHTTPHeader+parent.sContentsPath+parent.sContentsName){
	alert("该内容框架的内容是初始内容或在目录中直接链接的非.htm文件，不允许保存！");
}
else{
	var sExtendName=document.URL.substring(document.URL.lastIndexOf("."),document.URL.length);
	var sDocURL=document.URL.substring(0,document.URL.lastIndexOf("AutoCreateForTemp"));//去除AutoCreateForTemp
	var sDocURLPart=sDocURL.substring(parent.sHTTPHeader.length+8,sDocURL.length);
	//var sDocPath=parent.sPathContentsNow.substring(0,parent.sPathContentsNow.length-14)+sDocURLPart;//parent.sPathContentsNow是contents.htm的位置。
	var sDocPath=parent.sPathContentsNow.substring(0,parent.sPathContentsNow.length-18)+sDocURLPart;//parent.sPathContentsNow是contents.htm的位置。
	var aTemp=new Array();
	aTemp=sDocPath.split("/");
	var iLength=aTemp.length;
	var sDocPathPartTransFormed="";
	for(var i=0;i<iLength;i++){
	sDocPathPartTransFormed=sDocPathPartTransFormed+aTemp[i]+"\\";
	}
	sDocPathNow=sDocPathPartTransFormed.substring(0,sDocPathPartTransFormed.length-1);//parent.sPathContentsNow是contents.htm的物理路径部分，6是common的字符串长度。
	//下面的代码需要从DOM的角度优化，字符串处理太冒险！！！！！！,于是文档头部从源文件获取，而在此只获取<body以后部分！！！
	var bWillSaved=confirm("原目录文件将被覆盖,如果需要,请备份原目录文件,该文件的URL是"+'"'+sDocURL+sExtendName+'"'+"，物理路径是"+'"'+sDocPathNow+sExtendName+'"');
	if(bWillSaved){
		var sDocumentHeaderPart=window.sDocumentHeader.substring(window.sDocumentHeader.indexOf("fnOnLoad();")+"fnOnLoad();".length,window.sDocumentHeader.length);
		window.open(parent.sHTTPHeader+"common/saving.asp", "saving","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//（参看Contents.js相关部分注释）
		var oClonedDivTemp=window.document.getElementById("oDivForContentEdit").cloneNode(true);
		parent.frames("sIframeTitle").document.getElementById("docContents").value="";
		parent.frames("sIframeTitle").document.getElementById("docContent").value=sDocumentHeaderPart+document.getElementById("oDivForContentEdit").innerHTML+sDocumentEnder.toLowerCase();//文档头部将从源文件获取!url相关的特性值若使用了相对URL，在IE解析后将变换为绝对URL，不便于文件的移动，由于时间关系，在此还没有解决！！！！！！
		parent.frames("sIframeTitle").document.getElementById("docPath").value=sDocPathNow+sExtendName;
		parent.frames("sIframeTitle").document.getElementById("sSaveContentsForm").action="saveContent.asp";
		parent.frames("sIframeTitle").document.getElementById("sSaveContentsForm").target="saving";//（参看Contents.js相关部分注释）
		parent.frames("sIframeTitle").document.getElementById("sSaveContentsForm").submit();
		window.sDivForContentEditInnerHTML=document.getElementById("oDivForContentEdit").innerHTML;//（参看Contents.js相关部分注释）
		//由于Nenbox的特点，必须重新在目录中单击对应于该文档的条目，刷新后才体现出来。
	}
	else{
	;
		//return;
	}
}
}

function fnIsSaved(){
if(!fnIsContentChanged()){
//event.returnValue="";
;
}
else{
event.returnValue='您已在线编辑改变了“内容框架”的内容，但还没有最后保存!单击“确定”按钮将继续，而且不保存已编辑过的内容框架;单击“取消”按钮将返回,返回后，内容框架的右击菜单中选择"保存"菜单项可保存！';
return;
}
}

function fnIsContentChanged(){
if(document.URL==parent.sHTTPHeader+parent.sOptionsPath+parent.sContentStartName||document.URL==parent.sHTTPHeader+parent.sContentsPath+parent.sContentsName){//初始页,直接链接的图像等因查不出出错原因也暂时取消保存,所以不检查！
	return false;
}
else{
	if(document.getElementById("oDivForContentEdit").innerHTML===window.sDivForContentEditInnerHTML){
	return false;
	}
	else{
	return true;
	}
}
}

function callFormatting(sFormatString){//This function works for all of the command identifiers used in this pageCreate a function called callFormatting with a single input parameter that calls the execCommand method. The parameter passes the appropriate Command Identifiers to the function based on which ToolbarButton is clicked
	document.execCommand(sFormatString);
}

function getSystemFonts(){//getSystemFonts uses the dialog helper object to return an array of all of the fonts on the user's system, then populates a drop-down listbox in the toolbar with the array elements
	var a=dlgHelper.fonts.count;
	var fArray=new Array();
	var oDropDown=oToolBar.createDropDownListAt("2");
	oDropDown.setAttribute("id","FontNameList");
	for (i=1;i<dlgHelper.fonts.count;i++){ 
		fArray[i]=dlgHelper.fonts(i);
		var aOptions=oDropDown.getOptions();	
		var oOption=document.createElement("OPTION");
		aOptions.add(oOption);	
		oOption.text=fArray[i];
		oOption.Value=i;
	} 
		oDropDown.setAttribute("onchange",ChangeFont);	//attaching the onchange event is necessary in order to detect when a user changes the value in the drop-down listbox
}

function changeFontSize(){//changeFontSize detects the value of the item in the drop-down listbox and applies the value to the font of the selected text
	var sSelected=oToolBar.getItem(0).getOptions().item(oToolBar.getItem(0).getAttribute("selectedIndex"));
   	document.execCommand("FontSize", false, sSelected.value);
}

function ChangeFont(){	//applies the value to the font of the selected text，目前只支持1（32/3像素）-7级（48像素）字号
	var sSelected=oToolBar.getItem(2).getOptions().item(oToolBar.getItem(2).getAttribute("selectedIndex"));
	document.execCommand("FontName", false, sSelected.text);
}

function callColorDlg(sColorType){//callColorDlg uses the dialog helper object's ChooseColorDlg method to open the color dialog box, then changes the font or back color of the selected text
if (window.sInitColor==null) 
	var sColor=dlgHelper.ChooseColorDlg();//display color dialog box
else
	var sColor=dlgHelper.ChooseColorDlg(window.sInitColor);
	sColor=sColor.toString(16);	//change decimal to hex
if (sColor.length<6) {//add extra zeroes if hex number is less than 6 digits
  	var sTempString="000000".substring(0,6-sColor.length);
  	sColor=sTempString.concat(sColor);
}
	document.execCommand(sColorType,false,sColor);	//change color of the selected text
	window.sInitColor=sColor;
	oDivForContentEdit.focus();
}

function VerticalMode(){//VerticalMode changes the orientation of the text from left to right to top to bottom
 	if (oDivForContentEdit.style.writingMode == 'tb-rl')
    	oDivForContentEdit.style.writingMode='lr-tb';
  	else
    	oDivForContentEdit.style.writingMode='tb-rl';
}

function fnInitForEdit(){

if(document.URL==parent.sHTTPHeader+parent.sOptionsPath+parent.sContentStartName||document.URL==parent.sHTTPHeader+parent.sContentsPath+parent.sContentsName){//初始页不允许工具栏在线编辑,直接链接的图像等因查不出出错原因也暂时取消工具栏在线编辑！
	try{//如果刷新时，不是从contentStart.htm开始，而是直接刷新当前URL，如果还来不及装载和解析Title框架，就有可能出错。
		if(parent.frames.item("sIframeTitle").document.getElementById("sContentEditable").style.backgroundColor=="rgb(0,255,0)"){
			document.body.contentEditable="true";
																																}			
		else{
			document.body.contentEditable="false";
			}
		}
	catch(e){
			document.body.contentEditable="false";
		}

}
else{
	var sBodyInnerHTML=window.document.body.innerHTML;
	var sReplacedURLPart='IMAGEURL="';
	var sReplaceURLPart='IMAGEURL="'+parent.sHTTPHeader+"common/HTML_Editor/";
	var oRegExpURLPart=new RegExp(sReplacedURLPart,"g");
	//有些需要的代码（特别是<body>元素以前出现的代码，待验证）已在AutoCreateHTMLFile.asp中加入！
	var sWillAddedForEditHeaderForReplace='<OBJECT ID="dlgHelper" CLASSID="clsid:3050f819-98b5-11cf-bb82-00aa00bdce0b" WIDTH="0" HEIGHT="0"></OBJECT> <DIV  ID="oContainerForContentEdit" STYLE="height:100%; width:100%;"> <mytb:TOOLBAR STYLE="display:none; width:100%" ID="oToolBar" ><mytb:TOOLBARDROPDOWNLIST id="oFontSize" title="字号" onchange="changeFontSize();"> <option value=1>1级字号<option value=2>2级字号<option value=3>3级字号<option value=4 selected>4级字号<option value=5>5级字号<option value=6>6级字号<option value=7>7级字号</mytb:TOOLBARDROPDOWNLIST> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON IMAGEURL="UI_bold.gif" title="加粗" name="Bold" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON IMAGEURL="UI_italic.gif" title="倾斜" name="Italic" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON IMAGEURL="UI_underline.gif" title="下划线" name="Underline" onclick="callFormatting(this.name);"/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON IMAGEURL="UI_superscript.gif" title="上标" name="SuperScript" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON IMAGEURL="UI_subscript.gif" title="下标" name="SubScript" onclick="callFormatting(this.name);"/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_tool-cut.gif" title="剪切" name="Cut" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_form-copy.gif" title="复制" name="Copy" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_paste.gif" title="粘贴" name="Paste" onclick="callFormatting(this.name);"/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_undo.gif" title="撤消" name="Undo" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_redo.gif" title="重做" name="Redo" onclick="callFormatting(this.name);"/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_numberlist.gif" title="有序列表" name="InsertOrderedList" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_bulletlist.gif" title="项目符号" name="InsertUnorderedList" onclick="callFormatting(this.name);"/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_leftalign.gif" title="左对齐" name="JustifyLeft" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_centeralign.gif" title="居中" name="JustifyCenter" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_rightalign.gif" title="右对齐" name="JustifyRight" onclick="callFormatting(this.name);"/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_tool_vertical.gif" title="纵向" name="Vertical Alignment" onclick="VerticalMode();"/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON IMAGEURL="UI_fontcolor.gif" title="颜色" name="ForeColor" onclick="callColorDlg(this.name);"/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_backcolor.gif" title="背景色" name="BackColor" onclick="callColorDlg(this.name);"/></mytb:TOOLBAR><DIV ID="oDivForContentEdit" CONTENTEDITABLE="false" style="width:100%;">';
	
	var sWillAddedForEditHeader=sWillAddedForEditHeaderForReplace.replace(oRegExpURLPart,sReplaceURLPart);
	var sWillAddedForEditEnder='</DIV></DIV>';
	window.document.body.innerHTML=sWillAddedForEditHeader+sWillAddedForEditEnder;
	for(var i=0; i<document.all.length; i++){//ensure that all document elements except the content editable DIV are unselectable
	    document.all(i).unselectable="on";
											}
	window.document.getElementById("oDivForContentEdit").innerHTML=sBodyInnerHTML;
	oDivForContentEdit.contentEditable="false";
	oDivForContentEdit.focus();	
	getSystemFonts();	//call routines to populate the drop-down list boxes on the toolbar
	
	
	try{
		if(parent.frames.item("sIframeTitle").document.getElementById("sContentEditable").style.backgroundColor=="rgb(0,255,0)"){
			document.getElementById("oDivForContentEdit").contentEditable="true";
			document.body.onmousemove="";
			document.body.onmousedown="";
			document.body.onmouseup="";
			}
		else{
			document.getElementById("oDivForContentEdit").contentEditable="false";
			document.body.onmousemove=fnPane;
			document.body.onmousedown=fnMouseDown;
			document.body.onmouseup=fnMouseUp;		
			}
	}
	catch(e){
		document.getElementById("oDivForContentEdit").contentEditable="false";
			}
	window.sDivForContentEditInnerHTML=window.document.getElementById("oDivForContentEdit").innerHTML;
	}
}

function fnRefresh(){
var cLiNow=parent.frames.item("sIframeContents").document.getElementsByTagName("LI");
var intLi=cLiNow.length;
var intTarget;

for(var i=0;i<intLi;i++){
if(cLiNow[i].childNodes[1].style.color==parent.frames.item("sIframeContents").sColorClicked){
intTarget=i;
break;
}
}
cLiNow[intTarget].childNodes[1].click();
}

function fnToggleScrollBar(){
if(document.body.scroll=="no"){
	document.body.scroll="yes";
	document.body.onmousemove="";
	document.body.onmousedown="";
	document.body.onmouseup="";
}
else{
	document.body.scroll="no";
	document.body.onmousemove=window.fnPane;
	document.body.onmousedown=window.fnMouseDown;
	document.body.onmouseup=window.fnMouseUp;
}
}


function fnToggleEditNote(){
	//alert(dialogArguments.bIsEditing);
	if(dialogArguments.bIsEditing){//以后准备实现程式窗口
		//dialogArguments.bIsEditing=false;
		//window.Exit();
		parent.frames.item("sIframe").document.URL="../../../../common/HTMLEditor/WebEditor.aspx?sEditorPage="+document.URL;
	}
	else{
		dialogArguments.bIsEditing=true;
		//document.URL="../../../../common/HTMLEditor/WebEditor.asp?sEditorPage="+document.URL;
		parent.frames.item("sIframe").document.URL="../../../../common/HTMLEditor/WebEditor.aspx?sEditorPage="+document.URL;
		}
}

