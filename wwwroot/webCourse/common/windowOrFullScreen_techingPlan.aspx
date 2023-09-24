<html>

<head>
<meta http-equiv="Content-Language" content="zh-cn">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>选择教案显示方式</title>
<script>
function fnOk(){
if(document.getElementById("R1").checked){
	var sUrlPart=document.location.href.substring(0,document.location.href.lastIndexOf("/")+1);
	win=document.getElementById("openPPT").openppt(sUrlPart+"PPTPlayer/PPTPlayerIFrame.aspx?sTeachingPlan="+"http://localhost:"+getPort()+"/webCourse/lessons/"+dialogArguments.sTeachingPlan+"&fs=true");
  
	//dialogArguments.open("../common/PPTPlayer/PPTPlayerIFrame.asp?sTeachingPlan="+dialogArguments.sTeachingPlan,"sTeachingPlan","fullscreen=yes");
}
else{
	var iWidth=(4/3)*(screen.height-25-30);
	dialogArguments.showModelessDialog("../common/PPTPlayer/PPTPlayerIFrame.aspx?sTeachingPlan="+"http://localhost:"+getPort()+"/webCourse/lessons/"+dialogArguments.sTeachingPlan+"&fs=false", window,"help:0;resizable:1;dialogWidth:"+iWidth+"px;dialogHeight:"+screen.height+"px;dialogLeft:"+(screen.width-iWidth)/2+"px;dialogTop:"+screen.height*0/2+"px;status:0;");	
	//open("../common/PPTPlayer/PPTPlayerIFrame.aspx?sTeachingPlan="+dialogArguments.sTeachingPlan+"&fs=false");
}
close();
}

function getPort()
{
	var sUrl=document.location.href;
	var sPartUrl=sUrl.substring(sUrl.lastIndexOf(":"));
	return sUrl.substring(sUrl.lastIndexOf(":")+1,sUrl.lastIndexOf(":")+sPartUrl.indexOf("/"));
}

</script>

</head>
<body>

<table border="0" width="100%" height="100%" id="table1">
	<tr>
		<td>
		<form method="POST" action="--WEBBOT-SELF--">
			<p align="center" style="visibility:hidden">
			<object classid="clsid:DCF8A54C-C9BC-4D7D-92E4-FC90F49A7B91" id="openPPT" width="249" height="18">
			</object>
			</p>
			<p align="center">请选择教案显示方式:</p>
			<p align="center"><input type="radio" checked value="V1" name="R1" id="R1">全屏(全屏后可按Alt+Tab在不同窗口之间切换;按Alt+F4可关闭当前窗口)&nbsp;&nbsp;
			<input type="radio" value="V2"  name="R1" id="R2">窗口</p>
			<p align="center"><input type="button" value="确定" name="sOk" onclick="fnOk();"></p>
		</form>
		<p align="center">　</td>
	</tr>
</table>

</body>

</html>
