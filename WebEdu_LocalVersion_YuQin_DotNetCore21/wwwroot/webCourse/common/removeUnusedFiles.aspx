<%@ Page language="c#" Codebehind="removeUnusedFiles.aspx.cs" AutoEventWireup="True" Inherits="bailuwebedusystem.removeUnusedFiles" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
	<HEAD>
		<title>removeUnusedFiles</title>
		<meta name="GENERATOR" Content="Microsoft Visual Studio .NET 7.1">
		<meta name="CODE_LANGUAGE" Content="C#">
		<meta name="vs_defaultClientScript" content="JavaScript">
		<meta name="vs_targetSchema" content="http://schemas.microsoft.com/intellisense/ie5">
		<script>
var bIsRemoved='<% =bIsRemoved %>';
if(bIsRemoved=="True"){
	window.close();
}
else{
	alert('可能是欲清理的文件正在使用的原因，未能正常清理！可在再次运行系统后重新清理。');
	window.close();
}
		</script>
	</HEAD>
	<body MS_POSITIONING="GridLayout">
		<form id="Form1" method="post" runat="server">
		</form>
	</body>
</HTML>
