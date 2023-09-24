<%@ Page language="c#" validateRequest=false%>

<script  language="C#" runat="server">
	public string sNoteURL;
	void Page_Load(object sender, EventArgs e)
	{
	  	sNoteURL=Request.QueryString["sNoteURL"];
	}
</script>

<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>教/学笔记</title>
</head>

<body topmargin="0" style="border:0px none;padding:0;margin:0;">
<table style="border:0px;width:100%;height:100%;border:0px none;padding:0;margin:0;">
<tr>
<td style="text-align:center;vertical-align:middle;">
<table style="width:100%;height:100%;padding:0;margin:0" id="sTableBook">
  <tr id="sTrTitle" style="width:100%;height:30">
    <td style="width:100%;height:100%;text-align:center" id="sTdTitle">   
    <script language="javascript"> 
    var sNoteURL='<% =sNoteURL %>';
	document.write('<iframe name="sIframe" id="sIframe" src="'+sNoteURL+'" marginwidth="0" marginheight="0" height="100%" width="100%" scrolling="no" border="0" frameborder="0" target="sIframeContent">	浏览器不支持嵌入式框架，或被配置为不显示嵌入式框架。</iframe>');
    </script>
    </td>
  </tr>
  </table>
</td>
</tr>
</table>

</body>

</html>
