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
   			sTitle+="上传外语动画资源";
	  	}
	  	else
	  	{
	  		language="ch";
    		sTitle+="上传中文动画资源";
	  	}

	  	  	sFilePath = Server.MapPath("../../lessons");
     		sFilePath = sFilePath+"\\content\\play";
     		sFilePath = sFilePath.Replace("\\","\\\\");

	}
</script>

<% @language="JScript"%>
<%


  if ( Request("sAnimation") !="") {
   sfilename=Request("sAnimation")();
  }

  var  sFilePath = Server.mapPath("../../lessons");
     sFilePath = sFilePath+"\\content\\play";
     sFilePath = sPathToClient(sFilePath,"\\");
     
  function sPathToClient(sPath,symbol) {   
    var aString=sPath.split(symbol);
	var iLength=aString.length;
	var sNewPath="";
	for(var i=0;i<iLength;i++){
	 if (i==iLength-1) {
	    sNewPath+=aString[i];
	   }
	   else {
	   sNewPath+=aString[i]+"\\\\";
	   }
	} 
	return sNewPath;
   }
 // Response.write("<script>alert('"+sFileSavedPath1+"');</script>");
%>
 
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title><%=sTitle%></title>
<script language="javascript" >
 function GetFilePath()
  { 
    oUploadPlay.sSavePath="<%=sFilePath%>";
    oUploadPlay.sFolder="<%=sfilename%>";
    oUploadPlay.Lg="<%=language%>";
   
  }
</script>
</head>

<body onload="GetFilePath()" bgcolor='#ECE9D8' scroll="no">


<p>
    <!--用js调用ActiveX,包括flash,才不用用户单击激活~!-->
    <script language="javascript" src="../script/showActiveX.js"></script> 
    <script language="javascript">UploadAnimationActiveX();</script>

</p>

</body>

</html>
