/////////////全局对象
window.sWillHighLightedStringInContent = "";
window.courseTextPathPart = "";
window.presentationPathPart = "";
window.oSrcElement = new Object();
window.bMovable = false;
window.iMouseX;
window.iMouseY;
window.oMoveStartSrc = new Object();
window.sTeachingPlan = "";
window.sAnimation = "";
window.sCurrentLanguageForPlayAll = "";
window.sClonedDivTempInnerHTML = "";//判断是否已保存用
//window.sForEmptyAttributeValue="90BBCBCC-BE82-4AAA-A7F6-264FEF03C061"//由于浏览器的原因,所有特性不能设置""!!!!!!若使用了"",通过IE设置""后保存innerHTML,会丢失两个"号,从而不遵守XML规则,还容易崩溃浏览器.href属性没按规定设置好象也会崩溃IE.
window.sPathPartForForeign = "_foreign";
window.sPathPartForOrigin = "_origin";
window.sImageElementPlus = '<img src="../common/image/plusTran.gif" unselectable="on" onclick="fnDynOutline();"  style="cursor:default;"></img>';//注意，好象onclick="fnDynOutline();"这样的事件特性转化为innerHTML属性中的字符，而onclick="event.returnValue=false;"这样的会。
window.sImageElementNo = '<img src="../common/image/no.gif" unselectable="on" onclick="fnRemoveDefaultEventHandler();" style="cursor:default;"></img>';
window.sNativeLanguage = "国语";
window.sForeignLanguage = "英语";
window.sDiv = "";//= document.getElementById("sDiv").innerHTML;//可用于判断该目录是否因在线编辑而有了改变，从而可提醒用户保存有改变的目录。
window.sColorNormal = "";//fnonload()中文档转载完全后才能具体获取值。
window.sColorMouseOver = "rgb(0,255,0)";/**0前面有个空格更兼容*/
window.sColorClicked = "rgb(255,0,0)";/**0前面有个空格更兼容*/
window.sDocURL = document.URL;//将来去除！！
window.sDocPath = sDocURL.substring(7, sDocURL.length);//将来去除！！
window.sPath = sDocPath.substring(0, sDocPath.lastIndexOf("\\") + 1);//将来去除！！
window.sTempForCopy = "";//用来保存复制操作数据的变量，以便启用或不启用粘贴等右击菜单项,用对象好象更不好通过innerHTML属性来实现还原。
window.sTempForUndo = "";//用来保存撤消前一次操作数据的变量，以便进行撤消操作和启用或不启用撤消等右击菜单项，目前只支持撤消一次。
window.sTempForRedo = ""//用来保存重做前一次操作数据的变量
window.homeworkAndTestPathPart = "";
////////////////////

////////////////

///////////////
function fnAOnMouseOn() {
    var oObject = event.srcElement;

    if (window.getComputedStyle(oObject).color.replace(/\s*/g, "") != window.sColorClicked) {//replace去除空格
        oObject.style.color = window.sColorMouseOver;
    }
    event.srcElement.setAttribute("title", event.srcElement.childNodes.item(0).nodeValue);
}
function fnAOnMouseOut() {
    var oObject = event.srcElement;
    // console.log(window.getComputedStyle(oObject).color.replace(/\s*/g, "")+ ";" + window.sColorMouseOver);
    if (window.getComputedStyle(oObject).color.replace(/\s*/g, "") == window.sColorMouseOver)//replace去除空格
        oObject.style.color = window.sColorNormal;
}

function fnPane() {
    if (window.bMovable) {
        event.returnValue = false;
        window.scrollTo(document.body.scrollLeft + event.x - iMouseX, document.body.scrollTop + event.y - iMouseY);
    }
}

function fnMouseDown() {
    if (event.button == 1) {
        if (event.srcElement.tagName == "HTML" || event.srcElement.tagName == "BODY" || event.srcElement.tagName == "LI" || event.srcElement.tagName == "UL" || event.srcElement.tagName == "DIV") {
            window.bMovable = true;
            oMoveStartSrc = event.srcElement;
            event.srcElement.style.cursor = "move";
            iMouseX = event.x;
            iMouseY = event.y;
        }
    }
}

function fnMouseUp() {
    window.bMovable = false;
    //alert(event.fromElement.tagName);
    if (event.srcElement.tagName == "IMG") {
        event.srcElement.style.cursor = "default";
    }
    else if (event.srcElement.tagName == "A") {
        event.srcElement.style.cursor = "hand";
    }
    else {
        event.srcElement.style.cursor = "text";
    }
    try {
        oMoveStartSrc.style.cursor = "text";
    }
    catch (e) {
        return;
    }
}


function fnMouseWheel() {   

    if (event.ctrlKey) {
        event.returnValue = false;
        var iCount = 0;
        if (event.wheelDelta >= 120)
            //iCount -= 10;
            iCount += 10;
        else if (event.wheelDelta <= -120)
           // iCount += 10;
             iCount -= 10;
       // document.getElementById("sDiv").style.zoom = parseInt(document.getElementById("sDiv").style.zoom) + iCount + "%";
        document.body.style.zoom = parseInt(document.body.style.zoom) + iCount + "%";
    }
    /**
    else if (event.shiftKey) {
        var iCount = 0;
        if (event.wheelDelta >= 120)
            iCount -= 10;
        else if (event.wheelDelta <= -120)
            iCount += 10;
        var iScrollTop = document.body.scrollTop;
        var iScrollLeft = document.body.scrollLeft;
        iScrollLeft += iCount;
        window.scroll(iScrollLeft, iScrollTop);
        // document.body.style.left = parseInt(document.body.style.left.toString())+ iCount + "px";
        // console.log(document.body.style.left);
    }
    else if (event.altKey) {
        var iCount = 0;
        if (event.wheelDelta >= 120)
            iCount -= 10;
        else if (event.wheelDelta <= -120)
            iCount += 10;
        var iScrollTop = document.body.scrollTop;
        var iScrollLeft = document.body.scrollLeft;
        iScrollTop += iCount;
        window.scroll(iScrollLeft, iScrollTop);
    }
    **/
/**
    else {
        if (parent.frames("sIframeTitle").document.getElementById("sScrollIcon").src.indexOf("vertical.gif") > 0) {
            var iCount = 0;
            if (event.wheelDelta >= 120)
                iCount -= 10;
            else if (event.wheelDelta <= -120)
                iCount += 10;
            var iScrollTop = document.body.scrollTop;
            var iScrollLeft = document.body.scrollLeft;
            iScrollTop += iCount;
            window.scroll(iScrollLeft, iScrollTop);
        }
        if (parent.frames("sIframeTitle").document.getElementById("sScrollIcon").src.indexOf("horizontal.gif") > 0) {
            var iCount = 0;
            if (event.wheelDelta >= 120)
                iCount -= 10;
            else if (event.wheelDelta <= -120)
                iCount += 10;
            var iScrollTop = document.body.scrollTop;
            var iScrollLeft = document.body.scrollLeft;
            iScrollLeft += iCount;
            window.scroll(iScrollLeft, iScrollTop);
        }
        if (parent.frames("sIframeTitle").document.getElementById("sScrollIcon").src.indexOf("zoom.gif") > 0) {
            var iCount = 0;
            if (event.wheelDelta >= 120)
               // iCount -= 10;
                 iCount += 10;
            else if (event.wheelDelta <= -120)
               // iCount += 10;
            iCount -= 10;
            document.getElementById("sDiv").style.zoom = parseInt(document.getElementById("sDiv").style.zoom) + iCount + "%";
        }
    }
    **/
}


///////////////////////
/**

function fnLoadJs(url, callback) {//动态添加js并即时调用.调用方式：JSfnLoadJs("test.js", function () {alert('done');});
    var oScript = document.createElement('script');
    oScript.type = "text/javascript";
    if (typeof (callback) != "undefined") {
        if (oScript.readyState) {
            oScript.onreadystatechange = function () {
                if (oScript.readyState == "loaded" || oScript.readyState == "complete") {
                    oScript.onreadystatechange = null;
                    callback();
                }
            }
        }
        else {
            oScript.onload = function () {
                callback();
            }
        }
    }
    oScript.src = url;
    document.body.appendChild(script);
}
**/

function fnLoadJs(url) {//动态添加JS;
    var oScript = document.createElement('script');
    oScript.type = "text/javascript";   
    oScript.src = url;
    document.body.appendChild(oScript);
}

function fnOnLoad() {
    //parent.document.getElementById("sIframeContents").scrolling = "no";
    fnLoadJs("../common/script/ShowModelDiallog.js");//如果和目录保存相关的，就需要动态卸载。这个动态加载的好像不需要。在<sdiv>之外？
    window.sDiv = document.getElementById("sDiv").innerHTML;
    //window.sColorNormal = window.getComputedStyle(document.getElementById("sDiv"), null).color;
    //window.onfocus = fnWindowOnFocus;
    window.addEventListener("click", fnWindowOnFocus, false); //标题面板动态工具栏相关。//addEventListener可同时附加多个事件方法，window.onfocus = fnWindowOnFocus;则不行。
   window.addEventListener("click", fnGetFocus, false); //模式窗口相关。
    window.sColorNormal = window.getComputedStyle(document.body).color.replace(/\s*/g, "")//"rgb(0,102,153)"//document.body.currentStyle.color;//从currentStyle获得css文件中定义的字体颜色；但好像Chrome不支持，暂时注释掉
    window.oDiv = document.getElementById("popupDiv");//为右键菜单作准备。
    window.bIsEditingNote = false;//用于判断是否正在编辑教/学笔记
    document.body.onbeforeunload = fnIsSaved;//检查目录是否因编辑而有变化而提示保存等
    //document.body.oncontextmenu = fnContentsPopup;//边界会有右击菜单；
    window.oncontextmenu = fnContentsPopup;//边界不会有右击菜单
    window.onclick = fnWindowOnClick;
    document.body.ondblclick=fnOnDBLClick;////暂时改写，因为获取不到iframeTitle。
    // document.body.onmousemove = fnPane;
    window.onmousemove = fnPane;
    document.body.onmousewheel = fnMouseWheel;
    window.onmousewheel = fnMouseWheel;//通过不显示滚动条实现
    //document.body.onmousedown = fnMouseDown;
    window.onmousedown = fnMouseDown;
    // document.body.onmouseup = fnMouseUp;
    window.onmouseup = fnMouseUp;
    /**
     try{//为了适合于标题框架中没有“编辑目录”按钮的情形。
        if(parent.frames.item('sIFrameTitle').document.getElementById("sContentsEditable").style.backgroundColor==parent.frames.item('sIFrameTitle').sBackgroundColorForsContentsEditable){
            window.sContentsPopUpState=1;//用于判断目录右击状态；
        }
        else{
            window.sContentsPopUpState=0
        }
    }
    catch(e){
        window.sContentsPopUpState=0
    }
    **/


    /**
    if (document.getElementById("sDiv").style.zoom == "") {
        document.getElementById("sDiv").style.zoom = "100%";
    }
    **/
    if (document.body.style.zoom == "") {
        document.body.style.zoom = "100%";
    }
    document.body.style.zoom = "100%";
    if (document.body.style.fontSize == "") {
        // document.body.style.fontSize = document.body.currentStyle.fontSize;//好像Chrome不支持，暂时注释掉
    }
    document.getElementById("sDiv").style.position = "relative";
    document.getElementById("sDiv").style.left = -30;
    document.body.scroll = "no";
    fnInitailContents();//初始化目录
    if (window.confirm('请选择“确定”还是“取消”目录不自动编号！也可后续在标题面板中单击“目录编号”进行切换！\n单击目录条目的书本图标可以伸缩目录！\n单击目录条目的文字可以查看教材资源！\n双击目录可以切换目录是否全宽！\n右击目录菜单中，可以在线编辑目录、上传教材资源、教学视频、教学PPT、作业与测验，然后查看！')) {
        fnToggleContentsAutoNumber();
    }
    else {
        ;
    }
}
////////////
/** function fnOnDBLClick(){//已暂时改写，因为获取不到siframeTitle
if(parent.document.getElementById("sFramesetMiddle").cols=="2,*"){
    parent.document.getElementById("sFramesetMiddle").cols=parent.sFramesetMiddleColsTemp;
    parent.document.getElementById("sFramesetBook").rows=parent.sFramesetBookRowsDefault;
                                                                    }
else{
    parent.sFramesetMiddleColsTemp=parent.document.getElementById("sFramesetMiddle").cols;
    parent.document.getElementById("sFramesetMiddle").cols="2,*";
    parent.document.getElementById("sFramesetBook").rows="0,*,0";
}
}**/
function fnOnDBLClick() {//暂时改写，因为获取不到iframeTitle。
    try {
        window.event.returnValue = false;//去除双击时的默认选定文本效果
    }
    catch (e) {//考虑目录框架的右键菜单中的命令。
        return;
    }
    finally {
        //if (parent.document.getElementById("sFramesetMiddle").cols == "1022,*") {
        if (parent.document.getElementById("sFramesetMiddle").cols == "100%,*") {
            parent.document.getElementById("sFramesetMiddle").cols = parent.sFramesetMiddleColsTemp;
        }
        else {
            parent.sFramesetMiddleColsTemp = parent.document.getElementById("sFramesetMiddle").cols;
            //parent.document.getElementById("sFramesetMiddle").cols = "1022,*";
            parent.document.getElementById("sFramesetMiddle").cols = "100%,*";
        }
    }
}
/////////////

function fnRemoveDefaultEventHandler() {
    event.returnValue = false;
}

function fnInitailContents() {
    var cLi = document.getElementsByTagName("li");
    var iLiLength = cLi.length;
    if (cLi[0].childNodes.length > 2) {
        var oInsertImage = new DOMParser().parseFromString(sImageElementPlus, "text/html").getElementsByTagName("img").item(0);
    }
    else {
        var oInsertImage = new DOMParser().parseFromString(sImageElementNo, "text/html").getElementsByTagName("img").item(0);
    }
    cLi[0].insertBefore(oInsertImage, cLi[0].childNodes.item(0));
    oInsertImage.style.zoom = parseInt(document.body.style.fontSize) / 16 * 100 + "%";
    //alert(cLi[0].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue=="");

    cLi[0].setAttribute("unselectable", "on");
    cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("unselectable", "on");
    cLi[0].getElementsByTagName("SPAN").item(1).addEventListener("click", fnDynOpen, false);//注意函数不能有引号！这些事件特性好象无法在复制节点时复制，也不出现在innerHTML属性中。
    cLi[0].getElementsByTagName("SPAN").item(1).addEventListener("mouseover", fnAOnMouseOn, false);
    cLi[0].getElementsByTagName("SPAN").item(1).addEventListener("mouseout", fnAOnMouseOut, false);
    cLi[0].getElementsByTagName("A").item(0).setAttribute("sN", cLi[0].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue);//设置国语属性值等于节点值sN必须用setAttribute;sN=""必须用getNamedItem("sN"),sF,text,textF等也要注意该问题?好象要将如sN(无"")属性值与元素文本值交换时就要用setAttribute.
    //cLi[0].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue=cLi[0].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue;//这样设置好象不行!!设置国语属性值等于节点值
    cLi[0].getElementsByTagName("A").item(0).setAttribute("sFId", "");//设置语言Id,默认为"",国语
    cLi[0].getElementsByTagName("A").item(0).addEventListener("click", fnRemoveDefaultEventHandler, false);//禁止自动编号的单击默认事件响应，因为其父节点是A
   // cLi[0].getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = "1.";
    cLi[0].getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = "0.";//修改为从0开始

    if (iLiLength > 1) {
        for (i = 1; i < iLiLength - 1; i++) {
            var oLi = cLi[i];
            if (oLi.childNodes.length > 2) {
                var oInsertImage = new DOMParser().parseFromString(sImageElementPlus, "text/html").getElementsByTagName("img").item(0);
            }
            else {
                var oInsertImage = new DOMParser().parseFromString(sImageElementNo, "text/html").getElementsByTagName("img").item(0);
            }
            oLi.insertBefore(oInsertImage, oLi.childNodes.item(0));
            oInsertImage.style.zoom = parseInt(document.body.style.fontSize) / 16 * 100 + "%";

            oLi.setAttribute("unselectable", "on");
            oLi.getElementsByTagName("SPAN").item(1).setAttribute("unselectable", "on");
            oLi.getElementsByTagName("SPAN").item(1).addEventListener("click", fnDynOpen, false);
            oLi.getElementsByTagName("SPAN").item(1).addEventListener("mouseover", fnAOnMouseOn, false);
            oLi.getElementsByTagName("SPAN").item(1).addEventListener("mouseout", fnAOnMouseOut, false);
            oLi.getElementsByTagName("A").item(0).setAttribute("sN", oLi.getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue);//设置国语属性值等于节点值
            //oLi.getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue=oLi.getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue;//这样设置好象不行!!设置国语属性值等于节点值
            oLi.getElementsByTagName("A").item(0).setAttribute("sFId", "");//设置语言Id,默认为"",国语
            oLi.getElementsByTagName("A").item(0).addEventListener("click", fnRemoveDefaultEventHandler, false);//禁止自动编号的单击默认事件响应，因为其父节点是A

            if (oLi.previousSibling != null) {

                if (oLi.parentNode.parentNode.nodeName != "DIV") {
                    var sPreviousSiblingAutoNumber = oLi.previousSibling.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue;
                    var aPreviousSiblingAutoNumber = sPreviousSiblingAutoNumber.split(".");
                    var iLength = aPreviousSiblingAutoNumber.length;
                    var iLastNum = parseInt(aPreviousSiblingAutoNumber[iLength - 2]) + 1;
                    var sPre = "";
                    for (j = 0; j <= iLength - 3; j++) {
                        sPre = sPre + aPreviousSiblingAutoNumber[j] + ".";
                    }
                    oLi.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = sPre + iLastNum + ".";
                }


                else {
                    var sPreviousSiblingAutoNumber = oLi.previousSibling.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue;
                    var sPreviousSiblingAutoNumberPre = sPreviousSiblingAutoNumber.substring(0, sPreviousSiblingAutoNumber.lastIndexOf("."));
                    var sAutoNumber = (parseInt(sPreviousSiblingAutoNumberPre) + 1).toString() + ".";
                    oLi.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = sAutoNumber;
                }

            }

            else {
                var sParentParentAutoNumber = oLi.parentNode.parentNode.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue;
                sParentParentAutoNumberPre = sParentParentAutoNumber.substring(0, sParentParentAutoNumber.lastIndexOf("."));
                oLi.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = sParentParentAutoNumberPre + ".1.";
            }

        }

        //var oInsertImage=document.createElement(sImageElementNo);
        // var oInsertImage=window.document.createElement("img");
        // oInsertImage.outerHTML=sImageElementNo;
        var oInsertImage = new DOMParser().parseFromString(sImageElementNo, "text/html").getElementsByTagName("img").item(0);
        cLi[iLiLength - 1].insertBefore(oInsertImage, cLi[iLiLength - 1].firstChild);
        oInsertImage.style.zoom = parseInt(document.body.style.fontSize) / 16 * 100 + "%";

        cLi[iLiLength - 1].setAttribute("unselectable", "on");
        cLi[iLiLength - 1].getElementsByTagName("SPAN").item(1).setAttribute("unselectable", "on");
        cLi[iLiLength - 1].getElementsByTagName("SPAN").item(1).addEventListener("click", fnDynOpen, false);
        cLi[iLiLength - 1].getElementsByTagName("SPAN").item(1).addEventListener("mouseover", fnAOnMouseOn, false);
        cLi[iLiLength - 1].getElementsByTagName("SPAN").item(1).addEventListener("mouseout", fnAOnMouseOut, false);
        cLi[iLiLength - 1].getElementsByTagName("A").item(0).setAttribute("sN", cLi[iLiLength - 1].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue);//设置国语属性值等于节点值,sN必须用setAttribute;sN=""必须用getNamedItem("sN")?
        //cLi[iLiLength-1].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue=cLi[iLiLength-1].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue;//这样设置好象不行!!设置国语属性值等于节点值
        cLi[iLiLength - 1].getElementsByTagName("A").item(0).setAttribute("sFId", "");//设置语言Id,默认为"",国语
        cLi[iLiLength - 1].getElementsByTagName("A").item(0).addEventListener("click", fnRemoveDefaultEventHandler, false);//禁止自动编号的单击默认事件响应，因为其父节点是A

        if (cLi[iLiLength - 1].previousSibling != null) {
            if (cLi[iLiLength - 1].parentNode.parentNode.nodeName != "DIV") {
                var sPreviousSiblingAutoNumber = cLi[iLiLength - 1].previousSibling.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue;
                var aPreviousSiblingAutoNumber = sPreviousSiblingAutoNumber.split(".");
                var iLength = aPreviousSiblingAutoNumber.length;
                var iLastNum = parseInt(aPreviousSiblingAutoNumber[iLength - 2]) + 1;
                var sPre = "";
                for (j = 0; j <= iLength - 3; j++) {
                    sPre = sPre + aPreviousSiblingAutoNumber[j] + ".";
                }
                cLi[iLiLength - 1].getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = sPre + iLastNum + ".";
            }
            else {
                var sPreviousSiblingAutoNumber = cLi[iLiLength - 1].previousSibling.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue;
                var sPreviousSiblingAutoNumberPre = sPreviousSiblingAutoNumber.substring(0, sPreviousSiblingAutoNumber.lastIndexOf("."));
                var sAutoNumber = (parseInt(sPreviousSiblingAutoNumberPre) + 1).toString() + ".";
                cLi[iLiLength - 1].getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = sAutoNumber;
            }
        }
        else {
            var sParentParentAutoNumber = cLi[iLiLength - 1].parentNode.parentNode.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue;
            sParentParentAutoNumberPre = sParentParentAutoNumber.substring(0, sParentParentAutoNumber.lastIndexOf("."));
            cLi[iLiLength - 1].getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = sParentParentAutoNumberPre + ".1.";
        }
    }
    else {
        ;
    }
    /** 
    const params = {};
    const searchParams = new URLSearchParams(parent.location.search);
    for (const [key, value] of searchParams.entries()) {
        params[key] = value;
    }
   // const searchString1 =window.location.search;
    //const searchString2 = new URLSearchParams(parent.location.search);
   // const searchParams = new URLSearchParams();
   // searchParams.append('tags', 'vue');
   window.alert(params.toString());
    window.alert(searchParams);
     window.alert(parent.document.URL);
     **/
    //window.alert(parent.location.search.lastIndexOf("?text="));
   // window.alert(parent.location.search);
   var sSearch =new URLSearchParams(parent.location.search);
       if(sSearch.has("text")) //因为https://localhost:5001/webCourse/common/Initial.html，打开了https://localhost:5001/webCourse/common/iframeInitial.html?iWidth=1024&iHeight=738，parent返回的总是https://localhost:5001/webCourse/common/Initial.html，待后续解决返回https://localhost:5001/webCourse/common/iframeInitial.html?iWidth=1024&iHeight=738。当前暂时https://localhost:5001/webCourse/common/Initial.html?text=1676365357375之类解决下述需求。
        {
         var sText=sSearch.get("text");//获取URL中的text参数值
         var iLiLength = cLi.length;
         var intTargetPassInItem = 0;
         for (intN = 0; intN < iLiLength; intN++) {
         var sStringTemp = cLi[intN].getElementsByTagName("A").item(0).attributes.getNamedItem("text").nodeValue;
         if (sStringTemp == sText) {
            intTargetPassInItem = intN;
            break;
                                    }
                                 }
         if (intTargetPassInItem == 0) {
             alert("您指定的是第一个条目，或者，您指定的"+sSearch.get("text")+"这一条目不存在！将自动定位到开始条目，即，将自动定位到整个目录的第一个条目！");
             cLi[0].getElementsByTagName("SPAN").item(1).click();
             cLi[0].scrollIntoView();
                                 }
          else {
         cLi[intTargetPassInItem].getElementsByTagName("SPAN").item(1).click();
         cLi[intTargetPassInItem].scrollIntoView();
         }
         }
         else
        {
            alert("您URL中没有指定?text=的搜索条目！将自动定位到开始条目，即，将自动定位到整个目录的第一个条目！");
            cLi[0].getElementsByTagName("SPAN").item(1).click();
            cLi[0].scrollIntoView();
            }
       
}

