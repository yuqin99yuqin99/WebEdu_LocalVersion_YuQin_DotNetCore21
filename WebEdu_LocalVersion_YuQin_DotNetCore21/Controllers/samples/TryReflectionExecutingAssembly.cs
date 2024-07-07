using System;
using System.Web;
using System.Web.Mvc;
using System.Reflection;
using System.Collections.Generic;

namespace EDSS.Controllers
{
    public class TryReflectionExecutingAssemblyController : Controller
    {
        
        public ContentResult Index()
        {
            Assembly assembly = Assembly.GetExecutingAssembly();//Assembly.LoadFile(String path)则是加载指定路径的程序集文件。 Assembly.Load(string assemblyString)则是加载指定名称的程序集文件。

            Type[] typeArray = assembly.GetTypes();
            Int32 int32Length = typeArray.Length;
            String sTypeName = "";
            for (Int32 int32Temp = 0; int32Temp < int32Length; int32Temp++)
            {
                sTypeName = sTypeName + typeArray[int32Temp].FullName;
            }

           /** Type type = assembly.GetType("TryReflectionExecutingAssemblyController");
            MethodInfo[] methodInfoArray = type.GetMethods();
            Int32 int32Length2 = methodInfoArray.Length;
            String sMethodName = "";
            for (Int32 int32Temp2 = 0; int32Temp2 < int32Length2; int32Temp2++)
            {
                sMethodName = sMethodName + methodInfoArray[int32Temp2].Name;
            }
            **/

            System.Collections.Generic.IEnumerable<CustomAttributeData> customAttributeDataArray = assembly.CustomAttributes;
            String sCustomAttributeName = "";
            foreach (CustomAttributeData customAttributeDataTemp in customAttributeDataArray)
            {
                if (customAttributeDataTemp is Try1Attribute)
                {
                sCustomAttributeName = sCustomAttributeName + customAttributeDataTemp.ToString();
                }
            }
            //return this.Content(assembly.GetName() + "</br>" + assembly.Location + "</br>" + sTypeName + "</br>" + sMethodName + "</br>" + sCustomAttributeName + "</br>");                   
            return this.Content(assembly.GetName() + "</br>" + assembly.Location + "</br>" + sTypeName + "</br>" + sCustomAttributeName + "</br>");     
        }

        [AttributeUsage(AttributeTargets.Class, AllowMultiple = true, Inherited = false)]
        public class Try1Attribute : Attribute
        {

            public string stringSoftwareName { set; get; }
            public string stringSoftwareVersion { set; get; }
            public string stringComment { set; get; }
            public string LastModificationDate { set; get; }

            public Try1Attribute(string stringSoftwareName, string stringSoftwareVersion)
            {
                this.stringSoftwareName = stringSoftwareName;
                this.stringSoftwareVersion = stringSoftwareVersion;
            }
        }

        [AttributeUsage(AttributeTargets.Class, AllowMultiple = true, Inherited = false)]
        public class Try2Attribute : Attribute
        {

            public string TesterName { set; get; }
            public string stringTestComment { set; get; }


            public Try2Attribute(string TesterName, string stringTestComment)
            {
                this.TesterName = TesterName;
                this.stringTestComment = stringTestComment;
            }
        }

        [Try1Attribute("jbhuang99", "1.0", stringComment = "Under Developing", LastModificationDate = "14/01/01")]
        [Try2Attribute("jbhuang99", "Under Testing")]
        public class TryClass1
        {
        }
        [Try1Attribute("syw", "1.0", stringComment = "Under Developing", LastModificationDate = "14/01/01")]
        [Try2Attribute("syw", "Under Testing")]
        public class TryClass2
        {
        }

    }
}
