<% @language="JScript"%>
<%
	var textID=Request("sTextID")();
	
%>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>�½���ҳ1</title>
<script language="javascript">
function addChina()
{
 	var iPCount=parent.dialogArguments.parent.frames.item("sIframeContent").document.body.getElementsByTagName("P").length;
	var cnP=document.frames("I1").document.body.getElementsByTagName("p");
	alert(parent.dialogArguments.parent.frames.item("sIframeContent").document.body.getElementsByTagName("P").innerHTML);
	alert(iPCount);
	alert(cnP.length);
	for(i=0;i<iPCount;i++)
	{

		if(i<cnP.length)
		{
			var insertP=parent.dialogArguments.parent.frames.item("sIframeContent").document.createElement("span");
			insertP.style.display="none";
			insertP.innerHTML=cnP.item(i).innerHTML;
			
			alert(parent.dialogArguments.parent.frames.item("sIframeContent").document.body.getElementsByTagName("p").item(i).innerHTML);
			parent.dialogArguments.parent.frames.item("sIframeContent").document.body.getElementsByTagName("p").item(i).parentElement.insertBefore(insertP,parent.dialogArguments.parent.frames.item("sIframeContent").document.body.getElementsByTagName("p").item(i).nextSibling);
		}
	
	}
	
	// ��ʼ�ύ����
	document.getElementById("Text").value=parent.dialogArguments.parent.frames.item("sIframeContent").document.body.innerHTML;
	for(i=0;i<parent.dialogArguments.parent.frames.item("sIframeContent").document.body.getElementsByTagName("span").length;i++)
	{
		parent.dialogArguments.parent.frames.item("sIframeContent").document.body.getElementsByTagName("span").item(i).style.display="block";
	
	}
	if(confirm("������Ӣ���Ƿ��Ӧ?'ȷ��'������."))
	{
		
		frm.submit();
	}
	else
	{
		parent.dialogArguments.parent.frames.item("sIframeContent").document.location.reload();
		parent.close();
	
	}
	
}
</script>
</head>

<body onload="addChina()">

<p  align="center">  <span id="pross" >�����������Ķ����Ӧ������...</span></p>
<p>
<iframe style ="display:none" name="I1" src="../../lessons/content/book/<%=textID%>/<%=textID%>_cn.asp" width="300" height="64"></iframe></p>
<form id="frm" action="save.asp?textID=<%=textID%>" method="post"><input type="hidden" id="Text" name="Text"></form>
</body>

</html>