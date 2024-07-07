<%@ Page language="c#" validateRequest=false%>

<script  language="C#" runat="server">
	public string sFilePath;
	void Page_Load(object sender, EventArgs e)
	{
	  	sFilePath=Server.MapPath("../lessons").Replace("\\","\\\\");
	}
</script>

<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>本机版资源上传到网站版</title>
<script language="javascript" >
function fnSetTarameter() {
 UserControl11.sLocalPath="<%=sFilePath%>";
}

function dd() {
 alert("");
 UserControl11.LetCourseName("sfsfsd");
}

</script>
</head>

<body style="margin:0" scroll="no"  onload="fnSetTarameter()">

<p>
<object classid="clsid:58416017-ADFE-40E4-AA0C-DF87C1EFD922" id="UserControl11" width="676" height="301">
</object>
</p>

</body>

</html>