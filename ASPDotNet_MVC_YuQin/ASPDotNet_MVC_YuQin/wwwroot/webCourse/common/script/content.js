//////////////所有全局对象
window.oSrcElement = new Object();
window.oDiv = new Object();
window.bMovable = false;
window.bFrameMovable = false;
window.iFrameMouseX;
window.iMouseX;
window.iMouseY;

window.sInitColor = null;//sInitColor is a global variable. It holds the value of the selected color in the color dialog box when it displays.Create a global variable called sInitColor and set it equal to null. This variable holds the color that is chosen by the user when the color dialog box displays. The application "remembers" this choice and it will be the selected color the next time the color dialog box displays
window.sDivForContentEditInnerHTML = "";//可用于判断该内容框架是否因在线编辑而有了改变，从而可提醒用户保存。
    //以上定义全局变量
    //事件句柄在此定义，以便查找维护！！！
    //document.body.onbeforeunload=fnIsSaved;//检查内容框架是否因编辑而有变化而提示保存等,由于有图象等链接时相对URL会变为绝对，一时无法处理，只好暂时关闭该功能！！！！！！
//////////////////
function fnOnLoad() {
	/**因为可以直接导航到目录的具体条目了，所以下述功能已取消
	document.title = "欢迎联系QQ：43930878。教与学_本机版_渔琴(Teaching&Learning_LocalVersion_YuQin)";
	try {
		var tempTitle = opener.parent.parent.document.title;
		//alert(tempTitle);
		//alert(tempTitle.indexOf("Teaching&Learning_LocalVersion_YuQin"));
		if (tempTitle.indexOf("Teaching&Learning_LocalVersion_YuQin" >= 0)) { //内容框架被独立浏览（例如外部网站链接的时候的通知）。
			;
		}
		else {
			fnNewWindowAdvertisement();
			fnContentFrameworkNotification('欢迎浏览：', '单击此处可浏览整个系统。使用帮助，请咨询：QQ：43930878；。EMail:43930878@qq.com', '/favicon.ico');
		}
	}
	catch (e) {
		fnNewWindowAdvertisement();
		fnContentFrameworkNotification('欢迎浏览：', '单击此处可浏览整个系统。使用帮助，请咨询：QQ：43930878；。EMail:43930878@qq.com', '/favicon.ico');

	}
	**/
	/**
	finally {
		fnContentFrameworkNotification('欢迎使用内容：', '使用帮助，请咨询：QQ：43930878；。EMail:43930878@qq.com', '/favicon.ico');
    }
	**/
	
	//alert(document.title);
    //parent.document.getElementById("sIframeContents").scrolling = "no";
    //alert(parent.document.getElementById("sIframeTitle").src);
    //document.body.unselectable="on";//通过取消双击事件的默认行为行吗？
    //downLoad.startDownload(parent.sHTTPHeader+"common/popupContent.asp",fnOnDownLoad);
  window.addEventListener("focus", fnContentsGetFocus, false); //目录框架的模式窗口相关。   
  window.addEventListener("focus", fnWindowOnFocus, false); //右键菜单映射到标题框架相关。
  window.addEventListener("click", fnContentsGetFocus, false); //目录框架的模式窗口相关。
    window.addEventListener("click", fnWindowOnClick, false); //右键菜单映射到标题框架相关。取消右击菜单自动弹出相关
   // window.onfocus = fnWindowOnFocus;
    window.oDiv = document.getElementById("popupDiv");//为右键菜单作准备。    
   // document.body.oncontextmenu = fnContentPopup;   
    document.body.oncontextmenu = fnContentPopup;
    
    document.body.onmousemove = fnPane;
    document.body.onmousewheel = fnMouseWheel;//通过滚动条不显示实现
    window.onmousewheel = fnMouseWheel;
    document.body.onmousedown = fnMouseDown;
    document.body.onmouseup = fnMouseUp;
    document.body.ondblclick=fnToggleScreen;
    document.body.onkeydown = fnKeyDown;
    //以上定义事件句柄
    document.body.scroll = "no";
    var sHTMLOuterHTML = document.getElementsByTagName("HTML").item(0).outerHTML;
    var sBodyInnerHTML = document.body.innerHTML;
    window.sDocumentHeader = sHTMLOuterHTML.substring(0, sHTMLOuterHTML.indexOf(sBodyInnerHTML));
    window.sDocumentEnder = sHTMLOuterHTML.substring(sHTMLOuterHTML.indexOf(sBodyInnerHTML) + sBodyInnerHTML.length, sHTMLOuterHTML.length);
    //alert(sDocumentHeader);
    //alert(sDocumentEnder);
    /**try {
        document.body.style.zoom = parent.frames("sIframeContents").document.getElementById("sDiv").style.zoom;
    }
    catch (e) {
        document.body.style.zoom = "100%";
    }**/
    //window.click();//不知为什么总是自动弹出右键菜单，暂时通过此使右键菜单消失。
    window.document.body.click();//不知为什么总是自动弹出右键菜单，暂时通过此使右键菜单消失。
	fnHighLight();
}

