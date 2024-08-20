#region
using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
#endregion

namespace EDSS.Controllers
{
    public class TryTechnologyInformationExtractionApplicationController : Controller
    {
        public ContentResult Variance()
        {
            Single[] a = { 2, 3, 44 };
            Variance v = new Variance(a);
            return this.Content(v.Var.ToString());
        }
        public ContentResult StandardDeviation()

        {
            Single[] a = { 2, 3, 44 };
            Variance v = new Variance(a);
            return this.Content(Math.Sqrt(v.Var).ToString());
        }

    }
    public class Variance
{
    public Single Var;
    public Single avrg;
    public Variance(Single[] a)
    {
            Single var = 0, n;
        avrg = a.Average();
        n = a.Count<Single>();
        foreach (Single x in a)
        {
            var =var+ (x - avrg) * (x - avrg);
        }
        Var = var / n;
    }
}
}

