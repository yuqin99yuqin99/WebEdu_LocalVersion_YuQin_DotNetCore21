<%@ Page language="c#" Codebehind="saveContents.aspx.cs" AutoEventWireup="True" Inherits="bailuwebedusystem.saveContents" validateRequest=false %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
	<HEAD>
		<title>saveContents</title>
		<meta name="GENERATOR" Content="Microsoft Visual Studio .NET 7.1">
		<meta name="CODE_LANGUAGE" Content="C#">
		<meta name="vs_defaultClientScript" content="JavaScript">
		<meta name="vs_targetSchema" content="http://schemas.microsoft.com/intellisense/ie5">
		<script language="javascript">
			var bIsSaved='<% =bIsSaved %>';
			if(bIsSaved=="True"){
			window.alert("已保存！");
			opener.sDiv=opener.sClonedDivTempInnerHTML;//去除不得已加入的空格，才能进行字符串运算，暂时没有时间去实现,所以在浏览器端使用了一个全局变量来实现类似的功能。
			window.close();
			}
			else{
			alert("未知的原因，未能正常保存！");
			window.close();
			}
		</script>
	</HEAD>
	<body MS_POSITIONING="GridLayout">
		<form id="Form1" method="post" runat="server">
		</form>
	</body>
</HTML>