function fnContentsRefreshAFromAlreadyAutoNumbered() {//准备改为fnContentsRefreshAFromAlreadyAutoNumbered,因为刷新了编号,还刷新了A的事件特性。
    var cLi = window.document.getElementsByTagName("li");
    var iLiLength = cLi.length;
    cLi[0].getElementsByTagName("SPAN").item(1).setAttribute("unselectable", "on");
    cLi[0].getElementsByTagName("SPAN").item(1).addEventListener("click", fnDynOpen, false);
    cLi[0].getElementsByTagName("SPAN").item(1).addEventListener("mouseover", fnAOnMouseOn, false);
    cLi[0].getElementsByTagName("SPAN").item(1).addEventListener("mouseout", fnAOnMouseOut, false);
    cLi[0].getElementsByTagName("A").item(0).addEventListener("click", fnRemoveDefaultEventHandler, false);
    //cLi[0].getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = "1.";
     cLi[0].getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = "0.";//修改为从0开始

    if (iLiLength > 1) {
        for (i = 1; i < iLiLength - 1; i++) {
            var oLi = cLi[i];
            oLi.getElementsByTagName("SPAN").item(1).setAttribute("unselectable", "on");
            oLi.getElementsByTagName("SPAN").item(1).addEventListener("click", fnDynOpen, false);
            oLi.getElementsByTagName("SPAN").item(1).addEventListener("mouseover", fnAOnMouseOn, false);
            oLi.getElementsByTagName("SPAN").item(1).addEventListener("mouseout", fnAOnMouseOut, false);
            oLi.getElementsByTagName("A").item(0).addEventListener("click", fnRemoveDefaultEventHandler, false);
            if (oLi.previousSibling != null) {

                if (oLi.parentNode.parentNode.nodeName != "DIV") {
                    var sPreviousSiblingAutoNumber = oLi.previousSibling.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue;
                    var aPreviousSiblingAutoNumber = sPreviousSiblingAutoNumber.split(".");
                    var iLength = aPreviousSiblingAutoNumber.length;
                    var iLastNum = parseInt(aPreviousSiblingAutoNumber[iLength - 2]) + 1;
                    var sPre = "";
                    for (j = 0; j <= iLength - 3; j++) {
                        sPre = sPre + aPreviousSiblingAutoNumber[j] + ".";
                    }
                    oLi.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = sPre + iLastNum + ".";
                }


                else {
                    var sPreviousSiblingAutoNumber = oLi.previousSibling.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue;
                    var sPreviousSiblingAutoNumberPre = sPreviousSiblingAutoNumber.substring(0, sPreviousSiblingAutoNumber.lastIndexOf("."));
                    var sAutoNumber = (parseInt(sPreviousSiblingAutoNumberPre) + 1).toString() + ".";
                    oLi.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = sAutoNumber;
                }

            }

            else {
                var sParentParentAutoNumber = oLi.parentNode.parentNode.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue;
                sParentParentAutoNumberPre = sParentParentAutoNumber.substring(0, sParentParentAutoNumber.lastIndexOf("."));
                oLi.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = sParentParentAutoNumberPre + ".1.";
            }

        }

        cLi[iLiLength - 1].getElementsByTagName("SPAN").item(1).setAttribute("unselectable", "on");
        cLi[iLiLength - 1].getElementsByTagName("SPAN").item(1).addEventListener("click", fnDynOpen, false);
        cLi[iLiLength - 1].getElementsByTagName("SPAN").item(1).addEventListener("mouseover", fnAOnMouseOn, false);
        cLi[iLiLength - 1].getElementsByTagName("SPAN").item(1).addEventListener("mouseout", fnAOnMouseOut, false);
        cLi[iLiLength - 1].getElementsByTagName("A").item(0).addEventListener("click", fnRemoveDefaultEventHandler, false);



        if (cLi[iLiLength - 1].previousSibling != null) {
            if (cLi[iLiLength - 1].parentNode.parentNode.nodeName != "DIV") {
                var sPreviousSiblingAutoNumber = cLi[iLiLength - 1].previousSibling.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue;
                var aPreviousSiblingAutoNumber = sPreviousSiblingAutoNumber.split(".");
                var iLength = aPreviousSiblingAutoNumber.length;
                var iLastNum = parseInt(aPreviousSiblingAutoNumber[iLength - 2]) + 1;
                var sPre = "";
                for (j = 0; j <= iLength - 3; j++) {
                    sPre = sPre + aPreviousSiblingAutoNumber[j] + ".";
                }
                cLi[iLiLength - 1].getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = sPre + iLastNum + ".";
            }
            else {
                var sPreviousSiblingAutoNumber = cLi[iLiLength - 1].previousSibling.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue;
                var sPreviousSiblingAutoNumberPre = sPreviousSiblingAutoNumber.substring(0, sPreviousSiblingAutoNumber.lastIndexOf("."));
                var sAutoNumber = (parseInt(sPreviousSiblingAutoNumberPre) + 1).toString() + ".";
                cLi[iLiLength - 1].getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = sAutoNumber;
            }
        }
        else {
            var sParentParentAutoNumber = cLi[iLiLength - 1].parentNode.parentNode.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue;
            sParentParentAutoNumberPre = sParentParentAutoNumber.substring(0, sParentParentAutoNumber.lastIndexOf("."));
            cLi[iLiLength - 1].getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = sParentParentAutoNumberPre + ".1.";
        }
    }
}

function fnContentsRefreshImage() {//刷新了图象源,还刷新了图象的事件特性(为什么要刷新？)
    var cLi = window.document.getElementsByTagName("LI");
    var iLiLength = cLi.length;
    if (iLiLength == 1) {
        cLi[0].getElementsByTagName("IMG").item(0).src = "../common/image/no.gif";
        cLi[0].getElementsByTagName("IMG").item(0).addEventListener("click", fnRemoveDefaultEventHandler, false);
    }
    else {
        for (var i = 0; i < iLiLength; i++) {
            if (cLi[i].getElementsByTagName("UL").length > 0) {//对于<LI><A href="contentStart.asp">关于网络远程教学系统</A>  <UL><LI><A href="content/">新建条目</A></LI></UL></LI>的<li>的childNodes.length好象报告为4，其中childNodes（1）好象是白空！！！！！！所以用childNodes.item(i)来获取节点不是很好，而用getElementsByTagName("tagName").item(i)较好（即使没有该节点名，不报错，而是报告.length为0)。
                var cLiChildNodes = cLi[i].getElementsByTagName("UL").item(0).childNodes;
                var bDisplayed = false;
                for (var j = 0; j < cLiChildNodes.length; j++) {
                    if (cLiChildNodes[j].style.display == "list-item") {
                        bDisplayed = true;
                        break;
                    }
                    else {
                        ;
                    }
                }
                if (bDisplayed) {
                    cLi[i].getElementsByTagName("IMG").item(0).src = "../common/image/plusTran.gif"
                }
                else {
                    cLi[i].getElementsByTagName("IMG").item(0).src = "../common/image/plusTran.gif"
                }
                //cLi[i].getElementsByTagName("IMG").item(0).addEventListener("click", fnRemoveDefaultEventHandler, false);
                //cLi[i].getElementsByTagName("IMG").item(0).addEventListener("click",fnDynOutline,true);

            }
            else {
                cLi[i].getElementsByTagName("IMG").item(0).src = "../common/image/no.gif";
                cLi[i].getElementsByTagName("IMG").item(0).addEventListener("click", fnRemoveDefaultEventHandler, false);
            }
        }
    }
}

function fnIsContentsChanged() {
    /** 
    var oClonedDivTemp = window.document.getElementById("sDiv").cloneNode(true);
	var cLiClonedTemp=oClonedDivTemp.getElementsByTagName("LI");
	for(var i=0;i<cLiClonedTemp.length;i++){
		cLiClonedTemp.item(i).removeAttribute("unselectable");
		cLiClonedTemp.item(i).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//去除自动加入的图标
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue="1";//恢复自动编号为默认
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//由于onmouseon等引起的属性变化,onmouseon等待优化.另外看出今后属性变化要设置为一个style,易去除
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");// cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
		cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue=cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//恢复双语切换之前
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId","");
		cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN","");
											}	
	if(oClonedDivTemp.innerHTML===window.sDiv){
		return false;
	}
	else{
		return true;
	}
    */
}


