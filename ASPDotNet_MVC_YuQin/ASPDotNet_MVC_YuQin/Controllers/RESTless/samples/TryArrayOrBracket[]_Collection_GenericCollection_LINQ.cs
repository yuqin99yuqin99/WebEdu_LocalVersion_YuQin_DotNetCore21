using System;
using System.Web.Mvc;
using System.Collections.Generic;
/**1.System.Array是阵列/数组（或“类型名称[]”方式定义）。 在C#中最早出现的。在内存中是连续存储的，所以它的索引速度非常快，而且赋值与修改元素也很简单。 它的空间大小是固定的，空间不够时也不能再次申请，所以需要事前确定合适的空间大小。数组的存放的类型只能是一种。
2.System.Collections.ArrayList 是集合，是Array 的加强版，空间大小可以动态增长。 数据类型是引用类型，存在装箱、拆箱，效率更低、类型安全性降低。
3.System.Collections.Generic.List<T>是泛型集合。 解决了1、2的不足之处。而集合是可以动态扩展容量，可以根据需要动态改变大小，集合提供更多的成员方法，能满足更多的需求。集合存放的类型可以不是一种(不加泛型时添加的类型是Object)。
**/
namespace EDSS.Controllers
{
    public class TryArrayFromBracketOrFromArrayAbstractClass_Collection_GenericCollection_LINQController : Controller
    {

           
       
        public ContentResult Index()

        {
            //简单的存储数据元素而不执行操作的情况下可以使用[]定义的数组，而要对数组元素进行操作，则要采用Array.CreateInstance()创建数组。
            String[] arrayFromBracket = new String[3]{ "1", "2", "3" };//方括号的方式创建阵列这一对象的线性结构。
            Array arrayFromArrayAbstractClass = Array.CreateInstance(typeof(String), 3);//Array类的方式创建阵列这一对象的线性结构。Array类是一个抽象类，不能使用如下方式创建 Array array=new Array();
            arrayFromArrayAbstractClass.SetValue("1", 0);
            arrayFromArrayAbstractClass.SetValue("2", 1);
            arrayFromArrayAbstractClass.SetValue("3", 2);
            return this.Content((arrayFromBracket == arrayFromArrayAbstractClass).ToString() + ";" + arrayFromBracket.GetType().FullName + ";" + arrayFromArrayAbstractClass.GetType().FullName + ";" + arrayFromBracket[0] + ";" + arrayFromBracket[1] + ";" + arrayFromBracket[2] + ";" + arrayFromArrayAbstractClass.GetValue(0) + ";" + arrayFromArrayAbstractClass.GetValue(1) + ";" + arrayFromArrayAbstractClass.GetValue(2)); 
        }

       
        
        /**  public ContentResult IndexForList()
        {
         List<Curriculum> curriculums = new List<Curriculum>
            {                
                new Curriculum { CurriculumName = "Rock" },
                new Curriculum { CurriculumName = "Jazz" },
                new Curriculum { CurriculumName = "Metal" },
                new Curriculum { CurriculumName = "Alternative" },
                new Curriculum { CurriculumName = "Disco" },
                new Curriculum { CurriculumName = "Blues" },
                new Curriculum { CurriculumName = "Latin" },
                new Curriculum { CurriculumName = "Reggae" },
                new Curriculum { CurriculumName = "Pop" },
                new Curriculum { CurriculumName = "Classical" }
            };
          List<Curriculum> curriculums = new List<Curriculum>();

            curriculums.Add(new Curriculum { CurriculumName = "Rock" });
            curriculums.Add(new Curriculum { CurriculumName = "Jazz" });
            curriculums.Add(new Curriculum { CurriculumName = "Metal" });

            String stringTemp = "";
            foreach (Curriculum tempCurriculum in curriculums)
            {
                stringTemp = stringTemp + tempCurriculum.CurriculumName;
            }
            return this.Content(stringTemp);
          
        }
         * **/
    }
}
