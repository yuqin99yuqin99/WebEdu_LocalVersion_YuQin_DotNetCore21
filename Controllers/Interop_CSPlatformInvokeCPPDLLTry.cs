using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebEdu_LocalVersion_YuQin_DotNetCore21.Models;
using Microsoft.AspNetCore.Hosting;
using System.Reflection;
using System.Runtime.InteropServices;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers
{
    public class Interop_CSPlatformInvokeCPPDLLTryController : Controller
    {
        // 在托管代码中对非托管函数进行声明，并且附加平台调用所需要属性
        // 在默认情况下，CharSet为CharSet.Ansi
        // 指定调用哪个版本的方法有两种——通过DllImport属性的CharSet字段和通过EntryPoint字段指定
        // 在托管函数中声明注意一定要加上 static 和extern 这两个关键字

        [DllImport("user32.dll")]//// DllImport会按照顺序自动去寻找的地方： 1、exe所在目录 2、System32目录 3、环境变量目录
        public static extern int MessageBox1(IntPtr hWnd, String text, String caption, uint type);

        // 在默认情况下，CharSet为CharSet.Ansi
        [DllImport("user32.dll")]
        public static extern int MessageBoxA(IntPtr hWnd, String text, String caption, uint type);

        // 在默认情况下，CharSet为CharSet.Ansi
        [DllImport("user32.dll")]
        public static extern int MessageBox(IntPtr hWnd, String text, String caption, uint type);

        // 第一种指定方式，通过CharSet字段指定
        [DllImport("user32.dll", CharSet = CharSet.Unicode)]
        public static extern int MessageBox2(IntPtr hWnd, String text, String caption, uint type);

        // 通过EntryPoint字段指定
        [DllImport("user32.dll", EntryPoint = "MessageBoxA")]
        public static extern int MessageBox3(IntPtr hWnd, String text, String caption, uint type);

        [DllImport("user32.dll", EntryPoint = "MessageBoxW")]
        public static extern int MessageBox4(IntPtr hWnd, String text, String caption, uint type);

        [HttpGet]

        public IActionResult Index()
        {
            Console.WriteLine("hi");
            MessageBox4(new IntPtr(0), "Learning Hard", "欢迎", 0);
            return this.Content("UsingCPPDLLTry:" + "Add(1, 2).ToString()");
        }
    }
}



