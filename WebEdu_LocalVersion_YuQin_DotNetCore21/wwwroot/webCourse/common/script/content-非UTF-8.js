//////////////����ȫ�ֶ���
window.oSrcElement = new Object();
window.oDiv = new Object();
window.bMovable = false;
window.bFrameMovable = false;
window.iFrameMouseX;
window.iMouseX;
window.iMouseY;

window.sInitColor = null;//sInitColor is a global variable. It holds the value of the selected color in the color dialog box when it displays.Create a global variable called sInitColor and set it equal to null. This variable holds the color that is chosen by the user when the color dialog box displays. The application "remembers" this choice and it will be the selected color the next time the color dialog box displays
window.sDivForContentEditInnerHTML = "";//�������жϸ����ݿ���Ƿ������߱༭�����˸ı䣬�Ӷ��������û����档
    //���϶���ȫ�ֱ���
    //�¼�����ڴ˶��壬�Ա����ά��������
    //document.body.onbeforeunload=fnIsSaved;//������ݿ���Ƿ���༭���б仯����ʾ�����,������ͼ�������ʱ���URL���Ϊ���ԣ�һʱ�޷�����ֻ����ʱ�رոù��ܣ�����������
//////////////////
function fnOnLoad() {
    //parent.document.getElementById("sIframeContents").scrolling = "no";
    //alert(parent.document.getElementById("sIframeTitle").src);
    //document.body.unselectable="on";//ͨ��ȡ��˫���¼���Ĭ����Ϊ����
    //downLoad.startDownload(parent.sHTTPHeader+"common/popupContent.asp",fnOnDownLoad);
    window.oDiv = document.getElementById("popupDiv");//Ϊ�Ҽ��˵���׼����    
   // document.body.oncontextmenu = fnContentPopup;   
    document.body.oncontextmenu = fnContentPopup;
    window.onclick = fnWindowOnClick;
    document.body.onmousemove = fnPane;
    //document.body.onmousewheel = fnMouseWheel;//ͨ������������ʾʵ��
    document.body.onmousedown = fnMouseDown;
    document.body.onmouseup = fnMouseUp;
    //document.body.ondblclick=fnToggleScreen;
    document.body.onkeydown = fnKeyDown;
    //���϶����¼����
    document.body.scroll = "no";
    var sHTMLOuterHTML = document.getElementsByTagName("HTML").item(0).outerHTML;
    var sBodyInnerHTML = document.body.innerHTML;
    window.sDocumentHeader = sHTMLOuterHTML.substring(0, sHTMLOuterHTML.indexOf(sBodyInnerHTML));
    window.sDocumentEnder = sHTMLOuterHTML.substring(sHTMLOuterHTML.indexOf(sBodyInnerHTML) + sBodyInnerHTML.length, sHTMLOuterHTML.length);
    //alert(sDocumentHeader);
    //alert(sDocumentEnder);
    try {
        document.body.style.zoom = parent.frames("sIframeContents").document.getElementById("sDiv").style.zoom;
    }
    catch (e) {
        document.body.style.zoom = "100%";
    }
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

/** function fnToggleScreen(){//����ʱ��д����Ϊ��ȡ����siframeTitle
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
        window.event.returnValue = false;//ȥ��˫��ʱ��Ĭ��ѡ���ı�Ч��
    }
    catch (e) {//����Ŀ¼��ܵ��Ҽ��˵��е����
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

function fnKeyDown(){
if(event.keyCode==123){
event.returnValue=false;
fnToggleScreen();
}

if(event.keyCode==38){
event.returnValue=false; 
if(parent.document.getElementById("sFramesetBook").rows=="0,*,0"){
parent.frames.item("sIframeTitle").document.getElementById("previous").click();
}
}
if(event.keyCode==40){
event.returnValue=false; 
if(parent.document.getElementById("sFramesetBook").rows=="0,*,0"){
parent.frames.item("sIframeTitle").document.getElementById("next").click();
}
}
}

function fnOnDownLoad(src){
window.oPopup.document.write(src);
}


/** ���ƶ���popup.js����ʱע��function fnPopup(){
oSrcElement=event.srcElement;
window.event.returnValue=false;
try{//�������Ĵ���(�һ��˵���ѡ��"�鿴����")ʱʹ��,�޷���"���Ʋ�����Դ"����ʹ��ASP,��Ϊ����wordת������HTML�ĵ�����Ҫ.
	if(parent.frames.item("sIframecontent").document.URL==parent.sHTTPHeader+parent.sOptionsPath+parent.sContentStartName||parent.frames.item("sIframecontent").document.URL==parent.sHTTPHeader+parent.sContentsPath+parent.sContentsName){
		//window.oPopup.document.getElementById("sToggleToolbarDisplay").childNodes.item(0).disabled=true;//��������������
		//window.oPopup.document.getElementById("sToggleToolbarDisplay").disabled=true;
		//window.oPopup.document.getElementById("sSave").childNodes.item(0).disabled=true;//��������������
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

	alert('����Ĭ���ڡ����ݿ�ܡ�����ʾ������ǰ�����ڶ�������������,��Ҫ���ڶಿ�ֿ��ıȽ�ʱʹ�á���ʱ�Ҽ��˵����ṩ�����߱༭�ȹ��ܽ������ã�����Ȼ�����鰴סCtrl,Shift,Alt�����������������ƶ����ĵȹ��ܣ�');
	}
}
**/

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
		window.open(parent.sHTTPHeader+"common/saving.htm", "saving","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//���ο�Contents.js��ز���ע�ͣ�
		var oClonedDivTemp=window.document.getElementById("oDivForContentEdit").cloneNode(true);
		parent.frames("sIframeTitle").document.getElementById("docContents").value="";
		parent.frames("sIframeTitle").document.getElementById("docContent").value=sDocumentHeaderPart+document.getElementById("oDivForContentEdit").innerHTML+sDocumentEnder.toLowerCase();//�ĵ�ͷ������Դ�ļ���ȡ!url��ص�����ֵ��ʹ�������URL����IE�����󽫱任Ϊ����URL���������ļ����ƶ�������ʱ���ϵ���ڴ˻�û�н��������������
		parent.frames("sIframeTitle").document.getElementById("docPath").value=sDocPathNow+sExtendName;
		parent.frames("sIframeTitle").document.getElementById("sSaveContentsForm").action="saveContent.aspx";
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

//��������
function findContent(){
alert("��վ�����̰���ṩ�ù���!");
//var arr = showModalDialog("../../../../common/findContent.asp",window,"dialogWidth:350px;dialogHeight:150px;help:no;scroll:no;status:no");
}

//��ajax��������Ƿ���¼�������ļ�
 //var hasMusic="";
function fnRecordingPlay() {
  var sUrl = document.location.href;
  var ss=sUrl.split("/");
  var sCousreName=ss[ss.length-4];
      sCousreName = sCousreName.substring(8,sCousreName.length);
      sUrl = sUrl.substring(sUrl.lastIndexOf("/")+1,sUrl.lastIndexOf("."));
 var music = sUrl+".mp3";

 if(ss[ss.length-4].substring(0,7)=="content"){
   //����Ƿ���¼�������ļ�

 var req =new ActiveXObject("Microsoft.XMLHTTP"); 
 req.open("GET","../../../../common/checkMp3/t.aspx?music="+sUrl, true); 
  
 req.onreadystatechange = function(){
�� if (req.readyState == 4) { 
�� if (req.status == 200) { 
���� hasMusic = req.responseXML.documentElement.tagName;    
    if (hasMusic=="Yes"){		             
     // alert("��¼���ļ�!");
     fnCreatePlayer();
	  }
     }
   }
   
 }
 req.send(null);

 }
}
 
//��̬����������������
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
 
 //���ؿ����ı�
function hideText() {
var oBodyChild=document.body.childNodes;
if(hasMusic=="Yes") {
for(i=1;i<oBodyChild.length;i++){
 oBodyChild.item(i).style.display="none";
 }
 }
}
 
 //��ʾ�����ı�
function showText() {
var oBodyChild=document.body.childNodes;
if(hasMusic=="Yes") {
for(i=1;i<oBodyChild.length;i++){
 oBodyChild.item(i).style.display="block";
  }
 }
}

//�����еĴ�����
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
 	oElem.innerHTML="<input type=button value='�ύ' onclick='fnCheckKey()'>";
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

//��Ӣ����
function fnTranslate()
{
// �鵽������PԪ��
var oP=getPObject();
if(oP.tagName=="SPAN")
{
	oP.nextSibling.style.display="block";
}
else
{
	alert("��û��ѡ�ж���,���һ������е�����");
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

//���ٲ���
function ReduceRate()
{
	WindowsMediaPlayer1.settings.Rate = WindowsMediaPlayer1.settings.Rate - 0.1
}

//���ٲ���
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
//�鿴���ķ���
function fnTranslate()
{
// �鵽������PԪ��
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

//�鿴ȫӢ�Ŀ���
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

//ת������ʱ��
function fnNewsDictation()
{
	//��װ��,�����ش�
	hideKey();
	fnOnLoad();
}

// ������ʽ
//document.write('<style type=text/css>.newwords{cursor:hand;font-size:10pt;color:green};</style>');
function showNewsWord()
{
  	var iWidth=250;
  	var iHeight=200;
  	var win=open("","win1","width=250,height=200,top="+(screen.height-iHeight)/2+",left="+(screen.width-iWidth)/2);
}
