using System;
using System.Web.Mvc;
using System.Collections.Generic;

namespace EDSS.Controllers
{
    public class TryCheckedUncheckedController : Controller
    {
      
        public ContentResult Index()
        {
            Int32 int32A = Int32.MaxValue;
            Int32 int32B = int32A * 2;
            return this.Content(int32B.ToString());//这段代码是可以正常执行的，执行结果将输出 -2。这说明在运行时默认情况程序是不会检查算术运算是否溢出的，cpu只管算，对于它来讲按规则算就是了，结果对不对不是他的错

        }
        public ContentResult Index2()
        {
            Int32 uncheckedA = unchecked(Int32.MaxValue * 2);//强制不溢出检查，否则语法错误无法通过编译。现在可运行，虽然运行结果因为溢出而非预期。
            Int32 int32Temp = Int32.MaxValue;
            try
            {
                checked
                {
                    Int32 num = int32Temp / 20;
                    Int32 a = int32Temp * 2;
                    Int32 c = int32Temp * 1000;
                }
                return this.Content("(num + a + c).ToString()");//(num + a + c).ToString()出错！

            }
            catch (OverflowException)
            {
                return this.Content("溢出了，要处理哟");
            }
            
        }   
         
}
}