function fnSave() {
    /**
    var sDocURL = document.URL;
	var sDocPath=sDocURL.substring(7,sDocURL.length);
	var sPathFull=sDocPath.substring(0,sDocPath.lastIndexOf("/"));
	var sPath=sPathFull.substring(0,sPathFull.lastIndexOf("/")+1)+parent.sContentsPath;
	
	var aTemp=new Array();
	aTemp=parent.sPathContentsNow.split("/");
	var iLength=aTemp.length;
	var sPathContentshtmNowNow="";
	for(var i=0;i<iLength;i++){
		sPathContentshtmNowNow=sPathContentshtmNowNow+aTemp[i]+"\\";
	}
    **/
    //var sHeader='<?xml version="1.0" encoding="gb2312"?><html><head><xml:namespace prefix="IE" /><IE:download id="downLoad" style="behavior:url(#default#download)" /><link rel="stylesheet" type="text/css" href="../options/contents.css"></link><script language="JScript.encode" src="../common/script/contents.js"></script><title>file1</title><base target="sIframeContent"/></head><body unselectable="on" onload="fnOnLoad();" style="background-image:url(background_contents.gif);" scroll="no" id="sBody"><div unselectable="on" id="sDiv">';
    //var sEnd='</div></body></html>';
    var bWillSaved = confirm("原目录文件将被覆盖,如果需要,请备份原目录文件,该文件的URL是：" + document.URL + "；" + "物理路径是：" + "\\webCourse\\lessons\\contents.htm");
    //var bWillSaved=confirm("原目录文件将被覆盖,如果需要,请备份原目录文件,该文件的URL是"+'"'+"http://"+sPath+"contents.htm"+'"'+"，物理路径是"+'"'+sPathContentshtmNowNow.substring(0,sPathContentshtmNowNow.length-2)+"contents.htm"+'"');
    //var bWillSaved=confirm("原目录文件将被覆盖,如果需要,请备份原目录文件,该文件的URL是"+'"'+"http://"+sPath+"contents.htm"+'"'+"，物理路径是"+'"'+sPathContentshtmNowNow.substring(0,sPathContentshtmNowNow.lastIndexOf("Tempcontents.asp"))+"contents.htm"+'"');

    if (bWillSaved) {
        
        var ptObjClonedDocumentTemp = window.document.cloneNode(true);//拷贝整个文档对象
        
        var oDivTemp = ptObjClonedDocumentTemp.getElementById("sDiv");//引用整个SDIV对象
        //alert(oDivTemp.outerHTML);
        var cLiTemp = oDivTemp.getElementsByTagName("LI");//引用所有LI对象
        for (var i = 0; i < cLiTemp.length; i++) {
            cLiTemp.item(i).removeAttribute("unselectable");
            cLiTemp.item(i).removeAttribute("style");
            // cLiTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//去除自动加入的图标
            cLiTemp.item(i).getElementsByTagName("IMG").item(0).parentNode.removeChild(cLiTemp.item(i).getElementsByTagName("IMG").item(0));//去除自动加入的图标
            //window.oSrcElement.parentNode.parentNode.parentNode.removeChild(window.oSrcElement.parentNode.parentNode);
            cLiTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//由于onmouseon等引起的属性变化,onmouseon等待优化.另外看出今后属性变化要设置为一个style,易去除.没有显式设置该属性,即innerHTML中不出现,去除也不出错!
            cLiTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = "1";//恢复自动编号为默认
            cLiTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
            cLiTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
            cLiTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
            cLiTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
            cLiTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
            cLiTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
            cLiTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = cLiTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//恢复双语切换之前
            cLiTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId", "");//attributes.getNamedItem("sFId").nodeValue=""失败
            cLiTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN", "");//
        }
        ptObjClonedDocumentTemp.body.style.zoom = "100%";
        window.ptContents = ptObjClonedDocumentTemp.documentElement.outerHTML; //包含很多URL不支持的字符，必须用form发送服务器端？
        //alert(window.ptContents);
        //下述文件自己包含表单，一打开就通过JS触发表单发送。
        var ptWindow = window.open("../common/saving.htm", "saving", "fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//显示“正在保存...”，一直到保存目录的saveContents.asp网页的运行结果返回到该窗口，即“Saving”窗口
        ptWindow.focus();


        /** 
        var oClonedDivTemp = window.document.getElementById("sDiv").cloneNode(true);
		var cLiClonedTemp=oClonedDivTemp.getElementsByTagName("LI");
		for(var i=0;i<cLiClonedTemp.length;i++){
	 		cLiClonedTemp.item(i).removeAttribute("unselectable");
			cLiClonedTemp.item(i).removeAttribute("style");
			cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//去除自动加入的图标
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//由于onmouseon等引起的属性变化,onmouseon等待优化.另外看出今后属性变化要设置为一个style,易去除.没有显式设置该属性,即innerHTML中不出现,去除也不出错!
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue="1";//恢复自动编号为默认
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
			cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue=cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//恢复双语切换之前
			cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId","");//attributes.getNamedItem("sFId").nodeValue=""失败
			cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN","");//
		}
		window.sClonedDivTempInnerHTML=oClonedDivTemp.innerHTML;//该全局变量可由saveContents.asp调用
        */
        //var sWillReplacedUL="<UL>";//有个问题待解决，这样取代后，空格将越来越多！！！！！！好象已在编辑目录时考虑了加入空格，那么这里就不用该功能了
        //var oRegExpReplaceUL=new RegExp(sWillReplacedUL,"g");
        //var sAfterULReplaced=oClonedDivTemp.innerHTML.replace(oRegExpReplaceUL," <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
        //var sWillReplacedURLHeader=parent.sHTTPHeader+"lessons/";//如果修改了条目的超链接，将超链接的绝对URL查找替换为相对URL
        //var oRegExpReplaceURLHeader=new RegExp(sWillReplacedURLHeader,"g");
        //var sAfterURLHeaderReplaced=sAfterULReplaced.replace(oRegExpReplaceURLHeader,"");

        //var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sSaveContentsForm"></form>');//在Bottom框架动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.
        /** 
        var oForm = parent.frames("sIframeBottom").document.createElement("form");
                oForm.outerHTML='<form method="POST" action="" target="" id="sSaveContentsForm"></form>';
                var oInput1=parent.frames("sIframeBottom").document.createElement('input');
                oInput1.outerHTML='<input type="text" name="docContents" id="docContents"></input>';
                 var oInput2=parent.frames("sIframeBottom").document.createElement('input');
                oInput2.outerHTML='<input type="text" name="docPath" id="docPath"></input>';
		 var oInputSubmit=parent.frames("sIframeBottom").document.createElement('input');
                oInputSubmit.outerHTML='<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>';
		var oInsertForm=parent.frames("sIframeBottom").document.body.appendChild(oForm);
		var oInsertInput1=oInsertForm.appendChild(oInput1);
		var oInsertInput2=oInsertForm.appendChild(oInput2);
		var oInsertInputSubmit=oInsertForm.appendChild(oInputSubmit);
		parent.frames("sIframeBottom").document.getElementById("docContents").value=sHeader+sAfterURLHeaderReplaced+sEnd;
		parent.frames("sIframeBottom").document.getElementById("docPath").value="contents.htm";
		parent.frames("sIframeBottom").document.getElementById("sSaveContentsForm").action="../common/saveContents.aspx";
		parent.frames("sIframeBottom").document.getElementById("sSaveContentsForm").target="saving";//目标窗口为一直显示“正在保存...”的窗口，如果保存成功将显示“已保存”并自动关闭。
		parent.frames("sIframeBottom").document.getElementById("sSaveContentsForm").submit();
		parent.frames("sIframeBottom").document.getElementById("sSaveContentsForm").removeNode("true");
        */
        //alert(oClonedDivTemp.innerHTML);
        //alert(window.sClonedDivTempInnerHTML);//saveContents.asp中调用.
        //alert(window.sDiv);

        // var ptWindowTemp = ptWindow.open("/SaveContents/Get?Contents=" + ptContents, "_self");//包含很多URL不支持的字符，必须用form发送服务器端？
        // var oForm = ptWindow.document.createElement('<form method="POST" action="" target="" id="sSaveContentsForm"></form>');//动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.


    }
    else {
        return;
    }
}

function fnCopyPartResource() {
    var sDocURL = document.URL;
    var sDocPath = sDocURL.substring(7, sDocURL.length);
    var sPathFull = sDocPath.substring(0, sDocPath.lastIndexOf("/"));
    var sPath = sPathFull.substring(0, sPathFull.lastIndexOf("/") + 1) + parent.sContentsPath;

    var aTemp = new Array();
    aTemp = parent.sPathContentsNow.split("/");
    var iLength = aTemp.length;
    var sPathContentshtmNowNow = "";
    for (var i = 0; i < iLength; i++) {
        sPathContentshtmNowNow = sPathContentshtmNowNow + aTemp[i] + "\\";
    }
    var sPhysicPath = sPathContentshtmNowNow.substring(0, sPathContentshtmNowNow.lastIndexOf("Tempcontents.htm")) + "contentsForCopyPartResource.htm";
    var sWidth = screen.width - 10;
    var sHeight = screen.height * 0.8;
    var sLeft = (screen.width - sWidth) / 2;
    var sTop = (screen.height - sHeight) / 2;
    window.open("", "sCopyPartResource", "fullscreen=0,left=" + sLeft + ",top=" + sTop + ",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width=" + sWidth + ",height=" + sHeight);//显示窗口
    var oClonedDivTemp = window.document.getElementById("sDiv").cloneNode(true);
    var cLiClonedTemp = oClonedDivTemp.getElementsByTagName("LI");
    for (var i = 0; i < cLiClonedTemp.length; i++) {
        cLiClonedTemp.item(i).removeAttribute("unselectable");
        cLiClonedTemp.item(i).removeAttribute("style");
        cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//去除自动加入的图标
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//由于onmouseon等引起的属性变化,onmouseon等待优化.另外看出今后属性变化要设置为一个style,易去除.没有显式设置该属性,即innerHTML中不出现,去除也不出错!
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = "1";//恢复自动编号为默认
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
        // cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//恢复双语切换之前
        cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId", "");
        cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN", "");
    }
    var sWillReplacedUL = "<UL>";//有个问题待解决，这样取代后，空格将越来越多！！！！！！好象已在编辑目录时考虑了加入空格，那么这里就不用该功能了
    var oRegExpReplaceUL = new RegExp(sWillReplacedUL, "g");
    var sAfterULReplaced = oClonedDivTemp.innerHTML.replace(oRegExpReplaceUL, " <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
    var sWillReplacedURLHeader = parent.sHTTPHeader + "lessons/";//如果修改了条目的超链接，将超链接的绝对URL查找替换为相对URL
    var oRegExpReplaceURLHeader = new RegExp(sWillReplacedURLHeader, "g");
    var sAfterURLHeaderReplaced = sAfterULReplaced.replace(oRegExpReplaceURLHeader, "");


    //var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>');//在Bottom框架动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.
    var oForm = parent.frames("sIframeBottom").document.createElement('form');
    oForm.outerHTML = '<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>';
    //var oInput1=parent.frames("sIframeBottom").document.createElement('<input type="text" name="docContents" id="docContents"></input>');
    var oInput1 = parent.frames("sIframeBottom").document.createElement('input');
    oInput1.outerHTML = '<input type="text" name="docContents" id="docContents"></input>';
    //var oInput2=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sPath" id="sPath"></input>');
    var oInput2 = parent.frames("sIframeBottom").document.createElement('input');
    oInput2.outerHTML = '<input type="text" name="sPath" id="sPath"></input>';
    //var oInputSubmit=parent.frames("sIframeBottom").document.createElement('<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>');
    var oInputSubmit = parent.frames("sIframeBottom").document.createElement('input');
    oInputSubmit.outerHTML = '<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>';
    var oInsertForm = parent.frames("sIframeBottom").document.body.appendChild(oForm);
    var oInsertInput1 = oInsertForm.appendChild(oInput1);
    var oInsertInput2 = oInsertForm.appendChild(oInput2);
    var oInsertInputSubmit = oInsertForm.appendChild(oInputSubmit);
    parent.frames("sIframeBottom").document.getElementById("docContents").value = sAfterURLHeaderReplaced;
    parent.frames("sIframeBottom").document.getElementById("sPath").value = sPhysicPath;
    parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").action = "../common/copyPartResource/copyPartResourceSaveContents.aspx";
    parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").target = "sCopyPartResource";
    parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").submit();
    parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").removeNode("true");
    //alert(parent.frames("sIframeBottom").document.body.innerHTML);
}


function fnReplaceUL(sString) {//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此专门定义一个插入一个空格字符的函数。
    var sWillReplacedUL = "<UL>";
    var oRegExpReplaceUL = new RegExp(sWillReplacedUL, "g");
    var sAfterULReplaced = sString.replace(oRegExpReplaceUL, " <UL>");
    return sAfterULReplaced;
}

function fnDynOutline() {
    event.cancelBubble = true;
    event.returnValue = false;
    if (event.srcElement.src.lastIndexOf("plus.gif") > 0) {
        event.srcElement.src = "../common/image/plusTran.gif";
        var iLength = event.srcElement.parentNode.children[2].children.length;
        for (var i = 0; i < iLength; i++) {
            if (event.srcElement.parentNode.children[2].children[i].nodeName == "LI") {
                event.srcElement.parentNode.children[2].children[i].style.display = "list-item";
            }
        }
    }

    else if (event.srcElement.src.lastIndexOf("plusTran.gif") > 0) {
        event.srcElement.src = "../common/image/plus.gif";
        var iLength = event.srcElement.parentNode.children[2].children.length;
        for (var i = 0; i < iLength; i++) {
            if (event.srcElement.parentNode.children[2].children[i].nodeName == "LI") {
                event.srcElement.parentNode.children[2].children[i].style.display = "none";
            }
        }
    }
}

function fnDynOpen() {
    //event.returnValue = false;
    window.oSrcElement = event.srcElement;


    //如果是于编辑状态的离开,则判断提示是否做了修改。
    /**关于WebEditor的代码。暂时注释掉，待修改
 if( parent.frames.item("sIframecontent").IsFirst == false ) 
 {
 	if (parent.frames.item("sIframecontent").document.URL.indexOf("\?")>0) 
 	{
   		sUrl=parent.frames.item("sIframecontent").document.URL.substring(0,parent.frames.item("sIframecontent").document.URL.indexOf("?"));
  		// alert(parent.frames.item("sIframecontent").document.URL.substring(0,parent.frames.item("sIframecontent").document.URL.indexOf("?")));
   		sUrl=sUrl.substring(sUrl.lastIndexOf("/")+1); 
  		if ( sUrl.toUpperCase()=="WEBEDITOR.ASP" ) 
  		{
   			parent.frames.item("sIframeContent").HtmlEdit.focus();
   			parent.frames.item("sIframeContent").Exit1();
   		}
  	}
}**/

    /**已不选用在线编辑，而是Word编辑后上传。暂时注释掉，待修改
    try{//为内容框架修改又没有保存而刷新的程序被打断而设置！！！
        try{
            if(parent.frames.item('sIFrameTitle').document.getElementById('sContentEditable').style.backgroundColor==parent.frames.item('sIFrameTitle').sBackgroundColorForsContentsEditable){
                parent.frames.item('sIFrameTitle').document.getElementById('sContentEditable').style.backgroundColor="";
            }
        }
        catch(e){
            ;
        }
    **/

    if (event.srcElement.parentNode.attributes.getNamedItem("sFId").nodeValue == "") {
        try {
            parent.frames.item("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sNativeLanguage;
        }
        catch (e) {
            ;
        }
        if (event.srcElement.parentNode.parentNode === event.srcElement.parentNode.parentNode.parentNode.childNodes.item(0) && event.srcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
            // window.open("../options/contentStart.aspx", "sIframeContent", false);
            window.open("../options/contentStart.html", "sIframeContent", false);
            parent.document.getElementById("sIframeContent").contentWindow.location.href = "../options/contentStart.html";
        }
        else {
            var sText = event.srcElement.parentNode.attributes.getNamedItem("text").nodeValue;
            if (sText == "") {
                var oDate = new Date();
                var sFileName = oDate.getTime();
                event.srcElement.parentNode.setAttribute("text", sFileName);
                //暂时注释，待修改window.open("../common/createText.aspx?sFileName="+sFileName,"sIframeContent",false);
                //window.open("CreateText/Get?sFileName=" + sFileName, "sIframeContent", false);
                //parent.document.getElementById("sIframeContent").contentWindow.location.href = "CreateText/Get?sFileName=" + sFileName;
                parent.document.getElementById("sIframeContent").contentWindow.location.href = "/CreateText/Get?sFileName=" + sFileName;
                console.log(location.href);
            }
            else {
                //window.open("content/book/"+sText+"/"+sText+".htm","sIframeContent",true);	
                parent.document.getElementById("sIframeContent").contentWindow.location.href = "content/book/" + sText + "/" + sText + ".htm";
            }
        }
    }
    else {
        try {
            parent.document.getElementById("sIframeContent").contentWindow.document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sForeignLanguage;
        }
        catch (e) {
            ;
        }
        if (event.srcElement.parentNode.parentNode === event.srcElement.parentNode.parentNode.parentNode.childNodes.item(0) && event.srcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
            //window.open("../options/contentStart"+window.sPathPartForForeign+".aspx","sIframeContent",false);//已注释，待修改。
            //parent.document.getElementById("sIframeContent").contentWindow.location.href = "../options/contentStart" + window.sPathPartForForeign + ".html";
            parent.document.getElementById("sIframeContent").contentWindow.location.href = "/CreateText/Get?sFileName=" + sFileName;
        }
        else {
            var sTextF = event.srcElement.parentNode.attributes.getNamedItem("textF").nodeValue;
            if (sTextF == "") {
                var oDate = new Date();
                var sFileName = oDate.getTime();
                event.srcElement.parentNode.setAttribute("textF", sFileName);
                //window.open("../common/createTextForeign.aspx?sFileName="+sFileName,"sIframeContent",false);
                //parent.document.getElementById("sIframeContent").contentWindow.location.href = "../common/createTextForeign.aspx?sFileName=" + sFileName;
                parent.document.getElementById("sIframeContent").contentWindow.location.href = "/CreateText/Get?sFileName=" + sFileName;
            }
            else {
                //window.open("content/book_foreign/"+ sTextF+"/"+ sTextF+".htm","sIframeContent",true);
                parent.document.getElementById("sIframeContent").contentWindow.location.href = "content/book_foreign/" + sTextF + "/" + sTextF + ".htm";
            }
        }
    }
    //var sGroup=event.srcElement.attributes.getNamedItem("sGroup").nodeValue;
    var cSPAN = document.getElementsByTagName("SPAN");
    var iSPANLength = cSPAN.length;
    for (i = 0; i < iSPANLength; i++) {
        if (window.getComputedStyle(cSPAN.item(i)).color.replace(/\s*/g, "") == window.sColorClicked)//replace方法去除空格
        {
            cSPAN.item(i).style.color = window.sColorNormal;
            break;
        }
        else {
            ;
        }
    }
    event.srcElement.style.color = window.sColorClicked;//不能放到函数开始部分是因为“内容框架”编辑后没有保存离开而提示是否保存而选择“取消”后当前事件条目不应该变色。
}
//catch(e)
//{
//return;
//}

//}


function fnCreateChild() {
    fnForUndo();
    if (window.oSrcElement.parentNode.parentNode.getElementsByTagName("IMG").item(0).src.indexOf("/common/image/no.gif") > 0) {//使用window.oSrcElement.parentNode.childNodes.length==2)时出现奇怪现象，只好改用判断图标
        var oLiCloned = window.document.getElementsByTagName("li").item(0).cloneNode(false);//由于LI元素将动态生成一些特性，所以复制更方便,在此复制第一条目
        oLiCloned.removeAttribute("style");//去除动态生成的一些特性；
        oLiCloned.style.display = "list-item";
        var oImageCloned = window.document.getElementsByTagName("IMG").item(0).cloneNode(false);//由于IMG元素将动态生成一些特性，所以复制更方便    
        var oACloned = window.document.getElementsByTagName("A").item(0).cloneNode(true);//由于A元素将动态生成一些特性，所以复制更方便
        var oSpanClonedNumber = window.document.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(0).cloneNode(true);
        var oSpanClonedItem = window.document.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(1).cloneNode(true);
        oSpanClonedItem.removeAttribute("style");//去除动态生成的一些特性；
        //var oUl=document.createElement("<UL></UL>");
        var oUl = document.createElement("UL");
        var oInsertUl = window.oSrcElement.parentNode.parentNode.appendChild(oUl);
        var oInsertLi = oInsertUl.appendChild(oLiCloned);
        oInsertLi.appendChild(oImageCloned);
        var oInsertA = oInsertLi.appendChild(oACloned);
        oLiCloned.getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = "新建条目";//奇怪,不能直接使用oInsertSpan,oInsertA等
        oLiCloned.getElementsByTagName("A").item(0).setAttribute("sN", oLiCloned.getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue);//添加一个国语属性,属性值等于节点值
        oLiCloned.getElementsByTagName("A").item(0).setAttribute("sF", "");//第一条目可能有外语,必须清除;
        oLiCloned.getElementsByTagName("A").item(0).setAttribute("sFId", "");//第一条目可能已切换为外语,必须清除;
        window.oSrcElement.parentNode.parentNode.getElementsByTagName("IMG").item(0).addEventListener("click", fnDynOutline, false);//改写的，如果不增加此代码，图标单击无法动态伸缩。	    
        fnContentsRefreshAFromAlreadyAutoNumbered();
        fnContentsRefreshImage();
        //document.getElementById("sIdUndo").disabled=false;//已不支持
    }
    else {
        alert("该条目已有子条目,不需要创建!");
        return;
    }
}


function fnInsertBefore() {//参看fnCreateChild()
    fnForUndo();
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目,前面不能插入其它条目!");
        return;
    }
    else {
        var oLiCloned = window.document.getElementsByTagName("li").item(0).cloneNode(false);
        oLiCloned.removeAttribute("style");
        oLiCloned.style.display = "list-item";
        var oImageCloned = window.document.getElementsByTagName("IMG").item(0).cloneNode(false);
        var oACloned = window.document.getElementsByTagName("A").item(0).cloneNode(false);
        var oSpanClonedNumber = window.document.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(0).cloneNode(true);
        var oSpanClonedItem = window.document.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(1).cloneNode(true);
        oSpanClonedItem.removeAttribute("style");//去除动态生成的一些特性；
        //oACloned.href=parent.sLessonsPath;
        var oInsertedLi = window.oSrcElement.parentNode.parentNode.parentNode.insertBefore(oLiCloned, window.oSrcElement.parentNode.parentNode);
        var oInsertedIMG = oInsertedLi.appendChild(oImageCloned);
        var oInsertedA = oInsertedLi.appendChild(oACloned);
        var oInsertedSpanNumber = oInsertedA.appendChild(oSpanClonedNumber);
        var oInsertedSpanItem = oInsertedA.appendChild(oSpanClonedItem);
        oLiCloned.getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = "新建条目";
        oLiCloned.getElementsByTagName("A").item(0).setAttribute("sN", oLiCloned.getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue);
        oLiCloned.getElementsByTagName("A").item(0).setAttribute("sF", "");
        oLiCloned.getElementsByTagName("A").item(0).setAttribute("sFId", "");
        fnContentsRefreshAFromAlreadyAutoNumbered();
        fnContentsRefreshImage();
        document.getElementById("sIdUndo").disabled = false;
    }

}

function fnAppend() {//参看fnCreateChild()
    fnForUndo();
    //var oLiCloned=window.document.getElementsByTagName("li").item(0).cloneNode(false);//由于LI元素将动态生成一些特性，所以复制更方便
    //oLiCloned.removeAttribute("style");//去除动态生成的一些特性；
    //oLiCloned.style.display="list-item";
    //var oImageCloned=window.document.getElementsByTagName("IMG").item(0).cloneNode(false);//由于IMG元素将动态生成一些特性，所以复制更方便
    //var oACloned=window.document.getElementsByTagName("A").item(0).cloneNode(true);//由于A元素将动态生成一些特性，所以复制更方便
    //oACloned.removeAttribute("style");//去除动态生成的一些特性；
    //oACloned.href=parent.sLessonsPath;
    //var oInsertedLi=window.oSrcElement.parentNode.parentNode.appendChild(oLiCloned);
    //oInsertedLi.appendChild(oImageCloned);
    //oInsertedLi.appendChild(oACloned);
    //oACloned.childNodes.item(0).nodeValue="新建条目";
    fnContentsRefreshAFromAlreadyAutoNumbered();
    fnContentsRefreshImage();
    document.getElementById("sIdUndo").disabled = false;

    var oLiCloned = window.document.getElementsByTagName("li").item(0).cloneNode(false);
    oLiCloned.removeAttribute("style");
    oLiCloned.style.display = "list-item";
    var oImageCloned = window.document.getElementsByTagName("IMG").item(0).cloneNode(false);
    var oACloned = window.document.getElementsByTagName("A").item(0).cloneNode(false);
    var oSpanClonedNumber = window.document.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(0).cloneNode(true);
    var oSpanClonedItem = window.document.getElementsByTagName("A").item(0).getElementsByTagName("SPAN").item(1).cloneNode(true);
    oSpanClonedItem.removeAttribute("style");//去除动态生成的一些特性；
    //oACloned.href=parent.sLessonsPath;
    var oInsertedLi = window.oSrcElement.parentNode.parentNode.parentNode.appendChild(oLiCloned);
    var oInsertedIMG = oInsertedLi.appendChild(oImageCloned);
    var oInsertedA = oInsertedLi.appendChild(oACloned);
    var oInsertedSpanNumber = oInsertedA.appendChild(oSpanClonedNumber);
    var oInsertedSpanItem = oInsertedA.appendChild(oSpanClonedItem);
    oLiCloned.getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = "新建条目";
    oLiCloned.getElementsByTagName("A").item(0).setAttribute("sN", oLiCloned.getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue);
    oLiCloned.getElementsByTagName("A").item(0).setAttribute("sF", "");
    oLiCloned.getElementsByTagName("A").item(0).setAttribute("sFId", "");
    fnContentsRefreshAFromAlreadyAutoNumbered();
    fnContentsRefreshImage();
    document.getElementById("sIdUndo").disabled = false;

}

function fnModifyValue() {
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    else {
        fnForUndo();
        window.oSrcElement.firstChild.nodeValue = window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
        window.oSrcElement.parentNode.setAttribute("sFId", "");
        var sNewValue = prompt("请键入新" + window.sNativeLanguage + "文本,请注意文本中不包括自动编号的数字!因为中英文可能同时使用，所以在此并不判断您键入的是否为" + window.sNativeLanguage + "！", window.oSrcElement.childNodes.item(0).nodeValue);
        if (sNewValue === null) {//取消情形
            fnUndo();
            return;
        }
        else {
            if (sNewValue === "") {
                alert("不能为空!");
                fnUndo();
                return;
            }
            else {
                window.oSrcElement.childNodes.item(0).nodeValue = sNewValue;
                window.oSrcElement.parentNode.setAttribute("sN", sNewValue);
                window.oSrcElement.parentNode.setAttribute("sFId", "");
                parent.frames.item("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sNativeLanguage;
                document.getElementById("sIdUndo").disabled = false;
            }
        }
    }
    window.oSrcElement.click();
}

function fnModifyValue_Foreign() {
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    else {
        fnForUndo();
        if (window.oSrcElement.parentNode.attributes.getNamedItem("sF").nodeValue == "") {
            window.oSrcElement.firstChild.nodeValue = "Input Foreign Language,please!";
        }
        else {
            window.oSrcElement.firstChild.nodeValue = window.oSrcElement.parentNode.attributes.getNamedItem("sF").nodeValue;
        }
        var sNewValue = prompt("请键入新" + window.sForeignLanguage + "文本,请注意文本中不包括自动编号的数字!因为中英文可能同时使用，所以在此并不判断您键入的是否为" + window.sForeignLanguage + "！", window.oSrcElement.childNodes.item(0).nodeValue);
        if (sNewValue === null) {
            fnUndo();
            return;
        }
        else {
            if (sNewValue === "") {
                alert("不能为空!");
                fnUndo();
                return;
            }
            else {
                window.oSrcElement.childNodes.item(0).nodeValue = sNewValue;
                window.oSrcElement.parentNode.setAttribute("sF", sNewValue);
                window.oSrcElement.parentNode.setAttribute("sFId", "1");
                parent.frames.item("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sForeignLanguage;
                document.getElementById("sIdUndo").disabled = false;
            }
        }
    }
}


function fnForUndo() {
    window.sTempForUndo = document.getElementById("sDiv").innerHTML;
}

function fnForRedo() {
    window.sTempForRedo = document.getElementById("sDiv").innerHTML;
}


function fnPromote() {
    window.sTempForUndo = document.getElementById("sDiv").innerHTML;
    if (window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {//第一级条目无法再升级
        alert("该条目不能再被提升!");
        return;
    }
    else {//不是第一级条目
        if (window.oSrcElement.parentNode.parentNode.parentNode.childNodes.length == 1) {//window.oSrcElement.parentNode.parentNode.parentNode是UL，LI无兄弟节点的情形，必须删除<UL><LI>...</LI></UL>
            var oCloned = window.oSrcElement.parentNode.parentNode.cloneNode(true);
            var oInserted = window.oSrcElement.parentNode.parentNode.parentNode.parentNode.parentNode.insertBefore(oCloned, window.oSrcElement.parentNode.parentNode.parentNode.parentNode.nextSibling);
            //window.oSrcElement.parentNode.parentNode.parentNode.removeNode(true);//去除<UL><LI>...</LI></UL>;//已不支持，改写
            window.oSrcElement.parentNode.parentNode.parentNode.parentNode.removeChild(window.oSrcElement.parentNode.parentNode.parentNode);
        }
        else {//LI有兄弟节点的情形
            var cLi = window.oSrcElement.parentNode.parentNode.parentNode.childNodes;//
            var iLiLength = cLi.length;
            var iTarget = 0;
            for (var i = 0; i < iLiLength; i++) {
                if (cLi.item(i) === window.oSrcElement.parentNode.parentNode) {
                    iTarget = i;
                    break;
                }
            }
            var aArray = new Array();
            for (j = 0; j < iLiLength - iTarget - 1; j++) {//将欲升级条目的子条目保存为一个数组备用。
                var iStart = iTarget;
                aArray[j] = window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(j + iStart + 1);
            }
            var oInserted;
            if (window.oSrcElement.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes.length == 1) {
                oInserted = window.oSrcElement.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(window.oSrcElement.parentNode.parentNode.cloneNode(true));
            }
            else {
                //alert(window.oSrcElement.parentNode.parentNode.parentNode.parentNode.nextSibling.innerHTML);
                oInserted = window.oSrcElement.parentNode.parentNode.parentNode.parentNode.parentNode.insertBefore(window.oSrcElement.parentNode.parentNode.cloneNode(true), window.oSrcElement.parentNode.parentNode.parentNode.parentNode.nextSibling);
            }

            if (aArray.length >= 1) {
                if (oInserted.childNodes.item(0).src.lastIndexOf("common/image/no.gif") > 0) {//如升级的LI元素不含有子条目
                    //var oUL=document.createElement("<UL></UL>");
                    var oUL = document.createElement("UL");
                    var oInsertedNow = oInserted.appendChild(oUL);
                    var iLengthaArray = aArray.length;
                    for (var k = 0; k < iLengthaArray; k++) {		//不能再用i，注意变量范围
                        oInsertedNow.appendChild(aArray[k]);
                    }
                }
                else {

                    var iLengthaArray = aArray.length;
                    for (var k = 0; k < iLengthaArray; k++) {
                        oInserted.getElementsByTagName("UL").item(0).appendChild(aArray[k]);
                    }
                }
            }
            else {
                ;
            }
            if (iTarget == 0) {
                //window.oSrcElement.parentNode.parentNode.parentNode.removeNode(true);//此时是一系列LI的第一个LI升级时，其父的父也是LI，并且现在已没有子LI，此时必须删除<ul>//已不支持，改写
                window.oSrcElement.parentNode.parentNode.parentNode.parentNode.removeChild(window.oSrcElement.parentNode.parentNode.parentNode);//此时是一系列LI的第一个LI升级时，其父的父也是LI，并且现在已没有子LI，此时必须删除<ul>//
            }
            else {
                ;
            }
            //window.oSrcElement.parentNode.parentNode.removeNode(true);//已不支持，改写
            window.oSrcElement.parentNode.parentNode.parentNode.removeChild(window.oSrcElement.parentNode.parentNode);
            var sWillReplacedUL = "<UL>";
            var oRegExpReplaceUL = new RegExp(sWillReplacedUL, "g");
            document.getElementById("sDiv").innerHTML = document.getElementById("sDiv").innerHTML.replace(oRegExpReplaceUL, " <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。																					}
        }
        fnContentsRefreshAFromAlreadyAutoNumbered();
        fnContentsRefreshImage();
        //document.getElementById("sIdUndo").disabled=false;	//已不支持
    }
}


function fnDemote() {
    fnForUndo();
    var iLength = window.oSrcElement.parentNode.parentNode.parentNode.childNodes.length;
    var oCloned = window.oSrcElement.parentNode.parentNode.cloneNode(true);
    var iTarget = 0;
    for (i = 0; i < iLength; i++) {
        if (window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(i) === window.oSrcElement.parentNode.parentNode) {
            iTarget = i;
            break;
        }
    }

    if (iTarget === 0) {
        alert("该条目不能再被降级!");
        return;
    }
    else {
        if (window.oSrcElement.parentNode.parentNode.previousSibling.childNodes.item(0).src.indexOf("/common/image/no.gif") > 0) {

            //var oUl=document.createElement("<UL></UL>");
            var oUl = document.createElement("UL");
            var oInserted = window.oSrcElement.parentNode.parentNode.previousSibling.appendChild(oUl);
            oInserted.appendChild(window.oSrcElement.parentNode.parentNode.cloneNode(true));
            // window.oSrcElement.parentNode.parentNode.removeNode(true);//已不支持，已改写。
            window.oSrcElement.parentNode.parentNode.parentNode.removeChild(window.oSrcElement.parentNode.parentNode);
            var sWillReplacedUL = "<UL>";
            var oRegExpReplaceUL = new RegExp(sWillReplacedUL, "g");
            document.getElementById("sDiv").innerHTML = document.getElementById("sDiv").innerHTML.replace(oRegExpReplaceUL, " <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
        }
        else {

            var oInserted = window.oSrcElement.parentNode.parentNode.previousSibling.getElementsByTagName("UL").item(0).appendChild(window.oSrcElement.parentNode.parentNode.cloneNode(true));
            if (window.oSrcElement.parentNode.parentNode.previousSibling.childNodes.item(0).src.indexOf("/common/image/plus.gif") > 0) {
                oInserted.style.display = "none";
            }
            else {
                oInserted.style.display = "list-item";//可能是继承的原因，该语句不能省！
            }
            //window.oSrcElement.parentNode.parentNode.removeNode(true);//已不支持，改写
            window.oSrcElement.parentNode.parentNode.parentNode.removeChild(window.oSrcElement.parentNode.parentNode);
        }

        fnContentsRefreshAFromAlreadyAutoNumbered();
        fnContentsRefreshImage();
        //document.getElementById("sIdUndo").disabled=false;
    }
}


function fnCopy() {
    window.sTempForCopy = window.oSrcElement.parentNode.parentNode.innerHTML;
}

function fnCut() {
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被剪切!");
        return;
    }
    else {
        var bConfirm = confirm("确定要剪切吗?");
        if (bConfirm) {
            fnForUndo();
            fnCopy();
            //window.sTempForUndo=document.getElementById("sDiv").innerHTML;
            //window.sTempForCopy=window.oSrcElement.parentNode.innerHTML;
            if (window.oSrcElement.parentNode.parentNode.parentNode.childNodes.length > 1) {
                window.oSrcElement.parentNode.parentNode.removeNode(true);
            }
            else {
                window.oSrcElement.parentNode.parentNode.parentNode.removeNode(true);
            }
            fnContentsRefreshAFromAlreadyAutoNumbered();
            fnContentsRefreshImage();
            document.getElementById("sIdUndo").disabled = false;
        }

        else {
            return;
        }
    }

}

function fnDel() {
    fnForUndo();
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被删除!");
        return;
    }
    else {
        var bConfirm = confirm("确定要删除吗?");
        if (bConfirm) {
            if (window.oSrcElement.parentNode.parentNode.parentNode.childNodes.length > 1) {
                //window.oSrcElement.parentNode.parentNode.removeNode(true);//已不支持，改为removeChild
                window.oSrcElement.parentNode.parentNode.parentNode.removeChild(window.oSrcElement.parentNode.parentNode);
            }
            else {
                // window.oSrcElement.parentNode.parentNode.parentNode.removeNode(true);//已不支持，改为removeChild
                window.oSrcElement.parentNode.parentNode.parentNode.parentNode.removeChild(window.oSrcElement.parentNode.parentNode.parentNode)
            }
            fnContentsRefreshAFromAlreadyAutoNumbered();
            fnContentsRefreshImage();
            //document.getElementById("sIdUndo").disabled=false;//已不支持
        }
        else {
            return;
        }

    }

}


/** function fnInsertCopiedTemp() {
    alert("请先复制，才能插入粘贴");
}**/

function fnInsertCopied() {//参看fnCreateChild()
    if (window.sTempForCopy == "") {
        alert("请先复制，才能插入粘贴");
        return;
    }
    else {
        fnForUndo();
        if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
            alert("该条目是根条目,前面不能插入其它条目!");
            return;
        }
        else {
            //var oWillInserted=document.createElement("<LI></LI>");
            var oWillInserted = document.createElement("LI");
            oWillInserted.style.display = "list-item";
            oWillInserted.unelectable = "on";
            var oInserted = window.oSrcElement.parentNode.parentNode.parentNode.insertBefore(oWillInserted, window.oSrcElement.parentNode.parentNode);
            oInserted.innerHTML = window.sTempForCopy;
            var sWillReplacedUL = "<UL>";
            var oRegExpReplaceUL = new RegExp(sWillReplacedUL, "g");
            document.getElementById("sDiv").innerHTML = document.getElementById("sDiv").innerHTML.replace(oRegExpReplaceUL, " <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
            fnContentsRefreshAFromAlreadyAutoNumbered();
            fnContentsRefreshImage();
            document.getElementById("sIdUndo").disabled = false;
        }

    }
}

/**function fnAppendCopiedTemp() {
    alert("请先复制，才能附加粘贴");
}**/

function fnAppendCopied() {//参看fnCreateChild()
    if (window.sTempForCopy == "") {
        alert("请先复制，才能附加粘贴");
        return;
    }
    else {
        fnForUndo();
        //var oWillInserted=document.createElement("<LI></LI>");
        var oWillInserted = document.createElement("LI");
        oWillInserted.style.display = "list-item";
        oWillInserted.unelectable = "on";
        oInserted = window.oSrcElement.parentNode.parentNode.parentNode.appendChild(oWillInserted);
        oInserted.innerHTML = window.sTempForCopy;
        var sWillReplacedUL = "<UL>";
        var oRegExpReplaceUL = new RegExp(sWillReplacedUL, "g");
        document.getElementById("sDiv").innerHTML = document.getElementById("sDiv").innerHTML.replace(oRegExpReplaceUL, " <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
        fnContentsRefreshAFromAlreadyAutoNumbered();
        fnContentsRefreshImage();
        document.getElementById("sIdUndo").disabled = false;
    }
}

function fnUndo() {
    if (window.sTempForUndo == "") {
        return;
    }
    else {
        fnForRedo();
        document.getElementById("sDiv").innerHTML = window.sTempForUndo;//事件等特性未能出现在innerHTML字符串中，必须重新设置这些特性。注意innerHTML中href也由相对URL解析为了绝对URL
        fnContentsRefreshAFromAlreadyAutoNumbered();
        fnContentsRefreshImage();
        document.getElementById("sIdUndo").disabled = true;
        window.sTempForUndo = ""
    }
}



function fnRedo() {
    if (window.sTempForRedo == "") {
        return;
    }
    else {
        document.getElementById("sDiv").innerHTML = window.sTempForRedo;//事件等特性未能出现在innerHTML字符串中，必须重新设置这些特性。注意innerHTML中href也由相对URL解析为了绝对URL
        fnContentsRefreshAFromAlreadyAutoNumbered();
        fnContentsRefreshImage();
        document.getElementById("sIdRedo").disabled = true;
        window.sTempForRedo = "";
    }
}


function fnIsSaved() {
    if (!fnIsContentsChanged()) {
        //event.returnValue="";
        ;
    }
    else {
        event.returnValue = '您已在线编辑了“目录”或您的一些操作自动修改了“目录”，单击“确定”将不保存编辑结果而关闭当前目录;单击“取消”将不关闭当前目录而返回,返回后，目录框架的右击菜单（编辑状态）中选择"保存"可保存目录！';
    }
}



function fnFindAndView(sResourceType, sResourcePathPart,sResourceName, sResourceFileExtensionNameWithDot) { 
   console.log(sResourceType + "|" + sResourcePathPart + "|" + sResourceName + "|"+sResourceFileExtensionNameWithDot);
    var cLi = document.getElementsByTagName("LI");
    var intLiLength = cLi.length;
    var intCurrentNum = -1;

    for (var i = 0; i < intLiLength; i++) {
        if (cLi[i].getElementsByTagName("SPAN").item(1).style.color.replace(/\s*/g, "") == window.sColorClicked) {
            intCurrentNum = i;//确定当前条目
            break;
        }
    }
    //从头开始查询
        var bIsTargeted = false;
        var intTargetNum = -1;
        for (var ii = 0; ii < intLiLength; ii++) {
            if (cLi[ii].getElementsByTagName("A").item(0).getAttribute(sResourceType) == sResourcePathPart) { bIsTargeted = true; intTargetNum = ii; break; }
        }
        if (bIsTargeted) {
            //cLi[intTargetNum].getElementsByTagName("SPAN").item(1).click();
            cLi[intTargetNum].scrollIntoView(true);
            if (intTargetNum == 0) {
                cLi[intTargetNum].getElementsByTagName("SPAN").item(1).click();
            }
            else {
                cLi[intTargetNum].getElementsByTagName("SPAN").item(1).click();
                var oTemp = cLi[intTargetNum];
                while (oTemp.parentNode.parentNode.nodeName != "DIV") {
                    var cChildNodesTemp = oTemp.parentNode.childNodes;
                    for (intR = 0; intR < cChildNodesTemp.length; intR++) {
                        if (cChildNodesTemp[intR].nodeName == "LI") {
                            cChildNodesTemp[intR].style.display = "list-item";
                            if (cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif") > 0) {
                                if (cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display == "list-item") {
                                    cChildNodesTemp[intR].childNodes[0].src = "../common/image/plusTran.gif";
                                }
                            }
                        }
                    }
                    oTemp = oTemp.parentNode;
                }

                if (oTemp.childNodes[0].src.lastIndexOf("plus.gif") > 0 && oTemp.getElementsByTagName("SPAN").item(1).style.color.replace(/\s*/g, "") != window.sColorClicked) {
                    oTemp.childNodes[0].src = "../common/image/plusTran.gif";
                }
            }
            console.log(sResourceType.toUpperCase());
            switch (sResourceType.toUpperCase()) {
                case "TEXT": { return; break; }
                case "PLAY": {fnViewTeachingVideo(); break; }
                case "TEACHINGPLAN": { fnViewTeachingPlan(); break;}
                case "S2D": { fnViewTeaching2D(); break; }
                case "S3D": { fnViewTeaching3D(); break;}
                case "HOMEWORKANDTEST": { fnViewHomeworkAndTest(); break;}
                case "TEACHINGENGINEERING": { fnViewTeachingEngineering(); break;}
                default: { var win = open("../common/blank.html", "NoResult", "width=400,height=300,top=" + (screen.height - 300) / 2 + ",left=" + (screen.width - 400) / 2); win.document.write("<p style='text-align:center'>没有查询到相关资源！</p>"); }//alert窗口容易被遮挡。所以没选用  
            }
        }
        else {
           // alert("没有查询到" + sResourceName);
            var win = open("../common/blank.html", "NoResult", "width=400,height=300,top=" + (screen.height - 300) / 2 + ",left=" + (screen.width - 400) / 2); win.document.write("<p style='text-align:center'>没有查询到相关资源！</p>");//alert窗口容易被遮挡。所以没选用
        }
    }

      


function fnViewText() {
    //window.oSrcElement.click();
    fnTooManyModelDialog(); 
    var sPathPartForText = "";
    var sLanguage = "";
    var sTextName = "";

    if (window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue == "") {
        sPathPartForText = "";
        sLanguage = window.sNativeLanguage;
        sTextName = window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;

    }
    else {
        sPathPartForText = window.sPathPartForForeign;
        sLanguage = window.sForeignLanguage;
        sTextName = window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;
    }

    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        var sText = "../options/contentStart" + sPathPartForText + ".html";
        //showModelessDialog(sText, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?已不支持，改写
        //open(sText, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");

        var win = open(sText, "Textbook", "help:0;resizable:1;dialogWidth:" + screen.width * 0.8 + "px;dialogHeight:" + screen.height * 0.8 + "px;status:0;");
        window.childWindow = win;
    }
    else {
        if (sTextName == "") {
            alert("该条目没有" + sLanguage + "教材资源");
            return;
        }
        else {
            alert('教材资源默认在“内容框架”中显示，而不象教学PPT、动画、教/学笔记那样在独立窗口中显示。当前操作将在独立窗口中显示教材资源，主要用于多部分教材资源比较时使用。此时右键菜单中提供的在线编辑等功能将被禁用！但仍然可试验按住Ctrl,Shift,Alt键滚动鼠标而放缩、移动课文等功能！');
            //var sHeadUrl = "/webcourse/lessons/";//因为github发布可能增加路径部分，所以改写。
            var sHeadUrl = "../lessons/";
            var sText = sHeadUrl + "content/book" + sPathPartForText + "/" + sTextName + "/" + sTextName + ".htm";
            //showModelessDialog(sText, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?
            //open(sText, window, "help:0;resizable:1;dialogWidth:" + screen.width * 0.8 + "px;dialogHeight:" + screen.height * 0.8 + "px;status:0;");
            var win = open(sText, "Textbook", "help:0;resizable:1;dialogWidth:" + screen.width * 0.8 + "px;dialogHeight:" + screen.height * 0.8 + "px;status:0;");
            window.childWindow = win;
            window.oSrcElement.click();
        }
    }
}

function fnViewTeachingVideo() {
    fnTooManyModelDialog(); 
    window.oSrcElement.click();
    //if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV")
    //{
    //		alert("该条目是根条目，没有教学视频!");		
    //}
    //else
    //{
  
        var sTeachingPlanName = window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue;
        if (sTeachingPlanName == "") {
            var bBoolean = confirm('该条目"' + window.oSrcElement.childNodes.item(0).nodeValue + '"暂时没有教学视频!单击"确定"将打开“资源概览”窗口查看教学视频；单击"取消"将退出，然后可通过右键菜单中的命令为该条目上传教学视频');
            if (bBoolean) {
                fnGeneral();                              
            }
        }
        else {
            window.oSrcElement.parentNode.setAttribute("sFId", "");
            window.oSrcElement.childNodes.item(0).nodeValue = window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
            //parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue=window.sNativeLanguage;//因为无法获取Title框架，暂时注释，需改写。								
           // var sHeadUrl = "";
             //var sHeadUrl = "/webcourse/lessons/";//因为github发布可能增加路径部分，所以改写。
            var sHeadUrl = "../lessons/";
            var sTeachingPlanName = window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue;
            //window.sTeachingPlan=sHeadUrl+"content/teachingPlan/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";				 
            window.sTeachingPlan = sHeadUrl + "content/teachingVideo/" + sTeachingPlanName + "/" + sTeachingPlanName + ".mp4"
            //showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");//已不支持，改写
            var win=open("../common/ViewTeachingVideo.html", "TeachingVideo", "help:0;resizable:1;dialogWidth:" + screen.width * 0.8 + "px;dialogHeight:" + screen.height * 0.5 + "px;status:0;");
            window.childWindow = win;
        }
    }

    function fnViewTeaching2D() {
    fnTooManyModelDialog(); 
    window.oSrcElement.click();
    //if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV")
    //{
    //		alert("该条目是根条目，没有教学视频!");		
    //}
    //else
    //{
        var sTeachingPlanName = window.oSrcElement.parentNode.attributes.getNamedItem("s2d").nodeValue;
        if (sTeachingPlanName == "") {
            var bBoolean = confirm('该条目"' + window.oSrcElement.childNodes.item(0).nodeValue + '"暂时没有教学2D!单击"确定"将打开“资源概览”窗口查看教学2D；单击"取消"将退出，然后可通过右键菜单中的命令为该条目上传教学2D');
            if (bBoolean) {
                fnGeneral();                              
            }
        }
        else {
            window.oSrcElement.parentNode.setAttribute("sFId", "");
            window.oSrcElement.childNodes.item(0).nodeValue = window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
            //parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue=window.sNativeLanguage;//因为无法获取Title框架，暂时注释，需改写。								
           // var sHeadUrl = "";
            //var sHeadUrl = "/webcourse/lessons/";//因为github发布可能增加路径部分，所以改写。
            var sHeadUrl = "../lessons/";
            var sTeachingPlanName = window.oSrcElement.parentNode.attributes.getNamedItem("s2d").nodeValue;
            //window.sTeachingPlan=sHeadUrl+"content/teachingPlan/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";				 
            window.sTeachingPlan = sHeadUrl + "content/teaching2D/" + sTeachingPlanName + "/" + sTeachingPlanName + ".svgz"
            //showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");//已不支持，改写
            var win=open("../common/ViewTeaching2D.html", "Teaching2D", "help:0;resizable:1;dialogWidth:" + screen.width * 0.8 + "px;dialogHeight:" + screen.height * 0.5 + "px;status:0;");
            window.childWindow = win;
        }
    }

        function fnViewTeaching3D() {
    fnTooManyModelDialog(); 
    window.oSrcElement.click();
    //if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV")
    //{
    //		alert("该条目是根条目，没有教学视频!");		
    //}
    //else
    //{
  
        var sTeachingPlanName = window.oSrcElement.parentNode.attributes.getNamedItem("s3d").nodeValue;
        if (sTeachingPlanName == "") {
            var bBoolean = confirm('该条目"' + window.oSrcElement.childNodes.item(0).nodeValue + '"暂时没有教学3D!单击"确定"将打开“资源概览”窗口查看教学3D；单击"取消"将退出，然后可通过右键菜单中的命令为该条目上传教学3D');
            if (bBoolean) {
                fnGeneral();                              
            }
        }
        else {
            window.oSrcElement.parentNode.setAttribute("sFId", "");
            window.oSrcElement.childNodes.item(0).nodeValue = window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
            //parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue=window.sNativeLanguage;//因为无法获取Title框架，暂时注释，需改写。								
           // var sHeadUrl = "";
           //var sHeadUrl = "/webcourse/lessons/";//因为github发布可能增加路径部分，所以改写。
            var sHeadUrl = "../lessons/";
            var sTeachingPlanName = window.oSrcElement.parentNode.attributes.getNamedItem("s3d").nodeValue;
            //window.sTeachingPlan=sHeadUrl+"content/teachingPlan/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";				 
            window.sTeachingPlan = sHeadUrl + "content/teaching3D/" + sTeachingPlanName + "/" + sTeachingPlanName + ".x3dv"
            //showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");//已不支持，改写
           // var win=open(window.sTeachingPlan, "Teaching3D", "help:0;resizable:1;dialogWidth:" + screen.width * 0.8 + "px;dialogHeight:" + screen.height * 0.5 + "px;status:0;");
           var win=open("../common/ViewTeaching3D.html", "Teaching3D", "help:0;resizable:1;dialogWidth:" + screen.width * 0.8 + "px;dialogHeight:" + screen.height * 0.5 + "px;status:0;");
            window.childWindow = win;
        }
    }

function fnViewTeachingPlan() {
    fnTooManyModelDialog(); 
    window.oSrcElement.click();
    //if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV")
    //{
    //		alert("该条目是根条目，没有教学PPT!");		
    //}
    //else
    //{
    if (window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue == "") {//国语状态
        var sTeachingPlanName = window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue;
        if (sTeachingPlanName == "") {
            var bBoolean = confirm('该条目"' + window.oSrcElement.childNodes.item(0).nodeValue + '"暂时没有教学PPT!单击"确定"将循环查询后续条目的教学PPT；单击"取消"将退出，然后可通过右键菜单中的命令为该条目上传教学PPT，当前不支持在线编辑教学PPT。');
            if (bBoolean) {
                fnGeneral();
            }
        }
        else {
            window.oSrcElement.parentNode.setAttribute("sFId", "");
            window.oSrcElement.childNodes.item(0).nodeValue = window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
            //parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue=window.sNativeLanguage;//因为无法获取Title框架，暂时注释，需改写。								
            //var sHeadUrl = "";
           //var sHeadUrl = "/webcourse/lessons/";//因为github发布可能增加路径部分，所以改写。
            var sHeadUrl = "../lessons/";
            var sTeachingPlanName = window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue;
            //window.sTeachingPlan=sHeadUrl+"content/teachingPlan/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";				 
            window.sTeachingPlan = sHeadUrl + "content/teachingPlan/" + sTeachingPlanName + "/" + sTeachingPlanName + ".pptx"
            window.sVideoOfTeachingPlan = sHeadUrl + "content/teachingPlan/" + sTeachingPlanName + "/" + sTeachingPlanName + ".mp4";
            //alert(window.sTeachingPlan + "；" + window.sVideoOfTeachingPlan + "；" + sHeadUrl + "；"+ sTeachingPlanName);
            var win = open("../common/ViewTeachingPPT.html", "TeachingPPT", "help:0;resizable:1;dialogWidth:" + screen.width * 0.8 + "px;dialogHeight:" + screen.height * 0.6 + "px;status:0;");
            window.childWindow = win;
        }
    }
}

function fnViewHomeworkAndTest() {
    fnTooManyModelDialog(); 
    window.oSrcElement.click();
    //if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV")
    //{
    //		alert("该条目是根条目，没有教学视频!");		
    //}
    //else
    //{

    var sHomeworkAndTest = window.oSrcElement.parentNode.getAttribute("homeworkAndTest");
    if (sHomeworkAndTest == "" || sHomeworkAndTest == null) {
        var bBoolean = confirm('该条目"' + window.oSrcElement.childNodes.item(0).nodeValue + '"暂时没有作业与测试!单击"确定"将打开“资源概览”窗口查看作业与测验；单击"取消"将退出，然后可通过右键菜单中的命令为该条目上传作业与测验');
        if (bBoolean) {
            fnGeneral();
        }
    }
    else {
        window.oSrcElement.parentNode.setAttribute("sFId", "");
        window.oSrcElement.childNodes.item(0).nodeValue = window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
        //parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue=window.sNativeLanguage;//因为无法获取Title框架，暂时注释，需改写。								
        // var sHeadUrl = "";
        //var sHeadUrl = "/webcourse/lessons/";//因为github发布可能增加路径部分，所以改写。
         var sHeadUrl = "../lessons/";
        //var sTeachingPlanName = window.oSrcElement.parentNode.getAttribute("homeworkAndTest");
        //window.sTeachingPlan=sHeadUrl+"content/teachingPlan/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";				 
        window.sHomeworkAndTest = sHeadUrl + "content/HomeworkAndTest/" + sHomeworkAndTest + "/" + sHomeworkAndTest + ".htm"
        //showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");//已不支持，改写
        var win = open(window.sHomeworkAndTest, "HomeworkAndTest", "help:0;resizable:1;dialogWidth:" + screen.width * 0.8 + "px;dialogHeight:" + screen.height * 0.5 + "px;status:0;");
        window.childWindow = win;
    }
}

function fnViewTeachingEngineering() {
    fnTooManyModelDialog(); 
    window.oSrcElement.click();
    //if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV")
    //{
    //		alert("该条目是根条目，没有教学视频!");		
    //}
    //else
    //{

    var sTeachingEngineering = window.oSrcElement.parentNode.getAttribute("teachingEngineering");
    if (sTeachingEngineering == "" || sTeachingEngineering == null) {
        var bBoolean = confirm('该条目"' + window.oSrcElement.childNodes.item(0).nodeValue + '"暂时没有教学工程文档!单击"确定"将打开“资源概览”窗口查看教学教学工程文档；单击"取消"将退出，然后可通过右键菜单中的命令为该条目上传教学工程文档');
        if (bBoolean) {
            fnGeneral();
        }
    }
    else {
        window.oSrcElement.parentNode.setAttribute("sFId", "");
        window.oSrcElement.childNodes.item(0).nodeValue = window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
        //parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue=window.sNativeLanguage;//因为无法获取Title框架，暂时注释，需改写。								
        // var sHeadUrl = "";
           //var sHeadUrl = "/webcourse/lessons/";//因为github发布可能增加路径部分，所以改写。
           var sHeadUrl = "../lessons/";
        //var sTeachingPlanName = window.oSrcElement.parentNode.getAttribute("homeworkAndTest");
        //window.sTeachingPlan=sHeadUrl+"content/teachingPlan/"+sTeachingPlanName+"/"+sTeachingPlanName+".htm";				 
        window.sTeachingEngineering = sHeadUrl + "content/teachingEngineering/" + sTeachingEngineering + "/" + sTeachingEngineering + ".htm"
        //showModelessDialog("../common/windowOrFullScreen_techingPlan.aspx", window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.5+"px;status:0;");//已不支持，改写
        var win = open(window.sTeachingEngineering, "TeachingEngineering", "help:0;resizable:1;dialogWidth:" + screen.width * 0.8 + "px;dialogHeight:" + screen.height * 0.5 + "px;status:0;");
        window.childWindow = win;
    }
}



function fnViewAnimationAll() {
    if (fnDetectActiveXControl('webEdu.pptplayer')) {
        window.oSrcElement.click();
        /*if(window.oSrcElement.parentNode.parentNode===window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0)&&window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase()==="DIV"){
                alert("该条目是根条目，没有动画!");		
        }
        else{*/
        if (window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue == "") {//国语状态
            window.sCurrentLanguageForPlayAll = "";
            var iAnimation = 0;
            var cA = document.getElementsByTagName("A");
            var intA = cA.length;
            for (var z = 0; z < intA; z++) {
                if (cA[z].attributes.getNamedItem("play").nodeValue != "") {
                    iAnimation = iAnimation + 1;
                }
            }
            alert("总共有" + iAnimation + "个条目有" + window.sNativeLanguage + "动画!将以窗口方式循环播放所有动画!");
            var sAnimationName = window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue;
            if (sAnimationName == "") {
                var cLi = document.getElementsByTagName("LI");
                var intLi = cLi.length;
                var intTarget = -1;

                for (var i = 0; i < intLi; i++) {
                    if (cLi[i].getElementsByTagName("SPAN").item(1).style.color == window.sColorClicked) {
                        intTarget = i;//确定当前条目
                        break;
                    }
                }
                var bIsHave = false;
                if (intTarget == intLi - 1) {//已经是最后一个条目，从头开始查询
                    for (var j = 0; j < intLi; j++) {
                        if (cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue != "") {
                            cLi[j].getElementsByTagName("A").item(0).setAttribute("sFId", "");
                            cLi[j].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;
                            parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sNativeLanguage;
                            cLi[j].getElementsByTagName("SPAN").item(1).click();
                            cLi[j].scrollIntoView(true);
                            if (j == 0) {
                                cLi[j].getElementsByTagName("SPAN").item(1).click();
                            }
                            else {
                                cLi[j].getElementsByTagName("SPAN").item(1).click();
                                var oTemp = cLi[j];
                                while (oTemp.parentNode.parentNode.nodeName != "DIV") {
                                    var cChildNodesTemp = oTemp.parentNode.childNodes;
                                    for (intR = 0; intR < cChildNodesTemp.length; intR++) {
                                        if (cChildNodesTemp[intR].nodeName == "LI") {
                                            cChildNodesTemp[intR].style.display = "list-item";
                                            if (cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif") > 0) {
                                                if (cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display == "list-item") {
                                                    cChildNodesTemp[intR].childNodes[0].src = "../common/image/plusTran.gif";
                                                }
                                            }
                                        }
                                    }
                                    oTemp = oTemp.parentNode;

                                }

                                if (oTemp.childNodes[0].src.lastIndexOf("plus.gif") > 0 && oTemp.getElementsByTagName("SPAN").item(1).style.color != window.sColorClicked) {
                                    oTemp.childNodes[0].src = "../common/image/plusTran.gif";
                                }
                            }
                            var sHeadUrl = "";
                            //open(sHeadUrl+'/webCourse/common/windowOrFullScreen_Animation_all.asp',"sAnimationLoop","fullscreen=no,left="+screen.width*0.2/2+",top="+screen.height*0.5/2+",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=yes,status=no,resizable=yes,copyhistory=no,width="+screen.width*0.8+"px,height="+screen.height*0.5+"px,false");	
                            //open(sHeadUrl+'/webCourse/common/flashPlayer/flashPlayer.asp',"sAnimationLoop","fullscreen=yes");	
                            var iWidth = (4 / 3) * (screen.height - 25 - 30);
                            showModelessDialog(sHeadUrl + '../common/flashPlayer/flashPlayerWindow.aspx', window, "help:0;resizable:1;dialogWidth:" + iWidth + "px;dialogHeight:" + screen.height + "px;dialogLeft:" + (screen.width - iWidth) / 2 + "px;dialogTop:" + screen.height * 0 / 2 + "px;status:0;");
                            bIsHave = true;
                            break;
                        }
                    }
                    if (!bIsHave) {
                        alert("没有查询到" + window.sNativeLanguage + "动画");
                    }
                }
                else {
                    var bIsHaveNew = false;
                    for (var k = intTarget + 1; k < intLi; k++) {
                        if (cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue != "") {
                            cLi[k].getElementsByTagName("A").item(0).setAttribute("sFId", "");
                            cLi[k].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;
                            parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sNativeLanguage;
                            cLi[k].getElementsByTagName("SPAN").item(1).click();
                            cLi[k].scrollIntoView(true);
                            if (k == 0) {
                                cLi[k].getElementsByTagName("SPAN").item(1).click();
                            }
                            else {
                                cLi[k].getElementsByTagName("SPAN").item(1).click();
                                var oTemp = cLi[k];
                                while (oTemp.parentNode.parentNode.nodeName != "DIV") {
                                    var cChildNodesTemp = oTemp.parentNode.childNodes;
                                    for (intR = 0; intR < cChildNodesTemp.length; intR++) {
                                        if (cChildNodesTemp[intR].nodeName == "LI") {
                                            cChildNodesTemp[intR].style.display = "list-item";
                                            if (cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif") > 0) {
                                                if (cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display == "list-item") {
                                                    cChildNodesTemp[intR].childNodes[0].src = "../common/image/plusTran.gif";
                                                }
                                            }
                                        }
                                    }
                                    oTemp = oTemp.parentNode;

                                }

                                if (oTemp.childNodes[0].src.lastIndexOf("plus.gif") > 0 && oTemp.getElementsByTagName("SPAN").item(1).style.color != window.sColorClicked) {
                                    oTemp.childNodes[0].src = "../common/image/plusTran.gif";
                                }
                            }
                            var sHeadUrl = "";
                            var iWidth = (4 / 3) * (screen.height - 25 - 30);
                            showModelessDialog(sHeadUrl + '../common/flashPlayer/flashPlayerWindow.aspx', window, "help:0;resizable:1;dialogWidth:" + iWidth + "px;dialogHeight:" + screen.height + "px;dialogLeft:" + (screen.width - iWidth) / 2 + "px;dialogTop:" + screen.height * 0 / 2 + "px;status:0;");
                            bIsHaveNew = true;
                            break;
                        }
                    }
                    if (!bIsHaveNew) {//到最后都没有，从头开始查询
                        var bIsHaveNewNew = false;
                        for (var l = 0; l < intLi; l++) {
                            if (cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("play").nodeValue != "") {
                                cLi[l].getElementsByTagName("A").item(0).setAttribute("sFId", "");
                                cLi[l].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;
                                parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sNativeLanguage;
                                cLi[l].getElementsByTagName("SPAN").item(1).click();
                                cLi[l].scrollIntoView(true);
                                if (l == 0) {
                                    cLi[l].getElementsByTagName("SPAN").item(1).click();
                                }
                                else {
                                    cLi[l].getElementsByTagName("SPAN").item(1).click();
                                    var oTemp = cLi[l];
                                    while (oTemp.parentNode.parentNode.nodeName != "DIV") {
                                        var cChildNodesTemp = oTemp.parentNode.childNodes;
                                        for (intR = 0; intR < cChildNodesTemp.length; intR++) {
                                            if (cChildNodesTemp[intR].nodeName == "LI") {
                                                cChildNodesTemp[intR].style.display = "list-item";
                                                if (cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif") > 0) {
                                                    if (cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display == "list-item") {
                                                        cChildNodesTemp[intR].childNodes[0].src = "../common/image/plusTran.gif";
                                                    }
                                                }
                                            }
                                        }
                                        oTemp = oTemp.parentNode;

                                    }

                                    if (oTemp.childNodes[0].src.lastIndexOf("plus.gif") > 0 && oTemp.getElementsByTagName("SPAN").item(1).style.color != window.sColorClicked) {
                                        oTemp.childNodes[0].src = "../common/image/plusTran.gif";
                                    }
                                }
                                var sHeadUrl = "";
                                var iWidth = (4 / 3) * (screen.height - 25 - 30);
                                showModelessDialog(sHeadUrl + '../common/flashPlayer/flashPlayerWindow.aspx', window, "help:0;resizable:1;dialogWidth:" + iWidth + "px;dialogHeight:" + screen.height + "px;dialogLeft:" + (screen.width - iWidth) / 2 + "px;dialogTop:" + screen.height * 0 / 2 + "px;status:0;");
                                bIsHaveNewNew = true;
                                break;
                            }
                        }
                        if (!bIsHaveNewNew) {
                            alert("没有查询到" + window.sNativeLanguage + "动画");
                        }
                    }
                }

            }
            else {
                window.oSrcElement.parentNode.setAttribute("sFId", "");
                window.oSrcElement.childNodes.item(0).nodeValue = window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
                parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sNativeLanguage;
                var sHeadUrl = "";
                var iWidth = (4 / 3) * (screen.height - 25 - 30);
                showModelessDialog(sHeadUrl + '../common/flashPlayer/flashPlayerWindow.aspx', window, "help:0;resizable:1;dialogWidth:" + iWidth + "px;dialogHeight:" + screen.height + "px;dialogLeft:" + (screen.width - iWidth) / 2 + "px;dialogTop:" + screen.height * 0 / 2 + "px;status:0;");
            }
        }
        else if (window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue == "1") {//外语状态
            window.sCurrentLanguageForPlayAll = "1";
            var iAnimation = 0;
            var cA = document.getElementsByTagName("A");
            var intA = cA.length;
            for (var z = 0; z < intA; z++) {
                if (cA[z].attributes.getNamedItem("playF").nodeValue != "") {
                    iAnimation = iAnimation + 1;
                }
            }
            alert("总共有" + iAnimation + "个条目有" + window.sForeignLanguage + "动画!将以窗口方式循环播放所有动画!");
            var sAnimationName = window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue;
            if (sAnimationName == "") {
                var cLi = document.getElementsByTagName("LI");
                var intLi = cLi.length;
                var intTarget = -1;

                for (var i = 0; i < intLi; i++) {
                    if (cLi[i].getElementsByTagName("SPAN").item(1).style.color == window.sColorClicked) {
                        intTarget = i;//确定当前条目
                        break;
                    }
                }
                var bIsHave = false;
                if (intTarget == intLi - 1) {//已经是最后一个条目，从头开始查询
                    for (var j = 0; j < intLi; j++) {
                        if (cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue != "") {
                            cLi[j].getElementsByTagName("A").item(0).setAttribute("sFId", "1");
                            var sPromptNoForeignLanguage = "Sorry,Only Chinese at This Item!";
                            if (cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue == "") {
                                cLi[j].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = sPromptNoForeignLanguage;
                            }
                            else {
                                cLi[j].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
                            }
                            parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sForeignLanguage;
                            cLi[j].getElementsByTagName("SPAN").item(1).click();
                            cLi[j].scrollIntoView(true);
                            if (j == 0) {
                                cLi[j].getElementsByTagName("SPAN").item(1).click();
                            }
                            else {
                                cLi[j].getElementsByTagName("SPAN").item(1).click();
                                var oTemp = cLi[j];
                                while (oTemp.parentNode.parentNode.nodeName != "DIV") {
                                    var cChildNodesTemp = oTemp.parentNode.childNodes;
                                    for (intR = 0; intR < cChildNodesTemp.length; intR++) {
                                        if (cChildNodesTemp[intR].nodeName == "LI") {
                                            cChildNodesTemp[intR].style.display = "list-item";
                                            if (cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif") > 0) {
                                                if (cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display == "list-item") {
                                                    cChildNodesTemp[intR].childNodes[0].src = "../common/image/plusTran.gif";
                                                }
                                            }
                                        }
                                    }
                                    oTemp = oTemp.parentNode;

                                }

                                if (oTemp.childNodes[0].src.lastIndexOf("plus.gif") > 0 && oTemp.getElementsByTagName("SPAN").item(1).style.color != window.sColorClicked) {
                                    oTemp.childNodes[0].src = "../common/image/plusTran.gif";
                                }
                            }
                            var sHeadUrl = "";
                            var iWidth = (4 / 3) * (screen.height - 25 - 30);
                            showModelessDialog(sHeadUrl + '../common/flashPlayer/flashPlayerWindow.aspx', window
                                , "help:0;resizable:1;dialogWidth:" + iWidth + "px;dialogHeight:" + screen.height + "px;dialogLeft:" + (screen.width - iWidth) / 2 + "px;dialogTop:" + screen.height * 0 / 2 + "px;status:0;");
                            bIsHave = true;
                            break;
                        }
                    }
                    if (!bIsHave) {
                        alert("没有查询到" + window.sForeignLanguage + "动画");
                    }
                }
                else {
                    var bIsHaveNew = false;
                    for (var k = intTarget + 1; k < intLi; k++) {
                        if (cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue != "") {
                            cLi[k].getElementsByTagName("A").item(0).setAttribute("sFId", "1");
                            var sPromptNoForeignLanguage = "Sorry,Only Chinese at This Item!";
                            if (cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue == "") {
                                cLi[k].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = sPromptNoForeignLanguage;
                            }
                            else {
                                cLi[k].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
                            }
                            parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sForeinLanguage;
                            cLi[k].getElementsByTagName("SPAN").item(1).click();
                            cLi[k].scrollIntoView(true);
                            if (k == 0) {
                                cLi[k].getElementsByTagName("SPAN").item(1).click();
                            }
                            else {
                                cLi[k].getElementsByTagName("SPAN").item(1).click();
                                var oTemp = cLi[k];
                                while (oTemp.parentNode.parentNode.nodeName != "DIV") {
                                    var cChildNodesTemp = oTemp.parentNode.childNodes;
                                    for (intR = 0; intR < cChildNodesTemp.length; intR++) {
                                        if (cChildNodesTemp[intR].nodeName == "LI") {
                                            cChildNodesTemp[intR].style.display = "list-item";
                                            if (cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif") > 0) {
                                                if (cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display == "list-item") {
                                                    cChildNodesTemp[intR].childNodes[0].src = "../common/image/plusTran.gif";
                                                }
                                            }
                                        }
                                    }
                                    oTemp = oTemp.parentNode;

                                }

                                if (oTemp.childNodes[0].src.lastIndexOf("plus.gif") > 0 && oTemp.getElementsByTagName("SPAN").item(1).style.color != window.sColorClicked) {
                                    oTemp.childNodes[0].src = "../common/image/plusTran.gif";
                                }
                            }
                            var sHeadUrl = "";
                            var iWidth = (4 / 3) * (screen.height - 25 - 30);
                            showModelessDialog(sHeadUrl + '../common/flashPlayer/flashPlayerWindow.aspx', window
                                , "help:0;resizable:1;dialogWidth:" + iWidth + "px;dialogHeight:" + screen.height + "px;dialogLeft:" + (screen.width - iWidth) / 2 + "px;dialogTop:" + screen.height * 0 / 2 + "px;status:0;");
                            bIsHaveNew = true;
                            break;
                        }
                    }
                    if (!bIsHaveNew) {//到最后都没有，从头开始查询
                        var bIsHaveNewNew = false;
                        for (var l = 0; l < intLi; l++) {
                            if (cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("playF").nodeValue != "") {
                                cLi[l].getElementsByTagName("A").item(0).setAttribute("sFId", "1");
                                var sPromptNoForeignLanguage = "Sorry,Only Chinese at This Item!";
                                if (cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue == "") {
                                    cLi[l].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = sPromptNoForeignLanguage;
                                }
                                else {
                                    cLi[l].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
                                }
                                parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sForeignLanguage;
                                cLi[l].getElementsByTagName("SPAN").item(1).click();
                                cLi[l].scrollIntoView(true);
                                if (l == 0) {
                                    cLi[l].getElementsByTagName("SPAN").item(1).click();
                                }
                                else {
                                    cLi[l].getElementsByTagName("SPAN").item(1).click();
                                    var oTemp = cLi[l];
                                    while (oTemp.parentNode.parentNode.nodeName != "DIV") {
                                        var cChildNodesTemp = oTemp.parentNode.childNodes;
                                        for (intR = 0; intR < cChildNodesTemp.length; intR++) {
                                            if (cChildNodesTemp[intR].nodeName == "LI") {
                                                cChildNodesTemp[intR].style.display = "list-item";
                                                if (cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif") > 0) {
                                                    if (cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display == "list-item") {
                                                        cChildNodesTemp[intR].childNodes[0].src = "../common/image/plusTran.gif";
                                                    }
                                                }
                                            }
                                        }
                                        oTemp = oTemp.parentNode;

                                    }

                                    if (oTemp.childNodes[0].src.lastIndexOf("plus.gif") > 0 && oTemp.getElementsByTagName("SPAN").item(1).style.color != window.sColorClicked) {
                                        oTemp.childNodes[0].src = "../common/image/plusTran.gif";
                                    }
                                }
                                var sHeadUrl = "";
                                var iWidth = (4 / 3) * (screen.height - 25 - 30);
                                showModelessDialog(sHeadUrl + '../common/flashPlayer/flashPlayerWindow.aspx', window
                                    , "help:0;resizable:1;dialogWidth:" + iWidth + "px;dialogHeight:" + screen.height + "px;dialogLeft:" + (screen.width - iWidth) / 2 + "px;dialogTop:" + screen.height * 0 / 2 + "px;status:0;");
                                bIsHaveNewNew = true;
                                break;
                            }
                        }
                        if (!bIsHaveNewNew) {
                            alert("没有查询到" + window.sForeignLanguage + "动画");
                        }
                    }
                }

            }
            else {
                window.oSrcElement.parentNode.setAttribute("sFId", "1");
                var sPromptNoForeignLanguage = "Sorry,Only Chinese at This Item!";
                if (window.oSrcElement.parentNode.attributes.getNamedItem('sF').nodeValue == "") {
                    window.oSrcElement.childNodes.item(0).nodeValue = sPromptNoForeignLanguage;
                }
                else {
                    window.oSrcElement.childNodes.item(0).nodeValue = window.oSrcElement.parentNode.attributes.getNamedItem('sF').nodeValue;
                }
                parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sForeignLanguage;
                var sHeadUrl = "";
                var iWidth = (4 / 3) * (screen.height - 25 - 30);
                showModelessDialog(sHeadUrl + '../common/flashPlayer/flashPlayerWindow.aspx', window
                    , "help:0;resizable:1;dialogWidth:" + iWidth + "px;dialogHeight:" + screen.height + "px;dialogLeft:" + (screen.width - iWidth) / 2 + "px;dialogTop:" + screen.height * 0 / 2 + "px;status:0;");
            }
        }
        //}
    }//存在组件
    else {
        if (confirm("需要安装播放器组件才能正常查看动画播放,请下载安装.\"确定\"将前往下载页面.")) {
            showModelessDialog("../common/DownloadActiveX/DownloadActiveX.htm", window, "help:0;resizable:1;dialogWidth:450px;dialogHeight:250px;status:0;");//为了在线编辑，打开框架网页。	

        }


    }

}

function fnNote() {
    window.oSrcElement.click();
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，没有教/学笔记!");
    }
    else {
        var sNote = window.oSrcElement.parentNode.attributes.getNamedItem("sNote").nodeValue;
        if (sNote == "") {
            var bBoolean = confirm('该条目"' + window.oSrcElement.childNodes.item(0).nodeValue + '"暂时没有教/学笔记!单击"确定"将循环查询后续条目的动画；单击"取消"将退出，并自动创建默认内容的教/学笔记,然后可在线编辑。');
            if (bBoolean) {
                var cLi = document.getElementsByTagName("LI");
                var intLi = cLi.length;
                var intTarget = -1;

                for (var i = 0; i < intLi; i++) {
                    if (cLi[i].getElementsByTagName("SPAN").item(1).style.color == window.sColorClicked) {
                        intTarget = i;//确定当前条目
                        break;
                    }
                }
                var bIsHave = false;
                if (intTarget == intLi - 1) {//已经是最后一个条目，从头开始查询
                    for (var j = 0; j < intLi; j++) {
                        if (cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("sNote").nodeValue != "") {
                            cLi[j].getElementsByTagName("SPAN").item(1).click();
                            cLi[j].scrollIntoView(true);
                            if (j == 0) {
                                cLi[j].getElementsByTagName("SPAN").item(1).click();
                            }
                            else {
                                cLi[j].getElementsByTagName("SPAN").item(1).click();
                                var oTemp = cLi[j];
                                while (oTemp.parentNode.parentNode.nodeName != "DIV") {
                                    var cChildNodesTemp = oTemp.parentNode.childNodes;
                                    for (intR = 0; intR < cChildNodesTemp.length; intR++) {
                                        if (cChildNodesTemp[intR].nodeName == "LI") {
                                            cChildNodesTemp[intR].style.display = "list-item";
                                            if (cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif") > 0) {
                                                if (cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display == "list-item") {
                                                    cChildNodesTemp[intR].childNodes[0].src = "../common/image/plusTran.gif";
                                                }
                                            }
                                        }
                                    }
                                    oTemp = oTemp.parentNode;

                                }

                                if (oTemp.childNodes[0].src.lastIndexOf("plus.gif") > 0 && oTemp.getElementsByTagName("SPAN").item(1).style.color != window.sColorClicked) {
                                    oTemp.childNodes[0].src = "../common/image/plusTran.gif";
                                }
                            }
                            alert('已查询到"' + cLi[j].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue + '"条目的教/学笔记!');
                            var sHeadUrl = "";
                            //var sHeadUrl="";
                            var sNote = cLi[j].getElementsByTagName("A").item(0).attributes.getNamedItem("sNote").nodeValue;
                            var sNoteURL = sHeadUrl + "/note/" + sNote + "/" + sNote + ".htm";
                            //showModelessDialog(sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?	
                            showModelessDialog("../common/noteIframe.aspx?sNoteURL=" + sNoteURL, window, "help:0;resizable:1;dialogWidth:" + screen.width * 0.8 + "px;dialogHeight:" + screen.height * 0.8 + "px;status:0;");//为了在线编辑，打开框架网页。	
                            bIsHave = true;
                            break;
                        }
                    }
                    if (!bIsHave) {
                        alert("没有查询到教/学笔记!");
                    }
                }
                else {
                    var bIsHaveNew = false;
                    for (var k = intTarget + 1; k < intLi; k++) {
                        if (cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("sNote").nodeValue != "") {
                            cLi[k].getElementsByTagName("SPAN").item(1).click();
                            cLi[k].scrollIntoView(true);
                            if (k == 0) {
                                cLi[k].getElementsByTagName("SPAN").item(1).click();
                            }
                            else {
                                cLi[k].getElementsByTagName("SPAN").item(1).click();
                                var oTemp = cLi[k];
                                while (oTemp.parentNode.parentNode.nodeName != "DIV") {
                                    var cChildNodesTemp = oTemp.parentNode.childNodes;
                                    for (intR = 0; intR < cChildNodesTemp.length; intR++) {
                                        if (cChildNodesTemp[intR].nodeName == "LI") {
                                            cChildNodesTemp[intR].style.display = "list-item";
                                            if (cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif") > 0) {
                                                if (cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display == "list-item") {
                                                    cChildNodesTemp[intR].childNodes[0].src = "../common/image/plusTran.gif";
                                                }
                                            }
                                        }
                                    }
                                    oTemp = oTemp.parentNode;

                                }

                                if (oTemp.childNodes[0].src.lastIndexOf("plus.gif") > 0 && oTemp.getElementsByTagName("SPAN").item(1).style.color != window.sColorClicked) {
                                    oTemp.childNodes[0].src = "../common/image/plusTran.gif";
                                }
                            }
                            alert('已查询到"' + cLi[k].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue + '"条目的教/学笔记!');
                            var sHeadUrl = "";
                            //var sHeadUrl="";
                            var sNote = cLi[k].getElementsByTagName("A").item(0).attributes.getNamedItem("sNote").nodeValue;
                            var sNoteURL = sHeadUrl + "../lessons/content/note/" + sNote + "/" + sNote + ".htm";
                            //showModelessDialog(sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?	
                            showModelessDialog("../common/noteIframe.aspx?sNoteURL=" + sNoteURL, window, "help:0;resizable:1;dialogWidth:" + screen.width * 0.8 + "px;dialogHeight:" + screen.height * 0.8 + "px;status:0;");//为了在线编辑，打开框架网页。	
                            bIsHaveNew = true;
                            break;
                        }
                    }
                    if (!bIsHaveNew) {//到最后都没有，从头开始查询
                        var bIsHaveNewNew = false;
                        for (var l = 0; l < intLi; l++) {
                            if (cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("sNote").nodeValue != "") {
                                cLi[l].getElementsByTagName("SPAN").item(1).click();
                                cLi[l].scrollIntoView(true);
                                if (l == 0) {
                                    cLi[l].getElementsByTagName("SPAN").item(1).click();
                                }
                                else {
                                    cLi[l].getElementsByTagName("SPAN").item(1).click();
                                    var oTemp = cLi[l];
                                    while (oTemp.parentNode.parentNode.nodeName != "DIV") {
                                        var cChildNodesTemp = oTemp.parentNode.childNodes;
                                        for (intR = 0; intR < cChildNodesTemp.length; intR++) {
                                            if (cChildNodesTemp[intR].nodeName == "LI") {
                                                cChildNodesTemp[intR].style.display = "list-item";
                                                if (cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif") > 0) {
                                                    if (cChildNodesTemp[intR].getElementsByTagName("LI").item(0).style.display == "list-item") {
                                                        cChildNodesTemp[intR].childNodes[0].src = "../common/image/plusTran.gif";
                                                    }
                                                }
                                            }
                                        }
                                        oTemp = oTemp.parentNode;

                                    }

                                    if (oTemp.childNodes[0].src.lastIndexOf("plus.gif") > 0 && oTemp.getElementsByTagName("SPAN").item(1).style.color != window.sColorClicked) {
                                        oTemp.childNodes[0].src = "../common/image/plusTran.gif";
                                    }
                                }
                                alert('已查询到"' + cLi[l].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue + '"条目的教/学笔记!');
                                var sHeadUrl = "";
                                //var sHeadUrl="";
                                var sNote = cLi[l].getElementsByTagName("A").item(0).attributes.getNamedItem("sNote").nodeValue;
                                var sNoteURL = sHeadUrl + "../lessons/content/note/" + sNote + "/" + sNote + ".htm";
                                //showModelessDialog(sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?	
                                showModelessDialog("../common/noteIframe.aspx?sNoteURL=" + sNoteURL, window, "help:0;resizable:1;dialogWidth:" + screen.width * 0.8 + "px;dialogHeight:" + screen.height * 0.8 + "px;status:0;");//为了在线编辑，打开框架网页。	
                                bIsHaveNewNew = true;
                                break;
                            }
                        }
                        if (!bIsHaveNewNew) {
                            alert("没有查询到教/学笔记!");
                        }
                    }
                }

            }
            else {//创建教/学笔记
                var oDate = new Date();
                var sFileName = oDate.getTime();
                window.oSrcElement.parentNode.setAttribute("sNote", sFileName);
                //var dialogArguments=showModelessDialog(sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//以后准备实现程式窗口
                window.open("../common/saving.htm", "sCreatingNote", "fullscreen=0,left=" + screen.width * 0.5 / 2 + ",top=" + screen.height * 0.5 / 2 + ",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width=" + screen.width * 0.5 + ",height=" + screen.height * 0.5);//显示“正在保存...”，一直到保存目录的saveContents.asp网页的运行结果返回到该窗口，即“Saving”窗口
                window.open("../common/createNote.aspx?sFileName=" + sFileName, "sCreatingNote", false);
            }
        }
        else {
            var sNote = window.oSrcElement.parentNode.attributes.getNamedItem("sNote").nodeValue;
            var sHeadUrl = "";
            //var sHeadUrl="";
            var sNoteURL = sHeadUrl + "../lessons/content/note/" + sNote + "/" + sNote + ".htm";
            //showModelessDialog(sNoteURL, window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?	
            showModelessDialog("../common/noteIframe.aspx?sNoteURL=" + sNoteURL, window, "help:0;resizable:1;dialogWidth:" + screen.width * 0.8 + "px;dialogHeight:" + screen.height * 0.8 + "px;status:0;");//为了在线编辑，打开框架网页。	
        }
    }
}



/**改写，因为被framesetk控制滚动条 function fnToggleScrollBar() {
   
if(document.body.scroll=="no"){
	document.body.scroll="yes";
	document.body.onmousemove="";
	document.body.onmousedown="";
	document.body.onmouseup="";
    alert(document.body.scroll);
}   
else{
	document.body.scroll="no";
	document.body.onmousemove=window.fnPane;
	document.body.onmousedown=window.fnMouseDown;
	document.body.onmouseup=window.fnMouseUp;
}
}
*/
function fnToggleScrollBar() {

    if (parent.document.getElementById("sIframeContents").scrolling == "no") {
        parent.document.getElementById("sIframeContents").scrolling = "auto";
        window.onmousemove = "";
        window.onmousedown = "";
        window.onmouseup = "";

    }
    else {
        parent.document.getElementById("sIframeContents").scrolling = "no";
        window.onmousemove = window.fnPane;
        window.onmousedown = window.fnMouseDown;
        window.onmouseup = window.fnMouseUp;
    }
}

function fnRemoveUnusedFiles() {
    var cA = window.document.getElementsByTagName("A");
    var iALength = cA.length;
    var sTextString = "";
    var sTeachingPlanString = "";
    var sAnimationString = "";
    var sTextString_foreign = "";
    var sTeachingPlanString_foreign = "";
    var sAnimationString_foreign = "";
    var sNoteString = "";


    for (i = 0; i < iALength; i++) {
        sTextString = sTextString + cA.item(i).attributes.getNamedItem("text").nodeValue + ";";
        sTeachingPlanString = sTeachingPlanString + cA.item(i).attributes.getNamedItem("teachingPlan").nodeValue + ";";
        sAnimationString = sAnimationString + cA.item(i).attributes.getNamedItem("play").nodeValue + ";";
        sTextString_foreign = sTextString_foreign + cA.item(i).attributes.getNamedItem("textF").nodeValue + ";";
        sTeachingPlanString_foreign = sTeachingPlanString_foreign + cA.item(i).attributes.getNamedItem("teachingPlanF").nodeValue + ";";
        sAnimationString_foreign = sAnimationString_foreign + cA.item(i).attributes.getNamedItem("playF").nodeValue + ";";
        sNoteString = sNoteString + cA.item(i).attributes.getNamedItem("sNote").nodeValue + ";";
    }
    //var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sIdForm"></form>');//在Bottom框架动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.
    var oForm = parent.frames("sIframeBottom").document.createElement('form');
    oForm.outerHTML = '<form method="POST" action="" target="" id="sIdForm"></form>';
    //var oInput1=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sNameInput1" id="sIdInput1"></input>');
    var oInput1 = parent.frames("sIframeBottom").document.createElement('input');
    oInput1.outerHTML = '<input type="text" name="sNameInput1" id="sIdInput1"></input>';
    //var oInput2=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sNameInput2" id="sIdInput2"></input>');
    var oInput2 = parent.frames("sIframeBottom").document.createElement('input');
    oInput2.outerHTML = '<input type="text" name="sNameInput2" id="sIdInput2"></input>';
    //var oInput3=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sNameInput3" id="sIdInput3"></input>');
    var oInput3 = parent.frames("sIframeBottom").document.createElement('input');
    oInput3.outerHTML = '<input type="text" name="sNameInput3" id="sIdInput3"></input>';
    //var oInput4=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sNameInput4" id="sIdInput4"></input>');
    var oInput4 = parent.frames("sIframeBottom").document.createElement('input');
    oInput4.outerHTML = '<input type="text" name="sNameInput4" id="sIdInput4"></input>';
    //var oInput5=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sNameInput5" id="sIdInput5"></input>');
    var oInput5 = parent.frames("sIframeBottom").document.createElement('input');
    oInput5.outerHTML = '<input type="text" name="sNameInput5" id="sIdInput5"></input>';
    //var oInput6=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sNameInput6" id="sIdInput6"></input>');
    var oInput6 = parent.frames("sIframeBottom").document.createElement('input');
    oInput6.outerHTML = '<input type="text" name="sNameInput6" id="sIdInput6"></input>';
    //var oInput7=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sNameInput7" id="sIdInput7"></input>');
    var oInput7 = parent.frames("sIframeBottom").document.createElement('input');
    oInput7.outerHTML = '<input type="text" name="sNameInput7" id="sIdInput7"></input>';
    //var oInputSubmit=parent.frames("sIframeBottom").document.createElement('<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>');
    var oInputSubmit = parent.frames("sIframeBottom").document.createElement('input');
    oInputSubmit.outerHTML = '<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>';
    var oInsertForm = parent.frames("sIframeBottom").document.body.appendChild(oForm);
    var oInsertInput1 = oInsertForm.appendChild(oInput1);
    var oInsertInput2 = oInsertForm.appendChild(oInput2);
    var oInsertInput3 = oInsertForm.appendChild(oInput3);
    var oInsertInput4 = oInsertForm.appendChild(oInput4);
    var oInsertInput5 = oInsertForm.appendChild(oInput5);
    var oInsertInput6 = oInsertForm.appendChild(oInput6);
    var oInsertInput7 = oInsertForm.appendChild(oInput7);

    var oInsertInputSubmit = oInsertForm.appendChild(oInputSubmit);

    parent.frames("sIframeBottom").document.getElementById("sIdInput1").value = sTextString;
    parent.frames("sIframeBottom").document.getElementById("sIdInput2").value = sTeachingPlanString;
    parent.frames("sIframeBottom").document.getElementById("sIdInput3").value = sAnimationString;
    parent.frames("sIframeBottom").document.getElementById("sIdInput4").value = sTextString_foreign;
    parent.frames("sIframeBottom").document.getElementById("sIdInput5").value = sTeachingPlanString_foreign;
    parent.frames("sIframeBottom").document.getElementById("sIdInput6").value = sAnimationString_foreign;
    parent.frames("sIframeBottom").document.getElementById("sIdInput7").value = sNoteString;

    parent.frames("sIframeBottom").document.getElementById("sIdForm").action = "../common/removeUnusedFiles.aspx";
    window.open("../common/removingUnusedFiles.htm", "saving", "fullscreen=0,left=312,top=225,toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=no,copyhistory=no,width=400,height=300");//显示“正在保存...”，一直到保存目录的saveContents.asp网页的运行结果返回到该窗口，即“Saving”窗口
    parent.frames("sIframeBottom").document.getElementById("sIdForm").target = "saving";//目标窗口为一直显示“正在保存...”的窗口，如果保存成功将显示“已保存”并自动关闭。
    parent.frames("sIframeBottom").document.getElementById("sIdForm").submit();
    parent.frames("sIframeBottom").document.getElementById("sIdForm").removeNode("true");

}


function fnUploadText() {
    fnTooManyModelDialog();  
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    else {
        var sText = "";
        var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
        if (sFId == "") {
            sText = window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
        }
        else {
            sText = window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;
        }
        //alert('修改为如果是国语状态(即sFId=""),上传到book文件夹下,同时DOC源文件传到book_origin下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传);否则传到book_foreign文件夹下,同时DOC源文件传到book_origin_foreign下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传)。');
        showModalDialog('../common/uploadText/uploadText.asp?sText=' + sText + "&sFId=" + sFId, window, "help:0;resizable:1;dialogWidth:540px;dialogHeight:420px;status:0");
    }
    window.oSrcElement.click();//text和textF肯定不会为"";
    window.childWindow = win;
}


function fnUploadTeachingPlan() {
    fnTooManyModelDialog(); 
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    else {
        var sTeachingPlan = "";
        var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
        if (sFId == "") {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("teachingplan").nodeValue == "") {
                var oDate = new Date();
                sTeachingPlan = oDate.getTime();
                window.oSrcElement.parentNode.setAttribute("teachingplan", sTeachingPlan);
            }
            else {
                sTeachingPlan = window.oSrcElement.parentNode.attributes.getNamedItem("teachingplan").nodeValue;
            }
        }
        else {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("teachingplanF").nodeValue == "") {
                var oDate = new Date();
                sTeachingPlan = oDate.getTime();
                window.oSrcElement.parentNode.setAttribute("teachingplanF", sTeachingPlan);
            }
            else {
                sTeachingPlan = window.oSrcElement.parentNode.attributes.getNamedItem("teachingplanF").nodeValue;
            }
        }
        //alert('修改为如果是国语状态(即sFId=""),上传到teachingPlan文件夹下,同时DOC源文件传到teachingPlan_origin下，PPT源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户PPT源文件已同时上传);否则传到teachingPlan_foreign文件夹下,同时DOC源文件传到teachingPlan_origin_foreign下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传)。');
        showModalDialog('../common/uploadTeachingPlan/uploadTeachingPlan.aspx?sTeachingPlan=' + sTeachingPlan + "&sFId=" + sFId, window, "help:0;resizable:1;dialogWidth:540px;dialogHeight:360px;status:0");
    }
    window.oSrcElement.click();
    window.childWindow = win;
}

function fnUploadAnimation() {
    fnTooManyModelDialog(); 
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    else {
        var sAnimation = "";
        var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
        if (sFId == "") {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue == "") {
                var oDate = new Date();
                sAnimation = oDate.getTime();
                window.oSrcElement.parentNode.setAttribute("play", sAnimation);
            }
            else {
                sAnimation = window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue;
            }
        }
        else {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue == "") {
                var oDate = new Date();
                var sAnimation = oDate.getTime();
                window.oSrcElement.parentNode.setAttribute("playF", sAnimation);
            }
            else {
                var sAnimation = window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue;
            }
        }
        //alert(sAnimation);       
        //alert('修改为如果是国语状态(即sFId=""),上传到play文件夹下,同时FLA源文件传到play_origin下，FLA源文件和SWF文件使用相同的时间序号，因为是绑定在一起的(界面中提供选择FLA同时上传);否则传到play_foreign文件夹下,同时FLA源文件传到play_origin_foreign下，FLA源文件和SWF文件使用相同的时间序号，因为是绑定在一起的(界面中提供选择FLA同时上传)。');
        showModalDialog('../common/uploadAnimation/uploadAnimation.aspx?sAnimation=' + sAnimation + "&sFId=" + sFId, window, "help:0;resizable:1;dialogWidth:540px;dialogHeight:380px;status:0");
    }
    window.oSrcElement.click();
    window.childWindow = win;
}


