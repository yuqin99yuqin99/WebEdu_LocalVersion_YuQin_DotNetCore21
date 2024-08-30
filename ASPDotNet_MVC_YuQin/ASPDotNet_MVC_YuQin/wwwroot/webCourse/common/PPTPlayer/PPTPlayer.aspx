<%@ Page language="c#"%>

<script language="C#" runat="server">
	public string sTeachingPlan;
	public string fs;
	public string sTeachingPlanTemp;
	
	void Page_Load(object sender, EventArgs e)
	{
		sTeachingPlan=Request.QueryString["sTeachingPlan"];
	 	fs=Request.QueryString["fs"];
	 	sTeachingPlanTemp=sTeachingPlan;
	 	sTeachingPlan=sTeachingPlan.Substring(0,sTeachingPlan.LastIndexOf('.'));
	 	
	 	
	}
</script>

<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>PowerPiont演示</title>
<style type="text/css">
 body{margin:0}
</style>
<script language="javascript">
 var sTeachingPlan="<%=sTeachingPlan%>";
  if (!fnDetectActiveXControl("webEdu.pptplayer") ){
    // alert("没有");
    window.location.href="install.asp?sTeachingPlan=<%=sTeachingPlanTemp%>";
   }
     
  //检查客户端是否安装是本机版组件   
 function fnDetectActiveXControl(sControlName) {
  var oControl;
  try{
    oControl=new ActiveXObject(sControlName);
   if(oControl==null)
     return false;
   else return true;
   }
   catch(e) {
    return false;
   }
}
    
  function Test(idx){
  try {
    window.SliderText=document.sIFrameIndex.frames[0].document.getElementById("PPTP"+idx).innerText;
    }
    catch(e) {
     window.SliderText="";
     }
 }

function fnPlay(){

//document.getElementById("sIFrameIndex").src=sTeachingPlan+".files/frame.htm";
//alert(document.frames("sIFrameIndex").document.readyState);
//alert(document.getElementById("sIFrameIndex").src);
var fs="<%=fs%>";

try {
	    document.getElementById("sPPTPlayer").initContent(sTeachingPlan+".files/fullscreen.htm",fs,1);
	}
catch(e)
{
	    document.getElementById("sPPTPlayer").initContent(sTeachingPlan+".files/slide0001.htm",fs,1);
}
   		  
	
}
//setTimeout("fnPlay();",6000);

function fnGetSlideNum(){
  try {
  
  window.intSlideNum=document.sIFrameIndex.frames[0].GetSldList().mList.length;
  }
  catch (e) {
   window.intSlideNum=1;
   }
  }
  
 
 function  AutoGoToNextSld() {
   alert(document.getElementById("sPPTPlayer").WebBrowser1.Height) ;
   }
     
</script>
<base target="_self">

</head>

<body onload="fnPlay();" scroll="no">

<% 
   sTeachingPlan+=".files/frame.htm";
%>
<iframe name="sIFrameIndex" src='<% =sTeachingPlan %>' id="sIFrameIndex" style="display:none;width:0px;height:0px">
浏览器不支持嵌入式框架，或被配置为不显示嵌入式框架。</iframe>
 <script language="javascript" src="../script/showActiveX.js"></script> 
 <script language="javascript">sPPTPlayerActiveX();</script>

   <script></script>

</body>

</html>