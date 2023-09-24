<% @language="JScript"%>
<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>复制系统部分资源</title>
<base target="sIframeContent">
<script language="jscript">
 function SetPathToText (sPath) {// 把组件的文件夹值赋给文本框
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
    <td valign="top" width="31%">将复制到<input type="text" name="sPathSelect" value="" id="sPathSelect" size="32"></td>
    <td width="11%" valign="top"><!--用js调用ActiveX,才不用用户单击激活~!-->
 <script language="javascript" src="../script/showActiveX.js"></script> 
 <script language="javascript">getCopyResourcePathActiveX();</script>
&nbsp;<p>　</td>
    <td width="57%" valign="top">&nbsp;所选文件总容量:<span>--</span>
    <input type="button" value="清除所选" name="sUncheckAll" id="sUncheckAll" onclick='parent.frames("sIframeBottom").fnUncheckAll();'>
	<input type="button" value="开始复制" name="sOk" id="sOk" onclick='parent.frames("sIframeBottom").fnCopyResource();'></p>
	<p>　</td>
  </tr>
  </table>
</td>
</tr>
</table>

</body>

</html>
