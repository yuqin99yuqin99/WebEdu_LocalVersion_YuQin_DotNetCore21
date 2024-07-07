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
    public class Interop_CSInteropCPPCOMTryController : Controller
    {
        //[DllImport("use_c++.dll", EntryPoint = "?add@@YAHHH@Z")]
        [DllImport("CPPDLL.dll")]
        public static extern int Add(int a, int b);
        delegate int fnMinus(int a, int b);
        // [DllImport("use_c++.dll", EntryPoint = "?subtract@@YAHHH@Z")]
        // [DllImport("use_c++.dll")]
        //  public static extern int subtract(int x, int y);

        private IHostingEnvironment _hostingEnvironment { get; }
        public Interop_CSInteropCPPCOMTryController(IHostingEnvironment hostingEnvironment)//通过注入 IHostingEnvironment 服务对象来取得Web根目录和内容根目录的物理路径
        {
            _hostingEnvironment = hostingEnvironment;
        }        
       
        [HttpGet]  

        public IActionResult Index()
        {
            
            return this.Content("UsingCPPDLLTry:"+ "Add(1, 2).ToString()");
        }
        public IActionResult AOTRef()
        {

            return this.Content("UsingCPPDLLTry:" + Add(1, 2).ToString());
        }
        public IActionResult JITRef()
        {

            int hModule = InteropDemo.NativeMethod.LoadLibrary(@"CPPDLL.dll");
            if (hModule == 0) { ; }

            //2. 读取函数指针
            IntPtr intPtr = InteropDemo.NativeMethod.GetProcAddress(hModule, "fnMinus");

            //3. 将函数指针封装成委托
            fnMinus addFunction = (fnMinus)Marshal.GetDelegateForFunctionPointer(intPtr, typeof(fnMinus));

            //4. 测试
           // Console.WriteLine(addFunction(1, 2));

            return this.Content("UsingCPPDLLTry:" + addFunction(1, 2).ToString());
        }
    }
}

namespace InteropDemo
{
    public static class NativeMethod
    {
        [DllImport("kernel32.dll", EntryPoint = "LoadLibrary")]
        public static extern int LoadLibrary(
            [MarshalAs(UnmanagedType.LPStr)] string lpLibFileName);

        [DllImport("kernel32.dll", EntryPoint = "GetProcAddress")]
        public static extern IntPtr GetProcAddress(int hModule,
            [MarshalAs(UnmanagedType.LPStr)] string lpProcName);

        [DllImport("kernel32.dll", EntryPoint = "FreeLibrary")]
        public static extern bool FreeLibrary(int hModule);
    }
}



