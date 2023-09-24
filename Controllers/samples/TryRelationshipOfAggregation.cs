using System;
using System.Web.Mvc;

namespace EDSS.Controllers.TryRelationshipOfAggregation
{
    public class TryRelationshipOfAggregationController : Controller
    {
        public ContentResult Index()
        {
            ClassC classC = new ClassC();                 
            return this.Content(classC.TryMethod());
        }
    }
    public class ClassA
    {
        public String tryProperty { set; get; }
    }
    public class ClassB
    {
        public String tryProperty { set; get; }
    }

    public class ClassC
    {
        ClassA classA= new ClassA();
        ClassB classB= new ClassB();
        public ClassC()
        {
        }
        public String TryMethod()
        {
            classA.tryProperty = "类ClassC中对象化了类ClassA、ClassB(但不是在构造方法中对象化)。此时称为：类ClassC聚合了类ClassA、ClassB，或，ClassA、ClassB被ClassC聚合。";
            classB.tryProperty = "";
            return classA.tryProperty + classB.tryProperty;
        }
    }
}


