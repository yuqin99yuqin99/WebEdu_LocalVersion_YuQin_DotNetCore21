<HTML>
<HEAD>
<TITLE>课件播放窗口</TITLE>
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
 var cLiNow=opener.document.getElementsByTagName("LI");
 var intLi=cLiNow.length;
 var intTarget=-1;

 for(var i=0;i<intLi;i++)
   {
    if( cLiNow[i].childNodes[1].style.color==opener.sColorClicked )
     {
	   intTarget = i;
	   break;
	 }
    }
  var sNodeValue = cLiNow[intTarget].childNodes[1].attributes.getNamedItem("sCh").nodeValue;
  var sPlayFileName = "../../lessons/content_"+opener.parent.parent.sWebCourse+"/play/"+sNodeValue+".swf";//取得flash播放文件
     //
  document.onkeydown = SpeedFlash;

function SpeedFlash()
{
	SpeedFlash0(event.keyCode);
}

//快捷方式
function SpeedFlash0(keycode)
{
	if(keycode == 13 || keycode == 32 || keycode == 66)
	{
		if(movie1.IsPlaying())
		{
			Stop();	
		}
		else
		{
			Play();
		}

	}
	else if(keycode == 33 || keycode == 38 || keycode == 189 || keycode == 67)
	{
		Back();
	}
	else if(keycode == 34 || keycode == 40 || keycode == 187 || keycode == 77)
	{
		Forward();
	}
	else if(keycode == 37 || keycode == 86)
	{
		Previous();
	}
	else if(keycode == 39 || keycode == 78)
	{
		Next();
	}
	else if(keycode == 36 || keycode == 88)
	{
		Rewind();
	}
	else if(keycode == 35 || keycode == 188)
	{
		GoToEnd();
	}

}


function move()
{
	if (event.button == 1 && dragapproved)
	{
		y = temp1 + event.clientX - x;
		
		if(y < 0)
		{
		   y = 0;
		}
		if(y > 580)
		{
			y = 580;
		}
		z.style.pixelLeft = y;
		//		if(window.top.List.isPlaying == true)
	   // alert(y);
		movie1.GoToFrame(y/580*(frametotal));
		return false;
	}
}

function stopdrags()
{
   dragapproved = false;
   movie1.Play();
}

function drags()
{
    dragapproved = true;
	z = event.srcElement;
	temp1 = z.style.pixelLeft;//取出当前位置
	 x = event.clientX;//点击点
	 movie1.GoToFrame((frametotal/600)*x);
	// movie1.GoToFrame((frametotal/600)*x);
	///document.onmousemove = move;
    //alert((frametotal/600)*x);
}

function init()
{	
   
	
	frametotal=movie1.TotalFrames;
	bar.onmousedown = drags;
	bar.onmouseup = stopdrags;
	document.onmousemove = move;
	jindu();
}

function jindu(){
  frameMunber=document.getElementById("movie1").CurrentFrame();//当前帧数
  frameMunber++;
  y = 570*(frameMunber / movie1.TotalFrames);//进度条位置
  element.style.pixelLeft=y+15;
  document.getElementById("jindu").innerText=frameMunber+"/"+frametotal;//显示播放帧数
  if(frameMunber==frametotal)
    {
      fnPlayClip();
    }
  timerID = setTimeout("jindu()",83)
  }
  
  function Jump(fnume)
   {
	//alert(fnume);
	if(fnume > frametotal)
	{
		fnume = frametotal;
	}
	
	if(movie1.IsPlaying())
	{
		movie1.StopPlay();
		movie1.GotoFrame(fnume);
//		Play();
	}
	else
	{
		movie1.GotoFrame(fnume);
//		Play();

	}

}
//
 function Rewind(){
  movie1.GotoFrame(0);
  }
  //
 function GoToEnd()
 {
   movie1.GotoFrame(frametotal);
 }
 //
 function Play(){
   movie1.Play();
   }
   
 function Stop(){
   movie1.StopPlay();
   }
   
 function Pause(){
    movie1.StopPlay();
   }
   
 function Back(){
  movie1.GotoFrame(frameMunber-10);
  movie1.Play();
  }
  
 function Forward(){
  //movie1.StopPlay();
  //Synchronization();
  //alert(frameMunber);
  var mun=(frametotal/600)*60
  document.getElementById("movie1").GotoFrame(frameMunber+mun);
  document.getElementById("movie1").Play();

  }
 
function Replay(){
  movie1.GotoFrame(0);
  movie1.Play();
  }
  
function Go(){
 movie1.GotoFrame(goframe.value);
 movie1.Play();
 }
 
 function SizeW()
{
	movie1.width = "100%";
	movie1.height ="100%";
	movie1.x = 0;
	movie1.y = 0;

}

