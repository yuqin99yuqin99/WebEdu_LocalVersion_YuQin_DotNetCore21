<%@language="JScript"%>
<%
   var sText = Request("sText")();
 if(Request("B1")()=="��ʼ�ϴ�") {
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
<title>�ϴ����ĵ�¼������</title>
<style type ="text/css">
body{margin-left:10;}
</style>
<script language="jscript" >
function IsComplete() {
 var complete = "<%=complete%>";
 if(complete=="true"){

  alert("�ϴ����!");
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
��</p>
<p>��ѡ��Ҫ�ϴ���¼���ļ�(MP3��ʽ):</p>
<p><input id="sRecordingFilePath" type="file" name="sRecordingFilePath" size="25"></p>
   <input type=hidden name="sText" value="<%=sText%>">
<p>&nbsp; <input type="submit" value="��ʼ�ϴ�" name="B1"> <input type="button" value="ȡ��" onclick="window.close()" name="B2"></p>

</form>
</body>

</html>