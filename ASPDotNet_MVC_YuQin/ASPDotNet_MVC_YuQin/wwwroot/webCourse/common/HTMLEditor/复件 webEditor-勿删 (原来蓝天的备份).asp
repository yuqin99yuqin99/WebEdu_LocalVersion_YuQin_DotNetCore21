<% 
  dim sFileString
  
  sEditorUrl=Request("sEditorPage")
  'Response.write "<script>alert('"+sEditorUrl+"')</script>"
  docPath=Replace(sEditorUrl,"http://localhost:8000/webCourse/","")
 ' call sTextContent( docPath )
  
   dim aTemp
   sTemp=docPath
   aTemp=split(sTemp,"/")
   sPathContentshtmNowNow=""
   iLength=Ubound(aTemp)-Lbound(aTemp)
   for i=Lbound(aTemp) to Ubound(aTemp)-1
	  sPathContentshtmNowNow=sPathContentshtmNowNow+aTemp(i)+"\\"
    next
    sPathContentshtmNowNow=sPathContentshtmNowNow+aTemp(Ubound(aTemp))
    docPath=sPathContentshtmNowNow
    
    '��ʼ��ʱȡ��ԭ�����ַ�
    sub sTextContent( sPath )
       Set fso=Server.CreateObject("Scripting.FileSystemObject")
       Set oTextStream = fso.OpenTextFile(Server.mapPath("../../"+sPath))
       sFileString = oTextStream.ReadAll()
       oTextStream.Close
       Set oTextStream = Nothing
       response.write len(sFileString)
     end sub
       
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
  <HEAD>
    <title>editor</title>