//删除课文
function fnRemoveText() {
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    else {
        fnForUndo();
        var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
        if (sFId == "") {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue == "") {
                alert("该条目没有" + window.sNativeLanguage + "课文,不用删除!");
            }
            else {
                var bWillBeRemoved = window.confirm('将删除该条目的' + window.sNativeLanguage + '课文！单击"确定"删除,单击"取消"终止操作！');
                if (bWillBeRemoved) {
                    window.oSrcElement.parentNode.setAttribute("text", "");
                    //var oDate=new Date();
                    //var sFileName=oDate.getTime();
                    //window.oSrcElement.parentNode.setAttribute("text",sFileName);
                    //window.open("../common/createText.aspx?sFileName="+sFileName,"sIframeContent",true);
                    //parent.document.getElementById("sIframeContent").contentWindow.location.href = "/CreateText/Get?sFileName=" + sFileName;
                    window.oSrcElement.click();
                    //document.getElementById("sIdUndo").disabled=false;
                }
                else {
                    return;
                }
            }
        }
        else {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue == "") {
                alert("该条目没有" + window.sForeignLanguage + "课文,不用删除!");
            }
            else {
                var bWillBeRemoved = window.confirm('将删除该条目的' + window.sForeignLanguage + '课文！单击"确定"删除,单击"取消"终止操作！');
                if (bWillBeRemoved) {
                    window.oSrcElement.parentNode.setAttribute("textF", "");
                    window.open("../common/createTextForeign.aspx", "sIframeContent", true);
                    document.getElementById("sIdUndo").disabled = false;
                }
                else {
                    return;
                }
            }
        }
    }
}

