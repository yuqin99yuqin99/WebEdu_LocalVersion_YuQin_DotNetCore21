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
    
    '初始化时取得原来的字符
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
  //是 6   
  //否 7   
  //取消 2   
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
  ////以下定义事件句柄
  document.getElementById("sIdDownloadFilesForDynFunctions").startDownload("popupEdit.asp",fnOnDownLoad);
   
   HtmlEdit.document.designMode="On";
   HtmlEdit.document.oncontextmenu=fnPopup;	  
   HtmlEdit.document.onbeforeeditfocus=fnGetInitContent;		    
 }


//保存编辑的内容
function saveContent(){

 form1.docContent.value = HtmlEdit.document.body.parentElement.outerHTML;
 sEditorTempHtml = HtmlEdit.document.body.parentElement.outerHTML;
 window.open("about:blank", "window", "width=400px,Height=300px,scroll:no,status:no,top:center;left:center");
 form1.action="save.asp?docPath=<%=docPath%>&mode=";
 form1.submit();
 }

//保存并退出
function SaveAndExit(){
 form1.docContent.value = HtmlEdit.document.body.parentElement.outerHTML;
 sEditorTempHtml = HtmlEdit.document.body.parentElement.outerHTML;
 window.open("about:blank", "window", "width=400px,Height=350px,scroll:no,status:no,top:center;left:center");
 form1.action="save.asp?mode=IsSaveAndExit&docPath=<%=docPath%>";
 form1.submit();
  //document.location.href="<%=sEditorUrl%>";
}

