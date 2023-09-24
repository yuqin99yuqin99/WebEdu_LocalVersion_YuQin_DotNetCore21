<html>

<head>
<xml:namespace prefix="IE" /><IE:download id="sDownLoad" style="behavior:url(#default#download)" />
<meta http-equiv="Content-Language" content="zh-cn">
<META HTTP-EQUIV="Expires" CONTENT="0">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<link rel="styleSheet" href="../options/title.css" type="text/css">
<script language="JScript.encode" src="script/title.js"></script>
<script language="JScript.encode" src="../options/authorInfo.js"></script>
<bgsound id="idBackgroundSound" src="" loop="-1" volume="-1500">
<base target="_blank">
<script>
function fnAuthorInfo(){ document.write("白鹭信息技术有限公司<BR>blxxjsyxgs@hotmail.com<BR>");}
</script>

<title>Web远程教学技术</title>

</head>

<body style="height:100;padding:0;margin:0" onload="fnOnload();">

<div style="position: absolute; width: 100%; height: 100px; z-index: 2; left: 0px; top: 0px">
  <center>
  <table id="tableTitle" width="100%"  height="100%"   >
  	<tr>
  		<td id="sIdTitle" style="cursor:height:100;width:0px;padding:0;margin:0;border:0 none; " unselectable="on" title="关于该学习资源" height="100" ></td>
  		<td width="50"></td>
  		<td style="width:72%;height:100;padding:0;margin:0;border:0 none" unselectable="on">
  		<table style="width:100%;heigth:100; border-collapse:collapse" bordercolor="#111111" cellpadding="0" cellspacing="0">
          <tr>
            <td  colspan="11" style="width:100%;height:50"></td>
          </tr>
          <tr>
            <td style="padding:0;height:25;width:177px;" rowspan="2">
            <marquee id="sMarqueeLogo" direction="up" height="25" scrolldelay="500" style="font-weight:bold;text-align:center;font-size:13;color:rgb(0,255,0);">
            <script>fnAuthorInfo();</script></marquee>
            
             <!--复读播放-->
            <font color="#CFE8F5"><a href="" id="btnPlay" disabled=true onclick="event.returnValue=false;SoundPlay();">播放</a>&nbsp;&nbsp; 速度调整:
		    <span style="width: 110; background:url('slider_rail.gif'); height: 7;">
				<span id="hor" class="sliderHandle" type="x" value=41
				onchange="setRate()"
				style="width: 10; height: 100%;
				background: buttonface; border: 1 solid buttonshadow; font-size: 7px;"
				onmouseover="this.style.borderColor='blue'"
				onmouseout="this.style.borderColor='buttonshadow'">
				</span>
			</span>　<br>
            <a  disabled="true" id="btnFudu" onclick="event.returnValue=false;Rereading();" href="">复读</a>&nbsp;&nbsp; 
            
            <a disabled="true" id="btnGendu" onclick="event.returnValue=false;Gendu()" href="">跟读</a>&nbsp;&nbsp;<a disabled="true" id="btnDuibi" onclick="event.returnValue=false;Duibi()" href="javascript:void(0)">对比</a> 
			
<!--提示下载复读控件-->
<script language="javascript">
    function fnDetectActiveXControl(sControlName)
    {
        var oControl;
        try
        {
            oControl = new ActiveXObject(sControlName);
            if (oControl == null)
                return false;
            else return true;
        }
        catch (e)
        {
            return false;
        }
    }
    if (!fnDetectActiveXControl("webEdu.Recorder"))
    {
        document.write("&nbsp;&nbsp;<a href='../../plugIns/setup_webEduSystem_local.exe'><font color=red>下载安装复读控件</font></a>")
    }
