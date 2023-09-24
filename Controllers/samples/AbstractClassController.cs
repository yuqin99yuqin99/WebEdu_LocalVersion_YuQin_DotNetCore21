using System;
using System.Net.Mail;
using System.Net.Mime;
//using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Vbe.Interop.Forms;
using ChangedMyNameSpace = MyNameSpace;
//using MyNameSpace;

namespace EDSSTemp.Controllers
{

 
    public abstract class Person : System.Object//人(在此三个子后代)（语句只有封装为属性、方法再进一步封装为class等类型，才能实现后续的继承、多态！）（类只能单重继承）（接口可以多重履行方式继承）
    /**
      abstract类，abstract主要用来防止本来自身对象化（因为本类对象化不符合实际需求）。后代非abstract类可以对象化（因为需要对象化去实现实际需求）。
      祖先后代的优点：本类若增加属性或方法，则所有后代都将自动接纳方式地继承本类所增加得属性或方法。
**/
    {//语句块{}
        internal Int32 ID { set; get; } //默认0。
        internal String Welcome()
        {
            Int32 num0 = 1;
            if (num0 == 0) {; }
            else {; }
            Object Object1 = new Object();
            Int32 num1 = 1;
            String string1 = "我是HJB";
            return ("您好！领域驱动的软件工程！需求为本！");
        }
        
        internal String Name { set; get; }//默认空字符串.
        internal virtual String Gender { set; get; }//默认空字符串。//virtual关键词属性。可以在后代继承属性的声明，（使用override关键词）改写属性的定义。
        internal Int32 MobilephoneNumber { set; get; }//默认0。
        DateTime BirthDay { set; get; }//在此注释掉。如果需要，去掉注释，3个子后代就都将自动继承本属性！体现面向对象继承的优点!。
        
        String StringOfWelcome {
            set {; } 
            get {return( "您好！领域驱动的软件工程！需求为本！"); } 
        }
        internal String GetName() { return ("人的姓名"); }
        internal virtual String GetType_()//virtual关键词方法。可以在后代继承方法的声明，（使用override关键词）改写方法的定义。
        {
            return ("人");
        }
        internal virtual String Secret(Int32 creditCardID, String creditCardPassword)//virtual关键词方法。可以在后代继承方法的声明，（使用override关键词）改写方法的定义。
        {
            creditCardID = 123456;
            creditCardPassword = "hiMoney";
            return (creditCardID.ToString()+ creditCardPassword + "这段真实的代码非常复杂密码，涉及如下安全性问题： 一是我的代码思路不想轻易让他人知道以免被攻击侵入。 二是代码使用到了银行卡密码容易无意中泄露。所以如果整个类需要拷贝给他人继承扩展，务必事先删除上述敏感代码！！！！");
        }
        internal virtual String ThirdPartyPrinter()//virtual关键词方法。可以在后代继承方法的声明，（使用override关键词）改写方法的定义。
        {
            return ("这是打印机程序，我们自己无法编写，请打印机公司提供或条用。涉及如下问题：打印公司不一定愿意提供源码，无法直接拷贝引用源码，而只能继承或调用打印公司AOT编译好的.dll中的类型的方法。继承的话，因为单重继承的规则，继承层次沟通只能通过文档说明费时费力。类型对象的属性方法的话，方法声明方法参数等只能通过文档说明费时费力。于是发明了类接口这一特殊类型的思路，类接口类型可以认为是类类型变换而来的专门用作接口的类，后代类履行类接口中属性方法的声明，新建属性方法的定义。可由其他类调用") ;
        }
        }
    public  class Teacher:Person//老师
    {
        /** override internal Int32 Property3 
         { 
             get { return 3; }
             set {; } 
         }**/
        Int32 IDTeacher { set; get; }//自身可以拓展属性方方法。
        override internal String Gender
        {
            get { return "男"; }//如果实践需求是男老师居多，就重写默认"男"
            set {; }
        }
        override internal String GetType_()
        {
            return ("教师");
        }
    }
    public class Student : Person//学生
    {
      
        override internal String Gender
        { 
             get { return "女"; }//如果实践需求是女学生居多，就重写默认"女"
            set {; } 
         }
        override internal String GetType_()
        {
            return ("学生");
        }
        Int32 IDStudent { set; get; }//自身可以拓展属性方方法。
   
    }

    public class Adminstrator : Person//管理人员
    {
        /**override internal String GetType_()
        {
            return ("管理人员");
        }**/
    }

