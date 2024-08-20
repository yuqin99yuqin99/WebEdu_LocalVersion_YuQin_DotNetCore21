<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ParagraphsSound.aspx.cs" Inherits="addParagraphsSound.ParagraphsSound" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>无标题页</title>
 <script language="javascript">
  function fnok(filename) {
	var oImg=dialogArguments.document.frames(0).document.createElement("img");
	oImg.onclick="parent.frames('sIFrameTitle').SoundPlay('"+filename+"')";
	oImg.src="../../../../common/image/Sound.gif";
	oImg.title="单击播放段语音";
	oImg.style.cursor="hand";
	//dialogArguments.getPObject().parent.
	dialogArguments.getPObject().insertBefore(oImg,dialogArguments.getPObject().firstChild);
//	dialogArguments.getPObject().appendChild(oImg);
	dialogArguments.getPObject().style.color="";
	window.close();
}

function t()
{
	dialogArguments.getPObject().style.color="red";

}

</script>
</head>
<body onload="t()" onbeforeunload="dialogArguments.getPObject().style.color=''">
<iframe width="100%" height="100%" src="addParagraphsSound.aspx?sSoundPath=<%=sSoundPath %>"></iframe>
<form id="form1" runat="server">
    <div>

    
    
    </div>
    </form>
</body>
</html>
