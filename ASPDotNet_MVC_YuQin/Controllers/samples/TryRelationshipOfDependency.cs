
using System;
using System.Web.Mvc;

namespace EDSS.Controllers.TryRelationshipOfDependency
{

    public class TryRelationshipOfDependencyController : Controller
        {
            public ContentResult Index()
            {
                ClassB classB = new ClassB();
                ClassA classA = new ClassA();
                classB.tryMethod(classA);
                return this.Content(classA.tryProperty);
            }
        }
        internal class ClassA
        {
            internal String tryProperty { set; get; }
        }
        internal class ClassB
        {
            internal ClassA tryMethod(ClassA classA)
            {
                classA.tryProperty = "类ClassB的tryMethod()方法中，将类ClassA的对象作为参数，并使用其属性、方法，所以如果类ClassA代码需要变化，也将导致类ClassB代码的相应修改。此时称为：类ClassB依赖类ClassA，或，ClassA被ClassB依赖。";
                return classA;
            }
        }
}

