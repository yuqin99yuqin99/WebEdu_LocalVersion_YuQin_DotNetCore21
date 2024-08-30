#region
using System;
using Microsoft.AspNetCore.Mvc;
#endregion

namespace EDSS.Controllers
{
    public class TryConstantΠController : Controller
    {
        Double DotnetEncapsulatedΠ = System.Math.PI;//初创方.Net内置封装的Π。
        public ContentResult Index()
        {

            System.Diagnostics.Stopwatch stopwatch = new System.Diagnostics.Stopwatch();
            stopwatch.Start(); //可以用来监视计算开销的时间 

            Decimal Π = 0;
            Decimal a = 2;
            Decimal b = 3;
            Decimal c = 4;
            Decimal e = 1;

            for (Decimal f = (e=e+1); f < 100000; f++)
            // f是循环次数，与最终计算获得的Π的精度相关。
            {

                Π = Π+4 / (a * b * c);

                a = a+2;
                b = b+2;
                c = c+2;

                Π = Π-4 / (a * b * c);

                a =a+2;
                b =b+2;
                c =c+2;
                e =e+1;
            }
                    
            stopwatch.Stop();
            TimeSpan ts = stopwatch.Elapsed;
            return this.Content("初创方.Net内置封装的System.Math.PI的Π值是：" + DotnetEncapsulatedΠ.ToString()+"***"+ "自创方封装的Π是："+(Π+3).ToString());
        }
    }
}

