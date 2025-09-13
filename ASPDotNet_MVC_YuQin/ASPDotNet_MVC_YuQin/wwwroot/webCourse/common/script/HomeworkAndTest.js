function fnHomeworkAndTest() {
   
    fnValidationHomeworkAndTest();
    var oDate = new Date();
    var sTimeStamp=oDate.getTime();
    var cTr = document.getElementsByTagName("table").item(0).getElementsByTagName("tr");
   //alert(cTr[1].getElementsByTagName("td").item(0).innerHTML);
    var iTrLenth = cTr.length;
   var iProblemNum = iTrLenth / 8;
    //console.log(cTr[1].innerHTML);
   
    for (i = 0; i < iTrLenth; i++) {
        //for (j = 0; j < 6; j=i*j) {
        if ((i + 8) % 8 === 0) { cTr[i].getElementsByTagName("td").item(0).innerHTML = "<span style=\"color:red\">题目" + ((i + 8) / 8) + "：</span>" + cTr[i].getElementsByTagName("td").item(0).innerHTML; }

        if ((i + 8) % 8 === 1) {cTr[i].getElementsByTagName("td").item(0).innerHTML = "<span><span style=\"color:red\"><input type=\"radio\" name=\"options" + sTimeStamp + Math.floor(((i + 8) / 8)) + "\" />(A)</span>" + cTr[i].getElementsByTagName("td").item(0).innerHTML + "</span>"; }
        if ((i + 8) % 8 === 2) {cTr[i].getElementsByTagName("td").item(0).innerHTML = "<span><span style=\"color:red\"><input type=\"radio\" name=\"options" + sTimeStamp + Math.floor(((i + 8) / 8)) + "\" />(B)</span>" + cTr[i].getElementsByTagName("td").item(0).innerHTML + "</span>"; }
        if ((i + 8) % 8 === 3) {cTr[i].getElementsByTagName("td").item(0).innerHTML = "<span><span style=\"color:red\"><input type=\"radio\" name=\"options" + sTimeStamp + Math.floor(((i + 8) / 8)) + "\" />(C)</span>" + cTr[i].getElementsByTagName("td").item(0).innerHTML + "</span>"; }
        if ((i + 8) % 8 === 4) {cTr[i].getElementsByTagName("td").item(0).innerHTML = "<span><span style=\"color:red\"><input type=\"radio\" name=\"options" + sTimeStamp + Math.floor(((i + 8) / 8)) + "\" />(D)</span>" + cTr[i].getElementsByTagName("td").item(0).innerHTML + "</span>";}

        if ((i + 8) % 8 === 5) {cTr[i].getElementsByTagName("td").item(0).innerHTML = "<span><span style=\"color:red\"><input type=\"button\" onclick=\"fnAnswerAndToggoleAnswerDisplay();\" value=\"确定并查看答案\" /></span>" + "<span style=\"display:none\" id=\"idAnswer" + sTimeStamp + Math.floor(((i + 8) / 8))  +"\""+">" + cTr[i].getElementsByTagName("td").item(0).innerHTML + "</span></span>";}
       if ((i + 8) % 8 === 6) { cTr[i].getElementsByTagName("td").item(0).innerHTML = "<span><span style=\"color:red\"><input type=\"button\" onclick=\"fnToggoleAnswerExplainDisplay();\" value=\"查看答案的解释\" /></span>" + "<span style=\"display:none\" id=\"idExplain" + sTimeStamp + Math.floor(((i + 8) / 8)) + "\""+">" + cTr[i].getElementsByTagName("td").item(0).innerHTML + "</span></span>"; }
        if ((i + 8) % 8 === 7) { cTr[i].getElementsByTagName("td").item(0).innerHTML = "<span><span style=\"color:red\"><input type=\"button\" onclick=\"fnToggoleFiveLayerMVCExplainDisplay();\" value=\"查看五层MVC的解释（A.实践-数据读写封装/B.技术-信息提取运用/C.科学-规律预测探究/D.人文-情感交流共鸣/E.哲学-智能建构生成）\" /></span>" + "<span style=\"display:none\" id=\"idFiveLayerMVCExplain" + sTimeStamp + Math.floor(((i + 8) / 8)) + "\""+">" + cTr[i].getElementsByTagName("td").item(0).innerHTML + "</span></span>"; }
       // }
    }
    //alert(cTr[8].getElementsByTagName("td").item(0).innerHTML + ";" + cTr[9].getElementsByTagName("td").item(0).innerHTML + ";" + cTr[10].getElementsByTagName("td").item(0).innerHTML);
}

