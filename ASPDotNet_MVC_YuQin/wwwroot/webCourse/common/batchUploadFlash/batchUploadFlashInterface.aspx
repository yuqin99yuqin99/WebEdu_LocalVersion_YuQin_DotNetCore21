<%@ Page language="c#" validateRequest=false%>

<script language="C#" runat="server">
	public string hl;
	void Page_Load(object sender, EventArgs e)
	{
	  hl=Request.QueryString["hl"];
	}
</script>
<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>批量上传动画</title>
<script language="javascript">
var hl="<%=hl%>";
function fnTitle()
{
	if(hl=="en")
	{
		document.title="批量上传动画(外语)";
	}
	else
	{
		document.title="批量上传动画(国语)";
	}

}
</script>
</head>

<body onload="fnTitle()" topmargin="0" style="border:0px none;padding:0;margin:0;">
<table style="border:0px;width:100%;height:100%;border:0px none;padding:0;margin:0;">
<tr>
<td style="text-align:center;vertical-align:top;">
<table border="0" width="100%" id="table1" height="100%">
	<tr>
		<td height="47">
    <iframe name="sIframeTitle" src="batchUploadFlashTitleFrame.aspx" marginwidth="1" marginheight="1" height="116%" width="100%" scrolling="no" border="0" frameborder="0" target="sIframeContent">
	浏览器不支持嵌入式框架，或被配置为不显示嵌入式框架。</iframe>
		</td>
	</tr>
	<tr>
		<td>     
	<iframe name="sIframeBottom" src="../../lessons/contentsForBatchUploadFlash.htm" marginwidth="1" marginheight="1" height="97%" width="100%" scrolling="no" border="0" frameborder="0" target="sIframeContent">
	浏览器不支持嵌入式框架，或被配置为不显示嵌入式框架。</iframe>
    	</td>
	</tr>
</table>
</td>
</tr>
</table>

</body>

</html>