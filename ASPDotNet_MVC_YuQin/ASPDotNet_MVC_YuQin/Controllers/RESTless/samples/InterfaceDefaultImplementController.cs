//default interface implement needs c# 8.0//c# 8.0已测试通过！
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApplication31.Models;

namespace WebApplication31.Controllers
{
    public class HomeController : Controller
    {

        public ContentResult Index()
        {
            IWalterlv walterlv = new Foo();

            return this.Content(
                    walterlv.DouBPrint("walterlvnew") + "|" + walterlv.Print("hi")
                    );
        }

    }
    public interface IWalterlv
    {
        public String Print(string text);
        public String DouBPrint(string text) { return Print(text); }
    }

    public class Foo : IWalterlv
    {
        public String Print(string text)
        {
            return text;
        }
        public String DouBPrint(string text)
        {
            return "text";
        }
    }
}
