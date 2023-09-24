<%@ Page language="c#" Codebehind="uploadpicture.aspx.cs" AutoEventWireup="True" Inherits="bailuwebedusystem.uploadpicture" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
	<HEAD>
		<title>uploadpicture</title>
		<meta name="GENERATOR" Content="Microsoft Visual Studio .NET 7.1">
		<meta name="CODE_LANGUAGE" Content="C#">
		<meta name="vs_defaultClientScript" content="JavaScript">
		<meta name="vs_targetSchema" content="http://schemas.microsoft.com/intellisense/ie5">
		<script language="javascript">
		function uploading()
		{   
			document.getElementById("downing").style.display="block";
		}
		function complete()
		{
			document.getElementById("downing").style.display="none";
		}
		</script>
	</HEAD>
	<body MS_POSITIONING="GridLayout">
		<form id="Form1" method="post" encType="multipart/form-data" runat="server">
			<FONT face="宋体"><INPUT style="Z-INDEX: 101; LEFT: 24px; WIDTH: 264px; POSITION: absolute; TOP: 0px; HEIGHT: 24px"
					type="file" size="24" id="myFile" name="File1" runat="server"><INPUT style="Z-INDEX: 102; LEFT: 296px; WIDTH: 88px; POSITION: absolute; TOP: 0px; HEIGHT: 24px"
					type="submit" onclick="uploading()" name="Button1" id="Button" value="上传">
				<asp:Button id="Button1" style="Z-INDEX: 103; LEFT: 408px; POSITION: absolute; TOP: 0px" runat="server" Text="Button" Width="80px" Visible="False"></asp:Button>
				<div id="downing" style="DISPLAY: none;Z-INDEX: 104;LEFT: 40px;WIDTH: 97px;POSITION: absolute;TOP: 32px;HEIGHT: 19px;BACKGROUND-COLOR: #ff3300">正在上传...</div>
				<asp:TextBox id="TextBox1" style="Z-INDEX: 105; LEFT: 64px; POSITION: absolute; TOP: 120px" runat="server" Width="208px" TextMode="MultiLine"></asp:TextBox>
			</FONT>
		</form>
	</body>
</HTML>
