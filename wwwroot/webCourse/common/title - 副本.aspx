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
function fnAuthorInfo(){ document.write("������Ϣ�������޹�˾<BR>blxxjsyxgs@hotmail.com<BR>");}
</script>

<title>WebԶ�̽�ѧ����</title>

</head>

<body style="height:100;padding:0;margin:0" onload="fnOnload();">

<div style="position: absolute; width: 100%; height: 100px; z-index: 2; left: 0px; top: 0px">
  <center>
  <table id="tableTitle" width="100%"  height="100%"   >
  	<tr>
  		<td id="sIdTitle" style="cursor:height:100;width:0px;padding:0;margin:0;border:0 none; " unselectable="on" title="���ڸ�ѧϰ��Դ" height="100" ></td>
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
            
             <!--��������-->
            <font color="#CFE8F5"><a href="" id="btnPlay" disabled=true onclick="event.returnValue=false;SoundPlay();">����</a>&nbsp;&nbsp; �ٶȵ���:
		    <span style="width: 110; background:url('slider_rail.gif'); height: 7;">
				<span id="hor" class="sliderHandle" type="x" value=41
				onchange="setRate()"
				style="width: 10; height: 100%;
				background: buttonface; border: 1 solid buttonshadow; font-size: 7px;"
				onmouseover="this.style.borderColor='blue'"
				onmouseout="this.style.borderColor='buttonshadow'">
				</span>
			</span>��<br>
            <a  disabled="true" id="btnFudu" onclick="event.returnValue=false;Rereading();" href="">����</a>&nbsp;&nbsp; 
            
            <a disabled="true" id="btnGendu" onclick="event.returnValue=false;Gendu()" href="">����</a>&nbsp;&nbsp;<a disabled="true" id="btnDuibi" onclick="event.returnValue=false;Duibi()" href="javascript:void(0)">�Ա�</a> 
			
<!--��ʾ���ظ����ؼ�-->
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
        document.write("&nbsp;&nbsp;<a href='../../plugIns/setup_webEduSystem_local.exe'><font color=red>���ذ�װ�����ؼ�</font></a>")
    }
