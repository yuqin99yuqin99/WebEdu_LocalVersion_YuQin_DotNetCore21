<%@ Page language="c#" Codebehind="Recording.aspx.cs" AutoEventWireup="false" Inherits="bailuwebedusystem.Recording" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
	<HEAD>
		<title>课件制作</title>
		<meta name="GENERATOR" Content="Microsoft Visual Studio .NET 7.1">
		<meta name="CODE_LANGUAGE" Content="C#">
		<meta name="vs_defaultClientScript" content="JavaScript">
		<meta name="vs_targetSchema" content="http://schemas.microsoft.com/intellisense/ie5">
		<script language="javascript">
			var textID="";
			var SysPath=
			function SetParameter()
			{
				var url=document.location.href
				url=url.substring(0,url.lastIndexOf("/"));
				url=url.substring(0,url.lastIndexOf("/"));
				url=url.substring(0,url.lastIndexOf("/"));
				url=url+"/lessons/content/CoursewareRecording"
				CWR.sUrl=url;
				CWR.sSysPath="<%=SysPath%>";
				CWR.sFilePath="<%=FilePath%>\\lessons\\content\\CoursewareRecording";
			    
				var oDate=new Date();
				textID=oDate.getTime();
				CWR.sTextID=textID;

			}
			function returnRecordingID()
			{
				window.dialogArguments.fnSetRecordingID(textID);
			}
		</script>
	</HEAD>
	<body MS_POSITIONING="GridLayout" onload="SetParameter()">
		<object classid="clsid:42964919-EBAF-47E8-B486-1BEF6CF9FCBE" id="CWR" width="962" height="732">
		</object>
		<form id="Form1" method="post" runat="server">
			<FONT face="宋体"></FONT>
		</form>
	</body>
</HTML>
