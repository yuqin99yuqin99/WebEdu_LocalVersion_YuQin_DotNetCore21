<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>flash播放器</title>
<style type="text/css">
   td {font-size:8pt}
 body {margin:0;}
.drag {
	CURSOR: hand; POSITION: relative
  }
</style>
<SCRIPT language="jscript">

 var frametotal;
 var frameMunber;//当前帧
 var dragapproved = false;
 var z,x,y,k;
 var movie;
 var movie0;
 var temp1;
 var timerID = null;
 
  //取播放文件名
 var cLiNow=parent.dialogArguments.document.getElementsByTagName("LI");
 var intLi=cLiNow.length;
 var intTarget=-1;

 for(var i=0;i<intLi;i++){
    if( cLiNow[i].getElementsByTagName("SPAN").item(1).style.color==parent.dialogArguments.sColorClicked )
     {
	   intTarget = i;
	   break;
	 }
    }
  var sNodeValue="";
  var sPlayFileName="";
 if(cLiNow[intTarget].getElementsByTagName("A").item(0).attributes.getNamedItem("sFId").nodeValue==""){
	  sNodeValue = cLiNow[intTarget].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue;
	  sPlayFileName = "lessons/content"+"/play/"+sNodeValue+"/"+sNodeValue+".swf";//取得flash播放文件
  }
  else{
	  sNodeValue = cLiNow[intTarget].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue;
	  sPlayFileName = "lessons/content"+"/play_foreign/"+sNodeValue+"/"+sNodeValue+".swf";//取得flash播放文件
  }

function init()
{	
  
 
  var sHeadUrl="http://localhost:"+getPort()+"/webCourse/";;
   ///jgskjwflashPlayer.IsLoop="true";
   document.getElementById("flashPage").src="../../"+sPlayFileName.substring(0,sPlayFileName.lastIndexOf("."))+".htm?sAnimation="+sHeadUrl+ sPlayFileName+"&IsLoop=true";
  
}
function getPort()
{
	var sUrl=document.location.href;
	var sPartUrl=sUrl.substring(sUrl.lastIndexOf(":"));
	return sUrl.substring(sUrl.lastIndexOf(":")+1,sUrl.lastIndexOf(":")+sPartUrl.indexOf("/"));
}

</SCRIPT>

<script language="jscript">
function fnPlayClip(){
	window.open("../../../../common/flashPlayer/flashPlayerReplayWindow.aspx","_self");
	//var sUrl=document.location.href.substring(0,document.location.href.lastIndexOf("/"));
	//document.location.href=sUrl+"/flashPlayerReplayWindow.asp";
}
</script>

</head>
 <body onload="init()" scroll="no">
  <iframe name="flashPage" id="flashPage" height="100%" width="100%" src="" ></iframe>

</body>
</html>
