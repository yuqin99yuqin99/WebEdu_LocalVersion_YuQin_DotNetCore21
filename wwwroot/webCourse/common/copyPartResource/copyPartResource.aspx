<%@ Page language="c#" Codebehind="copyPartResource.aspx.cs" AutoEventWireup="false" Inherits="bailuwebedusystem.copyPartResource" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
	<HEAD>
		<title>copyPartResource</title>
		<meta name="GENERATOR" Content="Microsoft Visual Studio .NET 7.1">
		<meta name="CODE_LANGUAGE" Content="C#">
		<meta name="vs_defaultClientScript" content="JavaScript">
		<meta name="vs_targetSchema" content="http://schemas.microsoft.com/intellisense/ie5">
	</HEAD>
	<body MS_POSITIONING="GridLayout">
		<form id="Form1" method="post" runat="server">
		</form>
		<script>
		var bIsCopyed='<% =bIsCopyed %>';
		var sPath='<% =sPathNow %>';
		aTemp=sPath.split("/");//strange!! have to transform "\" to "/",otherwise can't to pass to client!!!
		var iLength=aTemp.length;
		var sPathNow="";
		for(var i=0;i<iLength;i++){
		sPathNow=sPathNow+aTemp[i]+"\\";
		}
		if(bIsCopyed=="True"){
			window.alert('�Ѹ��Ƶ�"'+sPathNow.substring(0,sPathNow.length-2)+'"�ļ��У�');
			window.close();
		}
		else{
			alert("δ֪��ԭ��δ���������ƣ��뽫"+sPathNow.substring(0,sPathNow.length-2)+'"�ļ�����ԭ���Ѹ��ƵĲ����ļ�ȫ��ɾ��!Ȼ�����ԡ�');
			//window.close();
		}
		</script>
	</body>
</HTML>
