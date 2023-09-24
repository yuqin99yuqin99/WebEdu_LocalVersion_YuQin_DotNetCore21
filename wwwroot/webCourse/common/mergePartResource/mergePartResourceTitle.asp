<%@ Page language="c#" %>
<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>合并资源</title>
<script>
function fnContents(){
	var sFile=document.getElementById("F1").value.substring(document.getElementById("F1").value.lastIndexOf("\\")+1,document.getElementById("F1").value.length).toLowerCase();
	if(sFile=="index.hta"){
		open("../doing.htm?sString=正在预览目录...","sPreviewingContents","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//显示“正在保存...”，一直到保存目录的saveContents.asp网页的运行结果返回到该窗口，即“Saving”窗口
		open("PreviewContents.aspx?sOriginPath="+document.getElementById("F1").value.substring(0,document.getElementById("F1").value.lastIndexOf("\\")),"sPreviewingContents");
	}
	else{
		alert("选定的必须是一个“网络远程教学系统_本机版”系统中的index.hta文件!系统将根据该文件确定将被合并资源的目录。");
	}
}
function fnMerge(){
	open("../doing.htm?sString=正在合并...","sMerging","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//显示“正在保存...”，一直到保存目录的saveContents.asp网页的运行结果返回到该窗口，即“Saving”窗口
	parent.dialogArguments.fnForUndo();
	parent.dialogArguments.document.getElementsByTagName("UL").item(0).innerHTML=parent.dialogArguments.document.getElementsByTagName("UL").item(0).innerHTML+parent.frames("sIframeContents").document.getElementsByTagName("UL").item(0).innerHTML;
	parent.dialogArguments.fnContentsRefreshAFromAlreadyAutoNumbered();
	parent.dialogArguments.fnContentsRefreshImage();
	parent.dialogArguments.oPopup.document.getElementById("sIdUndo").disabled=false;
	open("merge.aspx?sOriginPath="+document.getElementById("F1").value.substring(0,document.getElementById("F1").value.lastIndexOf("\\")),"sMerging");
}
</script>
<base target="sIframeContents">
</head>

<body topmargin="0" style="border:0px none;padding:0;margin:0;">
<table style="border:0px;width:100%;height:100%;border:0px none;padding:0;margin:0;">
<tr>
<td style="text-align:center;vertical-align:middle;">
<table style="width:100%;height:100%;border:0px none;padding:0;margin:0;" id="sTableBook">
  <tr id="sTrTitle" style="width:100%;height:30">
    <td width="99%">
	<p align="left">请选择将被合并资源的index.hta文件：
	<input type="file" name="F1" id="F1" size="20" title="选择将被合并资源的index.hta文件，系统将根据该文件确定将被合并资源的目录，然后根据目录进行合并">&nbsp;
	<input type="button" value="预览目录" name="sContents" id="sContents" onclick='fnContents();' title="必须具备目录结构的Word文档才能拆分为课文,首先必须预览目录结果,才能进一步拆分课文">
	<input type="button" value="开始合并" name="sMerge" id="sMerge" onclick='fnMerge();' title="将开始合并，合并到主窗口目录的当前条目下，然后可在主窗口中重新编辑目录！" disabled></p></form>
	</p>
	</td>
  </tr>
  </table>
</td>
</tr>
</table>

</body>

</html>
