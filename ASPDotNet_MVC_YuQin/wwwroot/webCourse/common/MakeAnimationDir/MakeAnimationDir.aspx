<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>����Դ�ļ�Ŀ¼</title>
<script language="jscript">
function fnMakeAnimationDir()
{
	
	var cLi=dialogArguments.document.getElementsByTagName("LI");
	if(oMakeAnimationDir.SourcePath=="")
	{
		alert("����ʧ��!����ѡ������Դ�ļ�Ŀ¼��·��");
	}
	else
	{
		for(var i=0;i<cLi.length;i++)
		{
			var text=cLi[i].getElementsByTagName("SPAN").item(1).innerText;
			oMakeAnimationDir.MakeAnimationDir(text);
		}
	    alert("����Դ�ļ�Ŀ¼������!");
    }
}
function fnCancel()
{
	window.close();

}
</script>
</head>

<body>
<br>
<p>
&nbsp;ѡ��Դ�ļ�Ŀ¼���õ�λ��</p>
<p>
&nbsp;&nbsp;&nbsp;<script src="../script/showActiveX.js"></script><script>ShowMakeAnimationDir();</script>
</p>
<p align="center"><input type="button" onclick="fnMakeAnimationDir()" value="��ʼ����"> <input type="button" onclick="window.close()" value="ȡ��"></p>

</body>

</html>