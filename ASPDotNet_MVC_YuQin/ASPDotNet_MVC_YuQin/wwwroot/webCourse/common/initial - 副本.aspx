<%@ Page language="c#" %>
<% 
//在此曾经使用Iframe，但动态改变目录和内容宽度出现Bug而不好实现，然后改为frameset，但此时出现在frameset元素后的脚本代码无法实现，而前面的好象可以，只好在title.htm中获取frame的src等变量，并保存在该窗口对象中
//这样就只好先title.htm，完全装载后打开真正的contents，contents完全装载后打开content，不然contents、content中获取title中的变量时可能会因为title还没有完全解析而出错，这样每次刷新title时会刷新contents和content
%>
<html>
<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>网络课程本机版</title>
</head>
<frameset rows="100,*,20"  id="sFramesetBook" name="sFramesetBook" style="border: 0px ; padding-bottom: 1px; border-collapse:collapse" framespacing="0" border="0" frameborder="0">
	<frame src="title.aspx" name="sIFrameTitle" id="sIFrameTitle" scrolling="no" noresize target="sIframeContents" style="border: 0px dotted #008000; border-collapse:collapse">
	<frameset cols="224,*" id="sFramesetMiddle" name="sFramesetMiddle">
		<frame src="../lessons/Tempcontents.htm" name="sIframeContents" id="sIframeContents" scrolling="no" target="sIframeContent" style="border-right-style: dotted; border-right-width: 1px;border-right-color:#800000;">
		<frame src="../options/TempcontentStart.htm" name="sIframeContent" id="sIframeContent" scrolling="no" target="_self">
	</frameset>
	<frame src="../options/bottom.aspx" name="sIframeBottom" id="sIframeBottom" scrolling="no" noresize target="_self">
	<noframes>
	<body>
	<p>此网页使用了框架，但您的浏览器不支持框架。</p>
	</body>
	</noframes>
</frameset>
<script>
//function fnOnLoad(){
	/**alert();
	document.body.onunload=fnThanks;
	document.body.scroll="no";
	window.iNewZoom=screen.width/1024*100;
	document.body.style.zoom=iNewZoom+"%";
	window.sFramesetBookRows=document.getElementById("sFramesetBook").rows;
	window.sFramesetMiddleCols=document.getElementById("sFramesetMiddle").cols;
	alert(window.sFramesetMiddleCols);**/
//					}

//var sRunFrom=parent.sRunFrom;
//var sPathContentsNow='<% //=sPathContentsNow %>'+document.getElementById("sIframeContents").src.substring(document.getElementById("sIframeContents").src.lastIndexOf("/")+1,document.getElementById("sIframeContents").src.length)+"/";//不放在onload事件函数中是因为onload事件函数中可能正装载时各框架无法获取。
//var sHTTPHeader=document.URL.substring(0,document.URL.lastIndexOf("common/initial.asp"));//因为initial.asp是固定的，所以此时获得的sHTTPHeader是确定的，以便其它框架调用，便于虚拟目录的变动而便于维护,相关的文件夹名称也在此定义全局变量（但因时间关系，还未如此实现），但相对路径必须保持，webedusystem已在此屏蔽。不放在onload事件函数中是因为onload事件函数中可能正装载时各框架无法获取。
//var sContentsPath="lessons/";
//var sTitlePath="common/";
//var sLessonsPath="content"+document.getElementById("sIframeContents").src.substring(document.getElementById("sIframeContents").src.lastIndexOf("contents")+8,document.getElementById("sIframeContents").src.lastIndexOf("."))+"/";//为多个分课作准备。
//var sOptionsPath="options/";
//var sContentsName=document.getElementById("sIframeContents").src.substring(document.getElementById("sIframeContents").src.lastIndexOf("/")+1,document.getElementById("sIframeContents").src.length);
//var sContentStartName=document.getElementById("sIframeContent").src.substring(document.getElementById("sIframeContent").src.lastIndexOf("/")+1,document.getElementById("sIframeContent").src.length);
</script>
</body>

</html>
