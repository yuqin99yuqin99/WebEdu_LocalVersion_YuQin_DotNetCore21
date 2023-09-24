#define Dragon//#define单独用没什么意义，一般是和#if或者Conditional特性结合使用；#define必须定义在所有using命名空间前面；
using System;
using System.Web.Mvc;
using System.Collections.Generic;
using System.Diagnostics;

namespace EDSS.Controllers
{
    public class TryyConditionalCompileController : Controller
    {
      
        public ContentResult Index()
        {
            #if Dragon
             return this.Content("Dragon is defined");
           #else
             return this.Content("Dragon is not defined");
           #endif
        }

       // [Conditional("Dragon")]//使用Conditional特性的隔离策略要比#if/#endif不容易出错.代码中没有定义DEBUG，却输出了DEBUG，是因为DEBUG版本，自动定义了DEBUG。“项目——右键——属性——生成选项卡——常规栏”下的定义 DEBUG 常量(U)前面的复选框被选中。当然你可以去掉其选中状态，这样就不会输出DEBUG了。2、如果Debug和Trace均没有定义，则不会输出Debug or Trace；只有Debug和Trace均定义了，才会输出Debug and Trace。3、可以给Conditional增加多个属性如示例代码 [Conditional("Debug"), Conditional("Trace")] ，不过多个属性之间的关系是或的关系，即“Debug”或者“Trace”任意一个被定义了，那么对应方法就会被执行。4、如果需要增加多个与的属性，直接用Conditional是无法实现的，需要借助#if/#endif间接来完成，如示例代码中的组合操作1 #if (Debug && Trace)2 #define DebugAndTrace3 #endif
        public ContentResult Index2()
        {
            return this.Content("Dragon is defined");

        }   
    }
}