function SizeP()
{
	movie1.width = movie1.GetVariable("_root._width");
	movie1.height = movie1.GetVariable("_root._height");
	movie1.x = 0;
	movie1.y = 0;

}

</SCRIPT> 
<script language="jscript">
function fnPlayClip(){
	location.reload();
 }
</script>



	</HEAD>

<body scroll="no" onload="init()">
<table border="0"  style="border:0px solid #333333; WIDTH: 666px; " 
     id="table1" height="490"  cellspacing="0" cellpadding="0">
	<tr>　
	<td id="playWin" height="433"  width="665px" align="center" colspan="2" valign="top">
<script language="JScript">
try{
	var sNodeValue=0;
	var cLi=opener.document.getElementsByTagName("LI");
	var intLi=cLi.length;
	var intTarget;

	for(var i=0;i<intLi;i++){
	if(cLi[i].childNodes[1].style.color==opener.sColorClicked){
		intTarget=i;
		break;
		}
		}

	if(intTarget<intLi-1){
		var bIsHave=false;
		for(var j=intTarget+1;j<intLi;j++){
			if(opener.parent.parent.sStringOfPlayFileNames.indexOf(cLi[j].childNodes[1].attributes.getNamedItem("sCh").nodeValue+".rpm")>=0){
				if(j==0){
					cLi[j].childNodes[1].click();
				}
				else{
					cLi[j].childNodes[1].click();
					var oTemp=cLi[j];
					while(oTemp.parentNode.parentNode.nodeName!="DIV"){
						var cChildNodesTemp=oTemp.parentNode.childNodes;				
						for(intR=0;intR<cChildNodesTemp.length;intR++){
							if(cChildNodesTemp[intR].nodeName=="LI"){
								cChildNodesTemp[intR].style.display="list-item";
								if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
									cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																										}
																	}
																		}
						oTemp=oTemp.parentNode;
		
																		}
						
					if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.childNodes[1].style.color!=window.sColorClicked){
					oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																}																												
					cLi[j].scrollIntoView(true);
				}
				cLi[j].childNodes[1].click();
				sNodeValue=cLi[j].childNodes[1].attributes.getNamedItem("sCh").nodeValue;
				bIsHave=true;
				break;
			}
			}
		if(!bIsHave){
			var bBoolean=confirm("已播放到最后!是否从头开始播放？");
			if(bBoolean){
				for(var k=0;k<intLi;k++){
					if(opener.parent.parent.sStringOfPlayFileNames.indexOf(cLi[k].childNodes[1].attributes.getNamedItem("sCh").nodeValue+".rpm")>=0){
						if(k==0){
							cLi[k].childNodes[1].click();
						}
						else{
							cLi[k].childNodes[1].click();
							var oTemp=cLi[k];
							while(oTemp.parentNode.parentNode.nodeName!="DIV"){
								var cChildNodesTemp=oTemp.parentNode.childNodes;				
								for(intR=0;intR<cChildNodesTemp.length;intR++){
									if(cChildNodesTemp[intR].nodeName=="LI"){
										cChildNodesTemp[intR].style.display="list-item";
										if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
											cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																												}
																			}
																				}
								oTemp=oTemp.parentNode;
				
																				}
								
							if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.childNodes[1].style.color!=window.sColorClicked){
							oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																		}																												
							cLi[k].scrollIntoView(true);
						}
						cLi[k].childNodes[1].click();
						sNodeValue=cLi[k].childNodes[1].attributes.getNamedItem("sCh").nodeValue;
						break;
					}
				}
			}
			else{
				sNodeValue="";
			}
		}
		}
	else {
		var bBoolean=confirm("已播放到最后!是否从头开始播放？");
		if(bBoolean){
			for(var k=0;k<intLi;k++){
				if(opener.parent.parent.sStringOfPlayFileNames.indexOf(cLi[k].childNodes[1].attributes.getNamedItem("sCh").nodeValue+".rpm")>=0){
					if(k==0){
						cLi[k].childNodes[1].click();
					}
					else{
						cLi[k].childNodes[1].click();
						var oTemp=cLi[k];
						while(oTemp.parentNode.parentNode.nodeName!="DIV"){
							var cChildNodesTemp=oTemp.parentNode.childNodes;				
							for(intR=0;intR<cChildNodesTemp.length;intR++){
								if(cChildNodesTemp[intR].nodeName=="LI"){
									cChildNodesTemp[intR].style.display="list-item";
									if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
										cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																											}
																		}
																			}
							oTemp=oTemp.parentNode;
			
																			}
							
						if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.childNodes[1].style.color!=window.sColorClicked){
						oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																	}																												
						cLi[k].scrollIntoView(true);
					}
					cLi[k].childNodes[1].click();
					sNodeValue=cLi[k].childNodes[1].attributes.getNamedItem("sCh").nodeValue;
					break;
				}
			}
		}
		else{
			sNodeValue="";
			close();
		}
	}