</script>
<span id="t"></span>
<!--复读播放结束-->
            </td>
            <td width="81" height="31">
            <a href="" id="sDefaultZoom" onclick="fnDefaultZoom();" title="单击将放缩恢复到默认状态"  unselectable="on">默认放缩</a><br/>
            <a href="" id="sDefaultWidth" onclick="fnDefaultScreen();" title="单击将目录恢复到默认宽度,拖曳目录和内容之间的边界可自由调整目录和内容的宽度!">默认宽度</a>
            </td>
       <td width="72" height="31">
            <img border="1" src="image/vertical.gif" width="24" height="19" id="sScrollIcon" onclick="fnChangeIcon();" title="单击将在鼠标中键滚动方式之间切换,也可直接使用快捷键:Alt+鼠标滚动将上下移动视图!Shift+鼠标滚动将左右平移视图!Ctrl+鼠标滚动将放缩视图!">
			</td>
            <td width="72" height="31"><a href="" id="idEnlargeVolume" onclick="fnEnlargeVolume();" title="如果还没有打开默认的背景音乐,单击将打开背景音乐,注意音乐的打开根据网速的情况可能会有一定的延迟!如果已经打开了默认的背景音乐,单击将逐渐增加背景音乐的音量，双击将音量增到最大" ondblclick="fnLoudestSound();" unselectable="on">
			音量增</a><br>
			<a href="" id="idReduceVolume" onclick="fnReduceVolume();" title="单击逐渐减弱背景音乐的音量，双击将音量减到最弱" ondblclick="fnWeakestSound();" unselectable="on">音量降</a></td>
            <td width="72" height="31">
			<a href="" id="next" title="单击按照目录逐次向下演示" onclick="fnNext();" unselectable="on">下翻</a><br/>
			<a href="" id="previous" title="单击按照目录逐次向上演示" onclick="fnPre();" unselectable="on">上翻</a>
			</td>
            <td width="72" height="31">
            <a href="" id="sContentsEditable" onclick="fnToggleEditContents();" title="单击将切换目录框架是否可编辑，右击菜单提供编辑功能">编辑目录</a><br/>
			<a href="" id="sContentEditable" onclick="fnToggleEditContent();" title="单击将切换内容框架是否可编辑，直接键盘操作和快捷键（如Ctrl+C；Ctrl+V；Ctrl+X等）提供编辑功能">编辑课文</a>
			</td>
              <td width="72" height="31"><a href="" id="sForword" onclick="fnForword();" title="单击将按历史记录往前翻页">前进</a><br/><a href="" id="sBackword" onclick="fnBackword();" title="单击将按历史记录往前翻页">后退</a></td>
		<td width="66" height="31">
			<a href="" id="sIdToggleAutoNumber" title="当前条目是否显示自动编号" onclick="window.event.returnValue=false;parent.frames('sIframeContents').fnToggleContentsAutoNumber();" unselectable="on">有编号</a></br>
			<a href="" id="sIdLanguage" title="提示当前条目是国语还是外语" onclick="window.event.returnValue=false;parent.frames('sIframeContents').fnToggleLanguageTitle();" unselectable="on">国语</a>
			</td>
            <td width="82" height="31">
            <a href="" id="sNetmeeting" onclick='event.returnValue=false;var iWidth=640;var iHeight=580;window.open("communication.aspx","communication","fullscreen=no,"+"left="+(window.screen.width-iWidth)/2+",top="+(window.screen.height-iHeight)/2+",width="+iWidth+",height="+iHeight+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=yes,status=no,resizable=yes,copyhistory=no",false);' title="单击将可打开Netmeeting通过网络与他人进行通信、使用白板书写等">通信与白板</a><br/>
            <a href="http://www.blxxjs.com" id="sGoServer" target="_blank" title="单击将转向该网络课程的网站版">网站版</a></td>
            <td width="71" height="31"><a href="" id="help" onclick="event.returnValue=false;showModalDialog('help/help.htm',window,'help:0;resizable:1;dialogWidth:450px;dialogHeight:230px;status:0');" title="单击将打开关于该系统使用的帮助文档">帮助</a><br>
            <a href="" onclick="event.returnValue=false;showModalDialog('registersoft.aspx',window,'help:0;resizable:1;dialogWidth:450px;dialogHeight:230px;status:0');" title="注册成为正版软件">注册</a></td>
            <td width="73" height="31"><label id="studyTime" style="color:rgb(0,130,0);">0</label></td>
          </tr>
          <tr>
            <td width="100%" height="19" colspan="10">
             <table border="0" width="100%" id="table1" cellspacing="0" cellpadding="0">
				<tr>
					<td width="81"><a href="" onclick="event.returnValue=false;parent.frames.item('sIframecontents').fnViewTeachingPlan();"><font color="#800000">查看教案 </font></a></td>
					<td>  
            <a href="" onclick="event.returnValue=false;parent.frames.item('sIframecontents').fnViewAnimation();"><font color="#800000">查看动画</font></a></td>
					<td> 
			<a href="" onclick="event.returnValue=false;parent.frames.item('sIframecontents').fnViewAnimationAll();"><font color="#800000">查看所有动画</font></a></td>
					<td>&nbsp;<a href="" onclick="event.returnValue=false;alert('光盘版或网站版才提供单元测验的功能！');"><font color="#800000">在线测试</font></a></td>
					<td>&nbsp;<a href="" onclick="event.returnValue=false;alert('网站版才有作业提交的功能！');"><font color="#800000">作业上传</font></a></td>
					<td>&nbsp;<a href="" onclick="event.returnValue=false;alert('网站版才有我要提问的功能！');"><font color="#800000">我要提问</font></a></td>
					<td> 
			<a href="" onclick="event.returnValue=false;parent.frames.item('sIframecontents').fnSearch();"><font color="#800000">搜索</font></a></td>
					<td>
					<a href="" onclick="event.returnValue=false;parent.frames.item('sIframecontents').fnSearch();">
					<font color="#800000">&nbsp;</font></a>更多功能在右键菜单
            　</td>
				</tr>
				</table>
			</td>
          </tr>
          </table>
        </td>
  	</tr>
    </table>
  </center>
