using System;
//using System.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
namespace EDSS.Controllers
{
    public class TryGenicTypeController : Controller
    {
        public ContentResult Index()
        {
            TryGenicType<String, String> tryGenicTypeString = new TryGenicType<String, String>();//String是现有的类型，替换T1
            TryGenicType<Int32, Int32> tryGenicTypeInt32 = new TryGenicType<Int32, Int32>();
            TryGenicType<Boolean, Boolean> tryGenicTypeIntBoolean  = new TryGenicType<Boolean, Boolean>();
            TryGenicType tryGenicType1 = new TryGenicType();
            TryGenicType2 tryGenicType2 = new TryGenicType2();
            return this.Content(
                "字符串比较结果示例:" + tryGenicTypeString.TryCompare("1234", "1234") + ";" + "整型数值比较结果示例:" + tryGenicTypeInt32.TryCompare(1234, 23)+1.GetType().ToString()+"|"
                + tryGenicTypeIntBoolean.TryCompare(true,false)
                + tryGenicType1.TryCompare("1234", "1234")
                + tryGenicType1.TryCompare(1234, 1234)
                + tryGenicType1.TryCompare(true, false)
                +"|"
                 + tryGenicType2.TryCompare("1234", "1234")
                + tryGenicType2.TryCompare(1234, 1234)
                + tryGenicType2.TryCompare(true, false)
                );
        }   
    }
    internal class TryGenicType<T1,T2> where T1:IComparable where T2:IComparable
    {
        public Int32 TryCompare(T1 t1,T2 t2)
        {
             return (t1.CompareTo(t2));
        }

    }

    internal class TryGenicType
    {
        public String TryCompare(Object t1, Object t2)
        {
            
                return t1.Equals(t2).ToString();
          
        }

    }

    internal class TryGenicType2
    {
        public Int32 TryCompare(IComparable t1, IComparable t2)
        {
                return t1.CompareTo(t2);

        }

    }
}


