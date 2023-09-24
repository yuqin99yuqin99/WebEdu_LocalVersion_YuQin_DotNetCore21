<%@ Page language="c#" validateRequest=false%>

<script language="C#" runat="server">
	public string sFilePath;
	public string LessonsPath;
	
	
	void Page_Load(object sender, EventArgs e)
	{
	  	sFileSavedPath1=Server.MapPath("..\\..\\lessons").Replace("\\","\\\\");
	  	
	  	sFilePath = Server.mapPath("../../lessons");
      	LessonsPath = sFilePath.Replace("\\","\\\\");
     	sFilePath = (sFilePath+"\\content\\book\\"+sfilename+"\\"+sfilename+".htm").Replace("\\","\\\\");;
     
     

	}
</script>



<% @language="JScript"%>
<%
  	var language ="";
  	var sFId = Request("sFId")();
  	if (sFId == "1") 
  	{
   		language = "en";
  	}
   	else 
   	{
    	language = "ch";
   	}

  	if ( Request("sText") !="") 
  	{
  		var  sfilename=Request("sText")();
  	}

  var  	sFilePath = Server.mapPath("../../lessons");
      	LessonsPath = sPathToClient(sFilePath,"\\");
     	sFilePath = sFilePath+"\\content\\book\\"+sfilename+"\\"+sfilename+".htm";
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
  %>

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