</div>
<div style="display:none"><script></script></div>
<div style="position: absolute; width: 100%; height: 100px; z-index: 1; left: 0px; top: 0px" id="layer1">
<img id="titlebackground" src=../options/background_title.gif width="100%" height="100">

<object classid="clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6" id="WinPlayer" width="245" height="52">
	<param name="rate" value="1">
	<param name="volume" value="100">
	<param name="enableErrorDialogs" value="0">
</object>
<object style="display:none" classid="clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6" id="ReWinPlayer" width="245" height="52">
	<param name="rate" value="1">
	<param name="volume" value="100">
	<param name="enableErrorDialogs" value="0">
</object>
<object  classid="clsid:766F9B9E-4871-4FEA-867B-C1157BDB2CEB" id="Recorder1" width="595" height="26">
</object>
<script language = "javascript" >
var readPosition;
var lastPosition = 0;
var genduStart = 0;
var getduEnd = 0;

var RereadingTimer = null;
// 复读时钟
var GenduTimer = null;
// 跟读时钟
var DuibiStartTimer = null;
// 对比时钟
var DuibiEndTimer = null;
// 对比时钟

var IsRecording=false;
var SoundUrl="";
var SoundID=0;
window.PlayState = "";

// 段落播放

// 播放
function SoundPlay(soundfilename)
{

    if(soundfilename != null)
    {
        btnPlay.disabled = false;
        // 播放段落语音
    }
    if(btnPlay.disabled == true)
    {
        alert("该课文没有课文语音!");
        return;
    }

    if(btnPlay.innerHTML == "播放" && soundfilename == null)
    {

        if(soundfilename != null)
        {
            SoundUrl = "../lessons/content_" + parent.parent.sWebCourse + "/book/" + getTextID() + "/" + soundfilename;
        }
        else
        {
            SoundUrl = "../lessons/content_" + parent.parent.sWebCourse + "/book/" + getTextID() + "/" + getTextID() + ".mp3";
        }
        // alert(SoundUrl);
        WinPlayer.URL = SoundUrl;
        WinPlayer.controls.Play();

        btnPlay.innerHTML = "停止"
        btnGendu.disabled = false;
        btnFudu.disabled = false;
        btnDuibi.disabled = false;

    }
    else if(btnPlay.innerHTML == "停止" && soundfilename == null) // 播放段落语音
    {
        WinPlayer.controls.stop();
        btnPlay.innerHTML = "播放"
        btnGendu.disabled = true;
        btnFudu.disabled = true;
        btnDuibi.disabled = true;
    }
    else if(soundfilename != null && btnPlay.innerHTML != "继续播放")
    {
        if(soundfilename != null)
        {
            SoundUrl = "../lessons/content_" + parent.parent.sWebCourse + "/book/" + getTextID() + "/" + soundfilename;
        }
        else
        {
            SoundUrl = "../lessons/content_" + parent.parent.sWebCourse + "/book/" + getTextID() + "/" + getTextID() + ".mp3";
        }
        // alert(SoundUrl);
        WinPlayer.URL = SoundUrl;
        WinPlayer.controls.Play();

        btnPlay.innerHTML = "停止"
        btnGendu.disabled = false;
        btnFudu.disabled = false;
        btnDuibi.disabled = false;
    }
    else if(btnPlay.innerHTML == "继续播放")
    {
       
		 
        if(btnFudu.innerHTML=="结束复读")
        {
        	btnFudu.click();
        }
        if(btnGendu.innerHTML=="结束跟读")
        {
        	btnGendu.click();
        }
        if(btnDuibi.innerHTML=="结束对比")
        {
        	btnDuibi.click();
        }
        
		WinPlayer.controls.currentPosition = readPosition
        lastPosition = readPosition;
        WinPlayer.controls.Play();
       

        btnPlay.innerHTML = "停止"
        btnGendu.disabled = false;
        btnFudu.disabled = false;
        btnDuibi.disabled = false;
    }
}
// 获取语音文件
function getTextID()
{
    var sUrl = parent.frames("sIframeContent").document.location.href;
    var textid=sUrl.substring(sUrl.lastIndexOf("/")+1,sUrl.lastIndexOf(".")); 
    
    return textid;

}
// 复读
function Rereading()
{
    if( ! fnDetectActiveXControl("webEdu.Recorder"))
    {
        alert("需安装复读控件才能使用复读功能,请您下载安装.");
        return;
    }
   if(event.srcElement.disabled==true)
    {
        alert("请先播放语音");
        return;
    }
    if(btnGendu.innerHTML=="结束跟读")
    {
        alert("请先结束跟读");
        return;
    }
    if(btnDuibi.innerHTML=="结束对比")
    {
        alert("请先结束对比");
        return ;
    }

   if(event.srcElement.innerHTML == "复读")
   {
      readPosition = WinPlayer.controls.currentPosition;
      WinPlayer.controls.currentPosition = lastPosition
      WinPlayer.controls.Play();

      // 开始监测时间
      RereadingTimer = setTimeout("DoingRereading()", 500)
      event.srcElement.innerHTML = "结束复读";
       btnPlay.innerHTML="继续播放";
   }
   else
   {
//      WinPlayer.controls.currentPosition = readPosition
//      lastPosition = readPosition;
       
      clearTimeout(RereadingTimer);
      event.srcElement.innerHTML = "复读";
      WinPlayer.controls.pause();
   }
}
// 进行复读并监测复读
function DoingRereading()
{
   if(WinPlayer.controls.currentPosition >= readPosition)
   {
      WinPlayer.controls.currentPosition = lastPosition;
   }
   RereadingTimer = setTimeout("DoingRereading()", 500);
}
// 跟读
function Gendu()
{

    if(event.srcElement.disabled == true)
    {
        alert("请先播放语音");
        return;
    }
    if(btnDuibi.innerHTML == "结束对比")
    {
        alert("请先结束对比");
        return ;
    }
    if(btnFudu.innerHTML == "结束复读")
    {
        alert("请先结束复读");
        return ;
    }
    if(event.srcElement.innerHTML == "跟读")
    {
        t.innerHTML = "现在是回放跟读的语段...";
        IsRecording = false;
        // 先跳回复读前的位置
        readPosition = WinPlayer.controls.currentPosition;
        WinPlayer.controls.currentPosition = lastPosition
        WinPlayer.controls.Play();

        genduStart = lastPosition;
        getduEnd = readPosition;

        event.srcElement.innerHTML = "结束跟读";
        btnPlay.innerHTML = "继续播放";
        GenduTimer = setTimeout("GenduStartRecord()", 500);
    }
    else
    {
        event.srcElement.innerHTML = "跟读";

        if(IsRecording == true)
        {
            Recorder1.cmdDo_Click();
        }
        t.innerHTML = "";
        clearTimeout(GenduTimer);
        
        //      WinPlayer.controls.currentPosition = readPosition;
        //      lastPosition = readPosition;
        //      WinPlayer.controls.Play();
        WinPlayer.controls.pause();
    }
}
// 当读到结束时, 开始录音
function GenduStartRecord()
{
   if(WinPlayer.controls.currentPosition >= readPosition)
   {
      clearTimeout(GenduTimer);
      WinPlayer.controls.pause();

      t.innerHTML = "现在是录音,请跟读刚才的语段...";
      // 当读到结束时, 开始录音
      Recorder1.cmdDo_Click();
      IsRecording = true;
      return;
   }
   else
   {
      GenduTimer = setTimeout("GenduStartRecord()", 500);
   }
}
// 结束跟读
function GenduEndRecord()
{

}
// 对比
function Duibi()
{
   if(event.srcElement.disabled == true)
   {
      alert("请先播放语音");
      return;
   }
   if(btnGendu.innerHTML == "结束跟读")
   {
      alert("请先结束跟读");
      return;
   }

   if(btnFudu.innerHTML == "结束复读")
   {
      alert("请先结束复读");
      return ;
   }

   if(event.srcElement.innerHTML == "对比")
   {
      ReWinPlayer.controls.stop();
      // 读原文
      WinPlayer.controls.currentPosition = genduStart;
      WinPlayer.controls.Play();
      DuibiSatrtTimer = setTimeout("StartReadRecord()", 500)
      event.srcElement.innerHTML = "结束对比"
      btnPlay.innerHTML="继续播放";
   }
   else
   {
      clearTimeout(DuibiSatrtTimer);
      event.srcElement.innerHTML = "对比"
        
//      WinPlayer.controls.currentPosition = readPosition;
//      WinPlayer.controls.Play();
      WinPlayer.controls.pause();
      ReWinPlayer.URL = "";
      ReWinPlayer.controls.stop();
   }
}
// 程序重复对比
function ReDuibi()
{
    ReWinPlayer.controls.stop();
      // 读原文
    WinPlayer.controls.currentPosition = genduStart;
    WinPlayer.controls.Play();
    DuibiSatrtTimer = setTimeout("StartReadRecord()", 500)
}
// 监测对比原文是否读完
function StartReadRecord()
{
   if(WinPlayer.controls.currentPosition >= getduEnd)
   {

      WinPlayer.controls.pause();
      ReWinPlayer.URL = "C:\\bl_temp\\recording.wav";
      ReWinPlayer.controls.Play();

      // 开始监测是否读完
      clearTimeout(DuibiSatrtTimer);
      DuibiStartTimer = setTimeout("EndReadRecord()", 500)
   }
   else
   {
      DuibiSatrtTimer = setTimeout("StartReadRecord()", 500)
   }
}
// 录音读完
function EndReadRecord()
{
   if(t.innerHTML == "stoped")
   {
      clearTimeout(DuibiStartTimer);
      t.innerHTML = "";
      ReDuibi();
   }
   else
   {
      DuibiStartTimer = setTimeout("EndReadRecord()", 500)
   }

}
// 设置播放速度
function setRate()
{
    WinPlayer.settings.rate=(Math.round(100*hor.value)-40)*0.0125+1
}
// 调用中英文对照
function en_cn()
{
   if(event.srcElement.innerHTML == "中英对照")
   {
      parent.frames.item('sIframeContent').fnTranslateAll();
      event.srcElement.innerHTML = "全英课文";
   }
   else
   {
      parent.frames.item('sIframeContent').fnEnglishOnly();
      event.srcElement.innerHTML = "中英对照";
   }

}
// 全屏切换
var sFramesetMiddleColsTemp;
function ContentFullscreen()
{
   if(event.srcElement.innerHTML == "全屏切换")
   {
      sFramesetMiddleColsTemp = parent.document.getElementById("sFramesetMiddle").cols;
      parent.document.getElementById("sFramesetMiddle").cols = "0,*";
      event.srcElement.innerHTML = "退出全屏";
   }
   else
   {
      parent.document.getElementById("sFramesetMiddle").cols = sFramesetMiddleColsTemp;
      event.srcElement.innerHTML = "全屏切换";
   }

}

