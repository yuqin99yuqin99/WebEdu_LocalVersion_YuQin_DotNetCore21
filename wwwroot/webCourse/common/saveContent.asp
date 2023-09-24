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
var sDocument=Request.form("docContent")();
var sPath=Request.form("docPath")();
//Response.contentType="text/plan";
var oFSO=Server.createObject("Scripting.FileSystemObject");
var sDriveType=oFSO.getDrive(oFSO.getDriveName(Server.mapPath("../lessons/contents.htm"))).driveType;//使用相对路径，虚拟目录改变后将不用修改代码。
if(sDriveType!=2){
Response.write("您现在可能在光盘上运行，无法写入数据，在硬盘上运行该“网络课程基本模型”才能写入数据！！");//网络？
}
else{
var oTextStream=oFSO.openTextFile(sPath,1);
var sFileString=oTextStream.readAll();
var sFileStringHeader=sFileString.substring(0,sFileString.indexOf("<body")+"<body".length);//此字符串与浏览器端送回的相加
oTextStream.close();
oTextStream=null;
var oTextStream=oFSO.openTextFile(sPath,2);
oTextStream.write(sFileStringHeader+sDocument);
oTextStream.close();
oTextStream=null;
}
/**下面代码曾用于在服务器端以XML的方式操作.htm文件，勿删！！！
var oXMLDoc=Server.createObject("microsoft.XMLDOM");
oXMLDoc.preserveWhiteSpace=true;//!!!!
var sPathContentshtm=Server.mapPath("../lessons/contents.htm");
var oFSO=Server.createObject("Scripting.FileSystemObject");
var oTextStream=oFSO.openTextFile(sPathContentshtm);
var sTextContentshtm=oTextStream.readAll();
var sReplacedContentshtm1="<xml:namespace";
var oRegExpContentshtm1=new RegExp(sReplacedContentshtm1,"g");
var sTextReplaced1=sTextContentshtm.replace(oRegExpContentshtm1,"<xmlnamespace");
var sReplacedContentshtm2="<IE:download";
var oRegExpContentshtm2=new RegExp(sReplacedContentshtm2,"g");
var sTextReplaced2=sTextReplaced1.replace(oRegExpContentshtm2,"<IEdownload");
oXMLDoc.loadXML(sTextReplaced2);
var aTemp=new Array();
aTemp=sPathContentshtm.split("\\");//strange!! have to transform "\" to "/",otherwise can't to pass to client!!!
var iLength=aTemp.length;
var sPathContentshtmNow="";
for(var i=0;i<iLength;i++){
sPathContentshtmNow=sPathContentshtmNow+aTemp[i]+"/";
}
var sTextXml=oXMLDoc.getElementsByTagName("div").item(0).xml;
var sReplaced="> <UL>";
var oRegExp=new RegExp(sReplaced,"g");
var sText=sTextXml.replace(oRegExp, "><UL>");//去除不得已加入的空格，才能进行字符串运算。
oXMLDoc=null;

var sHeader='<?xml version="1.0" encoding="gb2312"?><html><head><xml:namespace prefix="IE" /><IE:download id="downLoad" style="behavior:url(#default#download)" /><link rel="stylesheet" type="text/css" href="../options/contents.css"></link><script language="JScript.encode" src="../common/script/contents.js"></script><title>file1</title><base target="sIframeContent"/></head><body unselectable="on" onload="fnOnLoad();" style="background-image:url(background_contents.gif);" scroll="no" id="sBody"><div unselectable="on" id="sDiv">';
var sEnd='</div></body></html>';
**/
var bIsSaved=true;

%>
<script>
var bIsSaved='<% =bIsSaved %>';
if(bIsSaved=="True"){
window.alert("已保存！");
opener.sDiv=opener.sClonedDivTempInnerHTML;//去除不得已加入的空格，才能进行字符串运算，暂时没有时间去实现,所以在浏览器端使用了一个全局变量来实现类似的功能。
window.close();
}
else{
alert("未知的原因，未能正常保存！");
window.close();
}
</script>


</body>

</html>

