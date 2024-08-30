<% @language="JScript" %>
<html>
<%
  var sTeachingPlan=Request("sTeachingPlan");
  var SlideNum=Request("SlideNum");
  var Num=Request("Num");
%> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>全屏演示</title>
<script language="jscript">
 var sTeachingPlan="<%=sTeachingPlan%>";
 var SlideNum=<%=SlideNum%>;
 var Num=<%=Num%>;
 
  function test(idx){
  try {
    window.SliderText=dialogArguments.sIFrameIndex.frames[0].document.getElementById("PPTP"+idx).innerText;
    }
    catch(e) {
     window.SliderText="";
     }
 }


 function fnPlay()
 {
   //document.getElementById("sIFrameIndex").src=sTeachingPlan+".files/frame.htm";
   //alert(document.frames("sIFrameIndex").document.readyState);
   //alert(document.getElementById("sIFrameIndex").src);
	  try {
	     document.getElementById("sPPTPlayer").initContent(sTeachingPlan+".files/fullscreen.htm","true",SlideNum);
	  }
     catch(e){
	     document.getElementById("sPPTPlayer").initContent(sTeachingPlan+".files/slide0001.htm","true",SlideNum);
       }
 }
 
 function fnGetSlideNum()
 {
   window.intSlideNum=SlideNum;
 }

</script>
</head>

<body onload="fnPlay()" scroll="no">
	<table border="0" width="100%" height="100%" id="table1">
	<tr>
		<td>
           <!--用js调用ActiveX,包括flash,才不用用户单击激活~!-->
           <script language="javascript" src="ppt.js"></script> 
           <script language="javascript">showActiveX();</script>
</td>
	</tr>
</table>

</body>
</html>
