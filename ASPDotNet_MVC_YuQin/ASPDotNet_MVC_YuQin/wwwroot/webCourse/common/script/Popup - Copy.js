function fnTitlePopup() {
   oSrcElement = event.srcElement;
   event.returnValue = false;
    oDiv.style.backgroundColor = "lightyellow";
    oDiv.style.border = "solid black 1px";
    oDiv.style.fontSize = 11;
    oDiv.style.cursor = "default";
    var iMaxLength = 0;
    var sString = "";

    var iChildNumber = oDiv.children.length;
        for (var i = 0; i < iChildNumber; i++) {
        sString = oDiv.children[i].innerHTML;
        if (sString.length > iMaxLength) {
            iMaxLength = sString.length;
        }
    }
    
    oDiv.style.width = iMaxLength * 15;
    oDiv.style.height = iChildNumber * 15;
    
    var iLeft = event.clientX ;
    var iTop = event.clientY;
    //如果菜单宽度右边超过屏幕，修改左定位。
    if (document.body.offsetWidth - iLeft < oDiv.offsetWidth) {
        iLeft = document.body.offsetWidth - oDiv.offsetWidth;
    }   
    //如果菜单高度下端低于满屏，修改顶定位。
    if (document.body.offsetHeight - iTop < oDiv.offsetHeight) {
        iTop = document.body.offsetHeight - oDiv.offsetHeight;
    }  
    oDiv.style.left = iLeft + 2 + "px";
    oDiv.style.top = iTop - 2 + "px";
    //如果菜单条目超过满屏，滚动条滚动。
    if (document.body.offsetHeight - oDiv.offsetHeight <=0) {
        oDiv.style.height = document.body.offsetHeight;
        oDiv.style.overflow="scroll";
    }  
    oDiv.style.display = "block";
}
function fnContentsPopup() {     
    oSrcElement = event.srcElement;
    event.returnValue = false;    
    if (oSrcElement.tagName.toUpperCase() == "SPAN") {
        if (oSrcElement === oSrcElement.parentNode.getElementsByTagName("SPAN").item(1)) {
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
            oSrcElement.style.color = window.sColorClicked;
        }                     
        oDiv.style.backgroundColor = "lightyellow";
        oDiv.style.border = "solid black 1px";
        oDiv.style.fontSize = 11;
        oDiv.style.cursor = "default";
        var iMaxLength = 0;
        var sString = "";

        //var iChildNumber = oDiv.children.length;
        var iChildNumber = oDiv.getElementsByTagName("div").item(0).getElementsByTagName("div").length;
        for (var i = 0; i < iChildNumber; i++) {
            // sString = oDiv.children[i].innerHTML;
            sString = oDiv.getElementsByTagName("div").item(0).getElementsByTagName("div").item(i).innerHTML;
            if (sString.length > iMaxLength) {
                iMaxLength = sString.length;
            }
        }

        oDiv.style.width = iMaxLength * 15;
        oDiv.style.height = iChildNumber * 15;
        var iLeft = event.clientX;
        var iTop = event.clientY;
        //如果菜单宽度右边超过屏幕，修改左定位。

        if (document.body.offsetWidth - iLeft < oDiv.offsetWidth) {
            iLeft = document.body.offsetWidth - oDiv.offsetWidth;
        }
        //如果菜单高度下端低于满屏，修改顶定位。
        if (document.body.offsetHeight - iTop < oDiv.offsetHeight) {
            iTop = document.body.offsetHeight - oDiv.offsetHeight;
        }
        oDiv.style.left = iLeft + 2 + "px";
        oDiv.style.top = iTop - 2 + "px";
        //如果菜单条目超过满屏，滚动条滚动。
        if (document.body.offsetHeight - oDiv.offsetHeight <= 0) {
            oDiv.style.height = document.body.offsetHeight;
            oDiv.style.overflow = "scroll";
        }
        oDiv.style.display = "block";
        /**已不支持，只得改写
         if (window.sTempForUndo === "") {            
           // document.getElementById("sIdUndo").disabled = true;//已不支持，只得改写
            document.getElementById("sIdUndo").style.pointerEvents = "none";
        }
        else {
            //document.getElementById("sIdUndo").disabled = false;//已不支持，只得改写
            document.getElementById("sIdUndo").style.pointerEvents="";
        }

        if (window.sTempForRedo === "") {
            document.getElementById("sIdRedo").disabled = true;
        }
        else {
            document.getElementById("sIdRedo").disabled = false;
        }

        if (window.sTempForCopy === "") {
           //document.getElementById("sIdInsertCopied").disabled = true;//已不支持，只得改写
           // document.getElementById("sIdAppendCopied").disabled = true;//已不支持，只得改写
            
            document.getElementById("sIdInsertCopied").removeEventListener("onclick", fnInsertCopied, false);
            document.getElementById("sIdInsertCopied").addEventListener("onclick", fnInsertCopiedTemp, false);
            //document.getElementById("sIdInsertCopied").style.backgroundColor= "gray";//不美观
            document.getElementById("sIdAppendCopied").removeEventListener("onclick", fnAppendCopied, false);
            document.getElementById("sIdAppendCopied").addEventListener("onclick", fnAppendCopiedTemp, false);
            //document.getElementById("sIdAppendCopied").style.backgroundColor = "gray";//不美观
          
        }
        else {
           // document.getElementById("sIdInsertCopied").disabled = false;//已不支持，只得改写
           // document.getElementById("sIdAppendCopied").disabled = false;//已不支持，只得改写
            document.getElementById("sIdInsertCopied").removeEventListener("onclick", fnInsertCopiedTemp, false);
            document.getElementById("sIdInsertCopied").addEventListener("onclick", fnInsertCopied, false);
            document.getElementById("sIdAppendCopied").removeEventListener("onclick", fnAppendCopiedTemp, false);          
            document.getElementById("sIdAppendCopied").addEventListener("onclick", fnAppendCopied, false);
        }
        **/


        if (window.oSrcElement.tagName.toUpperCase() == "SPAN") {
            if (window.oSrcElement.parentNode.parentNode.getElementsByTagName("IMG").item(0).src.indexOf("/common/image/no.gif") > 0) {//使用window.oSrcElement.parentNode.childNodes.length==2)时出现奇怪现象，只好改用判断图标
                document.getElementById("sIdPromote").childNodes.item(0).nodeValue = "升级该条目一级";
                document.getElementById("sIdDemote").childNodes.item(0).nodeValue = "降级该条目一级";
                document.getElementById("sIdDel").childNodes.item(0).nodeValue = "删除该条目";
                document.getElementById("sIdCopy").childNodes.item(0).nodeValue = "复制该条目";
                document.getElementById("sIdCut").childNodes.item(0).nodeValue = "剪切该条目";
            }
            else {
                document.getElementById("sIdPromote").childNodes.item(0).nodeValue = "升级该条目及子条目一级";
                document.getElementById("sIdDemote").childNodes.item(0).nodeValue = "降级该条目及子条目一级";
                document.getElementById("sIdDel").childNodes.item(0).nodeValue = "删除该条目及子条目";
                document.getElementById("sIdCopy").childNodes.item(0).nodeValue = "复制该条目及子条目";
                document.getElementById("sIdCut").childNodes.item(0).nodeValue = "剪切该条目及子条目";
            }
        }
        else {//没实现
            alert("请右击目录中条目的非编号部分，将打开右击功能菜单！");
        }
    }
    else {
        alert("请右击目录中条目的非编号部分，将打开右击功能菜单！");//以前能实现，目前没能实现了
    }
}
function fnContentsPopupOld() {
    oSrcElement = event.srcElement;
    event.returnValue = false;        
    if (event.srcElement.tagName.toUpperCase() == "SPAN") {      
            if (event.srcElement === event.srcElement.parentNode.getElementsByTagName("SPAN").item(1)) {
                var cSPAN = document.getElementsByTagName("SPAN");
                var iSPANLength = cSPAN.length;
                for (i = 0; i < iSPANLength; i++) {
                    if (cSPAN.item(i).style.color == window.sColorClicked) {
                        cSPAN.item(i).style.color = window.sColorNormal;
                        break;
                    }
                    else {
                        ;
                    }
                }
                event.srcElement.style.color = window.sColorClicked;
                var oDiv = document.getElementById("popupDiv");
                var iChildNumber = oDiv.childNodes.length;
                if (window.sContentsPopUpState == 1) {//编辑目录状态的右击菜单；
                    for (var i = 0; i < iChildNumber; i++) {
                        if (oDiv.childNodes.item(i).id.lastIndexOf("_div") > 0) {
                            oDiv.childNodes.item(i).style.display = "none";
                        }
                        else {
                            oDiv.childNodes.item(i).style.display = "block";////""临时修改为了block
                        }
                    }
                }
                if (window.sContentsPopUpState == 0) {//非编辑目录状态的右击菜单；
                    for (var i = 0; i < iChildNumber; i++) {
                        if (String(oDiv.childNodes.item(i).id).lastIndexOf("_div") > 0) {
                            oDiv.childNodes.item(i).style.display = "block";//""临时修改为了block
                        }
                        else {
                            if (oDiv.childNodes.item(i).childNodes.length >1)//暂时添加，需修改
                            { oDiv.childNodes.item(i).style.display = "none"; }
                            
                        }
                    }
                }
            }
            window.oSrcElement = event.srcElement;
            var iLeft = event.clientX + 2;
            var iTop = event.clientY + 2;
            oDiv.style.backgroundColor = "lightyellow";
            oDiv.style.border = "solid black 1px";
            oDiv.style.fontSize = 11;
            oDiv.style.cursor = "default";

            var iMaxLength = 0;
            var sString = "";
            for (var i = 0; i < iChildNumber; i++) {
                if (oDiv.childNodes.item(i).childNodes.length > 1) {//暂时添加，需修改
                
                    if (oDiv.childNodes.item(i).style.display == "block") {//""临时修改为了block
                        sString = oDiv.childNodes[i].innerHTML;
                        if (sString.length > iMaxLength && oDiv.childNodes[i]) {
                            iMaxLength = sString.length;
                        }
                    }
            }
            }

            var iChildNumberDisplay = 0;
            for (var i = 0; i < iChildNumber; i++) {
                if (oDiv.childNodes.item(i).childNodes.length > 1) {//暂时添加，需修改
                    if (oDiv.childNodes.item(i).style.display == "block") {//""临时修改为了block
                        iChildNumberDisplay = iChildNumberDisplay + 1;
                    }
                }
            }
            
            oDiv.style.left = iLeft + "px";
            oDiv.style.top = iTop + "px";
            oDiv.style.width = iMaxLength * 15;
            oDiv.style.height = iChildNumber * 15;
            oDiv.style.display = "block";
            alert(oDiv.style.left + ";" + oDiv.style.top + ";" + oDiv.style.width + ";" + oDiv.style.height);

            if (window.sTempForUndo === "") {
                document.getElementById("sIdUndo").disabled = true;
            }
            else {
                document.getElementById("sIdUndo").disabled = false;
            }

            if (window.sTempForRedo === "") {
                document.getElementById("sIdRedo").disabled = true;
            }
            else {
                document.getElementById("sIdRedo").disabled = false;
            }

            if (window.sTempForCopy === "") {
                document.getElementById("sIdInsertCopied").disabled = true;
                document.getElementById("sIdAppendCopied").disabled = true;
            }
            else {
                document.getElementById("sIdInsertCopied").disabled = false;
                document.getElementById("sIdAppendCopied").disabled = false;
            }


            if (window.oSrcElement.tagName.toUpperCase() == "SPAN") {
                if (window.oSrcElement.parentNode.parentNode.getElementsByTagName("IMG").item(0).src.indexOf("/common/image/no.gif") > 0) {//使用window.oSrcElement.parentNode.childNodes.length==2)时出现奇怪现象，只好改用判断图标
                    document.getElementById("sIdPromote").childNodes.item(0).nodeValue = "升级该条目一级";
                    document.getElementById("sIdDemote").childNodes.item(0).nodeValue = "降级该条目一级";
                    document.getElementById("sIdDel").childNodes.item(0).nodeValue = "删除该条目";
                    document.getElementById("sIdCopy").childNodes.item(0).nodeValue = "复制该条目";
                    document.getElementById("sIdCut").childNodes.item(0).nodeValue = "剪切该条目";
                }
                else {
                    document.getElementById("sIdPromote").childNodes.item(0).nodeValue = "升级该条目及子条目一级";
                    document.getElementById("sIdDemote").childNodes.item(0).nodeValue = "降级该条目及子条目一级";
                    document.getElementById("sIdDel").childNodes.item(0).nodeValue = "删除该条目及子条目";
                    document.getElementById("sIdCopy").childNodes.item(0).nodeValue = "复制该条目及子条目";
                    document.getElementById("sIdCut").childNodes.item(0).nodeValue = "剪切该条目及子条目";
                }
            }
            else {//没实现
                alert("请右击目录中条目的非编号部分，将打开右击功能菜单！");
            }
        }
        else {
            alert("请右击目录中条目的非编号部分，将打开右击功能菜单！");
        }
    }

