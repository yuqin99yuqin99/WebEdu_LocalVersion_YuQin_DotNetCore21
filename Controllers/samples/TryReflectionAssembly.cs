using System;
using System.Web;
using System.Web.Mvc;
using System.Reflection;
using System.Collections.Generic;

namespace EDSS.Controllers
{
    public class TryReflectionAssemblyController : Controller
    {
        
        public ContentResult Index()
        {
            Assembly assembly = Assembly.Load("mscorlib.dll");//Assembly LoadFile(String path)则是加载指定路径的程序集文件。
            Type[] typeArray = assembly.GetTypes();
            Int32 int32Length = typeArray.Length;
            String sTypeName = "";
            for (Int32 int32Temp = 0; int32Temp < int32Length; int32Temp++)
            {
                sTypeName = sTypeName + typeArray[int32Temp].FullName;
            }
            Type type= assembly.GetType("System.String");
            MethodInfo[] methodInfoArray = type.GetMethods();
            Int32 int32Length2 = methodInfoArray.Length;
            String sMethodName = "";
            for (Int32 int32Temp2 = 0; int32Temp2 < int32Length2; int32Temp2++)
            {
                sMethodName = sMethodName + methodInfoArray[int32Temp2].Name;
            }

            System.Collections.Generic.IEnumerable<CustomAttributeData> customAttributeDataArray = assembly.CustomAttributes;
            String sCustomAttributeName = "";
            foreach (CustomAttributeData customAttributeDataTemp in customAttributeDataArray)
            {
                sCustomAttributeName = sCustomAttributeName + customAttributeDataTemp.ToString();
            }
            return this.Content(assembly.GetName() + "</br>" + assembly.Location + "</br>" + sTypeName + "</br>" + sMethodName + "</br>" + sCustomAttributeName + "</br>");             
        }

    }
}
