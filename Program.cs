//【注：因为是面向（名称空间别名简写有关的）对象类型的语言语法，所以，一个.cs文件中的所有C#代码，必须封装进入成为“（名称空间别名简写有关的）对象类型的C#代码”，同时，“不是真正C#代码的Comment注释代码，默认可以处于C#代码中的任何位置”（参见：https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/comments、https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/xmldoc/），“不是真正C#代码的Preprocessing预编译处理代码，默认可以处于C#代码中的任何位置”（参见：https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#65-pre-processing-directives、https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/preprocessor-directives）】【注：这些“外存.exe/.dll/.cs文件中的生命永存的对象类型”，可以创建“内存电路中的生命周期的对象实例”，对象实例实现数据读写】。“一个项目中的所有.cs文件”AOT编译成为“一个.exe/.dll文件”。一个项目中，如果存在默认的Program.cs文件中的某个名称空间别名简写有关的Program对象类型的Main方法作为起点，那么“所有.cs文件”可以AOT编译成为“一个.exe文件”。如果没有Main方法，那么“所有.cs文件”只能AOT编译成为“一个.dll文件”。.exe文件可以自主运行，.dll文件必须被.exe文件读写运行，运行成为本机的进程/线程之间的互动。而且，“客户端本机进程”互动“服务端本机进程”形成互联网的空间时间的整体【注：“.exe/.dll/.cs文件”可能读写映射“JIT编译的HTML语言语法的.html文件/CSS语言语法的.css文件/各种语言语法的各种文件……”】
//发布部署时，请在项目属性窗口的build面板中，去除勾选定义DEBUG条件编译标识符，并保存。编译构建的调试时，则请勾选，并保存。
//#undef DEBUG//发布部署时，已在项目属性窗口的build面板中,去除勾选定义DEBUG条件编译标识符，并保存了，但没起作用，只好代码#undef DEBUG。 //#define PUBLISHASSELFCONTAINED//#define必须定义在所有using命名空间前面，配合代码体中的#if、#else、#endif等语句起作用。在此也可移动到项目属性的Build面板中统一设置。在此使用了条件编译标识符/符号(一般全大写)，以便代码的维护，debug或release时注释本文件的第一行代码，publish为SelfContained时则不注释。这样保证两种编译构建的软件版本都能正常运行。另外，当计划发布两个版本的代码的时候。即基本版和拥有更多版本的企业版，就可以用到条件编译指令，例如同一个文件给silverlight、wpf等使用，并且还考虑Debug和Release等，有大部分代码是一样的。#define必须定义在所有using命名空间前面。如果项目中的多个或所有.cs文件中需要使用相同的条件编译标识符/符号，则可在项目属性的Build面板中统一设置
/**
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Diagnostics;
using Microsoft.Win32;
using System.Runtime.InteropServices;
using WebEdu_LocalVersion_YuQin_DotNetCore21.Models;
//using WebEdu_LocalVersion_YuQin_DotNetCore21.Admin.Models;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Sqlite;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Server.Kestrel.Core;
//using Microsoft.AspNetCore.Builder.Internal;
//using ChatSample.Hubs;
using Microsoft.AspNetCore.Identity;
using Microsoft.Office.Interop.PowerPoint;
//using IdentityDemo.Services;
//using Microsoft.SemanticKernel;//他创方的人工智能AI对象类型名称空间。

namespace WebEdu_LocalVersion_YuQin_DotNetCore2._1
{
    public class Program
    {

        //public static IServiceCollection services { get; set; } = new Microsoft.Extensions.DependencyInjection.ServiceCollection();
        // public static void Main(String[] args, IConfiguration configuration, Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment)//不支持
        public static void Main(String[] args)

        {

            Random random = new Random();
            Int32 portNum = random.Next(5000, 6000);
            String urls = "http://localhost:" + portNum.ToString() + ";https://localhost:" + (portNum + 1).ToString() + ";http://*:" + portNum.ToString() + ";https://*:" + (portNum + 1).ToString();

            //KernelBuilder kernelBuilder = new KernelBuilder();//人工智能AI相关的服务DI。通过 KernelBuilder 中的 WithAzureTextCompletionService 来配置模型。
            //kernelBuilder.WithAzureTextCompletionService("Azure OpenAT Deployment Name:yuqin", "https://yuqin.openai.azure.com/", "yuqin的Azure OpenAI Key");
            //kernelBuilder.WithOpenAITextCompletionService("text-davinci-93", "...My OpenAI API Key..."); //使用OpenAI Model模型时选择。
            // kernelBuilder.WithAzureChatCompletionService()//使用gpt3.5或gpt4对话模型时选择。
            //kernelBuilder.WithAzureOpenAIImageGenerationService()//使用DallE图像生成模型时选择。
            //kernelBuilder.WithAzureTectEmbeddingGenerationService()//使用向量化嵌入模型时选择。

            WebApplicationBuilder webApplicationBuilder = WebApplication.CreateBuilder(args);
            webApplicationBuilder.WebHost.UseKestrel(///Web主机构造器对象使用Kestrel作为Web服务器（.Net core内置Kestrel这一Web服务器）。
                delegate (KestrelServerOptions kestrelServerOptions)//配置Kestrel服务器。
                {
                    kestrelServerOptions.Limits.MaxRequestBodySize = 209715200;//硬编码配置Kestrel服务。最大的请求长度设置为200M。上传200M文件的限制。//如果发布到IIS等服务器，可能还需要Web.config中<system.webServer>  < security >    < requestFiltering >      < requestLimits maxAllowedContentLength = "209715200" />     </ requestFiltering >   </ security > </ system.webServer >  
                    kestrelServerOptions.Configure(new ConfigurationBuilder().Build().GetSection("Kestrel"));//也可读取软编码于AppSetting.json及其AppSetting.{环境变量}.json中中的Kestrel设置。尚未验证！
                }
         )
         .UseIISIntegration()//将应用程序配置为在 IIS 中运行。上面已经讲过, 这里仍需要使用 UseKestrel, 而IIS 起到反向代理的作用，而 Kestrel 仍用作主机。如果应用程序没有使用 IIS 作为反向代理，那么 UseIISIntegration 不会有任何效果。因此，即使应用程序在非 IIS 方案中运行，也可以安全调用这种方法。

#if DEBUG
          .UseUrls("http://localhost:5000;https://localhost:5001;http://*:5000;https://*:5001")//指定Kestrel将侦听的URL。
#else
          .UseUrls(urls)  //在此使用了条件编译以便代码的维护，debug或release时注释本文件的第一行代码，publish为SelfContained时则不注释。这是因为：VS中调式或不调试时，浏览器无法连接服务而正确不行；publish部署为self contained时可以！！！！！可能是防火墙阻止了服务的可访问性。改写为条件编译/环境编译？
#endif          
          .ConfigureLogging(//配置Web服务器的日志。
                delegate (WebHostBuilderContext webHostBuilderContext, ILoggingBuilder loggingBuilder)
                {
                    // Requires `using Microsoft.Extensions.Logging;`
                    loggingBuilder.AddConfiguration(webHostBuilderContext.Configuration.GetSection("Logging"));//调用Appsetings.json中的日志软配置
                    loggingBuilder.AddConsole(); //其实会自动隐式配置本日志配置。                   
                    loggingBuilder.AddDebug();//其实会自动隐式配置本日志配置。
                    loggingBuilder.AddEventSourceLogger();
                });


            webApplicationBuilder.Services.AddSignalR();
            webApplicationBuilder.Services.Configure<CookiePolicyOptions>(
                  delegate (CookiePolicyOptions cookiePolicyOptions)
                  {
                      {
                          // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                          cookiePolicyOptions.CheckConsentNeeded = delegate (HttpContext context) { return true; };
                          cookiePolicyOptions.MinimumSameSitePolicy = SameSiteMode.None;
                      }

                  }
                  );
            webApplicationBuilder.Services.Configure<MvcOptions>(
                  delegate (MvcOptions mvcOptions)
                  {
                      {
                          // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                          mvcOptions.EnableEndpointRouting = false;
                      }

                  }
                  );

            webApplicationBuilder.Services.AddLogging();
            webApplicationBuilder.Services.AddSwaggerGen(); // "/swagger/index.html" Access                                                            
             webApplicationBuilder.Services.AddMvc();
            //webApplicationBuilder.Services.AddControllersWithViews();
            //String sLocalDatabasePathDefault = "Filename=" + HostingEnvironment.WebRootPath + Configuration.GetConnectionString("PartPathOfLocalDatabaseDefault"); //根路径信息硬编码在此随运行位置而动态获取。部分路径信息在appsettings.json中软编码配置，以便修改配置。 
            //serviceCollection.AddDbContext<BroweringOfTextbookDbContext>(delegate (DbContextOptionsBuilder dbContextOptionsBuilder) { dbContextOptionsBuilder.UseSqlite(sLocalDatabasePathDefault); });//SQLite嵌入式数据库连接

            //String sLocalDatabasePathOfAdmin = "Filename=" + HostingEnvironment.WebRootPath + Configuration.GetConnectionString("PartPathOfLocalDatabaseOfAdmin"); //根路径信息硬编码在此随运行位置而动态获取。部分路径信息在appsettings.json中软编码配置，以便修改配置。
            //serviceCollection.AddDbContext<AdminDbContext>(delegate (DbContextOptionsBuilder dbContextOptionsBuilder) { dbContextOptionsBuilder.UseSqlite(sLocalDatabasePathOfAdmin); });//试验SQLite
            webApplicationBuilder.Services.Configure<FormOptions>(x =>
                {//配置表单上传文件支持的文件容量大小。默认较小。如果发布到IIS，可能还需要在控制C中的方法前加入如下属性声明：[HttpPost][RequestFormLimits(MultipartBodyLengthLimit = 209715200)]。一个是表单的键值对中的值的长度限制，一个是当表单enctype为multipart/form-data时文件的长度限制，还有一个是multipart头长度的限制，也就是boundary=-------------------------------Gefsgeq!34这种的限制。
                    x.ValueLengthLimit = Int32.MaxValue;
                    x.MultipartBodyLengthLimit = Int32.MaxValue;
                    x.MultipartHeadersLengthLimit = int.MaxValue;
                    x.MemoryBufferThreshold = int.MaxValue;
                });
**/
//Indentity所需的SQL数据库
/**
serviceCollection.AddDbContext<IdentityDemo.Data.IdentityApplicationDbContext>(delegate (DbContextOptionsBuilder dbContextOptionsBuilder) { dbContextOptionsBuilder.UseSqlServer(Configuration.GetConnectionString("IdentityApplicationDbContext")); });
serviceCollection.AddIdentity<IdentityDemo.Models.ApplicationIdentityUser, IdentityRole>()
.AddEntityFrameworkStores<IdentityDemo.Data.IdentityApplicationDbContext>()
.AddDefaultTokenProviders();

serviceCollection.Configure<IdentityOptions>(options =>
{
    // Password settings
    options.Password.RequireDigit = true;
    options.Password.RequiredLength = 8;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = true;
    options.Password.RequireLowercase = false;
    options.Password.RequiredUniqueChars = 6;

    // Lockout settings
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
    options.Lockout.MaxFailedAccessAttempts = 10;
    options.Lockout.AllowedForNewUsers = true;

    // User settings
    options.User.RequireUniqueEmail = true;
});
**/
/**
        webApplicationBuilder.Services.ConfigureApplicationCookie(options =>
            {
                // Cookie settings
                options.Cookie.HttpOnly = true;
                options.Cookie.Expiration = TimeSpan.FromDays(150);
                // If the LoginPath isn't set, ASP.NET Core defaults 
                // the path to /Account/Login.
                options.LoginPath = "/Account/Login";
                // If the AccessDeniedPath isn't set, ASP.NET Core defaults 
                // the path to /Account/AccessDenied.
                options.AccessDeniedPath = "/Account/AccessDenied";
                options.SlidingExpiration = true;
            });

        // Add application services.
        //   serviceCollection.AddTransient<IEmailSender, EmailSender>();
        //
        //*****************。一些服务可以在管道之前先调用？.AddScoped<IOperationScoped, Operation>()、.AddTransient<IOperationTransient, Operation>()、.AddSingleton<IOperationSingleton, Operation>();三种生命周期。CreateScope产生一个新的ServiceProvider范围，在这个范围下的Scope标注的实例将只会是同一个实例。换句话来说：用Scope注册的对象，在同一个ServiceProvider的 Scope下相当于单例。有一些对象在一个请求跨越多个Action或者多个Service、Repository的时候，比如最常用的DBContext它可以是一个实例。即能减少实例初始化的消耗，还能实现跨Service事务的功能。（注：在ASP.NET Core中所有用到EF的Service 都需要注册成Scoped )。而实现这种功能的方法就是在整个reqeust请求的生命周期以内共用了一个Scope。
        /**

        using (IServiceScope serviceScope = serviceCollection.BuildServiceProvider().CreateScope())
        {
            IServiceProvider serviceProvider = serviceScope.ServiceProvider;

            try
            {


                // MovieDbContext dBContext = services.GetRequiredService<MovieDbContext>();
                // dBContext.Database.Migrate();//生产应用不会调用 Database.Migrate。 它会添加到上面的代码中，以防止在未运行 Update-Database 时出现以下异常：SqlException：无法打开登录请求的数据库“RazorPagesMovieContext-21”。 登录失败。 用户“用户名”登录失败。                  
                BroweringOfTextbookDbContext broweringOfTextbookDbContext = serviceProvider.GetRequiredService<BroweringOfTextbookDbContext>();
                // dBContext.Database.Migrate();//连接SQLite、SQL Server Express时，只能创建数据库，但无法创建数据库表，不知为什么。试验相关一摸一样的代码的razorepage的成功了，如msdn的案例。
                broweringOfTextbookDbContext.Database.EnsureCreated();//连接SQLite、SQL Server Express都可通过。创建数据库，也创建了数据库表。但无迁移功能。
                BroweringOfTextbookSeedData.Initialize(serviceProvider);

                AdminDbContext adminDBContext = serviceProvider.GetRequiredService<AdminDbContext>();
                // dBContext.Database.Migrate();//连接SQLite、SQL Server Express时，只能创建数据库，但无法创建数据库表，不知为什么。试验相关一摸一样的代码的razorepage的成功了，如msdn的案例。
                adminDBContext.Database.EnsureCreated();//连接SQLite、SQL Server Express都可通过。创建数据库，也创建了数据库表。但无迁移功能。
                AdminSeedData.Initialize(serviceProvider);

            }
            catch (Exception ex)
            {
                var logger = serviceProvider.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex, "An error occurred seeding the DB.");
            }
            finally
            {
                ;
            }
        }

        **/
