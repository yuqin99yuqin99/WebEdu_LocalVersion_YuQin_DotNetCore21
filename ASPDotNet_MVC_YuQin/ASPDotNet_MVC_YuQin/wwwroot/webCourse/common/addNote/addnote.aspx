<html>

<head>
<meta http-equiv="Content-Language" content="zh-cn">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>添加注解</title>
<script language="jscript">
function fnOnLoad() {
// HtmlEdit.document.designMode="On";
 HtmlEdit.document.body.setAttribute("CONTENTEDITABLE","true");
 HtmlEdit.document.body.attributes.getNamedItem("CONTENTEDITABLE").nodeValue=true;
 HtmlEdit.document.designMode="On";
 HtmlEdit.document.onkeydown=onKeyDown;
// HtmlEdit.document.body.style.lineHeight=0;
}
var sUrl;
function insertPicture() {
    sUrl =dialogArguments.document.location.href;
    sUrl = sUrl.substring(sUrl.lastIndexOf("/")+1,sUrl.lastIndexOf("."));
 var arr = showModalDialog("img.asp?sImagePath="+sUrl, window, "dialogWidth:350px;dialogHeight:300px;help:no;scroll:no;status:no");
  HtmlEdit.focus();
}

function fnok() {
var oSelection;
var oDate=new Date();
var divId="layer"+oDate.getTime();
oSelection =  dialogArguments.HtmlEdit.document.selection.createRange();
var oDIV=dialogArguments.HtmlEdit.document.createElement("div");
oDIV.style.position="absolute";
oDIV.style.zIndex="10000";
oDIV.style.backgroundColor="#FFFFE1";
oDIV.style.color="#000000";
oDIV.style.borderWidth="1px";
oDIV.style.borderColor="#000000";
oDIV.style.paddingRight= "4px";
oDIV.style.paddingLeft= "4px";
oDIV.style.borderStyle= "solid";
oDIV.style.visibility="hidden";
oDIV.id=divId;
var tempHtml=HtmlEdit.document.body.innerHTML;
    tempHtml=tempHtml.replace(/\<P\>/g,"");
oDIV.innerHTML=tempHtml.replace(/\<\/P\>/g,"<br>");
dialogArguments.HtmlEdit.document.body.insertBefore(oDIV);
dialogArguments.insertHTML("<font color=blue><span onmouseover=showDIV('"+divId+"') onmouseout=hideDIV('"+divId+"') > "+oSelection.text+"</span></font>");
window.close();
}
function onKeyDown(event){
	if (HtmlEdit.event.keyCode==13){
			var sel = HtmlEdit.document.selection.createRange();
			sel.pasteHTML("<BR>");
			HtmlEdit.event.cancelBubble = true;
			HtmlEdit.event.returnValue = false;
			sel.select();
			sel.moveEnd("character", 1);
			sel.moveStart("character", 1);
			sel.collapse(false);
			return false;
		}
		
	}
function insertHTML(html) {
     HtmlEdit.focus();
	if (HtmlEdit.document.selection.type.toLowerCase() != "none"){
		HtmlEdit.document.selection.clear() ;
	}
	HtmlEdit.document.selection.createRange().pasteHTML(html); 
}

</script>
</head>

<body onload="fnOnLoad()" style="margin:15">
<br>
<fieldset ><p align="center">
<legend>请输入该词组的注释</legend>
<input type="button" value="插入图片" onclick="insertPicture()">　<br>
&nbsp;<iframe width="95%" onkeydown="if(event.keyCode==13)alert('');" name="HtmlEdit" id="HtmlEdit" width="534" height="478">浏览器不支持嵌入式框架，或被配置为不显示嵌入式框架。
</iframe></p>
<p align="center">
<input type="button" onclick="fnok()" value="确定">&nbsp; <input type="button" onclick="window.close()" value="取消">
</p>
</fieldset> 
</body>

</html>