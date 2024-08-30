<%@ Page language="c#" validateRequest="false"%>

<script language="C#" runat="server">
string path="";
void Page_Load(object sender, EventArgs e)
{
   path=Server.MapPath("..\\..\\lessons");
   path = path.Replace("\\", "\\\\");
}
</script>

<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>下载课程</title>
<script type="text/javascript" language="javascript">
function Init()
{
    document.getElementById("DownLoadToLocal1").GetSavePath("<%=path %>");
}
</script>
</head>

<body onload ="Init()">

<p>
<object classid="clsid:BE37783B-DBCC-45B1-A5D5-C5CCBF86A6B4" id="DownLoadToLocal1" width="589" height="300">
</object>
</p>

</body>

</html>