function fnRemoveTeachingPlan() {
    window.oSrcElement.click();
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    else {
        fnForUndo();
        var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
        if (sFId == "") {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue == "") {
                alert("该条目没有" + window.sNativeLanguage + "教学PPT,不用删除!");
            }
            else {
                var bWillBeRemoved = window.confirm('将删除该条目的' + window.sNativeLanguage + '教学PPT！单击"确定"删除,单击"取消"终止操作！');
                if (bWillBeRemoved) {
                    window.oSrcElement.parentNode.setAttribute("teachingPlan", "");
                    document.getElementById("sIdUndo").disabled = false;
                }
                else {
                    return;
                }
            }
        }
        else {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlanF").nodeValue == "") {
                alert("该条目没有" + window.sForeignLanguage + "教学PPT,不用删除!");
            }
            else {
                var bWillBeRemoved = window.confirm('将删除该条目的' + window.sForeignLanguage + '教学PPT！单击"确定"删除,单击"取消"终止操作！');
                if (bWillBeRemoved) {
                    window.oSrcElement.parentNode.setAttribute("teachingPlanF", "");
                    document.getElementById("sIdUndo").disabled = false;
                }
                else {
                    return;
                }
            }
        }
    }
}

function fnRemoveAnimation() {
    window.oSrcElement.click();
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    else {
        fnForUndo();
        var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
        if (sFId == "") {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue == "") {
                alert("该条目没有" + window.sNativeLanguage + "动画,不用删除!");
            }
            else {
                var bWillBeRemoved = window.confirm('将删除该条目的' + window.sNativeLanguage + '动画！单击"确定"删除,单击"取消"终止操作！');
                if (bWillBeRemoved) {
                    window.oSrcElement.parentNode.setAttribute("play", "");
                    document.getElementById("sIdUndo").disabled = false;
                }
                else {
                    return;
                }
            }
        }
        else {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue == "") {
                alert("该条目没有" + window.sForeignLanguage + "动画,不用删除!");
            }
            else {
                var bWillBeRemoved = window.confirm('将删除该条目的' + window.sForeignLanguage + '动画！单击"确定"删除,单击"取消"终止操作！');
                if (bWillBeRemoved) {
                    window.oSrcElement.parentNode.setAttribute("playF", "");
                    document.getElementById("sIdUndo").disabled = false;
                }
                else {
                    return;
                }
            }
        }
    }
}

