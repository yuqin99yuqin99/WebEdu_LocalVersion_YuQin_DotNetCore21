<%@ Page language="c#" validateRequest=false%>

<script  language="C#" runat="server">
	public string sFilePath;
	public string InitWordPath;
	public string sFileSavedPath1;
	
	void Page_Load(object sender, EventArgs e)
	{
	  	sFilePath=Server.MapPath("../../lessons").Replace("\\","\\\\");
	  	InitWordPath =Server.MapPath("../../../webCourse") + "\\options\\";
	  	InitWordPath=InitWordPath.Replace("\\","\\\\");
	  	sFileSavedPath1 = sFilePath + "\\\\content\\\\book";
	}
</script>


<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>�ϴ��ļ�</title>
<script language="javascript">
function fntoInitWordPath () {
   textToWord.InitWordPath="<%=InitWordPath%>";
}
  
function fnTextToWord(){
	var sDirectory=document.getElementById("sPathSelect").value;
	if(sDirectory==""){
		alert("����û��ѡ���ֹת����Word�ĵ��Ĵ��Ŀ¼��");
						}
	else{
		open("../doing.asp?sString=���ںϲ�...","sUploading","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//��ʾ�����ڱ���...����һֱ������Ŀ¼��saveContents.asp��ҳ�����н�����ص��ô��ڣ�����Saving������
		alert("��дһ�����ʵ��!��Frontpage����Ŀ¼��������򿪿���.asp�ļ���Ȼ����Word�ĵ�����󸽼�ճ���������ϴ�ʱ�Զ���ӵĴ���ȥ�������Ժ�ʵ�ֿ��Ը���Ŀ¼�ϲ����ֿ���ΪWord�ĵ���");
	}
}

function fnBrowseContents() {
   var oA=parent.frames.item("sIframeContents").document.getElementsByTagName("A");
    for(i=0;i<oA.length;i++) {
     var jb=oA.item(i).childNodes.item(0).firstChild.nodeValue.split(".").length - 1
      textToWord.addTitle(jb,oA.item(i).childNodes.item(1).firstChild.nodeValue);
     var sItem=oA.item(i).getAttributeNode("text").nodeValue;
     if(sItem != "") {
       textToWord.addContent("<%=sFileSavedPath1%>",sItem);
       }
     }
      if(sItem != "") {
       textToWord.addContent("<%=sFileSavedPath1%>",sItem);
       }

    textToWord.mergeFinish();
 
 }
</script>
<base target="sIframeContents">
</head>

<body onload="fntoInitWordPath()" topmargin="0" style="border:0px none;padding:0;margin:0;">

 <script language="javascript" src="../script/showActiveX.js"></script><script language="javascript">textToWordActiveX();</script>


</body>

</html>
