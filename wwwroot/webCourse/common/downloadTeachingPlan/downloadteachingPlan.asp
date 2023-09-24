<% @language="JScript"%>
<% 
   var sTeachingPlan = Request("sTeachingPlan")();
   var sFId = Request("sFId")();
   var sItemName = Request("sItemName")();
   
   var  sFilePath = Server.mapPath("../../lessons");   
     if ( sFId == "1") { 
      var sFileSourse = sFilePath+"\\content\\teachingPlan_origin_foreign\\" + sTeachingPlan;
      var sFilePath = sFilePath+"\\content\\teachingPlan_foreign\\" + sTeachingPlan;
      }
      else {
      var sFileSourse = sFilePath+"\\content\\teachingPlan_origin\\" + sTeachingPlan;
      var sFilePath = sFilePath+"\\content\\teachingPlan\\" + sTeachingPlan;
     }
     
   sFilePath = sPathToClient(sFilePath,"\\");
   sFileSourse = sPathToClient(sFileSourse,"\\");

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
<title></title>
<script language="JavaScript">
 function SetFilePath () {
  oDownload.FilePath = "<%=sFilePath%>";
  oDownload.FileSourse = "<%=sFileSourse%>";
  oDownload.ItemName = "<%=sItemName%>";
  //alert("<%=sFileSourse%>");
  }
</script>
</head>

<body onload="SetFilePath ()" scroll="no">

<p>
<!--用js调用ActiveX,包括flash,才不用用户单击激活~!-->
 <script language="javascript" src="../script/showActiveX.js"></script> 
 <script language="javascript">DownloadActiveX();</script>
</p>

</body>

</html>