    public class AbstractClassController : Controller//浏览器浏览这个类，这个类中调用了其他我们自己定义的类。
    {
        
        public  ActionResult Index()//也可public ContentResult Index()、public Object Index();即“多态宏观抽象容变“与“单态微观具体怕变”的统一!
        {
            
            //Person personHJB = new Person();//abstact类企图对象化，出错，因为不允许。这样设计为abstract是因为Person类对象化不符合实际需求!(因为此软件实际中不会出现人这个对象)。
         // Person teacherHJB = new Teacher();//基于“人”这个类型创建teacherHJB这个对象，创建对象时使用“教师”的构建方法()
            Teacher teacherHJB = new Teacher();// Teacher改为Student行吗？
            //Teacher teacherHJB1 = new Teacher();//基于“教师”这个类型创建teacherHJB1这个对象，创建对象时使用“教师”的构建方法()
            // Adminstrator teacherHJB2 = new Adminstrator();//基于“人”这个类型创建teacherHJB这个对象，创建对象时使用“教师”的构建方法()
            // Adminstrator teacherHJB3 = new Adminstrator();//基于“人”这个类型创建teacherHJB这个对象，创建对象时使用“教师”的构建方法()
            // Adminstrator teacherHJB4 = new Adminstrator();//基于“人”这个类型创建teacherHJB这个对象，创建对象时使用“教师”的构建方法()

            //  Teacher teacherHJB2 = new Teacher();//基于“人”这个类型创建teacherHJB这个对象，创建对象时使用“教师”的构建方法()
            // Person teacherHJB3 = new Teacher();//基于“人”这个类型创建teacherHJB这个对象，创建对象时使用“教师”的构建方法()
            //  Person teacherHJB4 = new Teacher();//基于“人”这个类型创建teacherHJB这个对象，创建对象时使用“教师”的构建方法()

            Person teacherHJB2 = new Adminstrator();//基于“人”这个类型创建teacherHJB这个对象，创建对象时使用“教师”的构建方法()
            Person teacherHJB3 = new Adminstrator();//基于“人”这个类型创建teacherHJB这个对象，创建对象时使用“教师”的构建方法()
            Person teacherHJB4 = new Adminstrator();//基于“人”这个类型创建teacherHJB这个对象，创建对象时使用“教师”的构建方法()//Person自动会变为Adminstrator
            //也可Teacher teacherHJB = new Teacher();甚至Object teacherHJB = new Teacher()。即“多态宏观抽象容变“与“单态微观具体怕变”的统一!Teacher最具体，一看就明白要创建一个Teacher类型的对象，但假如此代码要改为创建student类型的对象，就Teacher需要修改为Student，而如果使用了更抽象的Person就可以不修改。如果使用根级别抽象的Object，基本都可不修改（但也不便于交流，因为指代太泛指而不够具体），所基于的类型越抽象，所创建的对象的功能也可能更少，而且如果涉及引用类型与拷贝类型之间的转换，可能影响软件性能。就如我和你们上课时交流，一般都说“请个同学”回答问题（然后点名同学，具体到上课时最微观的具体名字的同学），而一般不用更抽象的“请个人”回答问题。
            teacherHJB.Name = "HJB";
            Person Student1 = new Student();// 也可Student Student1 = new Student();甚至Object Student1 = new Student().即“多态宏观抽象容变“与“单态微观具体怕变”的统一!
            Student1.ID = 123456;
            Adminstrator adminstrator = new Adminstrator();
            return this.Content(
                " Adminstrator管理人员：" 
                + "<p></p>"
                + adminstrator.Welcome() 
                + "<br/>分类："
                + adminstrator.GetType_() 
                + "<br/>姓名："
                + adminstrator.Name
                + "<br/>性别："
                + adminstrator.Gender
                + "<p></p>"
                + " Teacher教师："
                + "<p></p>"
                + teacherHJB.Welcome()
                 + "<br/>分类："
                + teacherHJB.GetType_()
                + "<br/>性别："
                + teacherHJB.Gender
                + "<br/>姓名："
                + teacherHJB.Name
                 + "<p></p>"
                + " Student学生："
                + "<p></p>"
                 + Student1.Welcome()
                + "<br/>分类："
                + Student1.GetType_()
                + "</br>性别："
                 + Student1.Gender
                + "<br/>学号："
                + Student1.ID
                + "<br/>"
                , "text/html", System.Text.Encoding.UTF8);
        }
    }
}
