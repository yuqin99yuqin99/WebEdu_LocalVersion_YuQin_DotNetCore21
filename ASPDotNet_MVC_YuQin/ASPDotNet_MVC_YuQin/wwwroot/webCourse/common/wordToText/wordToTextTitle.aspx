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
<title>上传文件</title>
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
	open("../doing.asp?sString=正在预览目录...","sUploading","fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//显示“正在保存...”，一直到保存目录的saveContents.asp网页的运行结果返回到该窗口，即“Saving”窗口
	alert("请写一个组件实现!首先必须预览目录结果,才能进一步拆分课文。单击“目录预览”开始生成目录供预览（参看\\wwwroot\\webCourse\\common\\script\\wordToWebcourseContents.js）；生成的预览目录放在\\wwwroot\\webCourse\\lessons\\contentsForWordToText.asp，然后在该目录框架中显示。查看目录无误后，再单击“拆分课文”开始转化");
	//open("uploadFile.asp?sFile="+sFile,"sUploading");
	document.getElementById("sText").disabled=false;
}
else{
	alert("必须是DOC格式!请重新选择。");
 }
}
function fnText(){
	alert("请写一个组件实现!查看目录无误后，再单击“拆分课文”开始转化,参看\\wwwroot\\webCourse\\common\\script\\wordToWebcourse.js，转化后的文件放在Book下面，转化后该目录将合并到主窗口目录的当前条目下(参见wwwroot\\webCourse\\common\\mergePartResource\\mergePartResourceTitle.asp)，然后可在主窗口中重新编辑目录.以后将实现可以根据目录预览转化部分文档！");
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
