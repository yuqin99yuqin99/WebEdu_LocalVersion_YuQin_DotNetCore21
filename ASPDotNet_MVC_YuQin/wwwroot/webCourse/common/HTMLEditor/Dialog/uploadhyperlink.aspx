<%@ Page language="c#" Codebehind="uploadhyperlink.aspx.cs" AutoEventWireup="True" Inherits="bailuwebedusystem.uploadhyperlink" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
	<HEAD>
		<title>uploadhyperlink</title>
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
	<body MS_POSITIONING="GridLayout" topmargin="0">
		<form id="Form1" method="post" runat="server">
			<INPUT id="myFile" style="Z-INDEX: 106; LEFT: 8px; WIDTH: 264px; POSITION: absolute; TOP: 0px; HEIGHT: 18px"
				type="file" size="24" name="File1" runat="server"><INPUT id="Button" style="Z-INDEX: 107; LEFT: 280px; WIDTH: 88px; POSITION: absolute; TOP: 8px; HEIGHT: 24px"
				onclick="uploading()" type="submit" value="上传" name="Button1">
			<asp:Button id="Button1" style="Z-INDEX: 108; LEFT: 392px; POSITION: absolute; TOP: 8px" runat="server"
				Text="Button" Width="80px" Visible="False"></asp:Button>
			<DIV id="downing" style="DISPLAY: none; Z-INDEX: 109; LEFT: 24px; WIDTH: 97px; POSITION: absolute; TOP: 40px; HEIGHT: 19px; BACKGROUND-COLOR: #ff3300">正在上传...</DIV>
			<asp:TextBox id="TextBox1" style="Z-INDEX: 110; LEFT: 48px; POSITION: absolute; TOP: 128px" runat="server"
				Width="208px" TextMode="MultiLine"></asp:TextBox>
		</form>
	</body>
</HTML>
