<% @language="JScript" %>
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
<frameset rows="55,*" id="sFramesetBook" name="sFramesetBook" style="border: 0px ; padding-bottom: 1px; border-collapse:collapse" framespacing="0" border="0" frameborder="0">
	<frame src="mergePartResourceTitle.aspx" name="sIFrameTitle" id="sIFrameTitle" scrolling="no" noresize target="sIframeContents" style="border-right:1px dotted #800000; border-bottom:1px dotted #800000; ">
	<frameset cols="224,*" id="sFramesetMiddle" name="sFramesetMiddle">
		<frame src="../../lessons/Tempcontents.htm" name="sIframeContents" id="sIframeContents" scrolling="no" target="sIframeContent" style="border-right-style: dotted; border-right-width: 1px;border-right-color:#800000;">
		<frame src="../../options/TempcontentStart.htm" name="sIframeContent" id="sIframeContent" scrolling="no" target="_self">
	</frameset>
	<!--<frame src="../../options/bottom.asp" name="sIframeBottom" id="sIframeBottom" scrolling="no" noresize target="_self">-->
	<noframes>
	<body>
	<p>此网页使用了框架，但您的浏览器不支持框架。</p>
	</body>
	</noframes>
</frameset>
</body>

</html>