function fnContentPopup() {
    oSrcElement = event.srcElement;
    event.returnValue = false;
    oDiv.style.backgroundColor = "lightyellow";
    oDiv.style.border = "solid black 1px";
    oDiv.style.fontSize = 11;
    oDiv.style.cursor = "default";
    var iMaxLength = 0;
    var sString = "";

    //var iChildNumber = oDiv.children.length;
    var iChildNumber = oDiv.getElementsByTagName("div").item(0).getElementsByTagName("div").length;    
    for (var i = 0; i < iChildNumber; i++) {
       // sString = oDiv.children[i].innerHTML;
        sString = oDiv.getElementsByTagName("div").item(0).getElementsByTagName("div").item(i).innerHTML;
        if (sString.length > iMaxLength) {
            iMaxLength = sString.length;
        }
    }
    
    oDiv.style.width = iMaxLength * 15;
    oDiv.style.height = iChildNumber * 15;
    var iLeft = event.clientX;
    var iTop = event.clientY;
    //如果菜单宽度右边超过屏幕，修改左定位。
    
    if (document.body.offsetWidth - iLeft < oDiv.offsetWidth) {
        iLeft = document.body.offsetWidth - oDiv.offsetWidth;
    }
    
    //如果菜单高度下端低于满屏，修改顶定位。
    if (document.body.offsetHeight - iTop < oDiv.offsetHeight) {
        iTop = document.body.offsetHeight - oDiv.offsetHeight;
    }
    oDiv.style.left = iLeft + 2 + "px";
    oDiv.style.top = iTop - 2 + "px";
    //如果菜单条目超过满屏，滚动条滚动。
    if (document.body.offsetHeight - oDiv.offsetHeight <= 0) {
        oDiv.style.height = document.body.offsetHeight;
        oDiv.style.overflow = "scroll";
    }
    oDiv.style.display = "block";
}

