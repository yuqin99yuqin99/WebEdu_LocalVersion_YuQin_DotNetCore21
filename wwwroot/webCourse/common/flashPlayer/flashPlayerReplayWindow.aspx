<HTML>
<HEAD>
<TITLE>课件播放窗口</TITLE>
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
 if(cLiNow[intTarget].getElementsByTagName("A").item(0).attributes.getNamedItem("sFId").nodeValue=="")
  {
	  sNodeValue = cLiNow[intTarget].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue;
	  sPlayFileName = "../../lessons/content"+"/play/"+sNodeValue+"/"+sNodeValue+".swf";//取得flash播放文件
  }
  else
  {
	  sNodeValue = cLiNow[intTarget].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue;
	  sPlayFileName = "../../lessons/content"+"/play_foreign/"+sNodeValue+"/"+sNodeValue+".swf";//取得flash播放文件
  }
     //

</script>
<script language="jscript">
function fnPlayClip(){
	open("../../../../common/flashPlayer/flashPlayerReplayWindow.aspx","_self",false);
	//var sUrl=document.location.href.substring(0,document.location.href.lastIndexOf("/"));
	//document.location.href=sUrl+"/flashPlayerReplayWindow.asp";
}
</script>
</HEAD>

<body  scroll="no">
<p><iframe name="flashPage" id="flashPage" height="100%" width="100%" src="" ></iframe></p>

