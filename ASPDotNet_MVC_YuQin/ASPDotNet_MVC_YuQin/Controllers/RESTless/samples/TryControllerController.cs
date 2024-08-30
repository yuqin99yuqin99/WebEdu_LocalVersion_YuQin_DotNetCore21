using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
namespace EDSS.csontrollers
{
    public class Learner : Object
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public Int32 LearnerID { get; set; }//并非真正需求Int32,只是为了便于映射VS数据库
        public String PassportNumber { get; set; } //护照编号
        public String IndentityCordNumber { get; set; } //身份证ID编号
        public String TelephoneNumber { get; set; }
        public String Email { get; set; }
        public String Name { get; set; }
        public Boolean? Gender { get; set; } //true代表男，false代表女。
        public String SorcePlace { get; set; }
    }
    public class TryControllerController : Controller
{
    public ActionResult TryReturnContent()
    {
            Learner learner1 = new Learner();
            learner1.LearnerID = 1;
            learner1.Name = "jbhuang99";
            Learner learner2 = new Learner();
            learner2.LearnerID = 2;
            learner2.Name = "yunqin";
            return this.Content("学号："+learner1.LearnerID.ToString()+";"+"姓名:" + learner1.Name+ "学号：" + learner2.LearnerID.ToString() + ";" + "姓名:" + learner2.Name);
    }

    
    public ActionResult TryReturnFile()
    {
            //return this.PhysicalFile(@"c:\NTDETECT.COM", "application/com","NTDETECT.COM");
            return this.PhysicalFile(@"d:\temp\everyDay.html", "text/html", "everyDay.html");
        }

        public ActionResult TryRedirectNonRouted()
    {
        return this.Redirect("/TryTemp/New.html");
    }

    public ActionResult TryRedirectToAction()
    {
            return this.RedirectToAction("index");
    }

    public RedirectToRouteResult TryRedirectToRoute()
    {
        return this.RedirectToRoute("default");
    }     

    public JsonResult TryReturnJSON()
    {
        return this.Json("");  
        }
}
}