function fnMouseWheel(){
    try {//独立课文窗口时使用
        

        if (event.ctrlKey) {
            event.returnValue = false;
            var iCount = 0;
            if (event.wheelDelta >= 120)
                // iCount-=10;
                iCount += 10;
            else if (event.wheelDelta <= -120)
                // iCount+=10;
                iCount -= 10;
            document.body.style.zoom = parseInt(document.body.style.zoom) + iCount + "%";
        }
        /**
        else if(event.shiftKey){
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
       **/
        /**
        else {
            event.returnValue = false;
            if (parent.document.getElementById('sIframeContents').contentWindow.document.getElementById("sScrollIcon").src.indexOf("vertical.gif")>0){
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
            if (parent.document.getElementById('sIframeContents').contentWindow.document.getElementById("sScrollIcon").src.indexOf("horizontal.gif")>0){
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
            if (parent.document.getElementById('sIframeContents').contentWindow.document.getElementById("sScrollIcon").src.indexOf("zoom.gif")>0){
            var iCount=0;
            if (event.wheelDelta>=120)
                   // iCount-=10;
                iCount += 10;
            else if(event.wheelDelta<=-120)
                   // iCount+=10;
                iCount -=10;
            document.body.style.zoom=parseInt(document.body.style.zoom)+iCount+"%";
            }
        }
        **/
    }
    catch (e) {
        //alert("该功能被禁用!请按下Ctrl,Alt,Shift键并滚动鼠标或直接拖动鼠标试验课文的滚动或放缩");
        /**
        var iCount = 0;
        if (event.wheelDelta>=120)
                iCount-=10;
        else if(event.wheelDelta<=-120)
                iCount+=10;
        var iScrollTop=document.body.scrollTop;
        var iScrollLeft=document.body.scrollLeft;
        iScrollTop+=iCount;
        window.scroll(iScrollLeft,iScrollTop);
        **/
        

        if (event.ctrlKey) {
            event.returnValue = false;
            var iCount = 0;
            if (event.wheelDelta >= 120)
                // iCount-=10;
                iCount += 10;
            else if (event.wheelDelta <= -120)
                // iCount+=10;
                iCount -= 10;
            document.body.style.zoom = parseInt(document.body.style.zoom) + iCount + "%";
        }
    }
}