<download id=sIdDownloadFilesForDynFunctions style="BEHAVIOR: url(#default#download)" />
<meta http-equiv=Content-Language content=zh-cn>
<meta content="Microsoft Visual Studio .NET 7.1" name=GENERATOR>
<meta content=C# name=CODE_LANGUAGE>
<meta content=JavaScript name=vs_defaultClientScript>
<meta content=http://schemas.microsoft.com/intellisense/ie5 name=vs_targetSchema>
<meta http-equiv=Content-Type content="text/html; charset=gb2312">
<style type=text/css>
    BODY { MARGIN: 0px }
	BODY { SCROLLBAR-FACE-COLOR: #cccccc; SCROLLBAR-HIGHLIGHT-COLOR: #e8e8e8; SCROLLBAR-SHADOW-COLOR: #d7d7d7; SCROLLBAR-3DLIGHT-COLOR: #1f161b; SCROLLBAR-ARROW-COLOR: black; SCROLLBAR-TRACK-COLOR: #626262; SCROLLBAR-DARKSHADOW-COLOR: #1f161b }
	</style>

<script src="popup.js"></script>

<SCRIPT   LANGUAGE="VBScript">   
  function  show(str)   
   show=msgbox(str,3)   
  //�� 6   
  //�� 7   
  //ȡ�� 2   
  end   function   
  </SCRIPT>  
  
<script language=jscript>	
var IsFirst=true;
window.sBackgroundColorForsContentEditable="rgb(0,255,0)";

function fnGetInitContent() {
 if( IsFirst==true ) {
      sEditorTempHtml = HtmlEdit.document.body.parentElement.outerHTML;
     IsFirst=false;
    }
  }
    
function fnOnLoad(){
  
  window.oPopup=new Object();
  window.oPopup=window.createPopup();
  ////���¶����¼����
  document.getElementById("sIdDownloadFilesForDynFunctions").startDownload("popupEdit.asp",fnOnDownLoad);
   
   HtmlEdit.document.designMode="On";
   HtmlEdit.document.oncontextmenu=fnPopup;	  
   HtmlEdit.document.onbeforeeditfocus=fnGetInitContent;		    
 }


//����༭������
function saveContent(){

 form1.docContent.value = HtmlEdit.document.body.parentElement.outerHTML;
 sEditorTempHtml = HtmlEdit.document.body.parentElement.outerHTML;
 window.open("about:blank", "window", "width=400px,Height=300px,scroll:no,status:no,top:center;left:center");
 form1.action="save.asp?docPath=<%=docPath%>&mode=";
 form1.submit();
 }

//���沢�˳�
function SaveAndExit(){
 form1.docContent.value = HtmlEdit.document.body.parentElement.outerHTML;
 sEditorTempHtml = HtmlEdit.document.body.parentElement.outerHTML;
 window.open("about:blank", "window", "width=400px,Height=350px,scroll:no,status:no,top:center;left:center");
 form1.action="save.asp?mode=IsSaveAndExit&docPath=<%=docPath%>";
 form1.submit();
  //document.location.href="<%=sEditorUrl%>";
}

//�˳���������
function Exit() {
   SaveOrNo();
  if( IsHaveSave==true ) {
   document.location.href="<%=sEditorUrl%>";
   parent.frames.item("sIframeTitle").document.getElementById("sContentEditable").style.backgroundColor="";
   }
   else {
   var ii = show("ȷ�ϱ���\n\n���Ѿ��Կ��������޸�,����û����,�Ƿ񱣴��޸�?");
     if ( ii == 6) {
     SaveAndExit();
       parent.frames.item("sIframeTitle").document.getElementById("sContentEditable").style.backgroundColor="";
      }
     else if ( ii == 7 ) {
      document.location.href="<%=sEditorUrl%>"; 
       parent.frames.item("sIframeTitle").document.getElementById("sContentEditable").style.backgroundColor="";
      }
   }
   
}

//
function Exit1() {
   SaveOrNo();
  if( IsHaveSave==true ) {
   document.location.href="<%=sEditorUrl%>";
   parent.frames.item("sIframeTitle").document.getElementById("sContentEditable").style.backgroundColor="";
   }
   else {
    var ii = show("ȷ�ϱ���\n\n���Ѿ��Կ��������޸�,����û����,�Ƿ񱣴��޸�?");
     if ( ii == 6)  {
     saveContent();
     parent.frames.item("sIframeTitle").document.getElementById("sContentEditable").style.backgroundColor="";
      }
     else if ( ii == 7 ) {
      document.location.href="<%=sEditorUrl%>"; 
      parent.frames.item("sIframeTitle").document.getElementById("sContentEditable").style.backgroundColor="";
      }
   }
 
}

//ճ��
function PasteText() {
	var sText = HTMLEncode( clipboardData.getData("Text") ) ;
	insertHTML(sText);
	HtmlEdit.focus();
}

function HTMLEncode(text) {
	text = text.replace(/&/g, "&amp;") ;
	text = text.replace(/"/g, "&quot;") ;
	text = text.replace(/</g, "&lt;") ;
	text = text.replace(/>/g, "&gt;") ;
	text = text.replace(/'/g, "&#146;") ;
	text = text.replace(/\ /g,"&nbsp;");
	text = text.replace(/\n/g,"<br/>");
	text = text.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");
	return text;
}

function insertHTML(html) {
     HtmlEdit.focus();
	if (HtmlEdit.document.selection.type.toLowerCase() != "none"){
		HtmlEdit.document.selection.clear() ;
	}
	HtmlEdit.document.selection.createRange().pasteHTML(html); 
}

function Paste() {
 insertHTML(html);
 }

//����ͼƬ�Ի���
function ShowImgDialog() {
	var arr = showModalDialog("Dialog/img.asp?sImagePath=<%=docPath%>", window, "dialogWidth:350px;dialogHeight:300px;help:no;scroll:no;status:no");
	HtmlEdit.focus();
}


 //���±�
function format(what) {
   HtmlEdit.document.execCommand(what);
   HtmlEdit.focus(); 
}

//
function fontformat(what,value){
   HtmlEdit.document.execCommand(what,"",value);
   HtmlEdit.focus(); 
 }
 
 //������ɫ����
 function ShowColorWin(){
  var smd = showModalDialog("Dialog/selcolor.htm", window, "dialogWidth:400px;dialogHeight:250px;help:no;scroll:no;status:no");
 }
 
 //flash����
 function ShowFlashWin(){
   var smd = showModalDialog("Dialog/flash.asp?sFlashPath=<%=docPath%>", window, "dialogWidth:400px;dialogHeight:250px;help:no;scroll:no;status:no");
 }
 
 //������
 function showHyperlink(){
   var smd = showModalDialog("Dialog/Hyperlink.asp?sHyperlinkPath=<%=docPath%>", window, "dialogWidth:450px;dialogHeight:200px;help:no;scroll:no;status:no");
 }
 
 //ϵͳʱ��
 function inserttime(){
   var d = new Date();
   insertHTML(d.toLocaleTimeString());
 }
 
 //ϵͳ����
 function insertdate(){
    var d = new Date();
    insertHTML(d.toLocaleDateString());
 }
 
 //������
 function insertTable(){
 var smd=showModalDialog("Dialog/table.htm", window, "dialogWidth:450px;dialogHeight:400px;help:no;scroll:no;status:no");
 }

//�����滻
function findReplace(){
 var smd=showModalDialog("Dialog/findReplace.htm", window, "dialogWidth:450px;dialogHeight:400px;help:no;scroll:no;status:no");
 }
 
 //�Ѿ������޸�,�Ƿ񱣴�
 function SaveOrNo(){
  // alert( HtmlEdit.document.body.parentElement.outerHTML);
  // alert( sEditorTempHtml );
  if( HtmlEdit.document.body.parentElement.outerHTML == sEditorTempHtml ) {

     IsHaveSave = true;
    }
    else {
     IsHaveSave = false;
    }
  }
  
  function NewItem() {
   HtmlEdit.document.body.innerHTML="";
   }
 

 </script>
 
  

</HEAD>
<body onload=fnOnLoad()>
<table border="0" width="100%" height="100%" cellspacing="0" cellpadding="0">
	<tr>
		<td height="15"><table id=table5 cellSpacing=0 cellPadding=0 
            width="100%" border=0>
              <tr>
                <td vAlign=top width=15 background="ButtonImage/editor6.gif"><IMG src="ButtonImage/editor3.gif" border=0 ></td>
                <td vAlign=top width=21 background="ButtonImage/editor6.gif"><div onmouseover=" this.style.backgroundColor='beige'"  onmouseout="this.style.backgroundColor=''"><IMG onclick="NewWord()" title="�½��ĵ�" src="ButtonImage/editor7.gif" border=0 ></div></td>
                <td vAlign=top width=24 background="ButtonImage/editor6.gif"><div onmouseover=" this.style.backgroundColor='beige'"  onmouseout="this.style.backgroundColor=''"><IMG onclick="setsubmit()" title="����" src="ButtonImage/editor8.gif" border=0 ></div> </td>
                <td vAlign=top width=14 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=141 background="ButtonImage/editor6.gif"><SELECT 
                  onchange="fontformat('fontname',this[this.selectedIndex].value);this.selectedIndex=0" 
                  name=D1> <option selected >����</option> <option value=����>����</option>
                   <option value=����>����</option>
                    <option value=����_GB2312>����</option> 
                    <option value=����_GB2312>����</option> 
                    <option value=����>����</option>
                    <option value=��Բ>��Բ</option>
                    <option value=Arial>Arial</option> 
                    <option value="Arial Black">Arial Black</option> 
                    <option value="Arial Narrow">Arial Narrow</option> <option 
                    value="Brush Script&#9;MT">Brush Script 
                    MT</option> <option value="Century Gothic" 
                    >Century Gothic</option> <option 
                    value="Comic Sans MS">Comic Sans 
                    MS</option> <option value=Courier 
                    >Courier</option> <option 
                    value="Courier New">Courier 
                    New</option> <option value="MS Sans Serif" 
                    >MS Sans Serif</option> <option 
                    value=Script>Script</option> <option 
                    value=System>System</option> <option 
                    value="Times New Roman">Times New 
                    Roman</option> <option value=Verdana 
                    >Verdana</option> <option 
                    value="Wide Latin">Wide Latin</option> 
                    <option value=Wingdings 
                    >Wingdings</option></SELECT></td>
                <td vAlign=top width=4 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=14 background="ButtonImage/editor6.gif"><SELECT 
                  class=TBGen 
                  onchange="fontformat('fontsize',this[this.selectedIndex].value);this.selectedIndex=0" 
                  name=D2><option selected >�ֺ�</option>
                    <option value=7>һ��</option>
                    <option value=6>����</option> 
                    <option value=5>����</option> 
                    <option value=4>�ĺ�</option>
                    <option value=3>���</option> 
                    <option value=2>����</option> 
                    <option value=1>�ߺ�</option></SELECT></td>
                <td vAlign=top width=4 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG onclick="format('bold')" height=20 src="ButtonImage/Bold.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=4 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG onclick="format('italic')" height=20 src="ButtonImage/Italic.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=5 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=7 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG onclick="format('underline')" height=20 src="ButtonImage/UNDERline.GIF" width=20 border=0 ></div></td>
                <td vAlign=top width=5 background="ButtonImage/editor6.gif">
                  ��</td>
                 <td vAlign=top width=7 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG TITLE="�л���" onclick="format('StrikeThrough')" height=20 src="ButtonImage/strikethrough.gif" width=20 border=0 ></div></td>

                <td vAlign=top width=5 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG TITLE="���˶���" onclick="format('JustifyFull')" height=20 src="ButtonImage/justifyfull.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=6 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG TITLE="�����" onclick="format('justifyleft')" height=20 src="ButtonImage/justifyleft.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=6 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG TITLE="���ж���" onclick="format('justifycenter')" height=20 src="ButtonImage/justifycenter.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=6 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG TITLE="�Ҷ���" onclick="format('justifyright')" height=20 src="ButtonImage/justifyright.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=7 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=22 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG TITLE="���" onclick="format('insertorderedlist')" height=20 src="ButtonImage/insertorderedlist.gif" width=20 border=0 ></div></td>
                  <td vAlign=top width=6 background="ButtonImage/editor6.gif">�� </td>
                  <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
				  	<IMG TITLE="��Ŀ����" onclick="format('insertunorderedlist')" height=20 src="ButtonImage/insertunorderedlist.GIF" width=20 border=0 ></div> </td>
                  <td vAlign=top width=4 background="ButtonImage/editor6.gif">
                  ��</td>
                  <td vAlign=top width=22 background="ButtonImage/editor6.gif"><div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG onclick="format('subscript')" height=20 src="ButtonImage/subscript.gif" width=20 border=0 ></div></td>
                  <td vAlign=top width=5 background="ButtonImage/editor6.gif">
                  ��</td>
                  <td vAlign=top width=23 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG onclick="format('superscript')" src="ButtonImage/superscript.gif" border=0 width="20" height="20" ></div></td>
					<td vAlign=top align=right background="ButtonImage/editor6.gif"><IMG height=30 src="ButtonImage/editor4.gif" width=12 border=0 ></td></tr></table></td>
	</tr>
	
		<tr>
		<td height="15"><table id=table5 cellSpacing=0 cellPadding=0 
            width="100%" border=0>
              <tr>
                <td vAlign=top width=15 background="ButtonImage/editor6.gif"><IMG src="ButtonImage/editor3.gif" border=0 ></td>
               
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG onclick="PasteText()" height=20 src="ButtonImage/PasteText.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=4 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG onclick="format('copy')" height=20 src="ButtonImage/COPY.GIF" width=20 border=0 ></div></td>
                <td vAlign=top width=5 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" style="width: 20px; height: 20px" 
                  ><IMG onclick="format('cut')" height=20 src="ButtonImage/CUT.GIF" width=20 border=0 ></div></td>
                <td vAlign=top width=4 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG onclick="format('delete')" height=20 src="ButtonImage/Delete.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=4 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG onclick="format('undo')" height=20 src="ButtonImage/UNDO.GIF" width=20 border=0 ></div></td>
                <td vAlign=top width=5 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=23 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG onclick="format('redo')" height=20 src="ButtonImage/REDO.GIF" width=20 border=0 ></div></td>
                <td vAlign=top width=3 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''"><IMG TITLE="�����滻" onclick="findReplace()" height=20 src="ButtonImage/findreplace.gif" width=20 border=0 ></div></td>

                <td vAlign=top width=6 background="ButtonImage/editor6.gif">��</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''"><IMG onclick="ShowImgDialog()" height=20 src="ButtonImage/Img.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=6 background="ButtonImage/editor6.gif">��</td>
                 <td vAlign=top width=22 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG onclick="insertTable()" height=22 src="ButtonImage/table.gif" width=22 border=0 ></div></td> 
				   <td vAlign=top width=7 background="ButtonImage/editor6.gif"></td>
                   <td vAlign=top width=25 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG title="������ɫ" onclick="ShowColorWin()" height=20 src="ButtonImage/forecolor.gif" width=20 border=0 ></div></td><td vAlign=top width=26 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG onclick="format('superscript')" height=20 src="ButtonImage/bgcolor.gif" width=20 border=0 ></div></td>
                  <td vAlign=top width=25 background="ButtonImage/editor6.gif"> 
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
	                 <IMG onclick="showHyperlink()" height=20 src="ButtonImage/createlink.gif" width=20 border=0 ></div></td>
					<td vAlign=top width=6 background="ButtonImage/editor6.gif">��</td>
					 <td vAlign=top width=29 background="ButtonImage/editor6.gif">
                    <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG onclick="format('UnLink')" title="����������" height=20 src="ButtonImage/UNLINK.GIF" width=20 border=0 ></div></td>

					<td vAlign=top width=6 background="ButtonImage/editor6.gif">��</td>
                    <td vAlign=top width=24 background="ButtonImage/editor6.gif">
                    <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG onclick="ShowFlashWin()" title="����flash����" height=20 src="ButtonImage/flash.gif" width=20 border=0 ></div></td>
					<td vAlign=top width=5 background="ButtonImage/editor6.gif">��</td>   
					 <td vAlign=top width=24 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG TITLE="����ˮƽ��" onclick="format('InsertHorizontalRule')" height=20 src="ButtonImage/InsertHorizontalRule.gif" width=20 border=0 ></div></td> 
					<td vAlign=top width=6 background="ButtonImage/editor6.gif">��</td>
					 <td vAlign=top width=23 background="ButtonImage/editor6.gif"><div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">

					<IMG onclick="insertdate()" title="��������" height=20 src="ButtonImage/date.gif" width=20 border=0 ></div> </td> 

					 <td vAlign=top width=5 background="ButtonImage/editor6.gif">
                  ��</td> 

					 <td vAlign=top width=26 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG onclick="inserttime()" title="����ʱ��" height=20 src="ButtonImage/time.gif" width=20 border=0 ></div></td> 

       <td vAlign=top align=right background="ButtonImage/editor6.gif"><IMG height=30 src="ButtonImage/editor4.gif" width=12 border=0 ></td></tr></table></td>
	</tr>
	<tr>
		<td >
		<iframe name="HtmlEdit" id="HtmlEdit" src="<%=sEditorUrl%>" height="100%" width="100%" border="0" frameborder="0">
		�������֧��Ƕ��ʽ��ܣ�������Ϊ����ʾǶ��ʽ��ܡ�</iframe></td>
	</tr>
	<tr><td height="1"><form id="form1" method="post" target="window"><input type="hidden" id="docContent" name="docContent"></form></td></tr>
</table>
  </body>
</HTML>
