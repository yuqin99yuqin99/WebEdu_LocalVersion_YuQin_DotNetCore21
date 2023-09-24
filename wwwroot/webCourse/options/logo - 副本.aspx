<script language="C#" runat="server">
public string sRunFrom;
void Page_Load(object sender, EventArgs e)
{
  sRunFrom=Request.QueryString["sRunFrom"];
}
</script>
<html>
<head>
<!--<meta http-equiv="Page-Exit" content="revealTrans(Duration=1.0,Transition=12)">-->
<script language="jscript">
var sRunFrom='<% =sRunFrom %>';
function timeOpen(){
setTimeout("openFile()",5000);
}
function openFile(){
var iWidth;
var iHeight;

//ÅÐ¶Ï±ÈÀý
if(screen.height/screen.width==0.625)
{

	iWidth =1280;
	iHeight=768;

}
else
{

    iWidth =1024;
	iHeight=738;
}
var win=open("../common/iframeInitial.aspx?sRunFrom="+sRunFrom+"&iWidth="+iWidth+"&iHeight="+iHeight,"_self","fullscreen=yes,left=0,top=0,toolbar=no,location=no,directories=yes,menubar=no,titlebar=no,scrollbars=no,status=yes,resizable=no,copyhistory=no,width=800px,height=600px",true);
win.focus();
}
</script>
<base target="main">
<style>
 a:hover {
position:relative;
left:1px; 
top:1px;
color:rgb(0,0,255);
text-decoration:none;
}

 a:link{
 color:#008000;
 text-decoration:none;
 }
 a:vlink{
 color:#008000;
  text-decoration:none;
 }
 a:alink{
 color:#008000;
  text-decoration:none;
 }
a{
 text-decoration:none;
}
</style>
</head>

<body style="margin:0" bgcolor="#F6F6F6" scroll="no" onclick="openFile();">

<div style="color:rgb(0,255,0);text-align:center;WIDTH:100%;height:70% ;">
	<object classid="clsid:D27CDB6E-AE6D-11CF-96B8-444553540000" id="obj1" style="WIDTH:100%;height:100%" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" border="0" width="160" height="160">
		<param name="movie" value="logo.swf">
		<param name="quality" value="High">
		<embed src="logo.swf" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" name="obj1" width="160" height="160"></object>
	<a href="" onclick="event.returnValue=false;openFile()">½øÈë</a></div>
<script>
timeOpen();
</script>
</body>
</html>
