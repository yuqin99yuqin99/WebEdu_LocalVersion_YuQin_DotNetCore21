<%@ Page language="c#" validateRequest=false%>

<script language="C#" runat="server">
	public string sTitle="";
	public string sfilename="";
	public string language="";
	public string sFilePath="";
	
	void Page_Load(object sender, EventArgs e)
	{

	  	string sFId=Request.QueryString["sFId"];
	  	sfilename=Request.QueryString["sAnimation"];
	  	
	  	if(sFId == "1")
	  	{
	  	   	language="en";
   			sTitle+="上传外语教案资源";
	  	}
	  	else
	  	{
	  		language="ch";
    		sTitle+="上传中文教案资源";
	  	}

	  	  	sFilePath = Server.MapPath("../../lessons");
     		sFilePath = sFilePath+"\\content\\teachingPlan";
     		sFilePath = sFilePath.Replace("\\","\\\\");

	}
</script>

<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title><%=sTitle%></title>
<script language="javascript" >
 function GetFilePath()
 { 
  	oUploadTeachingPlan.sSavePath="<%=sFilePath%>";
    oUploadTeachingPlan.sFolder="<%=sfilename%>";
   	oUploadTeachingPlan.Lg="<%=language%>";

  }
</script>
</head>

<body onload="GetFilePath()" bgcolor='#ECE9D8' scroll="no">


<p>
    <!--用js调用ActiveX,包括flash,才不用用户单击激活~!-->
    <script language="javascript" src="../script/showActiveX.js"></script> 
    <script language="javascript">uploadTeachingPlanActiveX();</script>

</p>

</body>

</html>
