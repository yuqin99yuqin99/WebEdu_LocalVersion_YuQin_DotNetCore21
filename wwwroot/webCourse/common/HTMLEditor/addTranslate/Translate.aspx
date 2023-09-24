<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>添加中文翻译</title>
<script>
function fnok() {
	//为了稳定性,只好下此策了
	var ID=new Date().getTime();
	dialogArguments.getPObject().en=ID;
	dialogArguments.getPObject().type="translate";
	var oBr=dialogArguments.document.frames(0).document.createElement("br");
	var oSpan=dialogArguments.document.frames(0).document.createElement("span");
	oSpan.innerHTML=oTranslate.value;
	oSpan.style.display="none";
	oSpan.cn=ID;
	//dialogArguments.getPObject().parent.
	dialogArguments.getPObject().appendChild(oBr);
	dialogArguments.getPObject().appendChild(oSpan);
	dialogArguments.getPObject().style.color="";
	window.close();
}

function t()
{
	dialogArguments.getPObject().style.color="red";

}

</script>
</head>

<body onload="t()" onbeforeunload="dialogArguments.getPObject().style.color=''"  style="margin:12">
<br>

<fieldset style="width: 100%; height: 193px" >
<legend>中文翻文</legend>
<p align="center">
<textarea rows="19" id="oTranslate"  style="width:98%; height:234" ></textarea><br>
<input onclick="fnok()" value="确定" type="button">
<br>
　</fieldset>
</p>

</body>

</html>