﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="addTextSound.aspx.cs" Inherits="addParagraphsSound.addTextSound" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <title>无标题页</title>
    <base target=_self></base>
</head>
<body>
    <form id="form1" runat="server">
    <div style="text-align: center">
        <strong>上传课文语音<br />
        </strong>
        <br />
        课文语音：<input id="SoundFile" runat="server" type="file" /><br />
        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="上传" Width="64px" /></div>
    </form>
</body>
</html>
