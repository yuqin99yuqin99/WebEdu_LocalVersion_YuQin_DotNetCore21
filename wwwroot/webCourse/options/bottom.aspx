<%@ Page language="c#" validateRequest=false%>

<script  language="C#" runat="server">
	public string sPath;
	void Page_Load(object sender, EventArgs e)
	{
	  	sPath=Server.MapPath("../../plugIns/").Replace("\\","\\\\");
	}
</script>
<script language="jscript">
var sPath="<%=sPath%>";
function updatestart1()
{
	updatestart.updatestart(sPath+"\\");
}

</script>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<script src="../common/script/bottom.js"></script>
<title>text-align</title>
<base target="_self">
</head>

<body onload="fnOnload();" style="margin:0; padding:0;border=0;">
<img border="0" src="bottom.gif" width="100%" height="20">
<object style="display:none" classid="clsid:078E63A6-123A-46C8-B2C5-5730F3407BA7" id="readonline" width="128" height="24" ></object>
<!--<p>text-align:center;background-image:url('../lessons/background_bottom.gif');background-position-y:bottom;background-repeat:no-repeat;"
</p>-->
<object style="display:none" classid="clsid:52CD4CDF-D2A7-46E1-90B6-D5238097843F" id="updatestart" width="210" height="26"></object>
</body>

</html>