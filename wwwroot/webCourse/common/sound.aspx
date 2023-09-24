<%@ Page language="c#" validateRequest=false%>

<script language="C#" runat="server">
string sound="";
void Page_Load(object sender, EventArgs e)
{
    sound=Request.QueryString["sound"];
}
</script>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>试听语音</title>
</head>

<body>
<p>
<object classid="clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6" id="WindowsMediaPlayer1" width="327" height="43">
	<param name="URL" value="<%=sound%>">
	<param name="rate" value="1">
	<param name="balance" value="0">
	<param name="currentPosition" value="0">
	<param name="defaultFrame" value>
	<param name="playCount" value="1">
	<param name="autoStart" value="-1">
	<param name="currentMarker" value="0">
	<param name="invokeURLs" value="-1">
	<param name="baseURL" value>
	<param name="volume" value="50">
	<param name="mute" value="0">
	<param name="uiMode" value="full">
	<param name="stretchToFit" value="0">
	<param name="windowlessVideo" value="0">
	<param name="enabled" value="-1">
	<param name="enableContextMenu" value="-1">
	<param name="fullScreen" value="0">
	<param name="SAMIStyle" value>
	<param name="SAMILang" value>
	<param name="SAMIFilename" value>
	<param name="captioningID" value>
	<param name="enableErrorDialogs" value="0">
</object>
</p>

</body>

</html>