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
<title>�ϴ�����</title>
<base target="sIframeContent">
<script></script>
<script language="javascript">
 function fnSetPlayPath () 
 {// ��������ļ���ֵ�����ı���
   	oBatchUploadFlash.Path="<%=sPath%>";
   	
  }
 function fnStartUpload()
 {
 	if(oBatchUploadFlash.SourcePath=="")
 	{
 		alert("����ûѡ��Ҫ�����ϴ�flash���ļ���");
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
    <td valign="top" width="19%">ѡ��������ڵ��ļ���:
	<br>
	<div id="oProgress"></div>
��</td>
    <td valign="top" width="46%">
<object classid="clsid:C607E21B-B519-46F2-A8AB-BE9467850F83" id="oBatchUploadFlash">
</object>
</td>
    <td width="34%" valign="top">&nbsp;<input type="button" value="ȫѡ" name="sCheckAll" id="sCheckAll" onclick='parent.frames("sIframeBottom").fnCheckAll();'>
    <input type="button" value="�����ѡ" name="sUncheckAll" id="sUncheckAll" onclick='parent.frames("sIframeBottom").fnUncheckAll();'>
	<input type="button" value="��ʼ�ϴ�" name="sOk" id="sOk"  onclick='fnStartUpload();'></p>
	��</td>
  </tr>
  </table>
</td>
</tr>
</table>

</body>

</html>