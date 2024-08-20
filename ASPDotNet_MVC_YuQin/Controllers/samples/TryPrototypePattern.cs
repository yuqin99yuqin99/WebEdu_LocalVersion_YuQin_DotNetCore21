using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace EDSS.Controllers
{
    public class TryPrototypePatternController : Controller
    {
        public ContentResult Index()
        {
            TeachingPlan teachingPlanPrototype = new TeachingPlan();
            teachingPlanPrototype.Teacher = "jbhuang99";
            teachingPlanPrototype.SchoolName = "YuQin";
            teachingPlanPrototype.ClassName = "网教1班";
            teachingPlanPrototype.TextBook = "软件原理与工程";
            teachingPlanPrototype.CourseTitle = "对象类型的模式";
            teachingPlanPrototype.CourseContent = "这里是教学内容,讲述对象类型模式中的原型模式.......";

            TeachingPlan teachingPlanCopied = (TeachingPlan)teachingPlanPrototype.Clone();
            teachingPlanCopied.Teacher = "syw99";

            return this.Content(
            "以下是jbhuang99的教案:"+
            teachingPlanPrototype.Teacher + ";"
            +teachingPlanPrototype.SchoolName + ";"
            +teachingPlanPrototype.ClassName+";"
            +teachingPlanPrototype.TextBook+";"
            +teachingPlanPrototype.CourseTitle+";"
            +teachingPlanPrototype.CourseContent+ ";"
            + "以下是syw99的教案(以jbhuang99的教案为原型快速分享获得,然后稍作修改可用于自己的教学,节省了不必要的重复工作):"
            +teachingPlanCopied.Teacher + ";"
            + teachingPlanCopied.SchoolName + ";"
            +teachingPlanCopied.ClassName+";"
            +teachingPlanCopied.TextBook+";"
            +teachingPlanCopied.CourseTitle+";"
            +teachingPlanPrototype.CourseContent
            );
        }
    }

    internal class TeachingPlan
    {
        internal String Teacher { get; set; }
        internal String SchoolName { get; set; }
        internal String ClassName { get; set; }
        internal String TextBook { get; set; }
        internal String CourseTitle { get; set; }
        internal String CourseContent { get; set; }
        public Object Clone()
        {
            return (Object)this.MemberwiseClone();
        }
     }

}