<%@ Page language="c#"%>
<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>�ϴ��ļ�</title>
<script>
function fnOk(){
var sFile=document.getElementById("F1").value;
var sFileType=sFile.substring(sFile.lastIndexOf(".")+1,sFile.length).toLowerCase();
if(sFileType=="mp3"){
	open("doing.htm?sString=�����ϴ�...","sUploading","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//��ʾ�����ڱ���...����һֱ������Ŀ¼��saveContents.asp��ҳ�����н�����ص��ô��ڣ�����Saving������
	open("uploadFile.aspx?sFile="+sFile,"sUploading");
	window.close();
}
else{
	alert("�������ֱ�����MP3��ʽ!������ѡ��");
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
	<form action=""><p align="center">��ѡ��Ҫ�ϴ����ļ�<input type="file" name="F1" id="F1" size="20">&nbsp;
	<input type="button" value="��ʼ�ϴ�" name="sOk" id="sOk" onclick='fnOk();'></p></form>
	</p>
	</td>
  </tr>
  </table>
</td>
</tr>
</table>

</body>

</html>
