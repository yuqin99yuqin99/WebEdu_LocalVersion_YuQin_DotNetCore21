<% @language="JScript"%>
<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>����ϵͳ������Դ</title>
</head>

<body topmargin="0" style="border:0px none;padding:0;margin:0;">
<% 
var sPath=Request.form("sPath")();
Response.write(sPath);
var sDocHeader='<?xml version="1.0" encoding="gb2312"?><html><head><link rel="stylesheet" type="text/css" href="../options/contents.css"></link><script language="JScript.encode" src="../common/script/contentsForCopyPartResource.js"></script><title>���Ʋ�����Դ</title></head><body unselectable="on" onload="fnOnLoad();"><div unselectable="on" id="sDiv">';
var sDocEnd='</div></body></html>';
var sDocument=sDocHeader+Request.form("docContents")()+sDocEnd;

var oFSO=Server.createObject("Scripting.FileSystemObject");
var sDriveType=oFSO.getDrive(oFSO.getDriveName(Server.mapPath("../lessons/contents.htm"))).driveType;//ʹ�����·��������Ŀ¼�ı�󽫲����޸Ĵ��롣
if(sDriveType!=2){
	Response.write("�����ڿ����ڹ��������У��޷�д�����ݣ���Ӳ�������иá�����γ̻���ģ�͡�����д�����ݣ���");//���磿
}
else{
var oTextStream=oFSO.createTextFile(sPath,2);
oTextStream.write(sDocument);
oTextStream.close();
oTextStream=null;
//Response.redirect("../lessons/content/book/"+sFileName+"/"+sFileName+".asp");	
Response.redirect("copyPartResourceInterface.asp");
}
%>

</body>

</html>
