<%@ Page language="c#" Codebehind="PreviewContents.aspx.cs" AutoEventWireup="True" Inherits="bailuwebedusystem.PreviewContents" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
	<HEAD>
		<title>PreviewContents</title>
		<meta name="GENERATOR" Content="Microsoft Visual Studio .NET 7.1">
		<meta name="CODE_LANGUAGE" Content="C#">
		<meta name="vs_defaultClientScript" content="JavaScript">
		<meta name="vs_targetSchema" content="http://schemas.microsoft.com/intellisense/ie5">
		<script>
var bIsCopyed='<% =bIsCopyed %>';
if(bIsCopyed=="True"){
	opener.parent.document.getElementById("sIframeContents").src="../../lessons/contentsFormergePartResource.htm";
	window.alert('请查看将被合并的目录！这些目录及其相关的资源将被附加合并到主窗口目录的最后！合并后可回到主窗口进行编辑！');
	opener.document.getElementById("sMerge").disabled=false;
	window.close();
}
else{
	alert('未知的原因，未能正常预览目录！请重新启动"网络远程教学系统"!然后重试。');
	window.close();
}
</script>


	</HEAD>
	<body MS_POSITIONING="GridLayout">
		<form id="Form1" method="post" runat="server">
			<FONT face="宋体"></FONT>
		</form>
	</body>
</HTML>
