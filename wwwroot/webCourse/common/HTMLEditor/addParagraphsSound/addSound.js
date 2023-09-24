/**
 * @author Administrator
 */
function fnok(textID,ii)
{
   document.body.removeAttribute()
   event.srcElement
    var NodeP = dialogArguments.document.frames(0).document.getElementsByTagName("P");
    var j = 0;
    
    for (var i = 0; i < NodeP.length; i++) 
    {
        if (i >= ii) 
        {
            if (NodeP[i].innerHTML != "") 
            {
                j++;
		        //if(NodeP[i])
                var oImg = dialogArguments.document.frames(0).document.createElement("img");
                oImg.onclick = "parent.frames('sIFrameTitle').SoundPlay('" + textID + "_" + j + "')";
                oImg.src = "../../../../common/image/Sound.gif";
                oImg.title = "单击播放段落语音";
                oImg.style.cursor = "hand";
                //dialogArguments.getPObject().parent.
                NodeP[i].insertBefore(oImg, NodeP[i].firstChild);
            }
        }
    }
    //dialogArguments.getPObject().style.color = "";
    window.close();
}

// 运行到本段
function fnok1(textID,startSound,num1,num2)
{
 
    var NodeP = dialogArguments.document.frames(0).document.getElementsByTagName("P");
    var j = 0;
    
    for (var i = 0; i < NodeP.length; i++) 
    {
        if (i >= startSound) 
        {
            if (NodeP[i].innerHTML != "") 
            {
                j++;
				if ((j+startSound) > num1 && (j+startSound) <= num2+1) 
				{
					//if(NodeP[i])
					var oImg = dialogArguments.document.frames(0).document.createElement("img");
					oImg.onclick = "parent.frames('sIFrameTitle').SoundPlay('" + textID + "_" + j + "')";
					oImg.src = "../../../../common/image/Sound.gif";
					oImg.title = "单击播放段落语音";
					oImg.style.cursor = "hand";
					//dialogArguments.getPObject().parent.
					NodeP[i].insertBefore(oImg, NodeP[i].firstChild);
				}
            }
        }
    }
    //dialogArguments.getPObject().style.color = "";
    window.close();
}