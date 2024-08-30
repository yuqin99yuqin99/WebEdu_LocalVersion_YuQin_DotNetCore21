<%@ Page language="c#" validateRequest=false%>

<script language="C#" runat="server">
	public string sFilePath;
	public string LessonsPath;
	
	
	void Page_Load(object sender, EventArgs e)
	{
		string sfilename=Request.QueryString["sText"];
	  	sFilePath = Server.MapPath("../../lessons");
      	LessonsPath = sFilePath.Replace("\\","\\\\");
      	
     	sFilePath = (sFilePath+"\\content\\book\\"+sfilename+"\\"+sfilename+".htm");
     	sFilePath=sFilePath.Replace("\\","\\\\");
     

	}
</script>




<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>添加定义词频标签</title>
<script language="jscript">
function init() {
oAdd.FilePath="<%=sFilePath%>";
oAdd.LessonsPath="<%=LessonsPath%>";
}

</script>
</head>

<body onload="init()" scroll="no">

<p>
<object classid="clsid:60BA6283-8062-4272-B6C2-95969E4C5E31" id="oAdd" >
</object>
</p>

</body>

</html>
