<%@ Page language="c#" validateRequest=false%>

<script language="C#" runat="server">
	public string CommonPath;
	void Page_Load(object sender, EventArgs e)
	{
	  	CommonPath=Server.MapPath("../../lessons/content/webCourseCommon").Replace("\\","\\\\");
	}
</script>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>新建网页 3</title>
<style >
	td{font-size:12px}
	body{margin:0}
</style>
<script language="javascript">
function fnPartPath(path)
{

	PartPath.options[0].text+=path;
	document.frames("I1").document.location.href="ListFile.asp?PartPath="+PartPath.options[0].text;
 
}
function fnUp()
{
	PartPath.options[0].text="\\"+PartPath.options[0].text.substring(0,PartPath.options[0].text.lastIndexOf("\\"));
	document.frames("I1").document.location.href="ListFile.asp?PartPath="+PartPath.options[0].text;
}
function fnRefresh()
{
	parent.frames("right").document.frames("I1").document.location.href="FilesList.aspx";


}
</script>

</head>

<body>

<table border="0" width="100%" id="table4" height="100%">
	<tr>
		<td style="font-size: 12px">
		<object classid="clsid:D6D8AE04-32EA-4837-BCF0-FDE523CCFBA7" id="explorer" width="99%" height="100%">
		</object>
		<script language="javascript">
		var CommonPath="<%=CommonPath%>";
			explorer.sWebCourseCommon=CommonPath;
		</script>
		</td>
	</tr>
</table>

</body>

</html>