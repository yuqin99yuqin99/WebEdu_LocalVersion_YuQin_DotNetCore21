using System;
using System.Web.Mvc;

namespace EDSS.Controllers.TryRelationshipOfReference
{
    public class TryRelationshipOfReferenceController : Controller
    {
        public ContentResult Index()
        {
            ClassB classB = new ClassB();
            ClassA classA=classB.tryMethod();            
            classA.tryProperty = "类ClassB的tryMethod()方法中，将类ClassA对象化为了classA，但仅涉及类ClassA的对象化，没有使用其属性、方法，所以类ClassA代码的变动不会导致类ClassB代码的相应修改。此时称为：类ClassB引用/关联了类ClassA，或ClassA被ClassB引用/关联。";
            return this.Content(classA.tryProperty);
        }
    }
    internal class ClassA
    {
        internal String tryProperty { set; get; }
    }
    internal class ClassB
    {
        internal ClassA tryMethod()
        {
            ClassA classA = new ClassA();
            return classA;
        }
    }
}


