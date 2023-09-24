using System;
using System.Web;
using System.Web.Mvc;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading;
using System.IO;

namespace MusicStore.Controllers
{
    public class TryProcessAppDomainThreadController : Controller
    {
        
        public ContentResult Index()
        {

            Process process= Process.Start(@"d:\temp\musicstore.xls");////实例化一个Process对象,要开启的进程（或 要启用的程序），括号内为绝对路径
            process.Kill();//结束进程
            Process process2 = Process.Start(@"c:\windows\explorer.exe");
            return Content("启动服务器的进程之后，又返回了此字符串到浏览器端");             
        }

        public ContentResult Index2()
        {

            Process process1 = Process.Start(@"d:\temp\musicstore.xls");////实例化一个Process对象,要开启的进程（或 要启用的程序），括号内为绝对路径
            Process process2 = Process.Start(@"c:\windows\explorer.exe");////实例化一个Process对象,要开启的进程（或 要启用的程序），括号内为绝对路径

            Process[] pro = Process.GetProcesses();//获取已开启的所有进程

            //遍历所有查找到的进程

            for (int i = 0; i < pro.Length; i++)
            {

                //判断此进程是否是要查找的进程
                if (pro[i].ProcessName.ToString().ToLower() == "pc_task")
                {
                    pro[i].Kill();//结束进程
                }
            }

            return Content("启动服务器的进程之后，又返回了此字符串到浏览器端");
        }

        public ContentResult IndexForAppDomain()
        {
            AppDomain appDomain = AppDomain.CreateDomain("NewAppDomain");

            return Content(appDomain.ToString());
        }
        //https://www.cnblogs.com/edisonchou/p/4848131.html（关于线程）
        public void IndexForCreateMultithread()
        {
            for (Int32 i = 0; i < 10; i++)
            {
                Thread newThread = new Thread(IndexForThread);//创建了10个新的线程，这个10个线程的工作互不干扰，宏观上来看它们应该是并行运行的
               
                newThread.Start();
            }

           
        }
         
        public void IndexForThread()
        {
           this.Response.Write("线程开始"+"<br/><script>window.alert('hi')</script>");
           //Thread.Sleep(1000);
            this.Response.Write("线程结束"+"<br/><script>window.alert('hi')</script>");

        }

        public void IndexFoMultithreadState()
        {
           this.Response.Write("开始测试线程1"+"<br/>");
            // 初始化一个线程 thread1
            Thread thread1 = new Thread(Work1);
            // 这时状态：UnStarted
            PrintState(thread1);
            // 启动线程
            this.Response.Write("现在启动线程"+"<br/>");
            thread1.Start();
            // 这时状态：Running
            PrintState(thread1);
            // 让线程飞一会 3s
            Thread.Sleep(3 * 1000);
            // 让线程挂起
            this.Response.Write("现在挂起线程"+"<br/>");
            thread1.Suspend();
            // 给线程足够的时间来挂起，否则状态可能是SuspendRequested
            Thread.Sleep(1000);
            // 这时状态：Suspend
            PrintState(thread1);
            // 继续线程
            this.Response.Write("现在继续线程" + "<br/>");
            thread1.Resume();
            // 这时状态：Running
            PrintState(thread1);
            // 停止线程
            this.Response.Write("现在停止线程" + "<br/>");
            thread1.Abort();
            // 给线程足够的时间来终止，否则的话可能是AbortRequested
            Thread.Sleep(1000);
            // 这时状态：Stopped
            PrintState(thread1);
            this.Response.Write("------------------------------" + "<br/>");
            this.Response.Write("开始测试线程2" + "<br/>");
            // 初始化一个线程 thread2
            Thread thread2 = new Thread(Work2);
            // 这时状态：UnStarted
            PrintState(thread2);
            // 启动线程
            thread2.Start();
            Thread.Sleep(2 * 1000);
            // 这时状态：WaitSleepJoin
            PrintState(thread2);
            // 给线程足够的时间结束
            Thread.Sleep(10 * 1000);
            // 这时状态：Stopped
            PrintState(thread2);
        }

        // 普通线程方法：一直在运行从未被超越
        private void Work1()
        {
            this.Response.Write("线程运行中..." + "<br/>");
            // 模拟线程运行，但不改变线程状态
            // 采用忙等状态
            while (true) { }
        }

        // 文艺线程方法：运行10s就结束
        private void Work2()
        {
            this.Response.Write("线程开始睡眠：" + "<br/>");
            // 睡眠10s
            Thread.Sleep(10 * 1000);
            this.Response.Write("线程恢复运行" + "<br/>");
        }

        // 打印线程的状态
        private void PrintState(Thread thread)
        {
            this.Response.Write("线程的状态是："+thread.ThreadState.ToString()+"<br/>");
        }
        //异步模式读取一个文件
        private String TestFile { get { return @"d:\temp\AsyncReadTest.txt"; } }
        private Int32 BufferSize { get { return 1024; } }

        public void IndexForMultithreadAsyncReadFile()
        {

             
            // 删除已存在文件
            if (System.IO.File.Exists(this.TestFile))
            {
                System.IO.File.Delete(this.TestFile);
            }

            // 写入一些东西以便后面读取
            using (FileStream stream = System.IO.File.Create(this.TestFile))
            {
                String Content = "我是文件具体内容，我是不是帅得掉渣？";
                Byte[] ContentByte = System.Text.Encoding.UTF8.GetBytes(Content);
                stream.Write(ContentByte, 0, ContentByte.Length);
            }

            // 开始异步读取文件具体内容
            using (FileStream stream = new FileStream(this.TestFile, FileMode.Open, FileAccess.Read, FileShare.Read, BufferSize, FileOptions.Asynchronous))
            {
                Byte[] data = new Byte[BufferSize];
                // 将自定义类型对象实例作为参数
                //ReadFileClass rfc = new ReadFileClass(stream, data);
                // 开始异步读取
                IAsyncResult result = stream.ReadAsync(data, 0, data.Length);//多线程异步执行是默认的？同步则必须显式地代码实现？
                // 模拟做了一些其他的操作
                Thread.Sleep(3 * 1000);
                this.Response.Write("主线程执行完毕，按回车键退出程序</br><script>window.alert('hi!')</script>");
            }

        }
    }
}