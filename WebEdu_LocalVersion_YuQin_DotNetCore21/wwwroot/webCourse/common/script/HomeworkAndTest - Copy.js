function fnHomeworkAndTest() {
   
    fnValidationHomeworkAndTest();
    var cTr = document.getElementsByTagName("table").item(0).getElementsByTagName("tr");
   //alert(cTr[1].getElementsByTagName("td").item(0).innerHTML);
    var iTrLenth = cTr.length;
   var iProblemNum = iTrLenth / 7;
    //console.log(cTr[1].innerHTML);
    /**
    for (i = 0; i < iProblemNum; i++) {
        for (j = 0; j < 7; j++) {
            cTr[i * j].getElementsByTagName("td").item(0).innerHTML += "<span>" + i + "</span>";
            cTr[i * j + 1].getElementsByTagName("td").item(0).innerHTML += "<span>A.</span>" ;
            cTr[i * j + 2].getElementsByTagName("td").item(0).innerHTML += "<span>B.</span>" ;
            cTr[i * j + 3].getElementsByTagName("td").item(0).innerHTML += "<span>C.</span>" ;
            cTr[i * j + 4].getElementsByTagName("td").item(0).innerHTML += "<span>D.</span>" ;
        }
    }**/
    for (i = 0; i < iTrLenth; i++) {
        //for (j = 0; j < 6; j=i*j) {
        if ((i + 7) % 7 === 0) { cTr[i].getElementsByTagName("td").item(0).innerHTML = "<span style=\"color:red\">题目" + ((i+7)/7) + "：</span>" + cTr[i].getElementsByTagName("td").item(0).innerHTML; }
        if ((i + 7) % 7 === 1) { cTr[i].getElementsByTagName("td").item(0).innerHTML = "<span style=\"color:red\">(A)</span>" + cTr[i].getElementsByTagName("td").item(0).innerHTML; }
        if ((i + 7) % 7 === 2) { cTr[i].getElementsByTagName("td").item(0).innerHTML = "<span style=\"color:red\">(B)</span>" + cTr[i].getElementsByTagName("td").item(0).innerHTML; }
        if ((i + 7) % 7 === 3) { cTr[i].getElementsByTagName("td").item(0).innerHTML = "<span style=\"color:red\">(C)</span>" + cTr[i].getElementsByTagName("td").item(0).innerHTML; }
        if ((i + 7) % 7 === 4) { cTr[i].getElementsByTagName("td").item(0).innerHTML = "<span style=\"color:red\">(D)</span>" + cTr[i].getElementsByTagName("td").item(0).innerHTML; }
        if ((i + 7) % 7 === 5) { cTr[i].getElementsByTagName("td").item(0).innerHTML = "<span style=\"color:red\">正确答案是：</span>" + cTr[i].getElementsByTagName("td").item(0).innerHTML; }
        if ((i + 7) % 7 === 6) { cTr[i].getElementsByTagName("td").item(0).innerHTML = "<span style=\"color:red\">解释：</span>" + cTr[i].getElementsByTagName("td").item(0).innerHTML; }
       // }
    }
}

function fnValidationHomeworkAndTest() {
    var cTr = document.getElementsByTagName("table").item(0).getElementsByTagName("tr");//最外层表格嵌套了表格（如题干有表格）的问题没有解决
    var iTrLenth = cTr.length;
    //alert(iTrLenth);
    if (iTrLenth % 7 != 0) { alert("上传的作业与测试可能有问题，每道题必须是7个表行。总表行必须是7的倍数。请基于模板制作。"); }
    if (false) { alert("上传的作业与测试可能有问题，每道题必须是7个表行。第6个表行是答案，必须是A\B\C\D中的一个字母，不能有其他字符、空格！请基于模板制作。"); }//
}