// 下载Mp3
function DownMp3(CanDown)
{
    if(CanDown==true)
    {
        parent.frames.item('sIframeContent').DownLoadmp3(getTextID()+".mp3");
    }
    else
    {
        alert("该课文的mp3已经禁止了下载！");
    }
}
// 下载课文
function DownText(CanDown)
{
    if(CanDown==true)
    {
        parent.frames.item('sIframeContent').DownLoadText();
    }
     else
    {
        alert("该课文已经禁止了下载！");
    }
}

// 隐藏显示课文
function hideText()
{
    if(event.srcElement.innerHTML == "隐藏文本")
    {
        parent.frames.item('sIframeContent').hideText();
        event.srcElement.innerHTML = "显示文本"
    }
    else
    {
        parent.frames.item('sIframeContent').showText();
        event.srcElement.innerHTML = "隐藏文本"
    }
}

// 语料库检索
function LanguageRetrieval()
{
	var words=parent.frames.item('sIframeContent').document.selection.createRange().text;
	if(words=="")
	{
		alert("请先选定课文中的单词!");
	
	}
	else
	{
		//showModelessDialog("LanguageRetrieval/searching.htm?words="+words);
		var win=window.open("LanguageRetrieval/searching.htm?words="+words,"dictionary","scrollbars=yes,width=640,height=600,top="+((screen.height-640)/2-50)+",left="+(screen.width-500)/2);
		win.focus();
	}


}
function dictionary()
{
	var words=parent.frames.item('sIframeContent').document.selection.createRange().text;
	if(words=="")
	{
		alert("请先拖选定单词!");
	
	}
	else
	{
		var iWidth=300;
  		var iHeight=250;
		var win=window.open("../../branches/lessons/content_学习档案/NewWords/WordExplain.aspx?word="+words,"win1","width=400,height=350,top="+(screen.height-iHeight-100)/2+",left="+(screen.width-iWidth)/2);
		win.focus();
	}
}
</script>

<script language = "javascript" for = "ReWinPlayer" event = "playStateChange(NewState)" >
// 播放状态
if(NewState == 8)
{
   t.innerHTML = "stoped";
}

</script>
</body>

</html>