<%@ Page language="c#"%>
<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>上传文件</title>
<script>
function fnOk(){
var sFile=document.getElementById("F1").value;
var sFileType=sFile.substring(sFile.lastIndexOf(".")+1,sFile.length).toLowerCase();
if(sFileType=="mp3"){
	open("doing.htm?sString=正在上传...","sUploading","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//显示“正在保存...”，一直到保存目录的saveContents.asp网页的运行结果返回到该窗口，即“Saving”窗口
	open("uploadFile.aspx?sFile="+sFile,"sUploading");
	window.close();
}
else{
	alert("背景音乐必须是MP3格式!请重新选择。");
}
}
</script>
</head>

<body topmargin="0" style="border:0px none;padding:0;margin:0;">
<table style="border:0px;width:100%;height:100%;border:0px none;padding:0;margin:0;">
<tr>
<td style="text-align:center;vertical-align:middle;">
<table style="width:100%;height:100%;border:0px none;padding:0;margin:0;" id="sTableBook">
  <tr id="sTrTitle" style="width:100%;height:30">
    <td width="99%">
	<form action=""><p align="center">请选择要上传的文件<input type="file" name="F1" id="F1" size="20">&nbsp;
	<input type="button" value="开始上传" name="sOk" id="sOk" onclick='fnOk();'></p></form>
	</p>
	</td>
  </tr>
  </table>
</td>
</tr>
</table>

</body>

</html>
