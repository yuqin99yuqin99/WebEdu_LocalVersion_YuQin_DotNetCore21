<% @language="JScript"%>
<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>复制系统部分资源</title>
</head>

<body topmargin="0" style="border:0px none;padding:0;margin:0;">
<% 
var sPath=Request.form("sPath")();
Response.write(sPath);
var sDocHeader='<?xml version="1.0" encoding="gb2312"?><html><head><link rel="stylesheet" type="text/css" href="../options/contents.css"></link><script language="JScript.encode" src="../common/script/contentsForCopyPartResource.js"></script><title>复制部分资源</title></head><body unselectable="on" onload="fnOnLoad();"><div unselectable="on" id="sDiv">';
var sDocEnd='</div></body></html>';
var sDocument=sDocHeader+Request.form("docContents")()+sDocEnd;

var oFSO=Server.createObject("Scripting.FileSystemObject");
var sDriveType=oFSO.getDrive(oFSO.getDriveName(Server.mapPath("../lessons/contents.htm"))).driveType;//使用相对路径，虚拟目录改变后将不用修改代码。
if(sDriveType!=2){
	Response.write("您现在可能在光盘上运行，无法写入数据，在硬盘上运行该“网络课程基本模型”才能写入数据！！");//网络？
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