<script language="JScript">
try{
	var sNodeValue=0;
	var cLi=parent.dialogArguments.document.getElementsByTagName("LI");
	var intLi=cLi.length;
	var intTarget;

	for(var i=0;i<intLi;i++){
	if(cLi[i].getElementsByTagName("SPAN").item(1).style.color==parent.dialogArguments.sColorClicked){
		intTarget=i;
		break;
																										}
							}
	if(parent.dialogArguments.sCurrentLanguageForPlayAll==""){//国语状态
		if(intTarget<intLi-1){
			var bIsHave=false;
			for(var j=intTarget+1;j<intLi;j++){
				if(cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue!=""){
					cLi[j].getElementsByTagName("A").item(0).setAttribute("sFId","");
					cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;
					if(j==0){
						cLi[j].getElementsByTagName("SPAN").item(1).click();
					}
					else{
						cLi[j].getElementsByTagName("SPAN").item(1).click();
						var oTemp=cLi[j];
						while(oTemp.parentNode.parentNode.nodeName!="DIV"){
							var cChildNodesTemp=oTemp.parentNode.childNodes;				
							for(intR=0;intR<cChildNodesTemp.length;intR++){
								if(cChildNodesTemp[intR].nodeName=="LI"){
									cChildNodesTemp[intR].style.display="list-item";
									if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
											if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
												cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																															}
																											}
																		}
																			}
							oTemp=oTemp.parentNode;
			
																			}
							
						if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
							oTemp.childNodes[0].src="../common/image/plusTran.gif";
																															}																												
						cLi[j].scrollIntoView(true);
					}
					cLi[j].getElementsByTagName("SPAN").item(1).click();
					sNodeValue=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue;
					bIsHave=true;
					break;
				}
				}
			if(!bIsHave){
				var bBoolean=confirm("已播放到最后!是否从头开始播放？");
				if(bBoolean){
					for(var k=0;k<intLi;k++){
						if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue!=""){
							cLi[k].getElementsByTagName("A").item(0).setAttribute("sFId","");
							cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;
							if(k==0){
								cLi[k].getElementsByTagName("SPAN").item(1).click();
							}
							else{
								cLi[k].getElementsByTagName("SPAN").item(1).click();
								var oTemp=cLi[k];
								while(oTemp.parentNode.parentNode.nodeName!="DIV"){
									var cChildNodesTemp=oTemp.parentNode.childNodes;				
									for(intR=0;intR<cChildNodesTemp.length;intR++){
										if(cChildNodesTemp[intR].nodeName=="LI"){
											cChildNodesTemp[intR].style.display="list-item";
											if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
													if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
														cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																	}
																													}
																				}
																					}
									oTemp=oTemp.parentNode;
					
																					}
									
								if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
									oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																	}																												
								cLi[k].scrollIntoView(true);
							}
							cLi[k].getElementsByTagName("SPAN").item(1).click();
							sNodeValue=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue;
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
					if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue!=""){
						cLi[k].getElementsByTagName("A").item(0).setAttribute("sFId","");
						cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;
						if(k==0){
							cLi[k].getElementsByTagName("SPAN").item(1).click();
						}
						else{
							cLi[k].getElementsByTagName("SPAN").item(1).click();
							var oTemp=cLi[k];
							while(oTemp.parentNode.parentNode.nodeName!="DIV"){
								var cChildNodesTemp=oTemp.parentNode.childNodes;				
								for(intR=0;intR<cChildNodesTemp.length;intR++){
									if(cChildNodesTemp[intR].nodeName=="LI"){
										cChildNodesTemp[intR].style.display="list-item";
										if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
												if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
													cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																}
																												}
																			}
																				}
								oTemp=oTemp.parentNode;
				
																				}
								
							if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
								oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																}																												
							cLi[k].scrollIntoView(true);
						}
						cLi[k].getElementsByTagName("SPAN").item(1).click();
						sNodeValue=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue;
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
		var sPlayFileName="lessons/content/play/"+sNodeValue+"/"+sNodeValue+".swf";
		var sHeadUrl="http://localhost:8000/webCourse/";
        document.getElementById("flashPage").src=sHeadUrl+sPlayFileName.substring(0,sPlayFileName.lastIndexOf("."))+".htm?sAnimation="+sHeadUrl+ sPlayFileName+"&IsLoop=true";

	     //jgskjwflashPlayer.Movie=sHeadUrl+sPlayFileName;
	     //jgskjwflashPlayer.IsLoop="true";
			 }
	}
	else{//外语状态
		if(intTarget<intLi-1){
			var bIsHave=false;
			for(var j=intTarget+1;j<intLi;j++){
				if(cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue!=""){
					cLi[j].getElementsByTagName("A").item(0).setAttribute("sFId","1");
					var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
					if(cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue==""){
						cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=sPromptNoForeignLanguage;		
					}
					else{
						cLi[j].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
					}
					if(j==0){
						cLi[j].getElementsByTagName("SPAN").item(1).click();
					}
					else{
						cLi[j].getElementsByTagName("SPAN").item(1).click();
						var oTemp=cLi[j];
						while(oTemp.parentNode.parentNode.nodeName!="DIV"){
							var cChildNodesTemp=oTemp.parentNode.childNodes;				
							for(intR=0;intR<cChildNodesTemp.length;intR++){
								if(cChildNodesTemp[intR].nodeName=="LI"){
									cChildNodesTemp[intR].style.display="list-item";
									if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
											if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
												cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																															}
																											}
																		}
																			}
							oTemp=oTemp.parentNode;
			
																			}
							
						if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
							oTemp.childNodes[0].src="../common/image/plusTran.gif";
																															}																												
						cLi[j].scrollIntoView(true);
					}
					cLi[j].getElementsByTagName("SPAN").item(1).click();
					sNodeValue=cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue;
					bIsHave=true;
					break;
				}
				}
			if(!bIsHave){
				var bBoolean=confirm("已播放到最后!是否从头开始播放？");
				if(bBoolean){
					for(var k=0;k<intLi;k++){
						if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue!=""){
							cLi[k].getElementsByTagName("A").item(0).setAttribute("sFId","1");
							var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
							if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue==""){
								cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=sPromptNoForeignLanguage;		
							}
							else{
								cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
							}
							if(k==0){
								cLi[k].getElementsByTagName("SPAN").item(1).click();
							}
							else{
								cLi[k].getElementsByTagName("SPAN").item(1).click();
								var oTemp=cLi[k];
								while(oTemp.parentNode.parentNode.nodeName!="DIV"){
									var cChildNodesTemp=oTemp.parentNode.childNodes;				
									for(intR=0;intR<cChildNodesTemp.length;intR++){
										if(cChildNodesTemp[intR].nodeName=="LI"){
											cChildNodesTemp[intR].style.display="list-item";
											if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
													if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
														cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																	}
																													}
																				}
																					}
									oTemp=oTemp.parentNode;
					
																					}
									
								if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
									oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																	}																												
								cLi[k].scrollIntoView(true);
							}
							cLi[k].getElementsByTagName("SPAN").item(1).click();
							sNodeValue=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue;
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
					if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue!=""){
						cLi[k].getElementsByTagName("A").item(0).setAttribute("sFId","1");
						var sPromptNoForeignLanguage="Sorry,Only Chinese at This Item!";
						if(cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue==""){
							cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=sPromptNoForeignLanguage;		
						}
						else{
							cLi[k].getElementsByTagName("SPAN").item(1).childNodes(0).nodeValue=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
						}
						if(k==0){
							cLi[k].getElementsByTagName("SPAN").item(1).click();
						}
						else{
							cLi[k].getElementsByTagName("SPAN").item(1).click();
							var oTemp=cLi[k];
							while(oTemp.parentNode.parentNode.nodeName!="DIV"){
								var cChildNodesTemp=oTemp.parentNode.childNodes;				
								for(intR=0;intR<cChildNodesTemp.length;intR++){
									if(cChildNodesTemp[intR].nodeName=="LI"){
										cChildNodesTemp[intR].style.display="list-item";
										if(cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif")>0){
												if(cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display=="list-item"){
													cChildNodesTemp[intR].childNodes[0].src="../common/image/plusTran.gif";
																																}
																												}
																			}
																				}
								oTemp=oTemp.parentNode;
				
																				}
								
							if(oTemp.childNodes[0].src.lastIndexOf("plus.gif")>0&&oTemp.getElementsByTagName("SPAN").item(1).style.color!=window.sColorClicked){
								oTemp.childNodes[0].src="../common/image/plusTran.gif";
																																}																												
							cLi[k].scrollIntoView(true);
						}
						cLi[k].getElementsByTagName("SPAN").item(1).click();
						sNodeValue=cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue;
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
		var sPlayFileName="lessons/content/play/"+sNodeValue+"/"+sNodeValue+".swf";
		var sHeadUrl="http://localhost:8000/webCourse/";

   		document.getElementById("flashPage").src=sHeadUrl+sPlayFileName.substring(0,sPlayFileName.lastIndexOf("."))+".htm?sAnimation="+sHeadUrl+ sPlayFileName+"&IsLoop=true";


	     //jgskjwflashPlayer.Movie=sHeadUrl+sPlayFileName;
	     //jgskjwflashPlayer.IsLoop="true";

			 }
	}
}

catch(e){
	open("closePlayWindow.asp","_self");
}
</script>
  
  
</body>
</html>