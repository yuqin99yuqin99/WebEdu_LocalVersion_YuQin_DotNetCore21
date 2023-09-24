using System;
using System.Web.Mvc;

namespace EDSS.Controllers
{
    public class TryDelegateType_Event_Controller : Controller
    {
        /**老板希望员工一玩游戏就将自动发出一个消息通知他，而不能由他人跳过员工而通知（现实的真实性需求）。而且如果他没空理会时，也可灵活地把消息发给自己制定的监管人。事件绑定委托的机制可实现这种互动**/

        public static String NodifiedStringForBoss { set; get; }
        public static String NodifiedStringForAdministrator { set; get; }
        public ContentResult Index()
        {
            Employee employee = new Employee();
            Boss boss = new Boss();
            Administrator administrator = new Administrator();
            employee.OnPlayGame += new Action(boss.Notified);//注意只使用方法名称，无()。可绑定多个委托对象。+号是绑定委托对象，-号是解绑委托对象。
            employee.OnPlayGame += new Action(administrator.Notified);//注意只使用方法名称，无()。可绑定多个委托对象。+号是绑定委托对象，-号是解绑委托对象。   
            employee.PlayGame();//当employee.Games方法调用后，触发OnPlayGameEvent事件，运行委托。
            return this.Content(NodifiedStringForBoss + "、" + NodifiedStringForAdministrator);
        }

        public class Employee
        {
            public event Action OnPlayGame;//事件属性只能由本类自身的事件方法触发/调用（在此为本类自身的PlayGame()事件方法）。事件属性必须读写委托类型的对象。因为在此定义的委托是签名相同的方法的抽象多态并对象化，所以使用时，可根据实际需求，具体单态为所需的委托对象。
            public void PlayGame()//事件方法。事件方法总是用来触发/调用上述本类自身的事件属性（在此为本类自身的OnPlayGame事件属性）。
            {
                if (this.OnPlayGame != null)
                {
                    this.OnPlayGame();
                }
            }
        }

        //定义一个老板类
        public class Boss
        {
            public void Notified()
            {
                TryDelegateType_Event_Controller.NodifiedStringForBoss = "老板您好，有人在玩游戏";
               // return "老板您好，有人在玩游戏";
            }
        }
        public class Administrator
        {
            public void Notified()
            {
                TryDelegateType_Event_Controller.NodifiedStringForAdministrator = "管理员您好，有人在玩游戏";
                //return "管理员您好，有人在玩游戏";
            }
        }
    }




public class TryDelegateType_EventWithArgs_Controller : Controller
{
    /**上述实现了基本的事件委托机制。但管理员并不满足这种简单的通知，他还想知道究竟是谁在上班时间违反规定。显然，现在委托对象必须传递必要的参数才行，在.NET框架中，还提供了事件参数基类EventArgs专门用于传递事件数据。
  **/
    static public String NodifiedStringForBoss { set; get; }
    static public String NodifiedStringForAdministrator { set; get; }

    public ContentResult Index()
    {
        Employee employee = new Employee();
        employee.Name = "Mike";
        employee.Age = 25;
        
        Administrator administrator = new Administrator();
        Boss boss=new Boss();
        employee.OnPlayGame += new Action<Object, CustomeEvetnArgs>(boss.Notified);//注意只使用方法名称，无()。
        employee.OnPlayGame += new Action<Object, CustomeEvetnArgs>(administrator.Notified);//注意只使用方法名称，无()。   
        employee.PlayGame();//当employee.Games方法调用后，触发PlayGameEvent事件，运行委托。
        return this.Content(NodifiedStringForBoss + "、" + NodifiedStringForAdministrator);
    }

        //增加自定义的事件参数类。
public class CustomeEvetnArgs : EventArgs
{
    public String Time { get; set; }
   public  CustomeEvetnArgs()
    {
        this.Time = DateTime.Now.ToString();
    }
}

//雇员类的代码修改后如下：
public class Employee
{
       public String Name   {  get; set; }
       public Int32 Age   {  get;  set; }

    public event Action<Object, CustomeEvetnArgs> OnPlayGame;
    public void PlayGame()
    {
        if (this.OnPlayGame != null)
        {
            CustomeEvetnArgs customeEvetnArgs = new CustomeEvetnArgs();
            this.OnPlayGame(this, customeEvetnArgs);
        }
    }
}


// 管理员的通知方法也必须相应地进行修改：
public class Administrator
{
    public void Notified(Object sender, CustomeEvetnArgs customeEvetnArgs)
    {
        TryDelegateType_EventWithArgs_Controller.NodifiedStringForAdministrator = "管理员您好，有人在玩游戏!时间是：" + customeEvetnArgs.Time + "事件发送者是" + sender.ToString();
    }
}

// 老板的通知方法也必须相应地进行修改：
public class Boss
{
    public void Notified(Object sender, CustomeEvetnArgs customeEvetnArgs)
    {
        TryDelegateType_EventWithArgs_Controller.NodifiedStringForBoss = "老板您好，有人在玩游戏!时间是：" + customeEvetnArgs.Time + "事件发送者是" + sender.ToString();
    }
}


}

}


