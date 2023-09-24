/**
 * 由于Core移除了ConfigurationManager.Appsetting["title"]这个方法，我现在不知道该怎么在控制器中读取配置文件了，例如项目的标题。
尝试过三个方式。
一、引入扩展System.Configuration.ConfigurationManager
这个扩展可以使Core使用跟原来一样的方法，来读取app.config中的配置参数。
问题在于，一旦项目编译完了，无论如何修改app.config文件的内容，ConfigurationManager读取到的值都不会发生变化，重启项目都不好用，只能修改完重新编译。
我没看源码，但是我都怀疑是不是这个扩展把配置文件的值直接编译进dll里了
二、引入扩展Microsoft.Extensions.Options.ConfigurationExtensions
配置参数可以直接写在appsettings.json里面了，但是这个方法需要在startup中注册。并且需要有跟配置文件配套的实体类才可以，感觉比较鸡肋。
缺点和上一个一样，在项目运行的时候，无论如何修改配置文件，读取到的值都不会改变，唯一不同的是，重启项目可以解决。
感觉应该是在项目启动的时候创建里了一个静态实例。
三、硬编码
每次尝试读取配置文件的时候，使用Newtonsoft.Json从新解析并尝试返回配置内容。
这个方法是能满足要求了，但是系统开销似乎不小，而且如果我一次请求要多次调用配置文件，就会解析多次。想过做缓存，每次判断文件是否修改。没修改就用缓存， 修改了就从新解析。
这三个方法似乎都有问题，但是我现在就纠结于前两种方法他不能随时改变配置文件的问题。

 * **/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using System.Collections.Specialized;
using System.IO;
using System.Text;
 
namespace WebEdu_LocalVersion_YuQin_DotNetCore21.CommonAssembly
{
    public class AppSettingReadWriteByJSON
    {
        private static NameValueCollection _configurationCollection;
        private static DateTime _lastWriteTime;
        public static bool _configFileExist;
        public static string _defaultPath = "/appsettings.json";

        static AppSettingReadWriteByJSON()
        {
            _lastWriteTime = DateTime.MinValue;
            _configurationCollection = new NameValueCollection();
        }

        private static void ReadJosnConfig(string filePath = null)
        {
            if (string.IsNullOrEmpty(filePath)) filePath = Directory.GetCurrentDirectory() + _defaultPath;


            FileInfo config = new FileInfo(filePath);
            if (!(_configFileExist = config.Exists)) return;

            //if (_lastWriteTime == config.LastWriteTime) return;

            _configurationCollection.Clear();
            StreamReader sr = new StreamReader(filePath, Encoding.Default);
            JObject config_object = JObject.Parse(sr.ReadToEnd());
            sr.Close();
            if (config_object == null || !(config_object is JObject)) return;

            if (config_object["appSettings.Url"] != null && !string.IsNullOrEmpty(config_object["appSettings.Url"].ToString()))
            {
                ReadJosnConfig(config_object["appSettings.Url"].ToString());
            }
            else
            {
                foreach (JProperty prop in config_object["AppSettings"])
                {
                    _configurationCollection[prop.Name] = prop.Value.ToString();
                }
            }
        }

        public static bool ConfigFileExist { get { return _configFileExist; } }

        public static NameValueCollection AppSettings
        {
            get
            {
                ReadJosnConfig();
                return _configFileExist ? _configurationCollection : new NameValueCollection();
            }
        }

    }
}
