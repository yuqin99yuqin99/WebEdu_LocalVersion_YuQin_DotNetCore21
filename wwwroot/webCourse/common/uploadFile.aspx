<%@ Page language="c#" Codebehind="uploadFile.aspx.cs" AutoEventWireup="false" Inherits="bailuwebedusystem.uploadFile" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
	<HEAD>
		<title>uploadFile</title>
		<meta name="GENERATOR" Content="Microsoft Visual Studio .NET 7.1">
		<meta name="CODE_LANGUAGE" Content="C#">
		<meta name="vs_defaultClientScript" content="JavaScript">
		<meta name="vs_targetSchema" content="http://schemas.microsoft.com/intellisense/ie5">
	</HEAD>
	<body MS_POSITIONING="GridLayout">
		<form id="Form1" method="post" runat="server">
		</form>
		 <script language="javascript">
			var sBoolean="<% =bBoolean %>";
			if(sBoolean=="True"){
				alert("已上传！请刷新标题框架。");
				close();
			}
			else{
				alert("可能是权限等原因，上传失败！");
				close();
			}
		</script>


	</body>
</HTML>
