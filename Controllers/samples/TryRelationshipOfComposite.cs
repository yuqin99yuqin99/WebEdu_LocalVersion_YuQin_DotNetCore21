using System;
using System.Web.Mvc;

namespace EDSS.Controllers.TryRelationshipOfComposite
{
    public class TryRelationshipOfCompositeController : Controller
    {
        public ContentResult Index()
        {
            ClassB classB = new ClassB();                 
            return this.Content(classB.Try);
        }
    }
    public class ClassA
    {
        public String tryProperty { set; get; }
    }

    public class ClassB
    {
        public String Try { set; get; }
        public ClassB()
        {
            
            ClassA classA = new ClassA();
            classA.tryProperty = "类ClassB对象化时（构造方法被调用），一定会同时对象化类ClassA。此时称为：类ClassB复合了类ClassA，或，ClassA被ClassB复合。";
            this.Try = classA.tryProperty;
        }
    }
}