//退出但不保存
function Exit() {
   SaveOrNo();
  if( IsHaveSave==true ) {
   document.location.href="<%=sEditorUrl%>";
   parent.frames.item("sIframeTitle").document.getElementById("sContentEditable").style.backgroundColor="";
   }
   else {
   var ii = show("确认保存\n\n您已经对课文做了修改,但还没保存,是否保存修改?");
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
    var ii = show("确认保存\n\n您已经对课文做了修改,但还没保存,是否保存修改?");
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

//粘贴
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

//插入图片对话框
function ShowImgDialog() {
	var arr = showModalDialog("Dialog/img.asp?sImagePath=<%=docPath%>", window, "dialogWidth:350px;dialogHeight:300px;help:no;scroll:no;status:no");
	HtmlEdit.focus();
}


 //上下标
function format(what) {
   HtmlEdit.document.execCommand(what);
   HtmlEdit.focus(); 
}

//
function fontformat(what,value){
   HtmlEdit.document.execCommand(what,"",value);
   HtmlEdit.focus(); 
 }
 
 //弹出颜色窗口
 function ShowColorWin(){
  var smd = showModalDialog("Dialog/selcolor.htm", window, "dialogWidth:400px;dialogHeight:250px;help:no;scroll:no;status:no");
 }
 
 //flash窗口
 function ShowFlashWin(){
   var smd = showModalDialog("Dialog/flash.asp?sFlashPath=<%=docPath%>", window, "dialogWidth:400px;dialogHeight:250px;help:no;scroll:no;status:no");
 }
 
 //超链接
 function showHyperlink(){
   var smd = showModalDialog("Dialog/Hyperlink.asp?sHyperlinkPath=<%=docPath%>", window, "dialogWidth:450px;dialogHeight:200px;help:no;scroll:no;status:no");
 }
 
 //系统时间
 function inserttime(){
   var d = new Date();
   insertHTML(d.toLocaleTimeString());
 }
 
 //系统日期
 function insertdate(){
    var d = new Date();
    insertHTML(d.toLocaleDateString());
 }
 
 //插入表格
 function insertTable(){
 var smd=showModalDialog("Dialog/table.htm", window, "dialogWidth:450px;dialogHeight:400px;help:no;scroll:no;status:no");
 }

//查找替换
function findReplace(){
 var smd=showModalDialog("Dialog/findReplace.htm", window, "dialogWidth:450px;dialogHeight:400px;help:no;scroll:no;status:no");
 }
 
 //已经做了修改,是否保存
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
                <td vAlign=top width=21 background="ButtonImage/editor6.gif"><div onmouseover=" this.style.backgroundColor='beige'"  onmouseout="this.style.backgroundColor=''"><IMG onclick="NewWord()" title="新建文档" src="ButtonImage/editor7.gif" border=0 ></div></td>
                <td vAlign=top width=24 background="ButtonImage/editor6.gif"><div onmouseover=" this.style.backgroundColor='beige'"  onmouseout="this.style.backgroundColor=''"><IMG onclick="setsubmit()" title="保存" src="ButtonImage/editor8.gif" border=0 ></div> </td>
                <td vAlign=top width=14 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=141 background="ButtonImage/editor6.gif"><SELECT 
                  onchange="fontformat('fontname',this[this.selectedIndex].value);this.selectedIndex=0" 
                  name=D1> <option selected >字体</option> <option value=宋体>宋体</option>
                   <option value=黑体>黑体</option>
                    <option value=楷体_GB2312>楷体</option> 
                    <option value=仿宋_GB2312>仿宋</option> 
                    <option value=隶书>隶书</option>
                    <option value=幼圆>幼圆</option>
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
                <td vAlign=top width=4 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=14 background="ButtonImage/editor6.gif"><SELECT 
                  class=TBGen 
                  onchange="fontformat('fontsize',this[this.selectedIndex].value);this.selectedIndex=0" 
                  name=D2><option selected >字号</option>
                    <option value=7>一号</option>
                    <option value=6>二号</option> 
                    <option value=5>三号</option> 
                    <option value=4>四号</option>
                    <option value=3>五号</option> 
                    <option value=2>六号</option> 
                    <option value=1>七号</option></SELECT></td>
                <td vAlign=top width=4 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG onclick="format('bold')" height=20 src="ButtonImage/Bold.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=4 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG onclick="format('italic')" height=20 src="ButtonImage/Italic.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=5 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=7 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG onclick="format('underline')" height=20 src="ButtonImage/UNDERline.GIF" width=20 border=0 ></div></td>
                <td vAlign=top width=5 background="ButtonImage/editor6.gif">
                  　</td>
                 <td vAlign=top width=7 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG TITLE="中划线" onclick="format('StrikeThrough')" height=20 src="ButtonImage/strikethrough.gif" width=20 border=0 ></div></td>

                <td vAlign=top width=5 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG TITLE="两端对齐" onclick="format('JustifyFull')" height=20 src="ButtonImage/justifyfull.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=6 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG TITLE="左对齐" onclick="format('justifyleft')" height=20 src="ButtonImage/justifyleft.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=6 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG TITLE="居中对齐" onclick="format('justifycenter')" height=20 src="ButtonImage/justifycenter.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=6 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG TITLE="右对齐" onclick="format('justifyright')" height=20 src="ButtonImage/justifyright.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=7 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=22 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG TITLE="编号" onclick="format('insertorderedlist')" height=20 src="ButtonImage/insertorderedlist.gif" width=20 border=0 ></div></td>
                  <td vAlign=top width=6 background="ButtonImage/editor6.gif">　 </td>
                  <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
				  	<IMG TITLE="项目符号" onclick="format('insertunorderedlist')" height=20 src="ButtonImage/insertunorderedlist.GIF" width=20 border=0 ></div> </td>
                  <td vAlign=top width=4 background="ButtonImage/editor6.gif">
                  　</td>
                  <td vAlign=top width=22 background="ButtonImage/editor6.gif"><div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG onclick="format('subscript')" height=20 src="ButtonImage/subscript.gif" width=20 border=0 ></div></td>
                  <td vAlign=top width=5 background="ButtonImage/editor6.gif">
                  　</td>
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
                <td vAlign=top width=4 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG onclick="format('copy')" height=20 src="ButtonImage/COPY.GIF" width=20 border=0 ></div></td>
                <td vAlign=top width=5 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" style="width: 20px; height: 20px" 
                  ><IMG onclick="format('cut')" height=20 src="ButtonImage/CUT.GIF" width=20 border=0 ></div></td>
                <td vAlign=top width=4 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG onclick="format('delete')" height=20 src="ButtonImage/Delete.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=4 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG onclick="format('undo')" height=20 src="ButtonImage/UNDO.GIF" width=20 border=0 ></div></td>
                <td vAlign=top width=5 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=23 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''" 
                  ><IMG onclick="format('redo')" height=20 src="ButtonImage/REDO.GIF" width=20 border=0 ></div></td>
                <td vAlign=top width=3 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" 
                  onmouseout="this.style.backgroundColor=''"><IMG TITLE="查找替换" onclick="findReplace()" height=20 src="ButtonImage/findreplace.gif" width=20 border=0 ></div></td>

                <td vAlign=top width=6 background="ButtonImage/editor6.gif">　</td>
                <td vAlign=top width=20 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''"><IMG onclick="ShowImgDialog()" height=20 src="ButtonImage/Img.gif" width=20 border=0 ></div></td>
                <td vAlign=top width=6 background="ButtonImage/editor6.gif">　</td>
                 <td vAlign=top width=22 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG onclick="insertTable()" height=22 src="ButtonImage/table.gif" width=22 border=0 ></div></td> 
				   <td vAlign=top width=7 background="ButtonImage/editor6.gif"></td>
                   <td vAlign=top width=25 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG title="字体颜色" onclick="ShowColorWin()" height=20 src="ButtonImage/forecolor.gif" width=20 border=0 ></div></td><td vAlign=top width=26 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG onclick="format('superscript')" height=20 src="ButtonImage/bgcolor.gif" width=20 border=0 ></div></td>
                  <td vAlign=top width=25 background="ButtonImage/editor6.gif"> 
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
	                 <IMG onclick="showHyperlink()" height=20 src="ButtonImage/createlink.gif" width=20 border=0 ></div></td>
					<td vAlign=top width=6 background="ButtonImage/editor6.gif">　</td>
					 <td vAlign=top width=29 background="ButtonImage/editor6.gif">
                    <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG onclick="format('UnLink')" title="消除超链接" height=20 src="ButtonImage/UNLINK.GIF" width=20 border=0 ></div></td>

					<td vAlign=top width=6 background="ButtonImage/editor6.gif">　</td>
                    <td vAlign=top width=24 background="ButtonImage/editor6.gif">
                    <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG onclick="ShowFlashWin()" title="插入flash动画" height=20 src="ButtonImage/flash.gif" width=20 border=0 ></div></td>
					<td vAlign=top width=5 background="ButtonImage/editor6.gif">　</td>   
					 <td vAlign=top width=24 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG TITLE="插入水平线" onclick="format('InsertHorizontalRule')" height=20 src="ButtonImage/InsertHorizontalRule.gif" width=20 border=0 ></div></td> 
					<td vAlign=top width=6 background="ButtonImage/editor6.gif">　</td>
					 <td vAlign=top width=23 background="ButtonImage/editor6.gif"><div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">

					<IMG onclick="insertdate()" title="插入日期" height=20 src="ButtonImage/date.gif" width=20 border=0 ></div> </td> 

					 <td vAlign=top width=5 background="ButtonImage/editor6.gif">
                  　</td> 

					 <td vAlign=top width=26 background="ButtonImage/editor6.gif">
                  <div onmouseover=" this.style.backgroundColor='beige'" onmouseout="this.style.backgroundColor=''">
					<IMG onclick="inserttime()" title="插入时间" height=20 src="ButtonImage/time.gif" width=20 border=0 ></div></td> 

       <td vAlign=top align=right background="ButtonImage/editor6.gif"><IMG height=30 src="ButtonImage/editor4.gif" width=12 border=0 ></td></tr></table></td>
	</tr>
	<tr>
		<td >
		<iframe name="HtmlEdit" id="HtmlEdit" src="<%=sEditorUrl%>" height="100%" width="100%" border="0" frameborder="0">
		浏览器不支持嵌入式框架，或被配置为不显示嵌入式框架。</iframe></td>
	</tr>
	<tr><td height="1"><form id="form1" method="post" target="window"><input type="hidden" id="docContent" name="docContent"></form></td></tr>
</table>
  </body>
</HTML>