</script>
<span id="t"></span>
<!--�������Ž���-->
            </td>
            <td width="81" height="31">
            <a href="" id="sDefaultZoom" onclick="fnDefaultZoom();" title="�����������ָ���Ĭ��״̬"  unselectable="on">Ĭ�Ϸ���</a><br/>
            <a href="" id="sDefaultWidth" onclick="fnDefaultScreen();" title="������Ŀ¼�ָ���Ĭ�Ͽ��,��ҷĿ¼������֮��ı߽�����ɵ���Ŀ¼�����ݵĿ��!">Ĭ�Ͽ��</a>
            </td>
       <td width="72" height="31">
            <img border="1" src="image/vertical.gif" width="24" height="19" id="sScrollIcon" onclick="fnChangeIcon();" title="������������м�������ʽ֮���л�,Ҳ��ֱ��ʹ�ÿ�ݼ�:Alt+�������������ƶ���ͼ!Shift+������������ƽ����ͼ!Ctrl+��������������ͼ!">
			</td>
            <td width="72" height="31"><a href="" id="idEnlargeVolume" onclick="fnEnlargeVolume();" title="�����û�д�Ĭ�ϵı�������,�������򿪱�������,ע�����ֵĴ򿪸������ٵ�������ܻ���һ�����ӳ�!����Ѿ�����Ĭ�ϵı�������,�����������ӱ������ֵ�������˫���������������" ondblclick="fnLoudestSound();" unselectable="on">
			������</a><br>
			<a href="" id="idReduceVolume" onclick="fnReduceVolume();" title="�����𽥼����������ֵ�������˫����������������" ondblclick="fnWeakestSound();" unselectable="on">������</a></td>
            <td width="72" height="31">
			<a href="" id="next" title="��������Ŀ¼���������ʾ" onclick="fnNext();" unselectable="on">�·�</a><br/>
			<a href="" id="previous" title="��������Ŀ¼���������ʾ" onclick="fnPre();" unselectable="on">�Ϸ�</a>
			</td>
            <td width="72" height="31">
            <a href="" id="sContentsEditable" onclick="fnToggleEditContents();" title="�������л�Ŀ¼����Ƿ�ɱ༭���һ��˵��ṩ�༭����">�༭Ŀ¼</a><br/>
			<a href="" id="sContentEditable" onclick="fnToggleEditContent();" title="�������л����ݿ���Ƿ�ɱ༭��ֱ�Ӽ��̲����Ϳ�ݼ�����Ctrl+C��Ctrl+V��Ctrl+X�ȣ��ṩ�༭����">�༭����</a>
			</td>
              <td width="72" height="31"><a href="" id="sForword" onclick="fnForword();" title="����������ʷ��¼��ǰ��ҳ">ǰ��</a><br/><a href="" id="sBackword" onclick="fnBackword();" title="����������ʷ��¼��ǰ��ҳ">����</a></td>
		<td width="66" height="31">
			<a href="" id="sIdToggleAutoNumber" title="��ǰ��Ŀ�Ƿ���ʾ�Զ����" onclick="window.event.returnValue=false;parent.frames('sIframeContents').fnToggleContentsAutoNumber();" unselectable="on">�б��</a></br>
			<a href="" id="sIdLanguage" title="��ʾ��ǰ��Ŀ�ǹ��ﻹ������" onclick="window.event.returnValue=false;parent.frames('sIframeContents').fnToggleLanguageTitle();" unselectable="on">����</a>
			</td>
            <td width="82" height="31">
            <a href="" id="sNetmeeting" onclick='event.returnValue=false;var iWidth=640;var iHeight=580;window.open("communication.aspx","communication","fullscreen=no,"+"left="+(window.screen.width-iWidth)/2+",top="+(window.screen.height-iHeight)/2+",width="+iWidth+",height="+iHeight+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=yes,status=no,resizable=yes,copyhistory=no",false);' title="�������ɴ�Netmeetingͨ�����������˽���ͨ�š�ʹ�ðװ���д��">ͨ����װ�</a><br/>
            <a href="http://www.blxxjs.com" id="sGoServer" target="_blank" title="������ת�������γ̵���վ��">��վ��</a></td>
            <td width="71" height="31"><a href="" id="help" onclick="event.returnValue=false;showModalDialog('help/help.htm',window,'help:0;resizable:1;dialogWidth:450px;dialogHeight:230px;status:0');" title="�������򿪹��ڸ�ϵͳʹ�õİ����ĵ�">����</a><br>
            <a href="" onclick="event.returnValue=false;showModalDialog('registersoft.aspx',window,'help:0;resizable:1;dialogWidth:450px;dialogHeight:230px;status:0');" title="ע���Ϊ�������">ע��</a></td>
            <td width="73" height="31"><label id="studyTime" style="color:rgb(0,130,0);">0</label></td>
          </tr>
          <tr>
            <td width="100%" height="19" colspan="10">
             <table border="0" width="100%" id="table1" cellspacing="0" cellpadding="0">
				<tr>
					<td width="81"><a href="" onclick="event.returnValue=false;parent.frames.item('sIframecontents').fnViewTeachingPlan();"><font color="#800000">�鿴�̰� </font></a></td>
					<td>  
            <a href="" onclick="event.returnValue=false;parent.frames.item('sIframecontents').fnViewAnimation();"><font color="#800000">�鿴����</font></a></td>
					<td> 
			<a href="" onclick="event.returnValue=false;parent.frames.item('sIframecontents').fnViewAnimationAll();"><font color="#800000">�鿴���ж���</font></a></td>
					<td>&nbsp;<a href="" onclick="event.returnValue=false;alert('���̰����վ����ṩ��Ԫ����Ĺ��ܣ�');"><font color="#800000">���߲���</font></a></td>
					<td>&nbsp;<a href="" onclick="event.returnValue=false;alert('��վ�������ҵ�ύ�Ĺ��ܣ�');"><font color="#800000">��ҵ�ϴ�</font></a></td>
					<td>&nbsp;<a href="" onclick="event.returnValue=false;alert('��վ�������Ҫ���ʵĹ��ܣ�');"><font color="#800000">��Ҫ����</font></a></td>
					<td> 
			<a href="" onclick="event.returnValue=false;parent.frames.item('sIframecontents').fnSearch();"><font color="#800000">����</font></a></td>
					<td>
					<a href="" onclick="event.returnValue=false;parent.frames.item('sIframecontents').fnSearch();">
					<font color="#800000">&nbsp;</font></a>���๦�����Ҽ��˵�
            ��</td>
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
// ����ʱ��
var GenduTimer = null;
// ����ʱ��
var DuibiStartTimer = null;
// �Ա�ʱ��
var DuibiEndTimer = null;
// �Ա�ʱ��

var IsRecording=false;
var SoundUrl="";
var SoundID=0;
window.PlayState = "";

// ���䲥��

