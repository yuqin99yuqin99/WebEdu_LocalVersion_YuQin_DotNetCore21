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
			window.alert("�ѱ��棡");
			opener.sDiv=opener.sClonedDivTempInnerHTML;//ȥ�������Ѽ���Ŀո񣬲��ܽ����ַ������㣬��ʱû��ʱ��ȥʵ��,�������������ʹ����һ��ȫ�ֱ�����ʵ�����ƵĹ��ܡ�
			window.close();
			}
			else{
			alert("δ֪��ԭ��δ���������棡");
			window.close();
			}
		</script>
	</HEAD>
	<body MS_POSITIONING="GridLayout">
		<form id="Form1" method="post" runat="server">
		</form>
	</body>
</HTML>
