#region
using System;
using Microsoft.AspNetCore.Mvc;
#endregion

namespace EDSS.Controllers
{
    public class TryConstantEController : Controller
    {
        Double DotnetEncapsulatedE = System.Math.E;//初创方.Net内置封装的e。
        public ContentResult Index()
        {
            
            Double d = 0.000000001D;

            
            Int32 n = 1; // 表示代数式的第n项
            Double factorial = 1D; // 1的阶乘为1
            Double e = 1D; // e的初始值为1/0!= 1
            Double temp = 1D/factorial; // tmp是代数式的第n项, 初始值为1/1!=1

            do
            {
                e=e+temp;
                n++;
               factorial= factorial*n;
                temp = 1D/factorial;
            } while (temp >= d);  // 当tmp的值小于所要的精度时，退出循环
                     

            return this.Content("初创方.Net内置封装的System.Math.E的e值是：" + DotnetEncapsulatedE.ToString()+" * **"+ "自创方封装的e是：" + e.ToString());


        }
    }
}