function fnRemoveNote() {
    window.oSrcElement.click();
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    else {
        fnForUndo();
        var sNote = window.oSrcElement.parentNode.attributes.getNamedItem("sNote").nodeValue;
        if (sNote == "") {
            alert("该条目没有教/学笔记,不用删除!");
        }
        else {
            var bWillBeRemoved = window.confirm('将删除该条目的教/学笔记,单击"确定"删除,单击"取消"终止操作！');
            if (bWillBeRemoved) {
                window.oSrcElement.parentNode.setAttribute("sNote", "");
                document.getElementById("sIdUndo").disabled = false;
            }
            else {
                return;
            }
        }
    }
}

function fnDownloadAnimation() {
    window.oSrcElement.click();
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能下载!");
        return;
    }
    else {
        var sAnimation = "";
        var sItemName = "";
        var sAutoNum = window.oSrcElement.parentNode.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue;
        var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
        if (sFId == "") {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue == "") {
                alert("该条目没有" + window.sNativeLanguage + "动画的源文件，无法下载!");
                return;
            }
            else {
                sAnimation = window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue;
                sItemName = window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
            }
        }
        else {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue == "") {
                alert("该条目没有" + window.sForeignLanguage + "动画的源文件，无法下载!");
                return;
            }
            else {
                sAnimation = window.oSrcElement.parentNode.attributes.getNamedItem("playF").nodeValue;
                sItemName = window.oSrcElement.parentNode.attributes.getNamedItem("sF").nodeValue;
                if (sItemName == "") {
                    sItemName = "无外文名";
                }
            }
        }
        //alert('sAnimation='+sAnimation+"&sFId="+sFId+"&sItemName="+sAutoNum+sItemName+';将调用的文件的相对URL是：域名/webCourse/common/downloadAnimation/downloadAnimation.asp;FLA源文件的整个文件夹下载，sFId=""时FLA源文件文件夹是play_origin；sFId="1"时FLA源文件文件夹是play_origin_foreign');
        showModalDialog('../common/downloadAnimation/downloadAnimation.asp?sAnimation=' + sAnimation + "&sFId=" + sFId + "&sItemName=" + sAutoNum + sItemName, window, "help:0;resizable:1;dialogWidth:560px;dialogHeight:360px;status:0");
    }
}

function fnDownloadTeachingPlan() {
    window.oSrcElement.click();
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能下载!");
        return;
    }
    else {
        var sTeachingPlan = "";
        var sItemName = "";
        var sAutoNum = window.oSrcElement.parentNode.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue;
        var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
        if (sFId == "") {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue == "") {
                alert("该条目没有" + window.sNativeLanguage + "教学PPT的源文件，无法下载!");
                return;
            }
            else {
                sTeachingPlan = window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlan").nodeValue;
                sItemName = window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
            }
        }
        else {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlanF").nodeValue == "") {
                alert("该条目没有" + window.sForeignLanguage + "教学PPT的源文件，无法下载!");
                return;
            }
            else {
                sTeachingPlan = window.oSrcElement.parentNode.attributes.getNamedItem("teachingPlanF").nodeValue;
                sItemName = window.oSrcElement.parentNode.attributes.getNamedItem("sF").nodeValue;
                if (sItemName == "") {
                    sItemName = "无外文名";
                }
            }
        }
        //alert('sTeachingPlan='+sTeachingPlan+"&sFId="+sFId+"&sItemName="+sAutoNum+sItemName+';将调用的文件的相对URL是：域名/webCourse/common/downloadTeachingPlan/downloadsTeachingPlan.asp;PPT源文件的整个文件夹下载，sFId=""时PPT源文件文件夹是teachingPlan_origin；sFId="1"时PPT源文件文件夹是teachingPlan_origin_foreign');
        showModalDialog('../common/downloadTeachingPlan/downloadTeachingPlan.asp?sTeachingPlan=' + sTeachingPlan + "&sFId=" + sFId + "&sItemName=" + sAutoNum + sItemName, window, "help:0;resizable:1;dialogWidth:560px;dialogHeight:360px;status:0");
    }
}
function fnDownloadText() {
    window.oSrcElement.click();
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能下载!");
        return;
    }
    else {
        var sText = "";
        var sItemName = "";
        var sAutoNum = window.oSrcElement.parentNode.getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue;
        var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
        if (sFId == "") {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue == "") {
                alert("该条目没有" + window.sNativeLanguage + "课文的源文件，无法下载!");
                return;
            }
            else {
                sText = window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
                sItemName = window.oSrcElement.parentNode.attributes.getNamedItem("sN").nodeValue;
            }
        }
        else {
            if (window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue == "") {
                alert("该条目没有" + window.sForeignLanguage + "课文的源文件，无法下载!");
                return;
            }
            else {
                sText = window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;
                sItemName = window.oSrcElement.parentNode.attributes.getNamedItem("sF").nodeValue;
            }
            if (sItemName == "") {
                sItemName = "无外文名";
            }
        }
        //alert('sText='+sText+"&sFId="+sFId+"&sItemName="+sAutoNum+sItemName+';将调用的文件的相对URL是：域名/webCourse/common/downloadText/downloadText.asp;DOC源文件的整个文件夹下载，sFId=""时DOC源文件文件夹是book_origin；sFId="1"时PPT源文件文件夹是book_origin_foreign');
        showModalDialog('../common/downloadText/downloadText.asp?sText=' + sText + "&sFId=" + sFId + "&sItemName=" + sAutoNum + sItemName, window, "help:0;resizable:1;dialogWidth:560px;dialogHeight:360px;status:0");
    }
}

/**因为无法获取标题窗口，暂时改写 function fnToggleContentsAutoNumber() {
    var cLi=document.getElementsByTagName("li");
var iLiLength=cLi.length;
    if (parent.document.getElementById("sIFrameTitle").contentWindow.document.getElementById("sIdToggleAutoNumber").childNodes.item(0).nodeValue=="目录有编号"){
	for(var i=0;i<iLiLength;i++){
		cLi[i].getElementsByTagName("SPAN").item(0).style.display="none";
        parent.document.getElementById("sIframeTitle").contentWindow.document.getElementById("sIdToggleAutoNumber").childNodes.item(0).nodeValue ="目录无编号"
								}
}
else{
	for(var i=0;i<iLiLength;i++){
	cLi[i].getElementsByTagName("SPAN").item(0).style.display="";
        parent.document.getElementById("sIframeTitle").contentWindow.document.getElementById("sIdToggleAutoNumber").childNodes.item(0).nodeValue ="目录有编号"
								}
}
}
**/
function fnToggleContentsAutoNumber() {
    var cLi = document.getElementsByTagName("li");
    var iLiLength = cLi.length;
    if (cLi[0].getElementsByTagName("SPAN").item(0).style.display != "none") {//以第一个条目作为判断，最好改写
        for (var i = 0; i < iLiLength; i++) {
            cLi[i].getElementsByTagName("SPAN").item(0).style.display = "none";
        }
    }
    else {
        for (var i = 0; i < iLiLength; i++) {
            cLi[i].getElementsByTagName("SPAN").item(0).style.display = "";
        }
    }
}

function fnToggleLanguageTitle() {
    var cSPAN = document.getElementsByTagName("SPAN");
    var iSPANLength = cSPAN.length;
    var oSpanTemp;
    for (i = 0; i < iSPANLength; i++) {
        if (cSPAN.item(i).style.color == window.sColorClicked) {
            oSpanTemp = cSPAN.item(i);
            break;
        }
        else {
            ;
        }
    }
    var sPromptNoForeignLanguage = "Sorry,Only Chinese at This Item!";
    if (oSpanTemp.parentNode.attributes.getNamedItem('sFId').nodeValue == "") {//说明现在是中文
        if (oSpanTemp.parentNode.attributes.getNamedItem('sF').nodeValue == "") {
            oSpanTemp.firstChild.nodeValue = sPromptNoForeignLanguage;
        }
        else {
            oSpanTemp.firstChild.nodeValue = oSpanTemp.parentNode.attributes.getNamedItem('sF').nodeValue;
        }
        oSpanTemp.parentNode.attributes.getNamedItem('sFId').nodeValue = "1";//1表示英文;
        parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sForeignLanguage;

    }
    else {
        oSpanTemp.firstChild.nodeValue = oSpanTemp.parentNode.attributes.getNamedItem('sN').nodeValue;
        oSpanTemp.parentNode.setAttribute("sFId", "");//""表示国语
        parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sNativeLanguage;
    }
}

function fnToggleLanguage() {
    var sPromptNoForeignLanguage = "Sorry,Only Chinese at This Item!";
    if (window.oSrcElement.parentNode.attributes.getNamedItem('sFId').nodeValue == "") {//说明现在是中文
        if (window.oSrcElement.parentNode.attributes.getNamedItem('sF').nodeValue == "") {
            window.oSrcElement.firstChild.nodeValue = sPromptNoForeignLanguage;
        }
        else {
            window.oSrcElement.firstChild.nodeValue = window.oSrcElement.parentNode.attributes.getNamedItem('sF').nodeValue;
        }
        window.oSrcElement.parentNode.setAttribute("sFId", "1");//1表示英文;
        parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sForeignLanguage;

    }
    else {
        window.oSrcElement.firstChild.nodeValue = window.oSrcElement.parentNode.attributes.getNamedItem('sN').nodeValue;
        window.oSrcElement.parentNode.setAttribute("sFId", "");//""表示国语
        parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sNativeLanguage;
    }
}

function fnAllNativeLanguage() {
    var cLi = document.getElementsByTagName("LI");
    var iLiNumber = cLi.length;
    for (var i = 0; i < iLiNumber; i++) {
        cLi[i].getElementsByTagName("SPAN").item(1).firstChild.nodeValue = cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem('sN').nodeValue;
        cLi[i].getElementsByTagName("A").item(0).setAttribute("sFId", "");
    }
    parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sNativeLanguage;
}

function fnAllForeignLanguage() {
    var sPromptNoDualLanguage = "Sorry,Only Chinese at This Item";
    var cLi = document.getElementsByTagName("LI");
    var iLiNumber = cLi.length;
    for (var i = 0; i < iLiNumber; i++) {
        if (cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue == "") {
            cLi[i].getElementsByTagName("SPAN").item(1).firstChild.nodeValue = sPromptNoDualLanguage;
        }
        else {
            cLi[i].getElementsByTagName("SPAN").item(1).firstChild.nodeValue = cLi[i].getElementsByTagName("A").item(0).attributes.getNamedItem('sF').nodeValue;
        }
        cLi[i].getElementsByTagName("A").item(0).setAttribute("sFId", "1");
    }
    parent.frames("sIframeTitle").document.getElementById("sIdLanguage").childNodes.item(0).nodeValue = window.sForeignLanguage;
}

