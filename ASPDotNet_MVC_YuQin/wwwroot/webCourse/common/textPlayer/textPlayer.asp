<% @language="JScript" %>
<html>
<head>
<meta http-equiv="content-language" content="zh-cn">
<meta http-equiv="expires" content="0">
<meta http-equiv="content-Type" content="text/html; charset=gb2312">
<head>
<title>save</title>
<base target="content">
<meta http-equiv="Content-Language" content="zh-cn"/>
</head>

<body>
<%
var sText=Request.queryString("sText")();
var sFileString='<frameset rows="100,*,20" id="sFramesetBook" name="sFramesetBook" style="border: 0px ; padding-bottom: 1px; border-collapse:collapse" framespacing="0" border="0" frameborder="0"><frame src="../title.htm" name="sIFrameTitle" id="sIFrameTitle" scrolling="no" noresize target="sIframeContents" style="border: 0px dotted #008000; border-collapse:collapse"><frameset cols="224,*" id="sFramesetMiddle" name="sFramesetMiddle"><frame src="" name="sIframeContents" id="sIframeContents" scrolling="no" target="sIframeContent" style="border-right-style: dotted; border-right-width: 1px;border-right-color:#800000;"><frame src="" name="sIframeContent" id="sIframeContent" scrolling="no" target="_self"></frameset><frame src="../../options/bottom.htm" name="sIframeBottom" id="sIframeBottom" scrolling="no" noresize target="_self"></frameset>';
var oFSO=Server.createObject("Scripting.FileSystemObject");
var sPathOfContents=Server.mapPath("../lessons/contents.htm");//ʹ�����·��������Ŀ¼�ı�󽫲����޸Ĵ��롣
var sDriveType=oFSO.getDrive(oFSO.getDriveName(sPathOfContents)).driveType;
if(sDriveType!=2){
	Response.write("�����ڿ����ڹ��������У��޷�д�����ݣ���Ӳ�������иá�����γ̻���ģ�͡�����д�����ݣ���");//���磿
}
else{
	var sPath;
	sPath=sPathOfContents.substring(0,sPathOfContents.lastIndexOf("\\"))+"\\content\\book\\"+sFileName+"\\"+sFileName+".asp";
	Response.write(sPath);
	oFSO.CreateFolder(sPathOfContents.substring(0,sPathOfContents.lastIndexOf("\\"))+"\\content\\book\\"+sFileName+"\\");
	var oTextStream=oFSO.createTextFile(sPath,2);
	oTextStream.write(sFileString);
	oTextStream.close();
	oTextStream=null;
	Response.redirect("../lessons/content/book/"+sFileName+"/"+sFileName+".asp");	
}
%>

</body>

</html>