/**

        WebApplication webApplication = webApplicationBuilder.Build();



        webApplication.UseHttpsRedirection();
        webApplication.UseStaticFiles();
        webApplication.UseSwagger(); //可访问swagger/index.html.Swagger (OpenAPI) is a language-agnostic specification for describing REST APIs. It allows both computers and humans to understand the capabilities of a REST API without direct access to the source code.Reduce the amount of time needed to accurately document a service.
        webApplication.UseSwaggerUI();
        webApplication.UseCookiePolicy();
        // applicationBuilder.UseAuthentication();//登录认证管道
        webApplication.UseAuthentication();
        webApplication.MapControllerRoute(
           name: "default",
           pattern: "{controller=Home}/{action=Index}/{id?}");
        webApplication.MapRazorPages();

        /**
        applicationBuilder.UseEndpoints(endpoints =>
        {
            endpoints.MapHub<ChatHub>("/chat");
        });
        **/
/**
applicationBuilder.UseSignalR(routes =>
{
    routes.MapHub<ChatHub>("/chat");
});**/
// Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment = applicationBuilder.ApplicationServices.GetRequiredService<Microsoft.AspNetCore.Hosting.IHostingEnvironment>();

//ILogger logger = LoggerFactory.CreateLogger("TryLog");
//logger.LogInformation("Logged in Configure");                    