function fnWordToText() {
    showModelessDialog("../common/wordToText/wordToTextIframeInitial.aspx", window, "help:0;resizable:1;dialogWidth:" + screen.width + "px;dialogHeight:" + (screen.height - 168) + "px;status:0");
}

function fnTextToWord() {
    showModelessDialog("../common/textToWord/textToWordIframeInitial.aspx", window, "help:0;resizable:1;dialogWidth:" + screen.width + "px;dialogHeight:" + (screen.height - 168) + "px;status:0");
}

function fnMergePartResource() {
    showModelessDialog("../common/mergePartResource/mergePartResourceIframeInitial.aspx", window, "help:0;resizable:1;dialogWidth:" + screen.width + "px;dialogHeight:" + (screen.height - 168) + "px;status:0");
}

function fnLocalhostToWeb() {
    showModelessDialog("../common/localUploadWeb.aspx", window, "help:0;resizable:1;dialogWidth:600px;dialogHeight:300px;status:0");
}

//上传录音播放文件
function fnUploadRecording() {
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    else {
        var sText = "";
        var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
        if (sFId == "") {
            sText = window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
        }
        else {
            sText = window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;
        }
        //alert('修改为如果是国语状态(即sFId=""),上传到book文件夹下,同时DOC源文件传到book_origin下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传);否则传到book_foreign文件夹下,同时DOC源文件传到book_origin_foreign下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传)。');
        showModalDialog('../common/UploadRecording/UploadRecording.asp?sText=' + sText, window, "help:0;resizable:1;dialogWidth:540px;dialogHeight:420px;status:0");
    }
    window.oSrcElement.click();//text和textF肯定不会为"";
}

//添加词汇定义
function fnAdd() {
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    else {
        var sText = "";
        var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
        if (sFId == "") {
            sText = window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
        }
        else {
            sText = window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;
        }
        //alert('修改为如果是国语状态(即sFId=""),上传到book文件夹下,同时DOC源文件传到book_origin下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传);否则传到book_foreign文件夹下,同时DOC源文件传到book_origin_foreign下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传)。');
        showModalDialog('../common/add/add.aspx?sText=' + sText, window, "help:0;resizable:1;dialogWidth:450px;dialogHeight:250px;status:0");
    }
    window.oSrcElement.click();//text和textF肯定不会为"";
}

//添加中英互译
function fnAddTranslate() {
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    else {
        var sText = "";
        var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
        if (sFId == "") {
            sText = window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
        }
        else {
            sText = window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;
        }
        //alert('修改为如果是国语状态(即sFId=""),上传到book文件夹下,同时DOC源文件传到book_origin下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传);否则传到book_foreign文件夹下,同时DOC源文件传到book_origin_foreign下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传)。');
        showModalDialog('../common/Translate/frame.asp?sText=' + sText, window, "help:0;resizable:1;dialogWidth:450px;dialogHeight:250px;status:0");
    }
    //  window.oSrcElement.click();//text和textF肯定不会为"";

}

function fnBatchUploadFlash() {
    window.oSrcElement.click();
    var sDocURL = document.URL;
    var sDocPath = sDocURL.substring(7, sDocURL.length);
    var sPathFull = sDocPath.substring(0, sDocPath.lastIndexOf("/"));
    var sPath = sPathFull.substring(0, sPathFull.lastIndexOf("/") + 1) + parent.sContentsPath;

    var aTemp = new Array();
    aTemp = parent.sPathContentsNow.split("/");
    var iLength = aTemp.length;
    var sPathContentshtmNowNow = "";
    for (var i = 0; i < iLength; i++) {
        sPathContentshtmNowNow = sPathContentshtmNowNow + aTemp[i] + "\\";
    }
    var sPhysicPath = sPathContentshtmNowNow.substring(0, sPathContentshtmNowNow.lastIndexOf("Tempcontents.asp")) + "contentsForBatchUploadFlash.htm";
    var sWidth = screen.width - 10;
    var sHeight = screen.height * 0.8;
    var sLeft = (screen.width - sWidth) / 2;
    var sTop = (screen.height - sHeight) / 2;
    window.open("", "sCopyPartResource", "fullscreen=0,left=" + sLeft + ",top=" + sTop + ",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width=" + sWidth + ",height=" + sHeight);//显示窗口
    var oClonedDivTemp = window.document.getElementById("sDiv").cloneNode(true);
    var cLiClonedTemp = oClonedDivTemp.getElementsByTagName("LI");
    for (var i = 0; i < cLiClonedTemp.length; i++) {
        cLiClonedTemp.item(i).removeAttribute("unselectable");
        cLiClonedTemp.item(i).removeAttribute("style");
        cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//去除自动加入的图标
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//由于onmouseon等引起的属性变化,onmouseon等待优化.另外看出今后属性变化要设置为一个style,易去除.没有显式设置该属性,即innerHTML中不出现,去除也不出错!
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = "1";//恢复自动编号为默认
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
        // cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//恢复双语切换之前
        cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId", "");
        cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN", "");
    }
    var sWillReplacedUL = "<UL>";//有个问题待解决，这样取代后，空格将越来越多！！！！！！好象已在编辑目录时考虑了加入空格，那么这里就不用该功能了
    var oRegExpReplaceUL = new RegExp(sWillReplacedUL, "g");
    var sAfterULReplaced = oClonedDivTemp.innerHTML.replace(oRegExpReplaceUL, " <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
    var sWillReplacedURLHeader = parent.sHTTPHeader + "lessons/";//如果修改了条目的超链接，将超链接的绝对URL查找替换为相对URL
    var oRegExpReplaceURLHeader = new RegExp(sWillReplacedURLHeader, "g");
    var sAfterURLHeaderReplaced = sAfterULReplaced.replace(oRegExpReplaceURLHeader, "");


    //var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>');//在Bottom框架动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.
    var oForm = parent.frames("sIframeBottom").document.createElement('form');
    oForm.outerHTML = '<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>';
    //var oInput1=parent.frames("sIframeBottom").document.createElement('<input type="text" name="docContents" id="docContents"></input>');
    var oInput1 = parent.frames("sIframeBottom").document.createElement('input');
    oInput1.outerHTML = '<input type="text" name="docContents" id="docContents"></input>';
    //var oInput2=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sPath" id="sPath"></input>');
    var oInput2 = parent.frames("sIframeBottom").document.createElement('input');
    oInput2.outerHTML = '<input type="text" name="sPath" id="sPath"></input>';
    //var oInputSubmit=parent.frames("sIframeBottom").document.createElement('<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>');
    var oInputSubmit = parent.frames("sIframeBottom").document.createElement('input');
    oInputSubmit.outerHTML = '<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>';
    var oInsertForm = parent.frames("sIframeBottom").document.body.appendChild(oForm);
    var oInsertInput1 = oInsertForm.appendChild(oInput1);
    var oInsertInput2 = oInsertForm.appendChild(oInput2);
    var oInsertInputSubmit = oInsertForm.appendChild(oInputSubmit);
    parent.frames("sIframeBottom").document.getElementById("docContents").value = sAfterURLHeaderReplaced;
    parent.frames("sIframeBottom").document.getElementById("sPath").value = sPhysicPath;
    // 判断是不是外语
    var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
    if (sFId == "") {
        parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").action = "../common/batchUploadFlash/batchUploadFlashSaveContents.aspx?hl=cn";
    }
    else {
        parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").action = "../common/batchUploadFlash/batchUploadFlashSaveContents.aspx?hl=en";
    }
    parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").target = "sCopyPartResource";
    parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").submit();
    parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").removeNode("true");
    //alert(parent.frames("sIframeBottom").document.body.innerHTML);
}
function fnBatchUploadTeachingPlan() {
    window.oSrcElement.click();
    var sDocURL = document.URL;
    var sDocPath = sDocURL.substring(7, sDocURL.length);
    var sPathFull = sDocPath.substring(0, sDocPath.lastIndexOf("/"));
    var sPath = sPathFull.substring(0, sPathFull.lastIndexOf("/") + 1) + parent.sContentsPath;

    var aTemp = new Array();
    aTemp = parent.sPathContentsNow.split("/");
    var iLength = aTemp.length;
    var sPathContentshtmNowNow = "";
    for (var i = 0; i < iLength; i++) {
        sPathContentshtmNowNow = sPathContentshtmNowNow + aTemp[i] + "\\";
    }
    var sPhysicPath = sPathContentshtmNowNow.substring(0, sPathContentshtmNowNow.lastIndexOf("Tempcontents.asp")) + "contentsForBatchUploadTeachingPlan.htm";
    var sWidth = screen.width - 10;
    var sHeight = screen.height * 0.8;
    var sLeft = (screen.width - sWidth) / 2;
    var sTop = (screen.height - sHeight) / 2;
    window.open("", "sCopyPartResource", "fullscreen=0,left=" + sLeft + ",top=" + sTop + ",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width=" + sWidth + ",height=" + sHeight);//显示窗口
    var oClonedDivTemp = window.document.getElementById("sDiv").cloneNode(true);
    var cLiClonedTemp = oClonedDivTemp.getElementsByTagName("LI");
    for (var i = 0; i < cLiClonedTemp.length; i++) {
        cLiClonedTemp.item(i).removeAttribute("unselectable");
        cLiClonedTemp.item(i).removeAttribute("style");
        cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//去除自动加入的图标
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//由于onmouseon等引起的属性变化,onmouseon等待优化.另外看出今后属性变化要设置为一个style,易去除.没有显式设置该属性,即innerHTML中不出现,去除也不出错!
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = "1";//恢复自动编号为默认
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
        // cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//恢复双语切换之前
        cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId", "");
        cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN", "");
    }
    var sWillReplacedUL = "<UL>";//有个问题待解决，这样取代后，空格将越来越多！！！！！！好象已在编辑目录时考虑了加入空格，那么这里就不用该功能了
    var oRegExpReplaceUL = new RegExp(sWillReplacedUL, "g");
    var sAfterULReplaced = oClonedDivTemp.innerHTML.replace(oRegExpReplaceUL, " <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
    var sWillReplacedURLHeader = parent.sHTTPHeader + "lessons/";//如果修改了条目的超链接，将超链接的绝对URL查找替换为相对URL
    var oRegExpReplaceURLHeader = new RegExp(sWillReplacedURLHeader, "g");
    var sAfterURLHeaderReplaced = sAfterULReplaced.replace(oRegExpReplaceURLHeader, "");


    //var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>');//在Bottom框架动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.
    var oForm = parent.frames("sIframeBottom").document.createElement('form');
    oForm.outerHTML = '<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>';
    //var oInput1=parent.frames("sIframeBottom").document.createElement('<input type="text" name="docContents" id="docContents"></input>');
    var oInput1 = parent.frames("sIframeBottom").document.createElement('input');
    oInput1.outerHTML = '<input type="text" name="docContents" id="docContents"></input>';
    //var oInput2=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sPath" id="sPath"></input>');
    var oInput2 = parent.frames("sIframeBottom").document.createElement('input');
    oInput2.outerHTML = '<input type="text" name="sPath" id="sPath"></input>';
    //var oInputSubmit=parent.frames("sIframeBottom").document.createElement('<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>');
    var oInputSubmit = parent.frames("sIframeBottom").document.createElement('input');
    oInputSubmit.outerHTML = '<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>';
    var oInsertForm = parent.frames("sIframeBottom").document.body.appendChild(oForm);
    var oInsertInput1 = oInsertForm.appendChild(oInput1);
    var oInsertInput2 = oInsertForm.appendChild(oInput2);
    var oInsertInputSubmit = oInsertForm.appendChild(oInputSubmit);
    parent.frames("sIframeBottom").document.getElementById("docContents").value = sAfterURLHeaderReplaced;
    parent.frames("sIframeBottom").document.getElementById("sPath").value = sPhysicPath;
    // 判断是不是外语
    var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
    if (sFId == "") {
        parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").action = "../common/batchUploadTeachingPlan/batchUploadTeachingPlanSaveContents.aspx?hl=cn";
    }
    else {
        parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").action = "../common/batchUploadTeachingPlan/batchUploadTeachingPlanSaveContents.aspx?hl=en";
    }
    parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").target = "sCopyPartResource";
    parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").submit();
    parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").removeNode("true");
    //alert(parent.frames("sIframeBottom").document.body.innerHTML);
}

//批量上传课文
function fnBatchUploadText() {
    window.oSrcElement.click();
    var sDocURL = document.URL;
    var sDocPath = sDocURL.substring(7, sDocURL.length);
    var sPathFull = sDocPath.substring(0, sDocPath.lastIndexOf("/"));
    var sPath = sPathFull.substring(0, sPathFull.lastIndexOf("/") + 1) + parent.sContentsPath;

    var aTemp = new Array();
    aTemp = parent.sPathContentsNow.split("/");
    var iLength = aTemp.length;
    var sPathContentshtmNowNow = "";
    for (var i = 0; i < iLength; i++) {
        sPathContentshtmNowNow = sPathContentshtmNowNow + aTemp[i] + "\\";
    }
    var sPhysicPath = sPathContentshtmNowNow.substring(0, sPathContentshtmNowNow.lastIndexOf("Tempcontents.htm")) + "contentsForBatchUploadText.htm";
    var sWidth = screen.width - 10;
    var sHeight = screen.height * 0.8;
    var sLeft = (screen.width - sWidth) / 2;
    var sTop = (screen.height - sHeight) / 2;
    window.open("", "sCopyPartResource", "fullscreen=0,left=" + sLeft + ",top=" + sTop + ",toolbar=no,location=no,directories=no,menubar=no,titlebar=no,scrollbars=no,status=no,resizable=yes,copyhistory=no,width=" + sWidth + ",height=" + sHeight);//显示窗口
    var oClonedDivTemp = window.document.getElementById("sDiv").cloneNode(true);
    var cLiClonedTemp = oClonedDivTemp.getElementsByTagName("LI");

    for (var i = 0; i < cLiClonedTemp.length; i++) {
        cLiClonedTemp.item(i).removeAttribute("unselectable");
        cLiClonedTemp.item(i).removeAttribute("style");
        cLiClonedTemp.item(i).getElementsByTagName("IMG").item(0).removeNode(true);//去除自动加入的图标
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).removeAttribute("style");//由于onmouseon等引起的属性变化,onmouseon等待优化.另外看出今后属性变化要设置为一个style,易去除.没有显式设置该属性,即innerHTML中不出现,去除也不出错!
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(0).childNodes.item(0).nodeValue = "1";//恢复自动编号为默认
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("unselectable");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onclick");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseover");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("onmouseout");
        // cLiClonedTemp.item(i).childNodes.item(1).removeAttribute("unselectable");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("title");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).removeAttribute("style");
        cLiClonedTemp.item(i).getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue = cLiClonedTemp.item(i).getElementsByTagName("A").item(0).attributes.getNamedItem("sN").nodeValue;//恢复双语切换之前
        cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sFId", "");
        cLiClonedTemp.item(i).getElementsByTagName("A").item(0).setAttribute("sN", "");
    }
    var sWillReplacedUL = "<UL>";//有个问题待解决，这样取代后，空格将越来越多！！！！！！好象已在编辑目录时考虑了加入空格，那么这里就不用该功能了
    var oRegExpReplaceUL = new RegExp(sWillReplacedUL, "g");
    var sAfterULReplaced = oClonedDivTemp.innerHTML.replace(oRegExpReplaceUL, " <UL>");//由于IE自身解析HTML文档的问题，必须强行在<UL>元素前插入白空，在此插入一个空格字符。
    var sWillReplacedURLHeader = parent.sHTTPHeader + "lessons/";//如果修改了条目的超链接，将超链接的绝对URL查找替换为相对URL
    var oRegExpReplaceURLHeader = new RegExp(sWillReplacedURLHeader, "g");
    var sAfterURLHeaderReplaced = sAfterULReplaced.replace(oRegExpReplaceURLHeader, "");


    //var oForm=parent.frames("sIframeBottom").document.createElement('<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>');//在Bottom框架动态创建表单,发送信息后又删除表单,这样更易于维护,因为所需表单项往往在建立网页时难于确定.
    var oForm = parent.frames("sIframeBottom").document.createElement('form');
    oForm.outerHTML = '<form method="POST" action="" target="" id="sCopyPartResourceForm"></form>';
    //var oInput1=parent.frames("sIframeBottom").document.createElement('<input type="text" name="docContents" id="docContents"></input>');
    var oInput1 = parent.frames("sIframeBottom").document.createElement('input');
    oInput1.outerHTML = '<input type="text" name="docContents" id="docContents"></input>';
    //var oInput2=parent.frames("sIframeBottom").document.createElement('<input type="text" name="sPath" id="sPath"></input>');
    var oInput2 = parent.frames("sIframeBottom").document.createElement('input');
    oInput2.outerHTML = '<input type="text" name="sPath" id="sPath"></input>';
    //var oInputSubmit=parent.frames("sIframeBottom").document.createElement('<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>');
    var oInputSubmit = parent.frames("sIframeBottom").document.createElement('input');
    oInputSubmit.outerHTML = '<input type="submit" name="sNameInputSubmit" id="sIdInputSubmit"/>';
    var oInsertForm = parent.frames("sIframeBottom").document.body.appendChild(oForm);
    var oInsertInput1 = oInsertForm.appendChild(oInput1);
    var oInsertInput2 = oInsertForm.appendChild(oInput2);
    var oInsertInputSubmit = oInsertForm.appendChild(oInputSubmit);
    parent.frames("sIframeBottom").document.getElementById("docContents").value = sAfterURLHeaderReplaced;
    parent.frames("sIframeBottom").document.getElementById("sPath").value = sPhysicPath;
    // 判断是不是外语
    var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
    if (sFId == "") {
        parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").action = "../common/batchUploadText/batchUploadTextSaveContents.aspx?hl=cn";
    }
    else {
        parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").action = "../common/batchUploadText/batchUploadTextSaveContents.aspx?hl=en";
    }
    parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").target = "sCopyPartResource";
    parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").submit();
    parent.frames("sIframeBottom").document.getElementById("sCopyPartResourceForm").removeNode("true");
    //alert(parent.frames("sIframeBottom").document.body.innerHTML);
}


function fnMakeFlashDir() {
    showModelessDialog("../common/MakeAnimationDir/MakeAnimationDir.aspx", window, "help:0;resizable:1;dialogWidth:400px;dialogHeight:250px;status:0");
}

function fnUploadCommon() {
    showModelessDialog("../common/UploadCommon/UploadCommon.aspx?t=" + new Date().getTime(), window, "help:0;resizable:1;dialogWidth:800px;dialogHeight:600px;status:0");
}

//课程搜索
var win1;
function fnSearch() {

    var oDate = new Date();
    var i = oDate.getTime();
    win1 = showModelessDialog("../common/Search.aspx?i=" + i, window, "help:0;resizable:1;dialogWidth:450px;dialogHeight:320px;status:0");

}

//
function fnSearchResult(sText, wd) {
    var cLi = document.getElementsByTagName("li");
    var iLiLength = cLi.length;
    var intTargetPassInItem = 0;
    for (intN = 0; intN < iLiLength; intN++) {
        var sStringTemp = cLi[intN].getElementsByTagName("A").item(0).attributes.getNamedItem("text").nodeValue;
        if (sStringTemp == sText) {
            intTargetPassInItem = intN;
            break;
        }
    }
    if (intTargetPassInItem == 0) {
        cLi[0].getElementsByTagName("SPAN").item(1).click();
    }
    else {
        //cLi[intTargetPassInItem].childNodes[1].click();
        cLi[intTargetPassInItem].getElementsByTagName("SPAN").item(1).click()
        var oTemp = cLi[intTargetPassInItem];
        while (oTemp.parentNode.parentNode.nodeName != "DIV") {
            var cChildNodesTemp = oTemp.parentNode.childNodes;
            for (intR = 0; intR < cChildNodesTemp.length; intR++) {
                if (cChildNodesTemp[intR].nodeName == "LI") {
                    cChildNodesTemp[intR].style.display = "list-item";
                    if (cChildNodesTemp[intR].childNodes[0].src.lastIndexOf("plus.gif") > 0) {
                        cChildNodesTemp[intR].childNodes[0].src = "../common/image/plusTran.gif";
                    }
                }
            }
            oTemp = oTemp.parentNode;

        }
        if (oTemp.childNodes[0].src.lastIndexOf("plus.gif") > 0 && oTemp.childNodes[1].style.color != window.sColorClicked) {
            oTemp.childNodes[0].src = "../common/image/plusTran.gif";
        }
        cLi[intTargetPassInItem].scrollIntoView(true);
    }
    window.open("../lessons/content/book/" + sText + "/" + sText + ".htm?wd=" + wd, "sIframeContent", true);
	/*parent.frames.item('sIFrameTitle').document
	var sHeadUrl="http://localhost:8000/webCourse/lessons/";
	var sUrl=sHeadUrl+"content/book/"+sText+"/"+sText+".htm?wd="+wd;
	showModelessDialog(sUrl,window,"help:0;resizable:1;dialogWidth:"+screen.width*0.8+"px;dialogHeight:"+screen.height*0.8+"px;status:0;");//scroll:1?
	win1.focus();*/

}
function fnGetItemText(textid) {
    var cLi = document.getElementsByTagName("li");
    var iLiLength = cLi.length;
    var intTargetPassInItem = 0;
    for (intN = 0; intN < iLiLength; intN++) {
        var sStringTemp = cLi[intN].getElementsByTagName("A").item(0).attributes.getNamedItem("text").nodeValue;
        if (sStringTemp == textid) {
            intTargetPassInItem = intN;
            break;
        }
    }

    sItemText = cLi[intTargetPassInItem].getElementsByTagName("SPAN").item(1).childNodes.item(0).nodeValue;
    return sItemText;

}
function fnDetectActiveXControl(sControlName) {
    var oControl;
    try {
        oControl = new ActiveXObject(sControlName);
        if (oControl == null)
            return false;
        else return true;
    }
    catch (e) {
        return false;
    }
}

function fnNero() {
    var sHeadUrl = "../common/";
    var sUrl = "nero/nero.aspx";
    var win = showModelessDialog(sHeadUrl + sUrl, window, "help:0;resizable:0;dialogWidth:500px;dialogHeight:250px;status:0;")

}
function fnDictation() {
    var sText = "";
    var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
    if (sFId == "") {
        sText = window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
    }
    else {
        sText = window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;
    }
    //alert('修改为如果是国语状态(即sFId=""),上传到book文件夹下,同时DOC源文件传到book_origin下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传);否则传到book_foreign文件夹下,同时DOC源文件传到book_origin_foreign下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传)。');

    win = open("../common/Dictation/Dictation.aspx?sText=" + sText, "win1", "width=400px,Height=200px,scroll:no,status:no,top=" + (screen.height - 300) / 2 + ",left=" + (screen.width - 400) / 2);
    win.focus();


}

function fnRecording() {
    var sText = "";
    var sFId = window.oSrcElement.parentNode.attributes.getNamedItem("sFId").nodeValue;//判断是国语还是外语,sFId=""是国语,sFId="1"是外语
    if (sFId == "") {
        sText = window.oSrcElement.parentNode.attributes.getNamedItem("text").nodeValue;
    }
    else {
        sText = window.oSrcElement.parentNode.attributes.getNamedItem("textF").nodeValue;
    }
    //alert('修改为如果是国语状态(即sFId=""),上传到book文件夹下,同时DOC源文件传到book_origin下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传);否则传到book_foreign文件夹下,同时DOC源文件传到book_origin_foreign下，DOC源文件和转化后的文件使用相同的时间序号，因为是绑定在一起的(界面中提示用户DOC源文件已同时上传)。');

    //win=open("../common/CoursewareRecording/Recording.aspx?sText="+sText,"win1","width=800px,Height=600px,scroll:no,status:no,top="+(screen.height-600)/2+",left="+(screen.width-800)/2);
    //win.focus();

    var sHeadUrl = "../common/";
    var sUrl = "CoursewareRecording/Recording.aspx";
    var win = showModelessDialog(sHeadUrl + sUrl, window, "help:0;resizable:0;dialogWidth:1000px;dialogHeight:600px;status:0;")
    //open(sHeadUrl+sUrl);

}
function fnSetRecordingID(textID) {
    var yi = document.createAttribute("RID")
    yi.value = textID;
    window.oSrcElement.parentNode.setAttributeNode(yi);
}

