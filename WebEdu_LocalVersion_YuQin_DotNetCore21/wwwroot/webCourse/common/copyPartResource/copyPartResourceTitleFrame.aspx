<% @language="JScript"%>
<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>����ϵͳ������Դ</title>
<base target="sIframeContent">
<script language="jscript">
 function SetPathToText (sPath) {// ��������ļ���ֵ�����ı���
   document.getElementById("sPathSelect").value = sPath+"\\";
  }
</script>
</head>

<body topmargin="0" style="border:0px none;padding:0;margin:0;">
<table style="border:0px;width:100%;height:100%;border:0px none;padding:0;margin:0;">
<tr>
<td style="text-align:center;vertical-align:middle;">
<table style="width:100%;height:100%;border:0px none;padding:0;margin:0;" id="sTableBook">
  <tr id="sTrTitle" style="width:100%;height:30">
    <td valign="top" width="31%">�����Ƶ�<input type="text" name="sPathSelect" value="" id="sPathSelect" size="32"></td>
    <td width="11%" valign="top"><!--��js����ActiveX,�Ų����û���������~!-->
 <script language="javascript" src="../script/showActiveX.js"></script> 
 <script language="javascript">getCopyResourcePathActiveX();</script>
&nbsp;<p>��</td>
    <td width="57%" valign="top">&nbsp;��ѡ�ļ�������:<span>--</span>
    <input type="button" value="�����ѡ" name="sUncheckAll" id="sUncheckAll" onclick='parent.frames("sIframeBottom").fnUncheckAll();'>
	<input type="button" value="��ʼ����" name="sOk" id="sOk" onclick='parent.frames("sIframeBottom").fnCopyResource();'></p>
	<p>��</td>
  </tr>
  </table>
</td>
</tr>
</table>

</body>

</html>
