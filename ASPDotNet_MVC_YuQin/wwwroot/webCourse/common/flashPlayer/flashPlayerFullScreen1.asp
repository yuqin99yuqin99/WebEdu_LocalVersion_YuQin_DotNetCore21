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
 var cLiNow=parent.opener.document.getElementsByTagName("LI");
 var intLi=cLiNow.length;
 var intTarget=-1;

 for(var i=0;i<intLi;i++)
   {
    if( cLiNow[i].getElementsByTagName("SPAN").item(1).style.color==parent.opener.sColorClicked )
     {
	   intTarget = i;
	   break;
	 }
    }
  var sNodeValue="";
  var sPlayFileName="";
 if(cLiNow[intTarget].getElementsByTagName("A").item(0).attributes.getNamedItem("sFId").nodeValue==""){
	  sNodeValue = cLiNow[intTarget].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue;
	  sPlayFileName = "../../lessons/content"+"/play/"+sNodeValue+"/"+sNodeValue+".swf";//取得flash播放文件
  }
  else{
	  sNodeValue = cLiNow[intTarget].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue;
	  sPlayFileName = "../../lessons/content"+"/play_foreign/"+sNodeValue+"/"+sNodeValue+".swf";//取得flash播放文件
  }
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
		if(y > 591)
		{
			y = 591;
		}
		z.style.pixelLeft = y;
		//		if(window.top.List.isPlaying == true)
	   // alert(y);
		movie1.GoToFrame(y/591*(frametotal));
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
   if(!document.all)
	{
		return
	}

	if (event.srcElement.className == "drag")
	{
		movie1.StopPlay();

		dragapproved = true
		z = event.srcElement
		temp1 = z.style.pixelLeft
		x = event.clientX
		document.onmousemove = move
	}

}

function init()
{	
   
	
	frametotal=movie1.TotalFrames;
	bar.onmousedown = drags;
	bar.onmouseup = stopdrags;
	document.onmousemove = move;
    //alert(table1.width); 
	jindu();
}

function jindu(){
  frameMunber=document.getElementById("movie1").CurrentFrame();//当前帧数
  frameMunber++;
  y = 591*(frameMunber / movie1.TotalFrames);//进度条位置
  element.style.pixelLeft=y;
  document.getElementById("jindu").innerText="动画:"+frameMunber+"/"+frametotal;//显示播放帧数
  
  if (frameMunber>=frametotal)
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
  var mun=(frametotal/591)*60
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
	//open("flashPlayerReplayFullScreen.asp","playWindow",false);
	open("flashPlayerReplayFullScreen.asp","_self",false);

}
</script>

</head>
 <body  onload="init()">
 <table border="0" width="100%" id="table3" cellspacing="0" cellpadding="0" height="100%">
	<tr>
		<td align="center">
   <table border="0" style="border:0px solid #333333;padding:0;Border:0;Margin:0;" id="table1" height="500" WIDTH= "630" cellspacing="0" cellpadding="0">
	<tr style="padding:0;Border:0;Margin:0;">　
	<td id="playWin" height="470" style="padding:0;Border:0;Margin:0;"  width="620" align="center" colspan="2" valign="top">
	<!--<object classid='clsid:D27CDB6E-AE6D-11CF-96B8-444553540000' id='movie1' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0' border='0' width='100%' height='470'></object>-->
	<script language="jscript">
	 //alert(sPlayFileName);
	 //输出一个flash控件
	try{
     document.write("<object classid='clsid:D27CDB6E-AE6D-11CF-96B8-444553540000' id='movie1' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0' border='0' width='100%' height='470'>");
     document.write("<param name='movie' value='"+sPlayFileName+"'>");
     document.write("<PARAM NAME='loop' VALUE='false'>");
	 document.write("<param name='quality' value='High'>");
	 document.write("<embed src='"+sPlayFileName+"' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' name='movie1' width='160' height='160'></object>");
	  }
	 catch(e){
	  fnPlayClip();
       }
    </script>
    	
      </td>
	</tr>
	<tr  height="15">
	   <td  bgcolor="#EBEBEB" onmousedown="//Jump(frametotal * event.offsetX / 601)" align="center"  colspan="2">
		
		<table border="0"  style="font-size:2px;left:10px;" id="table2" width="100%" height="8">
			<tr>
				<td bgcolor="#FFFFFF" style="font-size:2px;left:10px;height:10px;" onmousedown="Jump(frametotal * (event.offsetX-29) / 591)">
				<div id="bar"  style="left:10px; height:9px; width:620px">
				<img src="image/posbar.gif" style="cursor:hand;border:0 none;"  class="drag" id="element" width="29" height="10">
				</div></td>
			</tr>
		</table>
		</td>
	</tr>
	<tr height="15">
	<td bgcolor="#EBEBEB" width="590" height="15">
	  <SPAN id=ctlButtons><NOBR>&nbsp;&nbsp;
	  <IMG title="跳至第一帧" style="CURSOR: hand" onclick=Rewind(); src="image/dd1.gif" hoverSrc="Images/hh1.gif" width="15" height="15"> 
      <IMG title=快退 style="CURSOR: hand" onclick=Back(); src="image/dd2.gif" hoverSrc="Images/hh2.gif" width="15" height="15"> 
	  <IMG title=播放 style="CURSOR: hand" onclick=Play(); src="image/dd3.gif"  hoverSrc="Images/hh3.gif" width="15" height="15"> 
	  <IMG title=暂停 style="CURSOR: hand"  onclick="Pause();" src="image/dd4.gif" hoverSrc="Images/hh4.gif" width="15" height="15"> 
	  <IMG title=停止  style="CURSOR: hand" onclick=Stop(); src="image/dd5.gif"  hoverSrc="Images/hh5.gif" width="15" height="15"> 
	  <IMG title=快进 style="CURSOR: hand" onclick=Forward(); src="image/dd6.gif" hoverSrc="Images/hh6.gif" width="15" height="15"> 
      <IMG title=跳至最末帧 style="CURSOR: hand" onclick=GoToEnd(); src="image/dd7.gif" hoverSrc="Images/hh7.gif" width="15" height="15">&nbsp;&nbsp;&nbsp; 
      	&nbsp;
	  <IMG title=重放  style="CURSOR: hand" onclick=Replay(); src="image/dd8.gif"  hoverSrc="Images/hh8.gif" width="15" height="15"> 
	  <IMG title=转到 style="CURSOR: hand"  onclick="Go();" src="image/go0.gif" hoverSrc="Images/go.gif" width="15" height="15"></NOBR><input id="goframe" type="text" value="1" name="T1" size="3"> 
      </SPAN>
		</td><td bgcolor="#EBEBEB" height="15" width="91" align="left" >
	<div id="jindu" style="width: 86px; height: 15px">动画:0/0</div></td>
	</tr>
	</table>
　</td>
	</tr>
</table>
</body>
</html>