// 播放语音课程
function fnRecordingView() {
    if (window.oSrcElement.parentNode.getAttribute("RID")) {
        var textID = window.oSrcElement.parentNode.getAttribute("RID");
        var win = open("content/CoursewareRecording/" + textID + "/default.htm", "w1", "width=1100,height=600,top=" + (screen.height - 600) / 2 + ",left=" + (screen.width - 1100) / 2);
        win.focus();
    }
    else {
        alert("该条目没有音频课件");
    }

}

function fnBatchUploadItems() {
    var win = open("../common/uploadItems/index.htm", "w1", "width=500,height=350,top=" + (screen.height - 350) / 2 + ",left=" + (screen.width - 500) / 2);
    win.focus();
}

function fnBatchUploadListeningCourse() {
    var win = open("../common/uploadListeningCourse/index.htm", "w1", "width=500,height=350,top=" + (screen.height - 350) / 2 + ",left=" + (screen.width - 500) / 2);
    win.focus();
}

function fnDownLoadCourse() {

    var win = open("../common/downloadcourse/index.aspx", "w1", "width=500,height=350,top=" + (screen.height - 350) / 2 + ",left=" + (screen.width - 500) / 2);
    win.focus();

}


function fnUploadTeachingEngineering() {  
    fnTooManyModelDialog(); 
    window.oSrcElement.click();
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    
    if (window.oSrcElement.parentNode.getAttribute("teachingEngineering") === null || window.oSrcElement.parentNode.getAttribute("teachingEngineering") == "") {//如果特性不存在
        var oDate = new Date();
        var sFileName = oDate.getTime();
        window.oSrcElement.parentNode.setAttribute("teachingEngineering", sFileName);//创建特性并设置特性值。
    }
    window.teachingEngineeringPathPart = window.oSrcElement.parentNode.getAttribute("teachingEngineering");
    alert(window.teachingEngineeringPathPart);
    var win = open("../common/UpLoadTeachingEngineering.html", "UpLoadTeachingEngineering", "width=500,height=350,top=" + (screen.height - 350) / 2 + ",left=" + (screen.width - 500) / 2);
    window.childWindow = win;
}

function fnUpLoadCourseText() {
    fnTooManyModelDialog(); 
    window.oSrcElement.click();
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }

    if (window.oSrcElement.parentNode.getAttribute("text").nodeValue === null || window.oSrcElement.parentNode.getAttribute("text") == "") {//如果特性不存在
        var oDate = new Date();
        var sFileName = oDate.getTime();
        window.oSrcElement.parentNode.setAttribute("text", sFileName); //创建特性并设置特性值。
    }
    window.courseTextPathPart = window.oSrcElement.parentNode.getAttribute("text");
    alert(window.courseTextPathPart);
    var win = open("../common/UpLoadCourseText.html", "UpLoadCourseText", "width=500,height=350,top=" + (screen.height - 350) / 2 + ",left=" + (screen.width - 500) / 2);
    window.childWindow = win;
}

function fnUpLoadPresentation() {
    fnTooManyModelDialog(); 
    window.oSrcElement.click();
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }

    if (window.oSrcElement.parentNode.getAttribute("teachingplan").nodeValue === null || window.oSrcElement.parentNode.getAttribute("teachingplan") == "") {
        var oDate = new Date();
        var sFileName = oDate.getTime();
        window.oSrcElement.parentNode.setAttribute("teachingplan", sFileName);
    }
    window.presentationPathPart = window.oSrcElement.parentNode.getAttribute("teachingplan");
    alert(window.presentationPathPart);
    var win = open("../common/UpLoadPresentation.html", "UpLoadPresentation", "width=500,height=350,top=" + (screen.height - 350) / 2 + ",left=" + (screen.width - 500) / 2);
    window.childWindow = win;
}

function fnUpLoadTeachingVideo() {
    fnTooManyModelDialog(); 
    window.oSrcElement.click();
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    //if (window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue == "") {
    if (window.oSrcElement.parentNode.getAttribute("play") === null || window.oSrcElement.parentNode.getAttribute("play") == "") {//如果特性不存在
        var oDate = new Date();
        var sFileName = oDate.getTime();
        window.oSrcElement.parentNode.setAttribute("play", sFileName);
    }
    window.TeachingVideoPathPart = window.oSrcElement.parentNode.getAttribute("play");
    alert(window.TeachingVideoPathPart);
    var win = open("../common/UpLoadTeachingVideo.html", "UpLoadTeachingVideo", "width=500,height=350,top=" + (screen.height - 350) / 2 + ",left=" + (screen.width - 500) / 2);
    window.childWindow = win;
}

function fnUpLoad2D() {
    fnTooManyModelDialog(); 
    window.oSrcElement.click();
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    //if (window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue == "") {
    if (window.oSrcElement.parentNode.getAttribute("s2D") === null || window.oSrcElement.parentNode.getAttribute("s2D") == "") {//如果特性不存在
        var oDate = new Date();
        var sFileName = oDate.getTime();
        window.oSrcElement.parentNode.setAttribute("s2D", sFileName);
    }
    window.TeachingVideoPathPart = window.oSrcElement.parentNode.getAttribute("s2D");
    alert(window.TeachingVideoPathPart);
    var win = open("../common/UpLoadTeaching2D.html", "UpLoadTeaching2D", "width=500,height=350,top=" + (screen.height - 350) / 2 + ",left=" + (screen.width - 500) / 2);
    window.childWindow = win;
}

function fnUpLoad3D() {
    fnTooManyModelDialog(); 
    window.oSrcElement.click();
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    //if (window.oSrcElement.parentNode.attributes.getNamedItem("play").nodeValue == "") {
    if (window.oSrcElement.parentNode.getAttribute("s3D") === null || window.oSrcElement.parentNode.getAttribute("s3D") == "") {//如果特性不存在
        var oDate = new Date();
        var sFileName = oDate.getTime();
        window.oSrcElement.parentNode.setAttribute("s3D", sFileName);
    }
    window.TeachingVideoPathPart = window.oSrcElement.parentNode.getAttribute("s3D");
    alert(window.TeachingVideoPathPart);
    var win = open("../common/UpLoadTeaching3D.html", "UpLoadTeaching3D", "width=500,height=350,top=" + (screen.height - 350) / 2 + ",left=" + (screen.width - 500) / 2);
    window.childWindow = win;
}

function fnUploadHomeworkAndTest() {

    fnTooManyModelDialog(); 
    window.oSrcElement.click();

    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }    
    if (window.oSrcElement.parentNode.getAttribute("homeworkAndTest") === null || window.oSrcElement.parentNode.getAttribute("homeworkAndTest") == "") {//如果特性不存在
        var oDate = new Date();
        var sFileName = oDate.getTime();
        window.oSrcElement.parentNode.setAttribute("homeworkAndTest", sFileName);//创建特性并设置特性值。
    }
    window.homeworkAndTestPathPart = window.oSrcElement.parentNode.getAttribute("homeworkAndTest");
    alert(window.homeworkAndTestPathPart);
    var win = open("../common/UpLoadHomeworkAndTest.html", "UpLoadHomeworkAndTest", "width=500,height=350,top=" + (screen.height - 350) / 2 + ",left=" + (screen.width - 500) / 2);
    window.childWindow = win;
}


function fnClean() {
    var bWillClean = confirm("清理前请注意备份源文件, 这些文件的物理路径是：" + "\\webCourse\\lessons\\Content");
    //var bWillSaved=confirm("原目录文件将被覆盖,如果需要,请备份原目录文件,该文件的URL是"+'"'+"http://"+sPath+"contents.htm"+'"'+"，物理路径是"+'"'+sPathContentshtmNowNow.substring(0,sPathContentshtmNowNow.length-2)+"contents.htm"+'"');
    //var bWillSaved=confirm("原目录文件将被覆盖,如果需要,请备份原目录文件,该文件的URL是"+'"'+"http://"+sPath+"contents.htm"+'"'+"，物理路径是"+'"'+sPathContentshtmNowNow.substring(0,sPathContentshtmNowNow.lastIndexOf("Tempcontents.asp"))+"contents.htm"+'"');

    if (bWillClean) {
        //选用|分割所有文件夹相关的特性值。
        var sSeperation = "|";
        var sTeachingEngineering = "";
        var sTextBookResource = "";
        var sTeachingVideo = "";
        var sTeachingPPT = "";
        var sHomeworkAndTest = "";
        var oDivTemp = document.getElementById("sDiv");//引用整个SDIV对象
        var cATemp = oDivTemp.getElementsByTagName("A");//引用所有A对象    
        for (var i = 0; i < cATemp.length; i++) {
            sTeachingEngineering += cATemp[i].getAttribute("teachingEngineering") + sSeperation; 
            sTextBookResource += cATemp[i].getAttribute("text") + sSeperation;
            sTeachingVideo += cATemp[i].getAttribute("play") + sSeperation;
            sTeachingPPT += cATemp[i].getAttribute("teachingplan") + sSeperation;
            sHomeworkAndTest += cATemp[i].getAttribute("homeworkAndTest")+ sSeperation;
            }

        var sURL = "/Clean/Get?sTeachingEngineering=" + sTeachingEngineering
            + "&sTextBookResource=" + sTextBookResource
            + "&sTeachingVideo=" + sTeachingVideo
            + "&sTeachingPPT=" + sTeachingPPT
            + "&sHomeworkAndTest=" + sHomeworkAndTest;
        alert(sURL);

        var win = open(sURL, "Clean", "width=500,height=350,top=" + (screen.height - 350) / 2 + ",left=" + (screen.width - 500) / 2);
    }
    else {
        returen;
    }
}



function fnDeleteTeachingEngineering()
{
    
    window.oSrcElement.click();   
    
    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    if (window.oSrcElement.parentNode.getAttribute("teachingEngineering") === null) {//如果特性不存在。HTML代码中的特性需要getAttribute("teachingEngineering")、setAttribute("teachingEngineering","1567643015551")、removeAttribute("teachingEngineering")，无是null。JS中的属性需要对象.属性。无是undefined。//alert(window.oSrcElement.parentNode.getAttribute("teachingEngineering"));   // alert(window.oSrcElement.parentNode.teachingEngineering);
        alert("该条目没有教学工程文档,不用删除!");
    }
    else {
        fnForUndo();   
        
                var bWillBeRemoved = window.confirm('将删除该条目的教学工程文档！单击"确定"删除,单击"取消"终止操作！');
                if (bWillBeRemoved) {
                   // window.oSrcElement.parentNode.setAttribute("teachingPlan", "");
                    window.oSrcElement.parentNode.removeAttribute("teachingEngineering");
                    document.getElementById("sIdUndo").disabled = false;
                }
                else {
                    return;
                }
    }
}



function fnDeleteHomeworkAndTest()
{
    window.oSrcElement.click();

    if (window.oSrcElement.parentNode.parentNode === window.oSrcElement.parentNode.parentNode.parentNode.childNodes.item(0) && window.oSrcElement.parentNode.parentNode.parentNode.parentNode.tagName.toUpperCase() === "DIV") {
        alert("该条目是根条目，不能被修改!");
        return;
    }
    if (window.oSrcElement.parentNode.getAttribute("homeworkAndTest") === null) {//如果特性不存在。HTML代码中的特性需要getAttribute("teachingEngineering")、setAttribute("teachingEngineering","1567643015551")、removeAttribute("teachingEngineering")，无是null。JS中的属性需要对象.属性。无是undefined。//alert(window.oSrcElement.parentNode.getAttribute("teachingEngineering"));   // alert(window.oSrcElement.parentNode.teachingEngineering);
        alert("该条目没有作业与测试,不用删除!");
    }
    else {
        fnForUndo();

        var bWillBeRemoved = window.confirm('将删除该条目的作业与测试！单击"确定"删除,单击"取消"终止操作！');
        if (bWillBeRemoved) {           
            window.oSrcElement.parentNode.removeAttribute("homeworkAndTest");
            document.getElementById("sIdUndo").disabled = false;
        }
        else {
            return;
        }
    }
}

function fnWindowOnFocus() {
    var sPopupMenu = document.getElementById("idPopupMenu").innerHTML.replace(new RegExp("<div", "g"), "<span").replace(new RegExp("</div>", "g"), "</span>").replace(new RegExp('onclick="', "g"), 'onclick="parent.document.getElementById('+"'"+'sIframeContents'+"'"+').contentWindow.');
 // console.log(sPopupMenu);

    parent.document.getElementById("sIFrameTitle").contentWindow.document.getElementById("idForPanelToolbar").innerHTML = '<div id="popupDiv" onmouseover="parent.document.getElementById(' + "'" + 'sIFrameTitle' + "'" + ').contentWindow.fnPopupMouseOver(); " onmouseout="parent.document.getElementById(' + "'" + 'sIFrameTitle' + "'" + ').contentWindow.fnPopupMouseOut(); " style=" font-size: 9px;font-family:Times New Roman; cursor: default ">' + '<span  style="font-weight:bold">目录面板右键菜单：</span>' +sPopupMenu+"</div>";
}
function fnGeneral() {
    fnTooManyModelDialog();  
    var sSeperationLeft = "<span>";
    var sSeperationRight = "</span>";
    var sSeperation = "；";
    var sSeperationLine = "</br>";
    var sRowOfGeneral = "";
   // var sAOnclickAttribute = '<a href="" onclick="event.returnValue=false;opener.parent.document.getElementById(\'sIFrameContents\').contentWindow.fnFindAndView("1","2","3","4");alert();" ';
    var sAOnclickAttribute = '<a href="" onclick="event.returnValue=false;opener.fnFindAndView(event.srcElement.getAttribute(\'attrResourceType\'),event.srcElement.innerText,event.srcElement.getAttribute(\'attrResourceName\'),event.srcElement.getAttribute(\'attrResourceFileExtentionWithDot\'))" ';
    var oDivTemp = document.getElementById("sDiv");//引用整个SDIV对象
    var cATemp = oDivTemp.getElementsByTagName("A");//引用所有A对象 
    for (var i = 0; i < cATemp.length; i++) {
        sRowOfGeneral +=
            sSeperationLeft + cATemp[i].textContent + sSeperationRight + sSeperationLine
            + sSeperationLeft + "教材资源：" + sAOnclickAttribute + " title='单击将跳转到对应的目录条目' attrResourceType='text' attrResourceName='教材资源' attrResourceFileExtentionWithDot='.htm'>" + cATemp[i].getAttribute("text") + "</a>" + sSeperation + sSeperationRight + sSeperationLine
        + sSeperationLeft + "教学视频：" + sAOnclickAttribute + " title='单击将跳转到对应的目录条目' attrResourceType='play' attrResourceName='教学视频' attrResourceFileExtentionWithDot='.mp4'>" + cATemp[i].getAttribute("play") + "</a>" + sSeperation + sSeperationRight + sSeperationLine
        + sSeperationLeft + "教学PPT：" + sAOnclickAttribute + " title='单击将跳转到对应的目录条目' attrResourceType='teachingPlan' attrResourceName='教学PPT' attrResourceFileExtentionWithDot='.pptx'>" + cATemp[i].getAttribute("teachingplan") + "</a>" + sSeperation + sSeperationRight + sSeperationLine
        + sSeperationLeft + "教学2D：" + sAOnclickAttribute + " title='单击将跳转到对应的目录条目' attrResourceType='s2d' attrResourceName='教学2D' attrResourceFileExtentionWithDot='.svgz'>" + cATemp[i].getAttribute("s2d") + "</a>" + sSeperation + sSeperationRight + sSeperationLine
        + sSeperationLeft + "教学3D：" + sAOnclickAttribute + " title='单击将跳转到对应的目录条目' attrResourceType='s3d' attrResourceName='教学3D' attrResourceFileExtentionWithDot='.x3dv'>" + cATemp[i].getAttribute("s3d") + "</a>" + sSeperation + sSeperationRight + sSeperationLine
        + sSeperationLeft + "作业与测试：" + sAOnclickAttribute + " title='单击将跳转到对应的目录条目' attrResourceType='homeworkAndTest' attrResourceName='作业与测试' attrResourceFileExtentionWithDot='.htm'>" + cATemp[i].getAttribute("homeworkAndTest") + "</a>" + sSeperation + sSeperationRight + sSeperationLine
        + sSeperationLeft + "教学工程文档：" + sAOnclickAttribute + " title='单击将跳转到对应的目录条目' attrResourceType='teachingEngineering' attrResourceName='教学工程文档' attrResourceFileExtentionWithDot='.htm'>" + cATemp[i].getAttribute("teachingEngineering") + "</a>" + sSeperation + sSeperationRight
            + sSeperationLine + sSeperationLine;
    }
   
  
  //  console.log(sRowOfGeneral);
  // alert(sRowOfGeneral);
  
window.alert("迫不得已选用了内容窗口呈现，而不是新开窗口呈现（因为不知是否浏览器的Bug！新开窗口无法滚动查看所有条目！）");
parent.document.getElementById("sIframeContent").contentWindow.document.write(sRowOfGeneral);//实现了预期，但是好像违背了安全性封装规则？难道是open打开的窗口就可以违背？（因为此时的窗口菜单栏由浏览器控制，无法JS控制，而无法欺骗用户？）
    var win = open("../common/blank.html", "General", "scrollbars=,width=800,height=600,top=" + (screen.height - 600) / 2 + ",left=" + (screen.width - 800) / 2);
    win.onload = function() {
  try {
    win.document.body.style.overflow = 'scroll';
  } catch (e) {}
};
   // var win = open("../common/blank.html", "General",  "help:0;resizable:1;dialogWidth:" + screen.width * 0.8 + "px;dialogHeight:" + screen.height * 0.8 + "px;status:0;");
  //win.document.body.innerHTML=sRowOfGeneral;
   
 // win.document.write('<body  style="overflow:scroll;">'+sRowOfGeneral+'<body>');//实现了预期，但是好像违背了安全性封装规则？难道是open打开的窗口就可以违背？（因为此时的窗口菜单栏由浏览器控制，无法JS控制，而无法欺骗用户？）
 win.document.write(sRowOfGeneral);//实现了预期，但是好像违背了安全性封装规则？难道是open打开的窗口就可以违背？（因为此时的窗口菜单栏由浏览器控制，无法JS控制，而无法欺骗用户？）
  win.document.body.style.overflow = 'scroll';
    window.childWindow = win;
}
function fnSearch() {
    
   //EV_modeAlert();//弹出屏蔽层.好像没起什么作用！
    fnTooManyModelDialog();  
    var win = open("../common/Search.html", "Search", "scrollbars=yes,width=800,height=600,top=" + (screen.height - 600) / 2 + ",left=" + (screen.width - 800) / 2);
       window.childWindow = win;
   //window.childWindow.focus();//子窗口获取焦点
}

function fnAdvertisement() {
    fnTooManyModelDialog();
    //EV_modeAlert();//弹出屏蔽层.好像没起什么作用！
    if (window.document.URL.toString().toUpperCase().indexOf("://LOCALHOST") >= 0) { //本机
        var advertisement = open("../../../renshichu/lunwensongshen.htm", "advertisement");
    }
    else {
        var advertisement = open("/WebEdu_LocalVersion_YuQin_DotNetCore2.1/WebEdu_LocalVersion_YuQin_DotNetCore21/wwwroot/renshichu/lunwensongshen.htm");//网站
    }
}
function fnMargee() {
    fnTooManyModelDialog();
    //EV_modeAlert();//弹出屏蔽层.好像没起什么作用！
   // var advertisement = open("../../../renshichu/lunwensongshen.htm", "advertisement");
    if (window.confirm('挖呀挖江西师范大学人事处刘涛科长?')) {
        if (window.document.URL.toString().toUpperCase().indexOf("://LOCALHOST")>=0) { //本机
            var advertisement = open("../../../renshichu/lunwensongshen.htm", "advertisement");
        }
        else {
            var advertisement = open("/WebEdu_LocalVersion_YuQin_DotNetCore2.1/WebEdu_LocalVersion_YuQin_DotNetCore21/wwwroot/renshichu/lunwensongshen.htm");//网站
        }
    }
    else {
    var winSearch = open('https://www.baidu.com/s?wd=%E6%95%99%E8%82%B2%E6%A1%86%E6%9E%B6%E4%B8%8E%E6%A1%88%E4%BE%8B%E2%80%94%E2%80%94%E2%80%9C%E6%95%B0%E5%AD%97%E5%8C%96%E8%AE%A1%E7%AE%97%E6%80%9D%E7%BB%B4%E2%80%9D%E2%80%9C%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E2%80%9D%E7%BB%9F%E4%B8%80%E7%9A%84%E8%A7%86%E8%A7%92&rsv_bp=0&n=2&inputT=2611', "search");
}
       
   // var win = open("../common/Marquee.html", "Marquee", "scrollbars=yes,width=400,height=300,top=" + (screen.height - 300) / 2 + ",left=" + (screen.width - 400) / 2);   
    window.childWindow = winSearch;
    //window.childWindow.focus();//子窗口获取焦点
}

/** function fnTooManyModelDialog1() {
   // console.log(window.childWindow);
   // console.log(window.childWindow != undefined);
    if (window.childWindow != undefined) {
        var bIsStop = confirm("已经打开有对话框了，最好关闭已经打开的对话框。否则对话框太多，不方便操作！单击‘确定’ ,将自动关闭一个已经打开的对话框！单击'取消'将不关闭已经打开的对话框！");  
        if (bIsStop) {            
            window.childWindow = undefined;
            window.childWindow.close();
        }
        else { 
            window.childWindow = undefined;
            window.closed
        }
    }    
}**/

function fnTooManyModelDialog() {
    // console.log(window.childWindow);
    // console.log(window.childWindow != undefined);
    /**if (window.childWindow == undefined) {
        ;
    }
    else {
        var bIsStop = confirm("已经打开有对话框了，最好关闭已经打开的对话框。否则对话框太多，不方便操作！单击‘确定’ ,将自动关闭一个已经打开的对话框！单击'取消'将不关闭已经打开的对话框！");
        if (bIsStop) {
            window.childWindow = undefined;
            window.childWindow.close();
        }
        else {
            window.childWindow = undefined;
        }
    }**/
}

function fnGetFocus() {//模式窗口使用//本系统中所有模式窗口必须在目录框架的JS代码中打开！！！，不然难以调用到模式窗口

   
    try {
        if (typeof (window.childWindow) != "undefined") {//如果子窗口存在，将焦点转到子窗口
            //parent.document.getElementById("sIframeContent").contentWindow.focus();//为了sIframeContent右键菜单映射到sIframeTitle.
            //parent.document.getElementById("sIframeContent").contentWindow.click();//为了sIframeContent右键菜单映射到sIframeTitle.
            window.childWindow.focus();
        }
    }
    catch (e) { return; }
    
   // parent.document.getElementById("sIframeTitle").contentWindow.fnGetFocus();
}

function fnEduResourceTemplates() {

    fnTooManyModelDialog();
    window.oSrcElement.click();
    var win = open("../common/EduResourceTemplates.html", "EduResourceTemplates", "width=500,height=350,top=" + (screen.height - 350) / 2 + ",left=" + (screen.width - 500) / 2);
    window.childWindow = win;
}

document.getElementsByTagName("body").item(0).onload = fnOnLoad;