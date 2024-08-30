
<% 
'Response.write(Session("sName"));
Response.Buffer = True
Response.ExpiresAbsolute = Now() - 1 
Response.Expires = 0
Response.CacheControl = "no-cache" 
Response.AddHeader "Pragma", "No-Cache" 
Response.ContentType="text/xml"

'Response.Charset="gb2312"
music=Request.QueryString("music")
'sCourseName="ÖÐ¹ú"
'Response.write(sCourseName)
 Dim fso
 Set fso = CreateObject("Scripting.FileSystemObject")
filespec=Server.mapPath("../../lessons/content" & "/book/" & music & "/" & music & ".mp3")
if fso.FileExists(filespec) then
 Response.write("<Yes/>")
else 
 Response.write("<No/>")
end if
%> 

