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
var sDriveType=oFSO.getDrive(oFSO.getDriveName(Server.mapPath("../lessons/contents.htm"))).driveType;//ʹ�����·��������Ŀ¼�ı�󽫲����޸Ĵ��롣
if(sDriveType!=2){
Response.write("�����ڿ����ڹ��������У��޷�д�����ݣ���Ӳ�������иá�����γ̻���ģ�͡�����д�����ݣ���");//���磿
}
else{
var oTextStream=oFSO.openTextFile(sPath,1);
var sFileString=oTextStream.readAll();
var sFileStringHeader=sFileString.substring(0,sFileString.indexOf("<body")+"<body".length);//���ַ�������������ͻص����
oTextStream.close();
oTextStream=null;
var oTextStream=oFSO.openTextFile(sPath,2);
oTextStream.write(sFileStringHeader+sDocument);
oTextStream.close();
oTextStream=null;
}
/**��������������ڷ���������XML�ķ�ʽ����.htm�ļ�����ɾ������
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
var sText=sTextXml.replace(oRegExp, "><UL>");//ȥ�������Ѽ���Ŀո񣬲��ܽ����ַ������㡣
oXMLDoc=null;

var sHeader='<?xml version="1.0" encoding="gb2312"?><html><head><xml:namespace prefix="IE" /><IE:download id="downLoad" style="behavior:url(#default#download)" /><link rel="stylesheet" type="text/css" href="../options/contents.css"></link><script language="JScript.encode" src="../common/script/contents.js"></script><title>file1</title><base target="sIframeContent"/></head><body unselectable="on" onload="fnOnLoad();" style="background-image:url(background_contents.gif);" scroll="no" id="sBody"><div unselectable="on" id="sDiv">';
var sEnd='</div></body></html>';
**/
var bIsSaved=true;

%>
<script>
var bIsSaved='<% =bIsSaved %>';
if(bIsSaved=="True"){
window.alert("�ѱ��棡");
opener.sDiv=opener.sClonedDivTempInnerHTML;//ȥ�������Ѽ���Ŀո񣬲��ܽ����ַ������㣬��ʱû��ʱ��ȥʵ��,�������������ʹ����һ��ȫ�ֱ�����ʵ�����ƵĹ��ܡ�
window.close();
}
else{
alert("δ֪��ԭ��δ���������棡");
window.close();
}
</script>


</body>

</html>

