<%@ Page language="c#" Codebehind="search.aspx.cs" AutoEventWireup="True"  Inherits="bailuwebedusystem.search" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
	<HEAD>
		<title>����</title>
		<meta content="Microsoft Visual Studio .NET 7.1" name="GENERATOR">
		<meta content="C#" name="CODE_LANGUAGE">
		<meta content="JavaScript" name="vs_defaultClientScript">
		<meta content="http://schemas.microsoft.com/intellisense/ie5" name="vs_targetSchema">
		<base target="_self">
		<style>A { COLOR: blue }
		</style>
		<script>
function fnListContents()
{
	var sTexts="<%=sTexts%>";
	var s="";
	if(sTexts!=""&&sTexts!="no")
	{
		sText=sTexts.split(",");
		document.getElementById("searchresult").innerHTML="���鵽 "+(sText.length-1)+"ƪ����:<br>"
		for(i=0;i<sText.length-1;i++)
		{
			s+="<a href='' onclick='event.returnValue=false;fnOpen("+sText[i]+")'>"+dialogArguments.fnGetItemText(sText[i])+"</a>"+"<br>";
		}
		document.getElementById("searchresult").innerHTML+=s;
	}
	else if(sTexts=="")
	{
		document.getElementById("searchresult").innerHTML="û�ҵ����йؼ���\"<font color=red>"+"<%=t%>"+"</font>\"�Ŀ���";
	
	}
	

}
function fnOpen(sText)
{
	dialogArguments.fnSearchResult(sText,"<%=t%>");
}
function KeyDown()
{
	if (event.keyCode == 13)
	{
		event.returnValue=false;
		event.cancel = true;
		Form1.submit();
	}
}

		</script>
	</HEAD>
	<body MS_POSITIONING="GridLayout" onload="fnListContents();">
		<form id="Form1" method="post" runat="server">
			<TABLE id="Table1" cellSpacing="1" width="100%" border="0">
				<TR>
					<TD height="39" colspan="2">
						<asp:textbox id="TextBox1" runat="server" Width="248px"></asp:textbox><FONT face="����">&nbsp;</FONT><asp:button id="Button1" runat="server" Width="80px" Text="����"></asp:button><FONT face="����">&nbsp;</FONT><asp:button id="Button2" runat="server" Width="88px" Text="���������"></asp:button></TD>
				</TR>
				<TR>
					<TD width="3%" ></TD>
					<TD width="96%" ><span id="searchresult"></span>��</TD>
				</TR>
			</TABLE>
		</form>
	</body>
</HTML>