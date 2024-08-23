//发布部署时，请在项目属性窗口的build面板中，去除勾选定义DEBUG条件编译标识符，并保存。编译构建的调试时，则请勾选，并保存。
//#undef DEBUG//发布部署时，已在项目属性窗口的build面板中,去除勾选定义DEBUG条件编译标识符，并保存了，但没起作用，只好代码#undef DEBUG。 //#define PUBLISHASSELFCONTAINED//#define必须定义在所有using命名空间前面，配合代码体中的#if、#else、#endif等语句起作用。在此也可移动到项目属性的Build面板中统一设置。在此使用了条件编译标识符/符号(一般全大写)，以便代码的维护，debug或release时注释本文件的第一行代码，publish为SelfContained时则不注释。这样保证两种编译构建的软件版本都能正常运行。另外，当计划发布两个版本的代码的时候。即基本版和拥有更多版本的企业版，就可以用到条件编译指令，例如同一个文件给silverlight、wpf等使用，并且还考虑Debug和Release等，有大部分代码是一样的。#define必须定义在所有using命名空间前面。如果项目中的多个或所有.cs文件中需要使用相同的条件编译标识符/符号，则可在项目属性的Build面板中统一设置
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
using WebEdu_LocalVersion_YuQin_DotNetCore21.Admin.Models;
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


namespace WebEdu_LocalVersion_YuQin_DotNetCore2._1
{
    public class Program
    {
        public Int32 iTry { get; set; } = 0;
        public IConfiguration Configuration { get; set; }         
        public  Microsoft.AspNetCore.Hosting.IHostingEnvironment HostingEnvironment { get; set; }
        public ILoggerFactory loggerFactory { get; set; }
        //public static IServiceCollection services { get; set; } = new Microsoft.Extensions.DependencyInjection.ServiceCollection();
        // public static void Main(String[] args, IConfiguration configuration, Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment)//不支持
        public static void Main(String[] args)

