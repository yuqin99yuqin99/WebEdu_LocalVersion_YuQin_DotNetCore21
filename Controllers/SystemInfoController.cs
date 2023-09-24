using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebEdu_LocalVersion_YuQin_DotNetCore21.Models;
using Microsoft.AspNetCore.Hosting;
using System.Reflection;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers
{
    public class SystemInfoController : Controller
    {
        private IHostingEnvironment _hostingEnvironment { get; }
        public SystemInfoController(IHostingEnvironment hostingEnvironment)//通过注入 IHostingEnvironment 服务对象来取得Web根目录和内容根目录的物理路径
        {
            _hostingEnvironment = hostingEnvironment;
        }        
       
        [HttpGet]  

        public IActionResult GetSystemVersion()
        {
                       
            return this.Content(Assembly.GetExecutingAssembly().ImageRuntimeVersion);//Assembly.GetCallingAssembly();
        }
        [HttpGet]
        public IActionResult GetSystemRunningDir()
        {
            
            return this.Content(_hostingEnvironment.WebRootPath);
            }

    }
}