// ����
function SoundPlay(soundfilename)
{

    if(soundfilename != null)
    {
        btnPlay.disabled = false;
        // ���Ŷ�������
    }
    if(btnPlay.disabled == true)
    {
        alert("�ÿ���û�п�������!");
        return;
    }

    if(btnPlay.innerHTML == "����" && soundfilename == null)
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

        btnPlay.innerHTML = "ֹͣ"
        btnGendu.disabled = false;
        btnFudu.disabled = false;
        btnDuibi.disabled = false;

    }
    else if(btnPlay.innerHTML == "ֹͣ" && soundfilename == null) // ���Ŷ�������
    {
        WinPlayer.controls.stop();
        btnPlay.innerHTML = "����"
        btnGendu.disabled = true;
        btnFudu.disabled = true;
        btnDuibi.disabled = true;
    }
    else if(soundfilename != null && btnPlay.innerHTML != "��������")
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

        btnPlay.innerHTML = "ֹͣ"
        btnGendu.disabled = false;
        btnFudu.disabled = false;
        btnDuibi.disabled = false;
    }
    else if(btnPlay.innerHTML == "��������")
    {
       
		 
        if(btnFudu.innerHTML=="��������")
        {
        	btnFudu.click();
        }
        if(btnGendu.innerHTML=="��������")
        {
        	btnGendu.click();
        }
        if(btnDuibi.innerHTML=="�����Ա�")
        {
        	btnDuibi.click();
        }
        
		WinPlayer.controls.currentPosition = readPosition
        lastPosition = readPosition;
        WinPlayer.controls.Play();
       

        btnPlay.innerHTML = "ֹͣ"
        btnGendu.disabled = false;
        btnFudu.disabled = false;
        btnDuibi.disabled = false;
    }
}
// ��ȡ�����ļ�
function getTextID()
{
    var sUrl = parent.frames("sIframeContent").document.location.href;
    var textid=sUrl.substring(sUrl.lastIndexOf("/")+1,sUrl.lastIndexOf(".")); 
    
    return textid;

}
// ����
function Rereading()
{
    if( ! fnDetectActiveXControl("webEdu.Recorder"))
    {
        alert("�谲װ�����ؼ�����ʹ�ø�������,�������ذ�װ.");
        return;
    }
   if(event.srcElement.disabled==true)
    {
        alert("���Ȳ�������");
        return;
    }
    if(btnGendu.innerHTML=="��������")
    {
        alert("���Ƚ�������");
        return;
    }
    if(btnDuibi.innerHTML=="�����Ա�")
    {
        alert("���Ƚ����Ա�");
        return ;
    }

   if(event.srcElement.innerHTML == "����")
   {
      readPosition = WinPlayer.controls.currentPosition;
      WinPlayer.controls.currentPosition = lastPosition
      WinPlayer.controls.Play();

      // ��ʼ���ʱ��
      RereadingTimer = setTimeout("DoingRereading()", 500)
      event.srcElement.innerHTML = "��������";
       btnPlay.innerHTML="��������";
   }
   else
   {
//      WinPlayer.controls.currentPosition = readPosition
//      lastPosition = readPosition;
       
      clearTimeout(RereadingTimer);
      event.srcElement.innerHTML = "����";
      WinPlayer.controls.pause();
   }
}
// ���и�������⸴��
function DoingRereading()
{
   if(WinPlayer.controls.currentPosition >= readPosition)
   {
      WinPlayer.controls.currentPosition = lastPosition;
   }
   RereadingTimer = setTimeout("DoingRereading()", 500);
}
// ����
function Gendu()
{

    if(event.srcElement.disabled == true)
    {
        alert("���Ȳ�������");
        return;
    }
    if(btnDuibi.innerHTML == "�����Ա�")
    {
        alert("���Ƚ����Ա�");
        return ;
    }
    if(btnFudu.innerHTML == "��������")
    {
        alert("���Ƚ�������");
        return ;
    }
    if(event.srcElement.innerHTML == "����")
    {
        t.innerHTML = "�����ǻطŸ��������...";
        IsRecording = false;
        // �����ظ���ǰ��λ��
        readPosition = WinPlayer.controls.currentPosition;
        WinPlayer.controls.currentPosition = lastPosition
        WinPlayer.controls.Play();

        genduStart = lastPosition;
        getduEnd = readPosition;

        event.srcElement.innerHTML = "��������";
        btnPlay.innerHTML = "��������";
        GenduTimer = setTimeout("GenduStartRecord()", 500);
    }
    else
    {
        event.srcElement.innerHTML = "����";

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
// ����������ʱ, ��ʼ¼��
function GenduStartRecord()
{
   if(WinPlayer.controls.currentPosition >= readPosition)
   {
      clearTimeout(GenduTimer);
      WinPlayer.controls.pause();

      t.innerHTML = "������¼��,������ղŵ����...";
      // ����������ʱ, ��ʼ¼��
      Recorder1.cmdDo_Click();
      IsRecording = true;
      return;
   }
   else
   {
      GenduTimer = setTimeout("GenduStartRecord()", 500);
   }
}
// ��������
function GenduEndRecord()
{

}
// �Ա�
function Duibi()
{
   if(event.srcElement.disabled == true)
   {
      alert("���Ȳ�������");
      return;
   }
   if(btnGendu.innerHTML == "��������")
   {
      alert("���Ƚ�������");
      return;
   }

   if(btnFudu.innerHTML == "��������")
   {
      alert("���Ƚ�������");
      return ;
   }

   if(event.srcElement.innerHTML == "�Ա�")
   {
      ReWinPlayer.controls.stop();
      // ��ԭ��
      WinPlayer.controls.currentPosition = genduStart;
      WinPlayer.controls.Play();
      DuibiSatrtTimer = setTimeout("StartReadRecord()", 500)
      event.srcElement.innerHTML = "�����Ա�"
      btnPlay.innerHTML="��������";
   }
   else
   {
      clearTimeout(DuibiSatrtTimer);
      event.srcElement.innerHTML = "�Ա�"
        
//      WinPlayer.controls.currentPosition = readPosition;
//      WinPlayer.controls.Play();
      WinPlayer.controls.pause();
      ReWinPlayer.URL = "";
      ReWinPlayer.controls.stop();
   }
}
// �����ظ��Ա�
function ReDuibi()
{
    ReWinPlayer.controls.stop();
      // ��ԭ��
    WinPlayer.controls.currentPosition = genduStart;
    WinPlayer.controls.Play();
    DuibiSatrtTimer = setTimeout("StartReadRecord()", 500)
}
// ���Ա�ԭ���Ƿ����
function StartReadRecord()
{
   if(WinPlayer.controls.currentPosition >= getduEnd)
   {

      WinPlayer.controls.pause();
      ReWinPlayer.URL = "C:\\bl_temp\\recording.wav";
      ReWinPlayer.controls.Play();

      // ��ʼ����Ƿ����
      clearTimeout(DuibiSatrtTimer);
      DuibiStartTimer = setTimeout("EndReadRecord()", 500)
   }
   else
   {
      DuibiSatrtTimer = setTimeout("StartReadRecord()", 500)
   }
}
// ¼������
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
// ���ò����ٶ�
function setRate()
{
    WinPlayer.settings.rate=(Math.round(100*hor.value)-40)*0.0125+1
}
// ������Ӣ�Ķ���
function en_cn()
{
   if(event.srcElement.innerHTML == "��Ӣ����")
   {
      parent.frames.item('sIframeContent').fnTranslateAll();
      event.srcElement.innerHTML = "ȫӢ����";
   }
   else
   {
      parent.frames.item('sIframeContent').fnEnglishOnly();
      event.srcElement.innerHTML = "��Ӣ����";
   }

}
// ȫ���л�
var sFramesetMiddleColsTemp;
function ContentFullscreen()
{
   if(event.srcElement.innerHTML == "ȫ���л�")
   {
      sFramesetMiddleColsTemp = parent.document.getElementById("sFramesetMiddle").cols;
      parent.document.getElementById("sFramesetMiddle").cols = "0,*";
      event.srcElement.innerHTML = "�˳�ȫ��";
   }
   else
   {
      parent.document.getElementById("sFramesetMiddle").cols = sFramesetMiddleColsTemp;
      event.srcElement.innerHTML = "ȫ���л�";
   }

}

// ����Mp3
function DownMp3(CanDown)
{
    if(CanDown==true)
    {
        parent.frames.item('sIframeContent').DownLoadmp3(getTextID()+".mp3");
    }
    else
    {
        alert("�ÿ��ĵ�mp3�Ѿ���ֹ�����أ�");
    }
}
// ���ؿ���
function DownText(CanDown)
{
    if(CanDown==true)
    {
        parent.frames.item('sIframeContent').DownLoadText();
    }
     else
    {
        alert("�ÿ����Ѿ���ֹ�����أ�");
    }
}

// ������ʾ����
function hideText()
{
    if(event.srcElement.innerHTML == "�����ı�")
    {
        parent.frames.item('sIframeContent').hideText();
        event.srcElement.innerHTML = "��ʾ�ı�"
    }
    else
    {
        parent.frames.item('sIframeContent').showText();
        event.srcElement.innerHTML = "�����ı�"
    }
}

// ���Ͽ����
function LanguageRetrieval()
{
	var words=parent.frames.item('sIframeContent').document.selection.createRange().text;
	if(words=="")
	{
		alert("����ѡ�������еĵ���!");
	
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
		alert("������ѡ������!");
	
	}
	else
	{
		var iWidth=300;
  		var iHeight=250;
		var win=window.open("../../branches/lessons/content_ѧϰ����/NewWords/WordExplain.aspx?word="+words,"win1","width=400,height=350,top="+(screen.height-iHeight-100)/2+",left="+(screen.width-iWidth)/2);
		win.focus();
	}
}
</script>

<script language = "javascript" for = "ReWinPlayer" event = "playStateChange(NewState)" >
// ����״̬
if(NewState == 8)
{
   t.innerHTML = "stoped";
}

</script>
</body>

</html>