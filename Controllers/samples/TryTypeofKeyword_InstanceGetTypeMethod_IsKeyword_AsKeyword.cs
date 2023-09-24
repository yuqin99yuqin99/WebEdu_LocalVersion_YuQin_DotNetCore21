using System;
using System.Web;
using System.Web.Mvc;

namespace EDSS.Controllers
{
    public class TryTypeofKeyword_InstanceGetTypeMethod_IsKeyword_AsKeywordController : Controller
    {
        
        public ContentResult Index()
        {
           // typeof: The typeof operator is used to obtain the System.Type object for a type.
            Type type1 = typeof(Int32);
           // GetType: Gets the Type of the current instance.
            Int32 int32Temp = 1;
            Type type2 = int32Temp.GetType();//GetType()是根类System.Object的方法
            //is关键字if (obj is MyObject).判断对象obj是否为 MyObject 类型的一个实例，或者对象是否为从 MyObject 派生的一个类型。as关键字：在可兼容的引用类型之间进行类型转换。as 运算符类似于强制转换操作。 但是，如果转换是不可能的，as 返回 null 而不引发异常(as转换只支持引用类型，不支持拷贝类型)。expression as type等同于expression is type ? (type)expression : (type)null
            return Content((type1 == type2).ToString() + ";" + (typeof(Int32) == int32Temp.GetType()) + ";" + (int32Temp is Int32) + ";" + (int32Temp is Object) + ";" + (int32Temp as Object).ToString() + ";" + (type1 as Object).ToString());             
        }

        public ContentResult Index2()
        {
            //现在对象化一个Student：
            Student student = new Student();
            student.Id = Guid.NewGuid().ToString();
            student.Name = "张三";
            student.StudentNo = "T001";
            student.Phone = 10086;
            student.Sex = 1;
            student.CollegeId = Guid.NewGuid().ToString();
            student.ClassId = Guid.NewGuid().ToString();
            student.ProfessionId = Guid.NewGuid().ToString();
            student.Address = "福建";
           // 现在对象化一个StudentDTO
            StudentDTO studentDTO = new StudentDTO();
            //把student的信息赋给studentDTO，常用的方法是：
            /**
             studentDTO.Id = student.Id;
            studentDTO.Name = student.Name;
            studentDTO.StudentNo = student.StudentNo;
            studentDTO.Phone = student.Phone;
            studentDTO.Sex = student.Sex;
            studentDTO.CollegeId = student.CollegeId;
            studentDTO.ClassId = student.ClassId;
            studentDTO.ProfessionId = student.ProfessionId;
             **/

            //而使用GetType()也可以实现：
            foreach (var item in student.GetType().GetProperties())    //返回Student的所有公共属性
            {
                var value = item.GetValue(student, null);   //返回属性值    
                var setobj = studentDTO.GetType().GetProperty(item.Name);   //搜索具有指定属性名称的公共属性
                if (value != null && setobj != null)
                {
                    setobj.SetValue(studentDTO, value, null);
                }
            }
            return Content(studentDTO.Id+studentDTO.Name);
        }
    }

    public class Student
    {
        public Student()
        {

        }

        public virtual string Id { get; set; }

        public virtual string StudentNo { get; set; }

        public virtual string Name { get; set; }

        public virtual string ClassId { get; set; }

        public virtual string ProfessionId { get; set; }

        public virtual string CollegeId { get; set; }

        public virtual int Phone { get; set; }

        public virtual int Sex { get; set; }

        public virtual string Address { get; set; }
    }

    public class StudentDTO
    {
        public StudentDTO()
        {

        }
        public virtual string Id { get; set; }

        public virtual string StudentNo { get; set; }

        public virtual string Name { get; set; }

        public virtual string ClassId { get; set; }

        public virtual string ProfessionId { get; set; }

        public virtual string CollegeId { get; set; }

        public virtual int Phone { get; set; }

        public virtual int Sex { get; set; }

        public virtual int TeacherId { get; set; }
    }
}
