<%@ Page language="c#" validateRequest=false%>

<script  language="C#" runat="server">
	public string sPath;
	void Page_Load(object sender, EventArgs e)
	{
	  	sPath=Server.MapPath("../../../plugIns/").Replace("\\","\\\\");
	}
</script>
<script language="jscript">
var sPath="<%=sPath%>";
function updatestart1()
{
	update.sLocalSystemPath=sPath+"\\";
}

</script>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>本机版系统升级</title>
<script language="javascript">
function WinClose(){
 window.opener.parent.parent.close();
 }
</script>

</head>

<body scroll="no" topmargin="0" leftmargin="0" onload="updatestart1()">
<p>
<script language="javascript" src="../script/showActiveX.js"></script> 
 <script language="javascript">ShowUpdateActiveX();</script>


</p>

</body>

</html>