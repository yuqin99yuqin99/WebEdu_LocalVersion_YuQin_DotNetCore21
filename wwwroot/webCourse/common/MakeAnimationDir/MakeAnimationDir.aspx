<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>生成源文件目录</title>
<script language="jscript">
function fnMakeAnimationDir()
{
	
	var cLi=dialogArguments.document.getElementsByTagName("LI");
	if(oMakeAnimationDir.SourcePath=="")
	{
		alert("生成失败!请先选择生成源文件目录的路径");
	}
	else
	{
		for(var i=0;i<cLi.length;i++)
		{
			var text=cLi[i].getElementsByTagName("SPAN").item(1).innerText;
			oMakeAnimationDir.MakeAnimationDir(text);
		}
	    alert("动画源文件目录已生成!");
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
&nbsp;选择源文件目录放置的位置</p>
<p>
&nbsp;&nbsp;&nbsp;<script src="../script/showActiveX.js"></script><script>ShowMakeAnimationDir();</script>
</p>
<p align="center"><input type="button" onclick="fnMakeAnimationDir()" value="开始创建"> <input type="button" onclick="window.close()" value="取消"></p>

</body>

</html>