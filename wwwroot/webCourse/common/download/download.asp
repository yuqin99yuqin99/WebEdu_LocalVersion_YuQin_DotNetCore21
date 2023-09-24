<% 
Response.Buffer = true 
Response.Clear 
dim url 
Dim fso,fl,flsize 
dim Dname 
Dim objStream,ContentType,flName,isre,url1 
'*********************************************调用时传入的下载文件名 
Dname=trim(request("n")) 
'****************************************************************** 
If Dname<>"" Then 
'******************************下载文件存放的服务端目录 
url=server.MapPath("../../"+Dname) 
response.write url
'response.end 
'*************************************************** 
End If 
Set fso=Server.CreateObject("Scripting.FileSystemObject") 
Set fl=fso.getfile(url) 
flsize=fl.size 
flName=fl.name 
Set fl=Nothing 
Set fso=Nothing 
%> 
<% 
Set objStream = Server.CreateObject("ADODB.Stream") 
objStream.Open 
objStream.Type = 1 
objStream.LoadFromFile url 

Select Case lcase(Right(flName, 4))   '以下是各种格式，可以自行修改
Case ".asf" 
ContentType = "video/x-ms-asf" 
Case ".avi" 
ContentType = "video/avi" 
Case ".doc" 
ContentType = "application/msword" 
Case ".zip" 
ContentType = "application/zip" 
Case ".xls" 
ContentType = "application/vnd.ms-excel" 
Case ".gif" 
ContentType = "image/gif" 
Case ".jpg", "jpeg" 
ContentType = "image/jpeg" 
Case ".wav" 
ContentType = "audio/wav" 
Case ".mp3" 
ContentType = "audio/mpeg3" 
Case ".wma" 
ContentType = "audio/wma" 
Case ".mpg", "mpeg" 
ContentType = "video/mpeg" 
Case ".rtf" 
ContentType = "application/rtf" 
Case ".htm", "html" 
ContentType = "text/html" 
Case ".txt" 
ContentType = "text/plain" 
Case Else 
ContentType = "application/octet-stream" 
End Select 

Response.AddHeader "Content-Disposition", "attachment; filename=" & flName 
Response.AddHeader "Content-Length", flsize 
Response.Charset = "UTF-8" 
Response.ContentType = ContentType 
Response.BinaryWrite objStream.Read 
Response.Flush 
response.Clear() 
objStream.Close 
Set objStream = Nothing 
%>