/** 
window.onclick = function () {
    try { oDiv.style.display = "none"; }
    catch (e) { oDiv.style.display = "none"; }
    finally { { oDiv.style.display = "none"; } }
};//关闭右键菜单
**/

function fnWindowOnClick() {//关闭所有可能的右键菜单
    try { oDiv.style.display = "none"; }
    catch (e) { oDiv.style.display = "none"; }
    finally { { oDiv.style.display = "none"; } }

    try { parent.document.getElementById("sIframeTite").contentWindow.oDiv.style.display = "none"; }
    catch (e) { ; }
    finally { ; }

    try { parent.document.getElementById("sIframeContents").contentWindow.oDiv.style.display = "none"; }
    catch (e) { ; }
    finally { ; }

    try { parent.document.getElementById("sIframeContent").contentWindow.oDiv.style.display = "none"; }
    catch (e) { ; }
    finally { ;  }

    try { parent.document.getElementById("sIframeBottom").contentWindow.oDiv.style.display = "none"; }
    catch (e) { ; }
    finally { ; }
}

function fnPopupClosePopup() {
    oDiv.style.display = "none";
}

function fnPopupContextMenu() {
    event.returnValue = false;
}

function fnPopupMouseOver() {
    event.srcElement.style.color = "rgb(0,255,0)";
}

function fnPopupMouseOut() {
    event.srcElement.style.color = "rgb(0,0,0)";
}