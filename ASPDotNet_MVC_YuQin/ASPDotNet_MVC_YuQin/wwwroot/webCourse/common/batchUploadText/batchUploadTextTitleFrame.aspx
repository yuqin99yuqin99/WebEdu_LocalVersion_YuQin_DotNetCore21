<%@ Page language="c#" validateRequest=false%>

<script language="C#" runat="server">
	public string sPath;
	void Page_Load(object sender, EventArgs e)
	{
	  	sPath=Server.MapPath("../../lessons/content/book").Replace("\\","\\\\");
	}
</script>

<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>上传课文</title>
<base target="sIframeContent">
<script></script>
<script language="javascript">
 function fnSetPlayPath () 
 {// 把组件的文件夹值赋给文本框
   	oBatchUploadFlash.Path="<%=sPath%>";
   	
  }
 function fnStartUpload()
 {
 	if(oBatchUploadFlash.SourcePath=="")
 	{
 		alert("您还没选择要批量上传flash的文件夹");
 	}
 	else
 	{
 		parent.frames("sIframeBottom").fnCopyResource();
 	}
 }
 function fnProgress(file)
 {
 	document.getElementById("oProgress").innerHTML=file;
 }
</script>
<script>

</script>
</head>

<body topmargin="0" style="border:0px none;padding:0;margin:0;" onload="fnSetPlayPath()">
<table style="width:100%;height:65%;border:0px none;padding:0;margin:0">
<tr>
<td style="text-align:center;vertical-align:middle;">
<table style="width:100%;height:100%;border:0px none;padding:0;margin:0;" id="sTableBook">
  <tr id="sTrTitle" style="width:100%;height:30">
    <td valign="top" width="19%">选择课文所在的文件夹:
	<br>
	<div id="oProgress"></div>
　</td>
    <td valign="top" width="46%">
<object classid="clsid:C607E21B-B519-46F2-A8AB-BE9467850F83" id="oBatchUploadFlash">
</object>
</td>
    <td width="34%" valign="top">&nbsp;<input type="button" value="全选" name="sCheckAll" id="sCheckAll" onclick='parent.frames("sIframeBottom").fnCheckAll();'>
    <input type="button" value="清除所选" name="sUncheckAll" id="sUncheckAll" onclick='parent.frames("sIframeBottom").fnUncheckAll();'>
	<input type="button" value="开始上传" name="sOk" id="sOk"  onclick='fnStartUpload();'></p>
	　</td>
  </tr>
  </table>
</td>
</tr>
</table>

</body>

</html>