function fnValidationHomeworkAndTest() {
    try {
        var cTr = document.getElementsByTagName("table").item(0).getElementsByTagName("tr");//最外层表格嵌套了表格（如题干有表格）的问题没有解决
        var iTrLenth = cTr.length;
       // alert(iTrLenth);
       // if (iTrLenth % 7 != 0) { alert("上传的作业与测试可能有问题，无法正常运行。请基于word模板文件，排版制作作业与测试，然后上传！每道题必须是7个表行。总表行必须是7的倍数。"); }
if (iTrLenth % 8 != 0) { alert("上传的作业与测试可能有问题，无法正常运行。请基于word模板文件，排版制作作业与测试，然后上传！每道题必须是8个表行。总表行必须是8的倍数。"); }
      //  if (false) { alert("上传的作业与测试可能有问题，每道题必须是7个表行。第6个表行是答案，必须是A\B\C\D中的一个字母，不能有其他字符、空格！请基于word模板文件，排版制作作业与测试，然后上传！"); }//
      if (false) { alert("上传的作业与测试可能有问题，每道题必须是8个表行。第6个表行是答案，必须是A\B\C\D中的一个字母，不能有其他字符、空格！。第8个表行是层MVC的解释（A.实践-数据读写封装/B.技术-信息提取运用/C.科学-规律预测探究/D.人文-情感交流共鸣/E.哲学-智能建构生成），必须是A\B\C\D\E中的一个字母，不能有其他字符、空格！请基于word模板文件，排版制作作业与测试，然后上传！"); }//
    }
    catch (e) {
        alert("上传的作业与测试可能有问题，无法正常运行。请基于word模板文件，排版制作作业与测试，然后上传！");
    }
}

function fnAnswerAndToggoleAnswerDisplay() {
    document.getElementById(event.srcElement.parentElement.parentElement.children[1].id).style.display = "none";
    //alert(event.srcElement.parentElement.parentElement.getElementsByTagName("span").item(event.srcElement.parentElement.parentElement.getElementsByTagName("span").length - 1).innerHTML);
    // alert(event.srcElement.parentElement.parentElement.getElementsByTagName("span").item(event.srcElement.parentElement.parentElement.getElementsByTagName("span").length - 1).id);
    // alert(event.srcElement.parentElement.parentElement.children[1].innerHTML);
    // alert(event.srcElement.parentElement.parentElement.children[1].id);
    //  alert(document.getElementById(event.srcElement.parentElement.parentElement.children[1].id).style.display);
    
   // var sAnswer = document.getElementById(event.srcElement.parentElement.parentElement.children[1].id).childNodes.item(1).innerHTML.replace(/\s*/g, "")
    alert(document.getElementById(event.srcElement.parentElement.parentElement.children[1].id).childNodes.item(1).childNodes.item(0).innerHTML);//可能和Word版本有关。Word2106测试可以。有些版本可能要改为document.getElementById(event.srcElement.parentElement.parentElement.children[1].id).childNodes.item(1).innerHTML
     var sAnswer = document.getElementById(event.srcElement.parentElement.parentElement.children[1].id).childNodes.item(1).childNodes.item(0).innerHTML.replace(/\s*/g, "")//可能和Word版本有关。Word2106测试可以。
    var sIdOfAnswer = event.srcElement.parentElement.parentElement.children[1].id;
    //var sAutoGenPartOfAnswer = sIdOfAnswer.subString("idAnswer".length-1);
    var sAutoGenPartOfIdOfAnswer = sIdOfAnswer.substring("idAnswer".length);
    var cInput = document.getElementsByTagName("input");
    var iLengthOfInput = cInput.length;
    var iTarget = -1;
    for (var i = 0; i < iLengthOfInput; i++) {
        //console.log(cInput[i].type);
        if (cInput[i].type == "radio" && (cInput[i].checked == true) &&(cInput[i].name.indexOf(sAutoGenPartOfIdOfAnswer) > 1)) {
      // if ((cInput[i].type == "radio" )&& (cInput[i]..name.indexOf(sAutoGenPartOfIdOfAnswer) > 1)) {
            iTarget=i; 
       }
    }
    if (iTarget == -1) { alert("本题目中，您可能还没有单击选择一个选项！请重新选择一个选项！");return; }
    else {
       
        var isCorrect = "错误！";
        
        if (cInput[iTarget].parentNode.textContent.indexOf(sAnswer) > 0) {
            isCorrect = "正确！";
            alert("您选择的是：" + cInput[iTarget].parentNode.textContent + "；" + "您的选择：" + isCorrect + "；" + "正确答案是：" + sAnswer);
        }
        else {
            var isReDo = confirm("您选择的是：" + cInput[iTarget].parentNode.textContent + "；" + "您的选择：" + isCorrect + "；" +"重做吗？");
            if (isReDo) { return; }
            else {
                //if (document.getElementById(event.srcElement.parentElement.parentElement.children[1].id).style.display == "none") {
                    document.getElementById(event.srcElement.parentElement.parentElement.children[1].id).style.display = "";
               // }
               // else {
                  //  document.getElementById(event.srcElement.parentElement.parentElement.children[1].id).style.display = "none";
                //}
            }
        }
    }
}

function fnToggoleAnswerExplainDisplay() {
        if (document.getElementById(event.srcElement.parentElement.parentElement.children[1].id).style.display == "none") {
        document.getElementById(event.srcElement.parentElement.parentElement.children[1].id).style.display = "";
    }
    else {
        document.getElementById(event.srcElement.parentElement.parentElement.children[1].id).style.display = "none";
    }
}

function fnToggoleFiveLayerMVCExplainDisplay() {
        if (document.getElementById(event.srcElement.parentElement.parentElement.children[1].id).style.display == "none") {
        document.getElementById(event.srcElement.parentElement.parentElement.children[1].id).style.display = "";
    }
    else {
        document.getElementById(event.srcElement.parentElement.parentElement.children[1].id).style.display = "none";
    }
}

