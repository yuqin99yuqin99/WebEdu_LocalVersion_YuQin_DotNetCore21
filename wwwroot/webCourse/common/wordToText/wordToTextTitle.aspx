<%@ Page language="c#" validateRequest=false%>

<script language="C#" runat="server">
	public string sFileSavedPath1;
	void Page_Load(object sender, EventArgs e)
	{
	  	sFileSavedPath1=Server.MapPath("..\\..\\lessons").Replace("\\","\\\\");
	}
</script>

<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>�ϴ��ļ�</title>
<style type ="text/css">
body{margin:0}
</style>
<script language="javascript">
 var  intervalID=0; 
 var intervalID1=0;
function fnSetPathToActiveX() {
  wordToText.SaveFilePath="<%=sFileSavedPath1%>"+"\\";
  }
function fnContents(){
var sFile=document.getElementById("F1").value;
var sFileType=sFile.substring(sFile.lastIndexOf(".")+1,sFile.length).toLowerCase();
if(sFileType=="doc"){
	open("../doing.asp?sString=����Ԥ��Ŀ¼...","sUploading","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//��ʾ�����ڱ���...����һֱ������Ŀ¼��saveContents.asp��ҳ�����н�����ص��ô��ڣ�����Saving������
	alert("��дһ�����ʵ��!���ȱ���Ԥ��Ŀ¼���,���ܽ�һ����ֿ��ġ�������Ŀ¼Ԥ������ʼ����Ŀ¼��Ԥ�����ο�\\wwwroot\\webCourse\\common\\script\\wordToWebcourseContents.js�������ɵ�Ԥ��Ŀ¼����\\wwwroot\\webCourse\\lessons\\contentsForWordToText.asp��Ȼ���ڸ�Ŀ¼�������ʾ���鿴Ŀ¼������ٵ�������ֿ��ġ���ʼת��");
	//open("uploadFile.asp?sFile="+sFile,"sUploading");
	document.getElementById("sText").disabled=false;
}
else{
	alert("������DOC��ʽ!������ѡ��");
 }
}
function fnText(){
	alert("��дһ�����ʵ��!�鿴Ŀ¼������ٵ�������ֿ��ġ���ʼת��,�ο�\\wwwroot\\webCourse\\common\\script\\wordToWebcourse.js��ת������ļ�����Book���棬ת�����Ŀ¼���ϲ���������Ŀ¼�ĵ�ǰ��Ŀ��(�μ�wwwroot\\webCourse\\common\\mergePartResource\\mergePartResourceTitle.asp)��Ȼ����������������±༭Ŀ¼.�Ժ�ʵ�ֿ��Ը���Ŀ¼Ԥ��ת�������ĵ���");
}

function fnMerge(){
	parent.dialogArguments.fnForUndo();
	
   // alert(parent.frames.item("sIframeContents").document.getElementsByTagName("UL").item(0).innerHTML);
	parent.dialogArguments.document.getElementsByTagName("UL").item(0).innerHTML=parent.dialogArguments.document.getElementsByTagName("UL").item(0).innerHTML+parent.frames.item("sIframeContents").document.getElementsByTagName("UL").item(0).innerHTML;
	
	parent.dialogArguments.fnContentsRefreshAFromAlreadyAutoNumbered();
	parent.dialogArguments.fnContentsRefreshImage();
	parent.dialogArguments.oPopup.document.getElementById("sIdUndo").disabled=false;
	
}

function checkstatus()
{
  if(parent.frames.item("sIframeContents").document.readyState=="complete")
  {
    fnMerge();
    clearInterval(intervalID);
  }
}

function fnStartMerge() {
  intervalID = setInterval('checkstatus()',2000);
 }

function fnContentsRefresh() {
	 intervalID1 = setInterval('fnStartRefresh()',2000);
}

function fnStartRefresh()
{
 	parent.frames.item("sIframeContents").document.URL= "../../lessons/contentsForWordToText.htm";
 	clearInterval(intervalID1);
}
 
</script>
<base target="sIframeContents">
</head>

<body onload="fnSetPathToActiveX()" topmargin="0" style="border:0px none;padding:0;margin:0;">
 <script language="javascript" src="../script/showActiveX.js"></script><script language="javascript">wordToTextActiveX();</script>

</body>

</html>