function fnMouseDown(){
//alert();
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

/** function fnToggleScreen(){//已暂时改写，因为获取不到siframeTitle
if(parent.document.getElementById("sFramesetMiddle").cols=="2,*"){
	parent.document.getElementById("sFramesetMiddle").cols=parent.sFramesetMiddleColsTemp;
	parent.document.getElementById("sFramesetBook").rows=parent.sFramesetBookRowsDefault;
																	}
else{
	parent.sFramesetMiddleColsTemp=parent.document.getElementById("sFramesetMiddle").cols;
	parent.document.getElementById("sFramesetMiddle").cols="2,*";
	parent.document.getElementById("sFramesetBook").rows="0,*,0";
}
}**/
function fnToggleScreen() {
    try {
        window.event.returnValue = false;//去除双击时的默认选定文本效果
    }
    catch (e) {//考虑目录框架的右键菜单中的命令。
        return;
    }
    finally {
        //if (parent.document.getElementById("sFramesetMiddle").cols == "1022,*") {
        
        if (parent.document.getElementById("sFramesetBook").rows == "100,*,20") {
            parent.sFramesetMiddleColsTemp = parent.document.getElementById("sFramesetMiddle").cols;           
            parent.document.getElementById("sFramesetBook").rows = "0,*,20" 
            parent.document.getElementById("sFramesetMiddle").cols = "0%,*";
        }
        else {                       
            parent.document.getElementById("sFramesetBook").rows = "100,*,20" 
            parent.document.getElementById("sFramesetMiddle").cols = parent.sFramesetMiddleColsTemp;  
            //parent.document.getElementById("sFramesetMiddle").cols = "1022,*";
            //parent.document.getElementById("sFramesetMiddle").cols = "0%,*";           
        }
    }
}

function fnKeyDown(){
if(event.keyCode==123){
event.returnValue=false;
fnToggleScreen();
}

if(event.keyCode==38){
    if (parent.document.getElementById("sFramesetBook").rows == "0,*,20") {
        event.returnValue = false; 
    parent.document.getElementById("sIFrameTitle").contentWindow.document.getElementById("previous").click();
}
}
if(event.keyCode==40){

    if (parent.document.getElementById("sFramesetBook").rows == "0,*,20") {
        event.returnValue = false; 
    parent.document.getElementById("sIFrameTitle").contentWindow.document.getElementById("next").click();
}
}
}

function fnOnDownLoad(src){
window.oPopup.document.write(src);
}


/** 已移动到popup.js。暂时注释function fnPopup(){
oSrcElement=event.srcElement;
window.event.returnValue=false;
try{//独立课文窗口(右击菜单中选择"查看课文")时使用,无法象"复制部分资源"那样使用ASP,因为兼容word转化来的HTML文档的需要.
	if(parent.frames.item("sIframecontent").document.URL==parent.sHTTPHeader+parent.sOptionsPath+parent.sContentStartName||parent.frames.item("sIframecontent").document.URL==parent.sHTTPHeader+parent.sContentsPath+parent.sContentsName){
		//window.oPopup.document.getElementById("sToggleToolbarDisplay").childNodes.item(0).disabled=true;//出错！！！！！！
		//window.oPopup.document.getElementById("sToggleToolbarDisplay").disabled=true;
		//window.oPopup.document.getElementById("sSave").childNodes.item(0).disabled=true;//出错！！！！！！
		//window.oPopup.document.getElementById("sSave").disabled=true;
	}
	
	//var iLeft = event.offsetX+10;
	//var iTop = event.offsetY+10;
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
catch(e){

	alert('课文默认在“内容框架”中显示，但当前课文在独立窗口下运行,主要用于多部分课文比较时使用。此时右键菜单中提供的在线编辑等功能将被禁用！但仍然可试验按住Ctrl,Shift,Alt键滚动鼠标而放缩、移动课文等功能！');
	}
}
**/

function fnSave() {    
    if(document.URL==parent.sHTTPHeader+parent.sOptionsPath+parent.sContentStartName||document.URL==parent.sHTTPHeader+parent.sContentsPath+parent.sContentsName){
	alert("该内容框架的内容是初始内容或在目录中直接链接的非.htm文件，不允许保存！");
}
else{

        /** var sExtendName = document.URL.substring(document.URL.lastIndexOf("."), document.URL.length);
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
	**/
        window.ptContentFileNamePart = document.URL.substring(document.URL.lastIndexOf("."), document.URL.lastIndexOf("/"));
       
        console.log(ptContentFileNamePart);
        var bWillSaved = confirm("原目录文件将被覆盖,如果需要,请备份原目录文件,该文件的URL是:" + document.URL + ".物理路径是:" + "wwwroot\\webCourse\\lessons\\content\\book"+ptContentFileNamePart);
        if (bWillSaved) {
            var ptObjClonedDocumentTemp = window.document.cloneNode(true);//拷贝整个文档对象  
            ptObjClonedDocumentTemp.body.contentEditable = false;           
            window.ptContent = ptObjClonedDocumentTemp.documentElement.outerHTML; //包含很多URL不支持的字符，必须用form发送服务器端？ 
            // alert(window.ptContents);
            //下述文件自己包含表单，一打开就通过JS触发表单发送。
            var ptWindow = window.open("/webCourse/common/savingContent.htm", "savingContent", "fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//显示“正在保存...”，一直到保存目录的saveContents.asp网页的运行结果返回到该窗口，即“Saving”窗口
            ptWindow.focus();
        /** 
        var sDocumentHeaderPart = window.sDocumentHeader.substring(window.sDocumentHeader.indexOf("fnOnLoad();") + "fnOnLoad();".length, window.sDocumentHeader.length);
		window.open(parent.sHTTPHeader+"common/saving.htm", "saving","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//（参看Contents.js相关部分注释）
		var oClonedDivTemp=window.document.getElementById("oDivForContentEdit").cloneNode(true);
		parent.frames("sIframeTitle").document.getElementById("docContents").value="";
		parent.frames("sIframeTitle").document.getElementById("docContent").value=sDocumentHeaderPart+document.getElementById("oDivForContentEdit").innerHTML+sDocumentEnder.toLowerCase();//文档头部将从源文件获取!url相关的特性值若使用了相对URL，在IE解析后将变换为绝对URL，不便于文件的移动，由于时间关系，在此还没有解决！！！！！！
		parent.frames("sIframeTitle").document.getElementById("docPath").value=sDocPathNow+sExtendName;
		parent.frames("sIframeTitle").document.getElementById("sSaveContentsForm").action="saveContent.aspx";
		parent.frames("sIframeTitle").document.getElementById("sSaveContentsForm").target="saving";//（参看Contents.js相关部分注释）
		parent.frames("sIframeTitle").document.getElementById("sSaveContentsForm").submit();
		window.sDivForContentEditInnerHTML=document.getElementById("oDivForContentEdit").innerHTML;//（参看Contents.js相关部分注释）
		//由于Nenbox的特点，必须重新在目录中单击对应于该文档的条目，刷新后才体现出来。
        */

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

//查找内容
function findContent(){
alert("网站版或光盘版才提供该功能!");
//var arr = showModalDialog("../../../../common/findContent.asp",window,"dialogWidth:350px;dialogHeight:150px;help:no;scroll:no;status:no");
}

//用ajax技术检查是否有录音播放文件
 //var hasMusic="";
function fnRecordingPlay() {
  var sUrl = document.location.href;
  var ss=sUrl.split("/");
  var sCousreName=ss[ss.length-4];
      sCousreName = sCousreName.substring(8,sCousreName.length);
      sUrl = sUrl.substring(sUrl.lastIndexOf("/")+1,sUrl.lastIndexOf("."));
 var music = sUrl+".mp3";

 if(ss[ss.length-4].substring(0,7)=="content"){
   //检查是否有录音播放文件

 var req =new ActiveXObject("Microsoft.XMLHTTP"); 
 req.open("GET","../../../../common/checkMp3/t.aspx?music="+sUrl, true); 
  
 req.onreadystatechange = function(){
　 if (req.readyState == 4) { 
　 if (req.status == 200) { 
　　 hasMusic = req.responseXML.documentElement.tagName;    
    if (hasMusic=="Yes"){		             
     // alert("有录音文件!");
     fnCreatePlayer();
	  }
     }
   }
   
 }
 req.send(null);

 }
}
 
//动态创建播放器并播放
function fnCreatePlayer() {
 var sUrl = document.location.href;
    sUrl = sUrl.substring(sUrl.lastIndexOf("/")+1,sUrl.lastIndexOf("."));
 var music = sUrl+".mp3";
 var oP=document.createElement("P");
 var oMediaPlayer = document.createElement("object");
 var oURL=document.createElement("param"); 
   oURL.name="FileName";
   oURL.value = music;
 var oAutoStart=document.createElement("param");
   oAutoStart.name="autoStart";
   oAutoStart.value = "0";
   oMediaPlayer.appendChild(oURL)
   oMediaPlayer.appendChild(oAutoStart)
   oMediaPlayer.classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95";
   oMediaPlayer.height="44";
   oMediaPlayer.top=0;
   oP.align="left";
 oP.appendChild(oMediaPlayer);
 document.body.insertBefore(oP,document.body.firstChild);

}
 
 //
function Download(){
  var sUrl = document.location.href;
      sUrl = sUrl.substring(sUrl.lastIndexOf("lessons"),sUrl.lastIndexOf("."));
  var music = sUrl+".mp3";
 showModelessDialog("../../../../common/DownloadRecording/DownloadRecording.htm?n="+music,window,"help:0;resizable:1;dialogWidth:450px;dialogHeight:300px;status:0;");
 }
 
 //隐藏课文文本
function hideText() {
var oBodyChild=document.body.childNodes;
if(hasMusic=="Yes") {
for(i=1;i<oBodyChild.length;i++){
 oBodyChild.item(i).style.display="none";
 }
 }
}
 
 //显示课文文本
function showText() {
var oBodyChild=document.body.childNodes;
if(hasMusic=="Yes") {
for(i=1;i<oBodyChild.length;i++){
 oBodyChild.item(i).style.display="block";
  }
 }
}

//把所有的答案隐藏
//var aKeys = new Array();
function hideKey() 
{
	var k=0;
	var oInputChild=document.getElementsByTagName("U");
	for(i=0;i<oInputChild.length;i++)
	{
 		
	 		aKeys[k] = oInputChild.item(i).innerText;
	 		oInputChild.item(i).innerHTML="";
	    	var iLen=aKeys[k].length+5;
	    	k++;
	 		oInputChild.item(i).innerHTML="<INPUT l='l' type=text value='' size="+iLen+">";
 		
 	}
 	var oElem=document.createElement("<p align='center'>");
 	oElem.innerHTML="<input type=button value='提交' onclick='fnCheckKey()'>";
	document.body.appendChild(oElem);
	oElem=document.createElement("<p>");
	oElem.innerHTML="&nbsp;";
	document.body.appendChild(oElem);
	oElem=document.createElement("<p>");
	oElem.innerHTML="&nbsp;";
	document.body.appendChild(oElem);
	oElem=document.createElement("<p>");
	document.body.appendChild(oElem);
	oElem=document.createElement("<p>");
	oElem.innerHTML=" ";
	document.body.appendChild(oElem);
}


function fnCheckKey() {
var oInputChild=document.getElementsByTagName("U");
var k=0;
alert(oInputChild.item(0).firstChild.getAttribute("value"));
for(i=0;i<oInputChild.length;i++){

 		oInputChild.item(i).firstChild.setAttribute("value",oInputChild.item(i).firstChild.getAttribute("value") + " " +"/key: "+aKeys[i]);
 		oInputChild.item(i).firstChild.setAttribute("size",(oInputChild.item(i).firstChild.getAttribute("value") + " " +"/key: "+aKeys[i]).length);
 	
 }
}


//document.write ("<div id='dypopLayer' style='position:absolute;z-index:1000;background-color: #FFFFE1;color:#000000; border: 1px #000000 solid; font-size: 12px; padding-right: 4px; padding-left: 4px; height: 18px;width:300px; visibility: hidden;' ></div>")
//sPop=null;
function showPopupText(){
var o=event.srcElement;	
MouseX=event.x;	
MouseY=event.y;	
if(o.alt!=null && o.alt!="")
 {o.dypop=o.alt;o.alt=""}; 
 if(o.title!=null && o.title!="")
 {o.dypop=o.title;o.title=""};
  if(o.dypop!=sPop) {
     sPop=o.dypop;
   if (sPop==null || sPop=="")
     dypopLayer.style.visibility ="hidden";	
   else {
     dypopLayer.innerHTML=sPop;	
     popWidth=dypopLayer.clientWidth;
     popHeight=dypopLayer.clientHeight;	
    if(MouseX+popWidth>document.body.clientWidth) 
     popLeftAdjust=-popWidth-24	
    else popLeftAdjust=0;
  if(MouseY+15+popHeight>document.body.clientHeight)
     popTopAdjust=-popHeight-24	
     else popTopAdjust=0;	
    dypopLayer.style.left=MouseX+document.body.scrollLeft+popLeftAdjust;
    dypopLayer.style.top=MouseY+15+document.body.scrollTop+popTopAdjust;
    dypopLayer.style.visibility ="visible";		
    //curShow=setTimeout("showIt()",tPopWait);	
    }
   }
  }
//document.onmouseover=showPopupText;

function showDIV(oId){
   MouseX=event.x;	
   MouseY=event.y;	
   var popWidth=eval(oId).clientWidth;
   var popHeight=eval(oId).clientHeight;	
    if(MouseX+popWidth>document.body.clientWidth ) 
     eval(oId).style.left=document.body.scrollLeft+document.body.scrollWidth-popWidth;	
    else {
     eval(oId).style.left=MouseX+document.body.scrollLeft;
     }
  if(MouseY+15+popHeight>document.body.clientHeight)
     popTopAdjust=-popHeight-24	
     else popTopAdjust=0;	
    eval(oId).style.top=MouseY+15+document.body.scrollTop+popTopAdjust;
    eval(oId).style.visibility ="visible";	
   	
}

function hideDIV(oID) {
 eval(oID).style.visibility ="hidden";
}

function fnCheckPaper() {
var oInputChild=document.getElementsByTagName("SPAN");
for(i=0;i<oInputChild.length;i++){
 oInputChild.item(i).style.display='block';
 }
}

//中英互译
function fnTranslate()
{
// 查到单击的P元素
var oP=getPObject();
if(oP.tagName=="SPAN")
{
	oP.nextSibling.style.display="block";
}
else
{
	alert("您没有选中段落,请右击段落中的文字");
}




}

function getPObject() 
{

	var obj=oSrcElement;	
	while(obj!=null&&obj.tagName!="BODY")
	{

		
		
		if(obj.tagName=="SPAN")
		{
					
			break;
					
		}
		obj=obj.parentElement;
	}
	
	return obj;
}

function fnStickingOut()
{
	var wd=document.location.href.substring(document.location.href.indexOf("?wd=")+4);
	var regS = new RegExp(wd,"gi");

	document.body.innerHTML=document.body.innerHTML.replace(regS,"<font color=red>"+wd+"</font>");


}

//减速播放
function ReduceRate()
{
	WindowsMediaPlayer1.settings.Rate = WindowsMediaPlayer1.settings.Rate - 0.1
}

//加速播放
function IncreaseRate()
{
	WindowsMediaPlayer1.settings.Rate = WindowsMediaPlayer1.settings.Rate + 0.1
}

//
function getPObject() 
{

	var obj=oSrcElement;	
	while(obj!=null&&obj.tagName!="BODY")
	{
		if(obj.tagName=="SPAN"&&obj.type=="translate")
		{
					
			break;
					
		}
		obj=obj.parentElement;
	}
	
	return obj;
}

function fnTranslateAll()
{
	var oSpan=document.getElementsByTagName("SPAN");
	for(i=0;i<oSpan.length;i++)
	{
		if(oSpan.item(i).getAttribute("cn")!=null)
		{
			oSpan.item(i).style.display="block";
		}
	
	}
}

function fnEnglishOnlyAll()
{
	var oSpan=document.getElementsByTagName("SPAN");
	for(i=0;i<oSpan.length;i++)
	{
		if(oSpan.item(i).getAttribute("cn")!=null)
		{
			oSpan.item(i).style.display="none";
		}
	
	}
}
//查看中文翻译
function fnTranslate()
{
// 查到单击的P元素
	var oSpan=document.getElementsByTagName("P");
	for(i=0;i<oSpan.length;i++)
	{
		//alert(oSpan.item(i).getAttribute("type"));
		if(oSpan.item(i).getAttribute("type")=="translate")
		{
			
			var ID=oSpan.item(i).getAttribute("en");
			var oChildSpan=oSpan.item(i).getElementsByTagName("SPAN");
			//alert(oChildSpan.length);
			var find=false;
			for(j=0;j<oChildSpan.length;j++)
			{
				
				if(oChildSpan.item(j).getAttribute("cn")==oSpan.item(i).getAttribute("en"))
				{
					oChildSpan.item(j).style.display="block";
					find=true;
				}
			}
			if(find==false)
			{
				var oChildSpan=oSpan.item(i+1).getElementsByTagName("SPAN");
				for(j=0;j<oChildSpan.length;j++)
				{
				
					if(oChildSpan.item(j).getAttribute("cn")==oSpan.item(i).getAttribute("en"))
					{
						oChildSpan.item(j).style.display="block";
					}
				}
			}
		}
	}

}

//查看全英文课文
function fnEnglishOnly()
{

	var oSpan=document.getElementsByTagName("P");
		for(i=0;i<oSpan.length;i++)
	{
		//alert(oSpan.item(i).getAttribute("type"));
		if(oSpan.item(i).getAttribute("type")=="translate")
		{
			
			var ID=oSpan.item(i).getAttribute("en");
			var oChildSpan=oSpan.item(i).getElementsByTagName("SPAN");
			//alert(oChildSpan.length);
			for(j=0;j<oChildSpan.length;j++)
			{
				
				if(oChildSpan.item(j).getAttribute("cn")==oSpan.item(i).getAttribute("en"))
				{
					oChildSpan.item(j).style.display="none";
				}
			}
		}
	}

}

//转成新闻时用
function fnNewsDictation()
{
	//先装载,再隐藏答案
	hideKey();
	fnOnLoad();
}

// 单词样式
//document.write('<style type=text/css>.newwords{cursor:hand;font-size:10pt;color:green};</style>');
function showNewsWord()
{
  	var iWidth=250;
  	var iHeight=200;
  	var win=open("","win1","width=250,height=200,top="+(screen.height-iHeight)/2+",left="+(screen.width-iWidth)/2);
}

function fnWindowOnFocus() {
    //alert();
    //parent.document.getElementById("sIFrameTitle").contentWindow.document.getElementById("idForPanelToolbar").innerHTML = "";//好像浏览器有Bug，只好灵活助理下。
    var sPopupMenu = document.getElementById("popupDiv").innerHTML.replace(new RegExp("<div", "g"), "<span").replace(new RegExp("</div>", "g"), "</span>").replace(new RegExp('onclick="', "g"), 'onclick="parent.document.getElementById(' + "'" + 'sIframeContent' + "'" + ').contentWindow.');
   // console.log(sPopupMenu);

    parent.document.getElementById("sIFrameTitle").contentWindow.document.getElementById("idForPanelToolbar").innerHTML = '<div id="popupDiv" onmouseover="parent.document.getElementById(' + "'" + 'sIFrameTitle' + "'" + ').contentWindow.fnPopupMouseOver(); " onmouseout="parent.document.getElementById(' + "'" + 'sIFrameTitle' + "'" + ').contentWindow.fnPopupMouseOut(); " style=" font-size: 9px;font-family:Times New Roman; cursor: default ">' + '<span  style="font-weight:bold">内容面板右键菜单：</span>' + sPopupMenu + "</div>";
   // parent.document.getElementById("sIframeContents").contentWindow.fnGetFocus();
}



function fnContentsGetFocus() {
    parent.document.getElementById("sIframeContents").contentWindow.fnGetFocus();
    //parent.document.getElementById("sIframeTitle").contentWindow.fnGetFocus();

}

function fnHighLight() {
    try {
        if (parent.document.getElementById("sIframeContents").contentWindow.sWillHighLightedStringInContent!="") {
            var sWillHighLightedString = parent.document.getElementById("sIframeContents").contentWindow.sWillHighLightedStringInContent;
            //alert(sWillHighLightedString);
            var sTemp = document.body.innerHTML;
            var sTempReplaced = sTemp.replace(sWillHighLightedString, "<span style=\"color:red\" >" + sWillHighLightedString + "</span>");
           // alert(sTempReplaced);
            document.body.innerHTML = sTempReplaced;
        }
        // opener.parent.document.getElementById("sIframeContent").contentWindow.document.body.innerHTML = "";
    }
    catch (e) {
        ;
    }
}

function fnContentFrameworkNotification(sStringTitle, sStringBody, sStringIcon) {  //内容框架被独立浏览（例如外部网站链接的时候的通知）。
	if (window.Notification) {

		var popNotice = function () {
			if (Notification.permission == "granted") {
				var notification = new Notification(sStringTitle, { body: sStringBody, icon: sStringIcon });

				notification.onclick = function () {
					open("https://jbhuang99.github.io/webedu_localversion_yuqin_dotnetcore21/wwwroot/",target="_blank");
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
function fnHelp() {
	open("https://yuqin99yuqin99.github.io/WebEdu_LocalVersion_YuQin_DotNetCore21/ASPDotNet_MVC_YuQin/ASPDotNet_MVC_YuQin/wwwroot/", target = "_blank");
}
//document.getElementsByTagName("body").item(0).onload = fnOnLoad;
function fnNewWindowAdvertisement() {
	var sURL = "../../../../../renshichu/lunwensongshen.htm";
		window.open(sURL);//容易被浏览器默认被拦截
		if (window.confirm('搜索相关资源?')) {
			window.location.href = sURL;
		}
}

document.getElementsByTagName("body").item(0).onload = fnOnLoad;