        {
            //Random random = new Random();
            //Int32 portNum = random.Next(5000, 6000);
            //return WebHost.CreateDefaultBuilder(args).UseStartup<Startup>();
            // Int32 seed = 6;
            //Random random = new Random(seed);
            Random random = new Random();
            Int32 portNum = random.Next(5000, 6000);
            String urls = "http://localhost:" + portNum.ToString() + ";https://localhost:" + (portNum + 1).ToString() + ";http://*:" + portNum.ToString() + ";https://*:" + (portNum + 1).ToString();

            IWebHostBuilder webHostBuilder = WebHost.CreateDefaultBuilder(args);//创建一个Web主机构造器对象。                
            webHostBuilder.UseKestrel(///Web主机构造器对象使用Kestrel作为Web服务器（.Net core内置Kestrel这一Web服务器）。
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
          //我们没有显式注入任何日志提供器，但是日志却正常产生了。这是由于Program.cs中默认使用WebHost.CreateDefaultBuilder方法添加了2个日志提供器。即隐式通过logging.AddConsole和logging.AddDebug默认配置了Console和Debug类型的日志提供器，这也就是为什么我们没有注入任何日志提供器，日志却能正常产生了。
          .ConfigureLogging(//在Program.cs中使用ConfigureLogging方法可以自定义日志提供器。并可调用Appsetings.json中的日志软配置。
                delegate (WebHostBuilderContext webHostBuilderContext, ILoggingBuilder loggingBuilder)
                {
                    // Requires `using Microsoft.Extensions.Logging;`
                    loggingBuilder.AddConfiguration(webHostBuilderContext.Configuration.GetSection("Logging"));
                    loggingBuilder.AddConsole();
                    loggingBuilder.AddDebug();
                    loggingBuilder.AddEventSourceLogger();
                });
            webHostBuilder.ConfigureAppConfiguration(delegate (WebHostBuilderContext webHostBuilderContext, IConfigurationBuilder configurationBuilder)
            {
                //HostingEnvironment = webHostBuilderContext.HostingEnvironment;//没通过，所以后续ConfigureServices() 、Configure()都没能通过。
                // Configuration = configurationBuilder.Build();//没通过，所以后续ConfigureServices() 、Configure()都没能通过。
               // iTry=2;
            });
            
            webHostBuilder.ConfigureServices(delegate (IServiceCollection serviceCollection) //想替代Startup类（ConfigureServices()方法），尚未通过
             {
                 /**
                 serviceCollection.Configure<CookiePolicyOptions>(
                  delegate (CookiePolicyOptions cookiePolicyOptions)
                  {
                      {
                        // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                        cookiePolicyOptions.CheckConsentNeeded = delegate (HttpContext context) { return true; };
                          cookiePolicyOptions.MinimumSameSitePolicy = SameSiteMode.None;
                      }

                  }
                  );

                 serviceCollection.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
                 String sLocalDatabasePathDefault = "Filename=" + HostingEnvironment.WebRootPath + Configuration.GetConnectionString("PartPathOfLocalDatabaseDefault"); //根路径信息硬编码在此随运行位置而动态获取。部分路径信息在appsettings.json中软编码配置，以便修改配置。              
                 serviceCollection.AddDbContext<BroweringOfTextbookDbContext>(options => options.UseSqlite(sLocalDatabasePathDefault));//试验SQLite通过

                 String sLocalDatabasePathOfAdmin = "Filename=" + HostingEnvironment.WebRootPath + Configuration.GetConnectionString("PartPathOfLocalDatabaseOfAdmin"); //根路径信息硬编码在此随运行位置而动态获取。部分路径信息在appsettings.json中软编码配置，以便修改配置。
                 serviceCollection.AddDbContext<AdminDbContext>(options => options.UseSqlite(sLocalDatabasePathOfAdmin));//试验SQLite
                 serviceCollection.Configure<FormOptions>(x => {//配置表单上传文件支持的文件容量大小。默认较小。如果发布到IIS，可能还需要在控制C中的方法前加入如下属性声明：[HttpPost][RequestFormLimits(MultipartBodyLengthLimit = 209715200)]。一个是表单的键值对中的值的长度限制，一个是当表单enctype为multipart/form-data时文件的长度限制，还有一个是multipart头长度的限制，也就是boundary=-------------------------------Gefsgeq!34这种的限制。
                     x.ValueLengthLimit = Int32.MaxValue;
                     x.MultipartBodyLengthLimit = Int32.MaxValue;
                     x.MultipartHeadersLengthLimit = int.MaxValue;
                     x.MemoryBufferThreshold = int.MaxValue;
                 }); ;
             **/
             });
           
                 webHostBuilder.Configure(delegate (IApplicationBuilder applicationBuilder)//想替代Startup类（Configure()方法），，尚未通过
            {
                /**
                   if (hostingEnvironment.IsDevelopment())
            {
            applicationBuilder.UseDeveloperExceptionPage();
            }
            else
            {
            applicationBuilder.UseExceptionHandler("/Home/Error");
            applicationBuilder.UseHsts();
            }

        applicationBuilder.UseHttpsRedirection();
        applicationBuilder.UseStaticFiles();
        applicationBuilder.UseCookiePolicy();

        applicationBuilder.UseMvc(delegate (IRouteBuilder routeBuilder)
            {
                {
                    //区域Areas的路由。必须在非区域Areas的路由前面定义吗？
                    routeBuilder.MapRoute(
       name: "defaultWithArea",
       template: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

                    //非区域Areas的路由
                    routeBuilder.MapRoute(
                        name: "default",
                        template: "{controller=Home}/{action=Index}/{id?}");
                }
            }
            );
        ILogger logger = loggerFactory.CreateLogger("TryLog");
       // Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment = applicationBuilder.ApplicationServices.GetRequiredService<Microsoft.AspNetCore.Hosting.IHostingEnvironment>();
        Microsoft.Extensions.Configuration.IConfiguration configuration = applicationBuilder.ApplicationServices.GetRequiredService<IConfiguration>();

        logger.LogInformation("Logged in Configure");    
                 * */

            });
            webHostBuilder.UseStartup<Startup>();/**（ASP.NET Core应用程序需要一个启动类，按照惯例命名为Startup。在主程序的Web Host生成器（WebHostBuilderExtensions）的 UseStartup <TStartup> ()扩展方法中指定启动类名称。）.
            可以为不同的环境定义不同的Startup类，并在运行时选择适当的Startup类。如果在Web Host配置或选项中指定startupAssembly（启动程序集），UseStartup<Startup>()方法更改为UseStartup(“程序集名称”)，托管将加载该启动程序集并搜索 Startup 或 Startup[Environment] 类型。根据名称后缀匹配当前环境的类将被优先使用，所以如果应用程序在开发环境中运行，并包含一个Startup和一个StartupDevelopment类，他将使用StartupDevelopment。类通俗的讲，ASP.NET Core应用程序启动的时候将会根据当前的运行环境（生产环境（Production）或者开发环境（Development））自动选择启动类。比如在一个ASP.NET Core应用程序中，具有两个启动类Startup和StartupDevelopment，那么当我们的启动环境设置为开发环境的时候，启动时将会搜索启动程序集，优先使用StartupDevelopment这个带有Development后缀的启动类。            

             * **/
            IWebHost webHost = webHostBuilder.Build();


            using (IServiceScope serviceScope = webHost.Services.CreateScope())
            {
                IServiceProvider serviceProvider = serviceScope.ServiceProvider;

                try
                {
                    
                    /**
                    MovieDbContext dBContext = services.GetRequiredService<MovieDbContext>();
                    dBContext.Database.Migrate();//生产应用不会调用 Database.Migrate。 它会添加到上面的代码中，以防止在未运行 Update-Database 时出现以下异常：SqlException：无法打开登录请求的数据库“RazorPagesMovieContext-21”。 登录失败。 用户“用户名”登录失败。
                    **/
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

            webHost.Run();
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
        }       
    }
}

    public class Startup
    {
    public IConfiguration Configuration { get; set; } = new ConfigurationBuilder().Build();
    private Microsoft.AspNetCore.Hosting.IHostingEnvironment HostingEnvironment { get; set; } 


        public Startup(IConfiguration configuration, Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment)   //Startup类构造方法可以接受通过依赖注入提供的依赖性。 常用的方法是使用IHostingEnvironment来设置配置源。
    {

        this.Configuration = configuration;
        this.HostingEnvironment = hostingEnvironment;
        }

    // ConfigureServices()由运行时调用,所以必须遵守如下规则：此方法用来添加服务。自定义此方法。使用此方法向容器添加服务。Startup类选择包含ConfigureServices方法，  ConfigureServices主要是配置依赖注入（DI）.ConfigureServices（如果存在）在Configure之前调用。对于需要大量设置的功能，在IServiceCollection上添加Add[Service]扩展方法。将服务添加到服务容器使得它们可以通过依赖注入在应用程序中使用.ConfigureServices方法只接受一个IServiceCollection参数（但是可以从这个集合中检索任何已注册的服务，所以不需要额外的参数）。
    public void ConfigureServices(IServiceCollection serviceCollection)

        {
        
        serviceCollection.Configure<CookiePolicyOptions>(
                delegate (CookiePolicyOptions cookiePolicyOptions)
                {
                    {
                        // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                        cookiePolicyOptions.CheckConsentNeeded = delegate (HttpContext context) { return true; };
                        cookiePolicyOptions.MinimumSameSitePolicy = SameSiteMode.None;
                    }

                }
                );

        serviceCollection.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            String sLocalDatabasePathDefault = "Filename=" + HostingEnvironment.WebRootPath + Configuration.GetConnectionString("PartPathOfLocalDatabaseDefault"); //根路径信息硬编码在此随运行位置而动态获取。部分路径信息在appsettings.json中软编码配置，以便修改配置。              
        serviceCollection.AddDbContext<BroweringOfTextbookDbContext>(options => options.UseSqlite(sLocalDatabasePathDefault));//试验SQLite通过

            String sLocalDatabasePathOfAdmin = "Filename=" + HostingEnvironment.WebRootPath + Configuration.GetConnectionString("PartPathOfLocalDatabaseOfAdmin"); //根路径信息硬编码在此随运行位置而动态获取。部分路径信息在appsettings.json中软编码配置，以便修改配置。
        serviceCollection.AddDbContext<AdminDbContext>(options => options.UseSqlite(sLocalDatabasePathOfAdmin));//试验SQLite
        serviceCollection.Configure<FormOptions>(x => {//配置表单上传文件支持的文件容量大小。默认较小。如果发布到IIS，可能还需要在控制C中的方法前加入如下属性声明：[HttpPost][RequestFormLimits(MultipartBodyLengthLimit = 209715200)]。一个是表单的键值对中的值的长度限制，一个是当表单enctype为multipart/form-data时文件的长度限制，还有一个是multipart头长度的限制，也就是boundary=-------------------------------Gefsgeq!34这种的限制。
                x.ValueLengthLimit = Int32.MaxValue;
                x.MultipartBodyLengthLimit = Int32.MaxValue;
                x.MultipartHeadersLengthLimit = int.MaxValue;
                x.MemoryBufferThreshold = int.MaxValue;
            });
        }

    //   Configure()由运行时调用，所以必须遵守如下规则。此方法用来配置HTTP请求管道（HTTP request pipeline）Startup类必须包含Configure方法。  Configure方法主要是配置ASP.NET Core的中间件，相当于我们在ASP.NET中所说的管道。通过将中间件组件添加到由依赖注入提供的IApplicationBuilder实例来配置请求管道（额外的服务，如IHostingEnvironment和ILoggerFactory也可以在方法参数中指定，如果这些服务可用，也将被注入）。每个Use扩展方法将一个中间件组件添加到请求管道。 例如，UseMvc扩展方法将路由中间件添加到请求管道，并将MVC配置为默认处理程序。
    public void Configure(IApplicationBuilder applicationBuilder, Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment,
        ILoggerFactory loggerFactory)////自定义此方法。配置HTTP请求管道。一般定义3个依赖注入：private readonly IHostingEnvironment _env;        //获取配置信息使用 GetSection        private readonly IConfiguration _config;    //Log记录接口    private readonly ILoggerFactory _loggerFactory;    public MyStartup(IHostingEnvironment env, IConfiguration config,    ILoggerFactory loggerFactory)    {        _env = env;        _config = config;        _loggerFactory = loggerFactory;    }


    {

            if (hostingEnvironment.IsDevelopment())
            {
            applicationBuilder.UseDeveloperExceptionPage();
            }
            else
            {
            applicationBuilder.UseExceptionHandler("/Home/Error");
            applicationBuilder.UseHsts();
            }

        applicationBuilder.UseHttpsRedirection();
        applicationBuilder.UseStaticFiles();
        applicationBuilder.UseCookiePolicy();

        applicationBuilder.UseMvc(delegate (IRouteBuilder routeBuilder)
            {
                {
                    //区域Areas的路由。必须在非区域Areas的路由前面定义吗？
                    routeBuilder.MapRoute(
       name: "defaultWithArea",
       template: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

                    //非区域Areas的路由
                    routeBuilder.MapRoute(
                        name: "default",
                        template: "{controller=Home}/{action=Index}/{id?}");
                }
            }
            );
        ILogger logger = loggerFactory.CreateLogger("TryLog");
       // Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment = applicationBuilder.ApplicationServices.GetRequiredService<Microsoft.AspNetCore.Hosting.IHostingEnvironment>();
        Microsoft.Extensions.Configuration.IConfiguration configuration = applicationBuilder.ApplicationServices.GetRequiredService<IConfiguration>();

        logger.LogInformation("Logged in Configure");        
        }
    }

