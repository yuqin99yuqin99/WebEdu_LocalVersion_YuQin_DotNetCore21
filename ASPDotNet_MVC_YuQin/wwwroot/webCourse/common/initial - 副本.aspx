<%@ Page language="c#" %>
<% 
//�ڴ�����ʹ��Iframe������̬�ı�Ŀ¼�����ݿ�ȳ���Bug������ʵ�֣�Ȼ���Ϊframeset������ʱ������framesetԪ�غ�Ľű������޷�ʵ�֣���ǰ��ĺ�����ԣ�ֻ����title.htm�л�ȡframe��src�ȱ������������ڸô��ڶ�����
//������ֻ����title.htm����ȫװ�غ��������contents��contents��ȫװ�غ��content����Ȼcontents��content�л�ȡtitle�еı���ʱ���ܻ���Ϊtitle��û����ȫ��������������ÿ��ˢ��titleʱ��ˢ��contents��content
%>
<html>
<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>����γ̱�����</title>
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
	<p>����ҳʹ���˿�ܣ��������������֧�ֿ�ܡ�</p>
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
//var sPathContentsNow='<% //=sPathContentsNow %>'+document.getElementById("sIframeContents").src.substring(document.getElementById("sIframeContents").src.lastIndexOf("/")+1,document.getElementById("sIframeContents").src.length)+"/";//������onload�¼�����������Ϊonload�¼������п�����װ��ʱ������޷���ȡ��
//var sHTTPHeader=document.URL.substring(0,document.URL.lastIndexOf("common/initial.asp"));//��Ϊinitial.asp�ǹ̶��ģ����Դ�ʱ��õ�sHTTPHeader��ȷ���ģ��Ա�������ܵ��ã���������Ŀ¼�ı䶯������ά��,��ص��ļ�������Ҳ�ڴ˶���ȫ�ֱ���������ʱ���ϵ����δ���ʵ�֣��������·�����뱣�֣�webedusystem���ڴ����Ρ�������onload�¼�����������Ϊonload�¼������п�����װ��ʱ������޷���ȡ��
//var sContentsPath="lessons/";
//var sTitlePath="common/";
//var sLessonsPath="content"+document.getElementById("sIframeContents").src.substring(document.getElementById("sIframeContents").src.lastIndexOf("contents")+8,document.getElementById("sIframeContents").src.lastIndexOf("."))+"/";//Ϊ����ֿ���׼����
//var sOptionsPath="options/";
//var sContentsName=document.getElementById("sIframeContents").src.substring(document.getElementById("sIframeContents").src.lastIndexOf("/")+1,document.getElementById("sIframeContents").src.length);
//var sContentStartName=document.getElementById("sIframeContent").src.substring(document.getElementById("sIframeContent").src.lastIndexOf("/")+1,document.getElementById("sIframeContent").src.length);
</script>
</body>

</html>
