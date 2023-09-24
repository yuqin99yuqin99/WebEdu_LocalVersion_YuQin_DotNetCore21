<% @language="JScript"%>
<%
  var language ="";
  var sTitle="";
  var sFId = Request("sFId")();
  if (sFId == "1") 
  {
  	language="en";
   	sTitle+="上传外语课文资源";
   }
   else 
   {
   	language="ch";
    sTitle+="上传中文课文资源";
   }
   
  if ( Request("sText") !="") {
  var  sfilename=Request("sText")();
  }

  var  sFilePath = Server.mapPath("../../lessons");
     sFilePath = sFilePath+"\\content\\book";
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
    oUploadText.sSavePath="<%=sFilePath%>";
    oUploadText.sFolder="<%=sfilename%>";
    oUploadText.Lg="<%=language%>";
    
  }

 function Refresh() {
   dialogArguments.parent.frames.item("sIframecontent").document.location.reload();
  }
</script>
</head>

<body onload="GetFilePath()" bgcolor='#ECE9D8' scroll="no">


<p>
    <!--用js调用ActiveX,包括flash,才不用用户单击激活~!-->
    <script language="javascript" src="../script/showActiveX.js"></script> 
    <script language="javascript">uploadTextActiveX();</script>

</p>

</body>

</html>
