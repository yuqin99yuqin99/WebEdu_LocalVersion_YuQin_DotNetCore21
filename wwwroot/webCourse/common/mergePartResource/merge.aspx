<%@ Page language="c#" Codebehind="merge.aspx.cs" AutoEventWireup="True"  Inherits="bailuwebedusystem.merge" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
	<HEAD>
		<title>merge</title>
		<meta name="GENERATOR" Content="Microsoft Visual Studio .NET 7.1">
		<meta name="CODE_LANGUAGE" Content="C#">
		<meta name="vs_defaultClientScript" content="JavaScript">
		<meta name="vs_targetSchema" content="http://schemas.microsoft.com/intellisense/ie5">
		<script>
			var bIsCopyed='<% =bIsCopyed %>';
			if(bIsCopyed=="True"){
				window.alert('已成功合并，请在主窗口中编辑！');
				window.close();
			}
			else{
				alert('未知的原因，未能正常合并！请重新启动"网络远程教学系统"!然后重试。');
				window.close();
			}
		</script>

	</HEAD>
	<body MS_POSITIONING="GridLayout">
		<form id="Form1" method="post" runat="server">
		</form>
	</body>
</HTML>
