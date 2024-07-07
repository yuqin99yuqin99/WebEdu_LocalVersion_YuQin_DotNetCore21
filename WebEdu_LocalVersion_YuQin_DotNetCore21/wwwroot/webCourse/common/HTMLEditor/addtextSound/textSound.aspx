<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="textSound.aspx.cs" Inherits="addParagraphsSound.textSound" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<head id="Head1" runat="server">
    <title>添加课文语音</title>
 <script language="javascript">
function fnok(filename)
{

    var oImg = dialogArguments.document.frames(0).document.createElement("img");
    oImg.onclick = "parent.frames('sIFrameTitle').SoundPlay('"+filename+"')";
    oImg.src = "../../../../common/image/sound.png";
    oImg.title="单击播放全文语音";
    oImg.width="24";
    oImg.height="24";
    oImg.style.cursor = "hand";

    dialogArguments.getPObject().parentElement.insertBefore(oImg, dialogArguments.getPObject());
//    dialogArguments.getPObject().appendChild(oImg);
    dialogArguments.getPObject().style.color = "";
    window.close();

    // 	var oP = dialogArguments.document.frames(0).document.createElement("p");
    //  		objectHtml += '<object classid="clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6" id="WindowsMediaPlayer1" width="250" height="45">';
    // 		objectHtml += '<param name="URL" value="'+sUrl+'">';
    // 		objectHtml += '<param name="autoStart" value="0"></object>';
    // 		buttonHtml = '<input type="button" onclick="ReduceRate()"   value="减速"><input type="button" onclick="IncreaseRate()"  value="加速">';
    // 		buttonHtml += '<a href="" style="color:blue" onclick="window.event.returnValue=false;DownLoadmp3(\''+sUrl+'\')">下载mp3</a>&nbsp;'
    // 		// alert(objectHtml + buttonHtml);
    // 		oP.innerHTML = objectHtml + buttonHtml;
    //
    // 		dialogArguments.document.frames(0).document.body.insertBefore(oP, dialogArguments.document.frames(0).document.body.childNodes(0))

}

function t()
{
	dialogArguments.getPObject().style.color="red";

}

</script>
</head>
<body onload="t()" onbeforeunload="dialogArguments.getPObject().style.color=''">
<iframe width="100%"  height="100%" src="addTextSound.aspx?sSoundPath=<%=sSoundPath %>"></iframe>
<form id="form1" runat="server">
    <div>
    </div>
    </form>
</body>
</html>
