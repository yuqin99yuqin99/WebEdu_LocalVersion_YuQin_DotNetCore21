<%@ Page language="c#" validateRequest=false%>

<script language="C#" runat="server">
	public string sRunFrom;
	public string sPathContents;
	
	public string iWitdh="";
	public string iHeight="";
	
	void Page_Load(object sender, EventArgs e)
	{
	  sPathContents=Server.MapPath("../lessons").Replace("\\","\\\\");
	  sRunFrom=Request.QueryString["sRunFrom"];
	  
	  iWitdh=Request.QueryString["iWidth"];
	  iHeight=Request.QueryString["iHeight"];

	}
</script>


<html>

<head>
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>教与学_本机版_YuQin</title>
<script language="javascript">
function getPort()
{
	var sUrl=document.location.href;
	var sPartUrl=sUrl.substring(sUrl.lastIndexOf(":"));
	return sUrl.substring(sUrl.lastIndexOf(":")+1,sUrl.lastIndexOf(":")+sPartUrl.indexOf("/"));


}

</script>
<script language="javascript">
var sRunFrom='<% =sRunFrom %>';
var sPathContentsNow='<% =sPathContents %>';
function fnThanks(){
//open("autoDeleteHTMLFile.asp");
try{
open("thanks.aspx","_blank","fullscreen=0,left=127,top=99,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=1,copyhistory=no,width="+(screen.width-224-10)+",height="+(screen.height-168-30));
}
catch(e){
window.close();
}
}

function fnOnload(){

if(screen.height/screen.width==0.625)
{

	window.iNewZoom=screen.width/1280*100;
	document.body.style.zoom=iNewZoom+"%";
	
}
else
{

	window.iNewZoom=screen.width/1024*100;
	document.body.style.zoom=iNewZoom+"%";

}
	document.title = document.title+":"+getPort();
	document.body.scroll="no";
	
}
</script>

</head>

<body style="background-color:rgb(0,0,0);border:0px none;padding:0;margin:0;text-align:center;" onload="fnOnload();" onunload="frames('sIframeBook').frames('sIframeContents').fnRemoveUnusedFiles();fnThanks();">
<table style="border:0px;width:100%;height:100%;border:0px none;padding:0;margin:0;">
<tr>
<td style="text-align:center;vertical-align:middle;">
<table style="width:<%=iWitdh%>;height:<%=iHeight%>;background-color:rgb(255,255,255);border:0px none;padding:0;margin:0;" id="sTableBook">
  <tr id="sTrTitle">
    <td style="width:100%;text-align:center" id="sTdTitle">     
	<iframe name="sIframeBook" src="initial.aspx" marginwidth="0" marginheight="0" height="100%" width="100%" scrolling="no" border="0" frameborder="0">
	浏览器不支持嵌入式框架，或被配置为不显示嵌入式框架。</iframe>
    </td>
  </tr>
  </table>
</td>
</tr>
</table>
</body>

</html>
