function showActiveX() {
 	try{
     document.write("<object classid='clsid:D27CDB6E-AE6D-11CF-96B8-444553540000' id='movie1' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0' border='0' width='100%' height='100%'>");
     document.write("<param name='movie' value='"+sPlayFileName+"'>");
     document.write("<PARAM NAME='loop' VALUE='false'>");
	 document.write("<param name='quality' value='High'>");
	 document.write("<embed src='"+sPlayFileName+"'quality=high bgcolor=#311 NAME='"+sPlayFileName+"' ALIGN='' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' name='movie1' width='160' height='160'></object>");
	 // alert(sPlayFileName);
    }
   catch(e){
	  fnPlayClip();
    }
}