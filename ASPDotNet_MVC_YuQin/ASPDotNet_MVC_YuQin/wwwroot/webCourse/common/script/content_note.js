function fnOnLoad(){
document.getElementById("sIdDownloadFilesForDynFunctions").startDownload("../../../../common/popupContent_note.htm",fnOnDownLoad);
//ȫ�ֱ����ڴ�һ���壬����Ҫ��ɢ���壬��Ϊȫ�ֱ����ڸ������ж��ɵ��ã���ɢ���岻�����ά��������
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
window.sDivForContentEditInnerHTML="";//�������жϸ����ݿ���Ƿ������߱༭�����˸ı䣬�Ӷ��������û����档
//���϶���ȫ�ֱ���
//�¼�����ڴ˶��壬�Ա����ά��������
//document.body.onbeforeunload=fnIsSaved;//������ݿ���Ƿ���༭���б仯����ʾ�����,������ͼ�������ʱ���URL���Ϊ���ԣ�һʱ�޷�����ֻ����ʱ�رոù��ܣ�����������
document.body.onmousemove=fnPane;
document.body.onmousewheel=fnMouseWheel;
document.body.onmousedown=fnMouseDown;
document.body.onmouseup=fnMouseUp;
//document.body.setAttribute("CONTENTEDITABLE","true");
//document.body.attributes.getNamedItem("CONTENTEDITABLE").nodeValue=true;
//document.body.ondblclick=fnToggleScreen;
//���϶����¼����
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
try{//�������Ĵ���ʱʹ��
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
	//alert("�ù��ܱ�����!�밴��Ctrl,Alt,Shift������������ֱ���϶����������ĵĹ��������");
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
	alert("�����ݿ�ܵ������ǳ�ʼ���ݻ���Ŀ¼��ֱ�����ӵķ�.htm�ļ����������棡");
}
else{
	var sExtendName=document.URL.substring(document.URL.lastIndexOf("."),document.URL.length);
	var sDocURL=document.URL.substring(0,document.URL.lastIndexOf("AutoCreateForTemp"));//ȥ��AutoCreateForTemp
	var sDocURLPart=sDocURL.substring(parent.sHTTPHeader.length+8,sDocURL.length);
	//var sDocPath=parent.sPathContentsNow.substring(0,parent.sPathContentsNow.length-14)+sDocURLPart;//parent.sPathContentsNow��contents.htm��λ�á�
	var sDocPath=parent.sPathContentsNow.substring(0,parent.sPathContentsNow.length-18)+sDocURLPart;//parent.sPathContentsNow��contents.htm��λ�á�
	var aTemp=new Array();
	aTemp=sDocPath.split("/");
	var iLength=aTemp.length;
	var sDocPathPartTransFormed="";
	for(var i=0;i<iLength;i++){
	sDocPathPartTransFormed=sDocPathPartTransFormed+aTemp[i]+"\\";
	}
	sDocPathNow=sDocPathPartTransFormed.substring(0,sDocPathPartTransFormed.length-1);//parent.sPathContentsNow��contents.htm������·�����֣�6��common���ַ������ȡ�
	//����Ĵ�����Ҫ��DOM�ĽǶ��Ż����ַ�������̫ð�գ�����������,�����ĵ�ͷ����Դ�ļ���ȡ�����ڴ�ֻ��ȡ<body�Ժ󲿷֣�����
	var bWillSaved=confirm("ԭĿ¼�ļ���������,�����Ҫ,�뱸��ԭĿ¼�ļ�,���ļ���URL��"+'"'+sDocURL+sExtendName+'"'+"������·����"+'"'+sDocPathNow+sExtendName+'"');
	if(bWillSaved){
		var sDocumentHeaderPart=window.sDocumentHeader.substring(window.sDocumentHeader.indexOf("fnOnLoad();")+"fnOnLoad();".length,window.sDocumentHeader.length);
		window.open(parent.sHTTPHeader+"common/saving.asp", "saving","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//���ο�Contents.js��ز���ע�ͣ�
		var oClonedDivTemp=window.document.getElementById("oDivForContentEdit").cloneNode(true);
		parent.frames("sIframeTitle").document.getElementById("docContents").value="";
		parent.frames("sIframeTitle").document.getElementById("docContent").value=sDocumentHeaderPart+document.getElementById("oDivForContentEdit").innerHTML+sDocumentEnder.toLowerCase();//�ĵ�ͷ������Դ�ļ���ȡ!url��ص�����ֵ��ʹ�������URL����IE�����󽫱任Ϊ����URL���������ļ����ƶ�������ʱ���ϵ���ڴ˻�û�н��������������
		parent.frames("sIframeTitle").document.getElementById("docPath").value=sDocPathNow+sExtendName;
		parent.frames("sIframeTitle").document.getElementById("sSaveContentsForm").action="saveContent.asp";
		parent.frames("sIframeTitle").document.getElementById("sSaveContentsForm").target="saving";//���ο�Contents.js��ز���ע�ͣ�
		parent.frames("sIframeTitle").document.getElementById("sSaveContentsForm").submit();
		window.sDivForContentEditInnerHTML=document.getElementById("oDivForContentEdit").innerHTML;//���ο�Contents.js��ز���ע�ͣ�
		//����Nenbox���ص㣬����������Ŀ¼�е�����Ӧ�ڸ��ĵ�����Ŀ��ˢ�º�����ֳ�����
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
event.returnValue='�������߱༭�ı��ˡ����ݿ�ܡ������ݣ�����û����󱣴�!������ȷ������ť�����������Ҳ������ѱ༭�������ݿ��;������ȡ������ť������,���غ����ݿ�ܵ��һ��˵���ѡ��"����"�˵���ɱ��棡';
return;
}
}

function fnIsContentChanged(){
if(document.URL==parent.sHTTPHeader+parent.sOptionsPath+parent.sContentStartName||document.URL==parent.sHTTPHeader+parent.sContentsPath+parent.sContentsName){//��ʼҳ,ֱ�����ӵ�ͼ�����鲻������ԭ��Ҳ��ʱȡ������,���Բ���飡
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

function ChangeFont(){	//applies the value to the font of the selected text��Ŀǰֻ֧��1��32/3���أ�-7����48���أ��ֺ�
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

if(document.URL==parent.sHTTPHeader+parent.sOptionsPath+parent.sContentStartName||document.URL==parent.sHTTPHeader+parent.sContentsPath+parent.sContentsName){//��ʼҳ�������������߱༭,ֱ�����ӵ�ͼ�����鲻������ԭ��Ҳ��ʱȡ�����������߱༭��
	try{//���ˢ��ʱ�����Ǵ�contentStart.htm��ʼ������ֱ��ˢ�µ�ǰURL�������������װ�غͽ���Title��ܣ����п��ܳ���
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
	//��Щ��Ҫ�Ĵ��루�ر���<body>Ԫ����ǰ���ֵĴ��룬����֤������AutoCreateHTMLFile.asp�м��룡
	var sWillAddedForEditHeaderForReplace='<OBJECT ID="dlgHelper" CLASSID="clsid:3050f819-98b5-11cf-bb82-00aa00bdce0b" WIDTH="0" HEIGHT="0"></OBJECT> <DIV  ID="oContainerForContentEdit" STYLE="height:100%; width:100%;"> <mytb:TOOLBAR STYLE="display:none; width:100%" ID="oToolBar" ><mytb:TOOLBARDROPDOWNLIST id="oFontSize" title="�ֺ�" onchange="changeFontSize();"> <option value=1>1���ֺ�<option value=2>2���ֺ�<option value=3>3���ֺ�<option value=4 selected>4���ֺ�<option value=5>5���ֺ�<option value=6>6���ֺ�<option value=7>7���ֺ�</mytb:TOOLBARDROPDOWNLIST> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON IMAGEURL="UI_bold.gif" title="�Ӵ�" name="Bold" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON IMAGEURL="UI_italic.gif" title="��б" name="Italic" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON IMAGEURL="UI_underline.gif" title="�»���" name="Underline" onclick="callFormatting(this.name);"/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON IMAGEURL="UI_superscript.gif" title="�ϱ�" name="SuperScript" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON IMAGEURL="UI_subscript.gif" title="�±�" name="SubScript" onclick="callFormatting(this.name);"/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_tool-cut.gif" title="����" name="Cut" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_form-copy.gif" title="����" name="Copy" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_paste.gif" title="ճ��" name="Paste" onclick="callFormatting(this.name);"/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_undo.gif" title="����" name="Undo" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_redo.gif" title="����" name="Redo" onclick="callFormatting(this.name);"/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_numberlist.gif" title="�����б�" name="InsertOrderedList" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_bulletlist.gif" title="��Ŀ����" name="InsertUnorderedList" onclick="callFormatting(this.name);"/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_leftalign.gif" title="�����" name="JustifyLeft" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_centeralign.gif" title="����" name="JustifyCenter" onclick="callFormatting(this.name);"/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_rightalign.gif" title="�Ҷ���" name="JustifyRight" onclick="callFormatting(this.name);"/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_tool_vertical.gif" title="����" name="Vertical Alignment" onclick="VerticalMode();"/> <mytb:TOOLBARSEPARATOR/> <mytb:TOOLBARBUTTON IMAGEURL="UI_fontcolor.gif" title="��ɫ" name="ForeColor" onclick="callColorDlg(this.name);"/> <mytb:TOOLBARBUTTON  IMAGEURL="UI_backcolor.gif" title="����ɫ" name="BackColor" onclick="callColorDlg(this.name);"/></mytb:TOOLBAR><DIV ID="oDivForContentEdit" CONTENTEDITABLE="false" style="width:100%;">';
	
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
	if(dialogArguments.bIsEditing){//�Ժ�׼��ʵ�ֳ�ʽ����
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