/**
            webApplication.Run();
            /**            
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                using (RegistryKey registryKeykey = Registry.CurrentUser.OpenSubKey(@"SOFTWARE\jbhuang99"))
                {
                    if (registryKeykey != null)
                    {
                        Object obj = registryKeykey.GetValue("Title");
                        Console.WriteLine(obj.ToString());
                    }
                }
            }
            else { Console.WriteLine("您当前可能不是基于windows操作系统运行本软件!无法自动打开本软件默认的浏览器，将打开本机默认的浏览器作为界面运行本软件，或者，您可以自己手动打开想要的浏览器作为界面运行本软件！"); }
            //System.Diagnostics.Process processTemp = new System.Diagnostics.Process();
            //processTemp.StartInfo.FileName = @"C:\Program Files(x86)\Google\Chrome\Application\chrome.exe";
            //processTemp.Start();
    **/
/**
        }
    }

}
**/
/////////////////////////////////////////////////////////////////

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using WebEdu_LocalVersion_YuQin_DotNetCore21.Data;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
            builder.Services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(connectionString));
            builder.Services.AddDatabaseDeveloperPageExceptionFilter();

            builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddEntityFrameworkStores<ApplicationDbContext>();
            builder.Services.AddControllersWithViews();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseMigrationsEndPoint();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");
            app.MapRazorPages();

            app.Run();
        }
    }
}


