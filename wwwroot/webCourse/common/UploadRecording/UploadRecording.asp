<%@language="JScript"%>
<%
   var sText = Request("sText")();
 if(Request("B1")()=="开始上传") {
   var sFileSavePath = Server.mapPath("../../lessons");
   var sFileSavePathToClient =sPathToClient(sFileSavePath+"\\content\\book\\"+sText+"\\"+sText,"\\"); 
       sFileSavePath = sFileSavePath+"\\content\\book\\"+sText+"\\"+sText+".mp3";
   
   var sFileSourse = Request("sRecordingFilePath")();
   var fso = Server.CreateObject("Scripting.FileSystemObject");
       fso.CopyFile(sFileSourse,sFileSavePath);
   var fso=null;  
   var complete ="true";
   }
   
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
<meta http-equiv="Content-Language" content="zh-cn">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>上传课文的录音播放</title>
<style type ="text/css">
body{margin-left:10;}
</style>
<script language="jscript" >
function IsComplete() {
 var complete = "<%=complete%>";
 if(complete=="true"){

  alert("上传完成!");
  window.close();
 }
}
</script>
<base target="_self">
</head>

<body  onload="IsComplete()" >

<form id="form1"  action="UploadRecording.asp">

<p></p>
<p style="display:none">
　</p>
<p>请选择要上传的录音文件(MP3格式):</p>
<p><input id="sRecordingFilePath" type="file" name="sRecordingFilePath" size="25"></p>
   <input type=hidden name="sText" value="<%=sText%>">
<p>&nbsp; <input type="submit" value="开始上传" name="B1"> <input type="button" value="取消" onclick="window.close()" name="B2"></p>

</form>
</body>

</html>