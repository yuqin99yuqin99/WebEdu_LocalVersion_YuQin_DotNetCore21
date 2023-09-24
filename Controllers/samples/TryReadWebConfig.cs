using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Configuration;
using System.Web.Configuration;

namespace MusicStore.Controllers.Samples
{
    public class TryReadWebConfigController : Controller
    {
        //
        // GET: /MyFirst/

        public ActionResult Index()
        {
            
            //return Content(ConfigurationManager.AppSettings["webpages:Version"] + ";"+ConfigurationManager.ConnectionStrings[0] + ";" + WebConfigurationManager.Instance.DoMain + ";" + WebConfigurationManager.Instance.WebName);
            return Content(ConfigurationManager.AppSettings["webpages:Version"] + ";" + ConfigurationManager.ConnectionStrings[0] + ";" + ConfigurationManager.ConnectionStrings["MusicStoreDbContext"] + ";" + ConfigurationManager.GetSection("WebConfigSection").ToString() + ";" + WebConfigurationManager.WebConfigurationSectionInstance.DoMain + ";" + WebConfigurationManager.WebConfigurationSectionInstance.WebName);
        }



         public ActionResult Index2()
        {
            // Get the Web application configuration.
            Configuration configuration = System.Web.Configuration.WebConfigurationManager.OpenWebConfiguration("/Web.config");

            // Get the section.
            AuthenticationSection authenticationSection = (AuthenticationSection)configuration.GetSection("system.web/authentication");
            return Content(authenticationSection.SectionInformation.AllowDefinition.ToString());
         }
        
    }

    /// <summary>
    /// 网站信息配置节点
    /// </summary>
    public class WebConfigurationSection : ConfigurationSection//web.config也是一个XML文件，所以也可使用XML相关类型读写web.config，但建议使用System.Configuration名称空间中的类型读写，以便更可持续发展。
    {
        /// <summary>
        /// 网站名称
        /// </summary>
        [ConfigurationProperty("WebName", DefaultValue = "", IsRequired = true, IsKey = false)]
        public String WebName
        {
            get { return (String)this["WebName"]; }
            set { this["WebName"] = value; }
        }
        /// <summary>
        /// 网站域名
        /// </summary>
        [ConfigurationProperty("DoMain", DefaultValue = "", IsRequired = true, IsKey = false)]
        public String DoMain
        {

            get { return (String)this["DoMain"]; }
            set { this["DoMain"] = value; }
        }

    }


    /// <summary>
    /// 网站配置信息工厂
    /// </summary>
    public class WebConfigurationManager
    {
        /// <summary>
        /// 配置信息实体
        /// </summary>
       // public static readonly WebConfigurationSection Instance = GetSection();

        public static WebConfigurationSection WebConfigurationSectionInstance
        {
            get{ return GetSection();}
        }
       
        private static WebConfigurationSection GetSection()
        {
           WebConfigurationSection webConfigurationSection = ConfigurationManager.GetSection("WebConfigSection") as WebConfigurationSection;

           // WebConfigurationSection webConfigurationSection =(WebConfigurationSection)ConfigurationManager.GetSection("WebConfigSection");
            if (webConfigurationSection == null)
                throw new ConfigurationErrorsException();
            return webConfigurationSection;
        }
    }


}

   