if(sNodeValue==""){
	close();
}
else{
   /*
	var aTemp=new Array();
	aTemp=sNodeValue.split(".");
	var iLength=aTemp.length;
	var sNodeValueNow="";
	for(var i=0;i<iLength;i++){
		sNodeValueNow=sNodeValueNow+aTemp[i]+"_";
	}
	var sNodeValueTransformedDot=sNodeValueNow.substring(0,sNodeValueNow.length-1);
	
	//var sReplacedDot="\\";
	//var oRegExpDot=new RegExp(sReplacedDot,"g");
	//var sNodeValueTransformedDot=sNodeValue.replace(oRegExpDot,'_');
	var sReplacedSpace=' ';
	var oRegExpSpace=new RegExp(sReplacedSpace,"g");
	var sNodeValueTransformedSpace=sNodeValueTransformedDot.replace(oRegExpSpace,'%20');
	*/
	var sPlayFileName="../../lessons/content_"+opener.parent.parent.sWebCourse+"/play/"+sNodeValue+".swf";
	
	 document.write("<object classid='clsid:D27CDB6E-AE6D-11CF-96B8-444553540000' id='movie1' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0' border='0' width='100%' height='100%'>");
     document.write("<param name='movie' value='"+sPlayFileName+"'>");
     document.write("<PARAM NAME='loop' VALUE='false'>");
	 document.write("<param name='quality' value='High'>");
	 document.write("<embed src='"+sPlayFileName+"' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' name='movie1' width='160' height='160'></object>");}
}

catch(e){
	open("closePlayWindow.asp","_self");
}
</script>
</td>
	</tr>
	<tr>
		<td w bgcolor="#EBEBEB" onmousedown="//Jump(frametotal * event.offsetX / 601)" align="center" width="606">
		
		<table border="0" width="598" style="font-size:2px;left:10px;" id="table2" height="8">
			<tr>
				<td bgcolor="#FFFFFF" style="font-size:2px;left:10px;height:10px;" onmousedown="//Jump(frametotal * event.offsetX / 580)">
				<div id="bar" onmousedown="Jump(frametotal * event.offsetX / 601)"  style="left:10px;WIDTH: 591px; height:100%"><img src="image/posbar.gif" style="cursor:hand;position: absolute;border:0 none;"id="element" width="29" height="10"></div></td>
			</tr>
		</table>
		</td>
		<td bgcolor="#EBEBEB" onmousedown="//Jump(frametotal * event.offsetX / 601)" align="center" width="60"><div id="jindu">0/0</div></td>
	</tr>
	<tr>
	<td bgcolor="#EBEBEB" height="31" colspan="2" >
	  <SPAN id=ctlButtons><NOBR>
	  <IMG title=跳至第一帧 style="CURSOR: hand" onclick=Rewind(); src="image/dd1.gif" hoverSrc="Images/hh1.gif"> 
      <IMG title=快退 style="CURSOR: hand" onclick=Back(); src="image/dd2.gif" hoverSrc="Images/hh2.gif"> 
	  <IMG title=播放 style="CURSOR: hand" onclick=Play(); src="image/dd3.gif"  hoverSrc="Images/hh3.gif"> 
	  <IMG title=暂停 style="CURSOR: hand"  onclick="Pause();" src="image/dd4.gif" hoverSrc="Images/hh4.gif"> 
	  <IMG title=停止  style="CURSOR: hand" onclick=Stop(); src="image/dd5.gif"  hoverSrc="Images/hh5.gif"> 
	  <IMG title=快进 style="CURSOR: hand" onclick=Forward(); src="image/dd6.gif" hoverSrc="Images/hh6.gif"> 
      <IMG title=跳至最末帧 style="CURSOR: hand" onclick=GoToEnd(); src="image/dd7.gif" hoverSrc="Images/hh7.gif">&nbsp;&nbsp;&nbsp; 
      	&nbsp;
	  <IMG title=重放  style="CURSOR: hand" onclick=Replay(); src="image/dd8.gif"  hoverSrc="Images/hh8.gif"> 
	  <IMG title=转到 style="CURSOR: hand"  onclick="Go();" src="image/go0.gif" hoverSrc="Images/go.gif"></NOBR><input id="goframe" type="text" value="1" name="T1" size="8"> 
      </SPAN>
		</td>
	</tr>
	</table>
</body>
</html>
