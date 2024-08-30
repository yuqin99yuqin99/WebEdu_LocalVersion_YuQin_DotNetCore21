//using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
//using Microsoft.Office.Interop.Excel;
//using Microsoft.Office.Interop.Word;
using System;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers.Examples
{
    public class TryObjectController : Controller
    {
        // GET: TryObjectController
        public ActionResult Index()
        {
            
            //return this.Content("黄景碧");
          //  Object TryObject = new Object();
           // Object TryObject2 = new Object();
            Teacher HJB = new Teacher();
            HJB.TeacherId = "0001";
            HJB.Name = "黄景碧";
            HJB.IsMale = false;
            Teacher WSY = new Teacher();
            WSY.TeacherId = "0002";
            WSY.Name = "温善毅";
            Student student1 = new Student();
            student1.StudentId = "s0001";
            Student student2 = new Student();
            student1.StudentId = "s0002";
            // return this.Content(TryObject.ToString()+"是否就是1:"+ TryObject.Equals(1).ToString());
            return this.Content(HJB.TeacherId + HJB.Name + HJB.IsMale + WSY.TeacherId + WSY.Name+student1.StudentId+";"+student2.StudentId);
        }
    }
    
    public class Person : Object
    {

        //public String PersonId = "";
        public String PersonId { get; set; }
        public String PassPort = "";
        public String Name = "";
       // public Single Height = 1.7f;
        public Boolean IsMale = true;
        public Double Weight = 100;
        private String Password = "";
        
    }
    public class Teacher : Person
    {
        public String TeacherId = "";
        public String Ask(String a,String b)
        {
            return (a+b);
        }
    }

    public class Student : Person
    {
        public String StudentId = "00001";
        public String Answer(String a, String b)
        {
            return (a + b);
        }
    }



}
