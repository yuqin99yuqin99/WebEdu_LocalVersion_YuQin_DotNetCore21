using System;
using System.Web.Mvc;
using EDSS.Models;
namespace EDSS.csontrollers
{
    public class TryHTMLCSSAtCSharpASPDotNETMVCController : Controller
{
    public ViewResult Index()
    {
        TryModel tryModel = new TryModel();
        tryModel.LearnerId = "000010";
        tryModel.Name = "jbhuang99";
        return this.View("/Views/Samples/TryHTMLCSS@CSharpASPDotNETMVC/index.cshtml", tryModel);
    }
}
}