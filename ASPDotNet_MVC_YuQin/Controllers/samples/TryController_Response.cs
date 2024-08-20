using System;
using System.IO;
using System.Web.Mvc;
namespace EDSS.csontrollers
{
    public class TryController_ResponseController : Controller
{
    public ViewResult TryView()
    {
        EDSS.Models.TryModel tryModel = new EDSS.Models.TryModel();
        tryModel.LearnerId = "000010";
        tryModel.Name = "jbhuang99";
        return this.View("/Views/Samples/TryController/tryView.cshtml", tryModel);//要传多个模型对象，可模型对象集合，或，部分视图，或，视图中定义帮助器/方法实现。
    }

    public ContentResult TryContent()
    {
        return this.Content("<a href='www.jxnu.edu.cn'>请单击</a>");
    }
    public FilePathResult TryFile()
    {
       // return this.File(@"c:\NTDETECT.COM", "application/com", "NTDETECT.COM");
        return this.File(@"d:\everyDay.html", "application/com", "everyDay.html");
    }
    public RedirectResult TryRedirectRouted()
    {
        return this.Redirect("TryView");
    }
    public RedirectResult TryRedirectNonRouted()
    {
        return this.Redirect("/tryhtml5/html/index.html");
    }

    public RedirectToRouteResult TryRedirectToAction()
    {
        return this.RedirectToAction("TryContent");
    }

    public RedirectToRouteResult TryRedirectToRoute()
    {
        return this.RedirectToRoute("default");
    }

    public ContentResult TryStringFromModel()
    {
        EDSS.Models.TryModel tryModel=new EDSS.Models.TryModel();
        tryModel.LearnerId = "000010";
        tryModel.Name= "jbhuang99";
         return this.Content("这是返回取值于模型M的属性的字符串到浏览器端的示例:" + tryModel.LearnerId + ";" + tryModel.Name);
    }       
    public ViewResult TryViewWithModel()
    {
        EDSS.Models.TryModel tryModel = new EDSS.Models.TryModel();
        tryModel.LearnerId = "000010";
        tryModel.Name = "jbhuang99";
        return this.View("/Views/Samples/TryController/tryViewWithModel.cshtml", tryModel);
    }
    public ViewResult tryViewBagFromController()
    {
        this.ViewBag.TryProperty = "控制器C对象内置的ViewBag属性返回ViewBag这一Dynamic对象，ViewBag作为Dynamic对象，可定义Expando属性，在此定义了TryProperty属性及其值。然后可根据需求进一步处理。例如，可传递给控制器所调用的视图V，视图V处理后可返回给浏览器端。";
        return this.View("/Views/Samples/TryController/tryViewBagFromController.cshtml");
    }
    
 
   
    public JavaScriptResult JSReturned()
    {
        return this.JavaScript("window.alert('hi!')");
    }

    public JsonResult JSONReturned()
    {
        return this.Json("window.alert('hi!')", JsonRequestBehavior.AllowGet);
    }

    public void TryResponse()
    {
         this.Response.Write("hi"+"<br/><script>window.alert('hi')</script>");
         Response.WriteFile(@"d:\temp\musicstore.xls");
        
         FileStream fileStream = new FileStream(Server.MapPath("./fff.jpg"), FileMode.Open);
         Int64 FileSize = fileStream.Length;
         Byte[] Buffer = new Byte[(Int32)FileSize];
         Response.ContentType = "image/jpg";
         fileStream.Read(Buffer, 0, (int)FileSize);
         fileStream.Close();
         Response.BinaryWrite(Buffer);
         Response.Write(Server.MapPath(@"Images\fff.jpg"));
         
         Response.Redirect("www.baidu.com");
         Response.RedirectToRoute("/TryController");//可想办法返回CSHTML视图？

    }

}
}