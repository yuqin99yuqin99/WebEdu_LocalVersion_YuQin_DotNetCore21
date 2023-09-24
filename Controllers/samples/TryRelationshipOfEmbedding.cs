using System;
using System.Web.Mvc;

namespace EDSS.Controllers.TryRelationshipOfEmbedding
{
    public class TryRelationshipOfEmbeddingController : Controller
    {
        public ContentResult Index()
        {
            ClassA.ClassB classB = new ClassA.ClassB();
            classB.tryProperty = "类ClassA中嵌套定义了类ClassB。此时称为：类ClassA嵌套了类ClassB，或，类ClassB被类ClassA嵌套。";
            return this.Content(classB.tryProperty);
        }
    }
    
    public class ClassA
    {
       public class ClassB
        {
            public String tryProperty { set; get; }
        }
    }
}


