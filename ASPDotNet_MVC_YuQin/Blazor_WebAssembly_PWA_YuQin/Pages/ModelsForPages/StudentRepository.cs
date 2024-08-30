//using Blazor_WebAssembly_PWA_YuQin.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlazorWebAssemblyExampleApi.Model;

namespace Blazor_WebAssembly_PWA_YuQin.Model
{
    public class StudentRepository
    {
        private  List<Student> students;

        public  void SetStudents(List<Student> studentsTemp)
        {
            students = studentsTemp;
        }

        public List<Student> GetStudents()
        {
            return students;
        }

        public  Student GetStudentById(Int32 id)
        {
           // var studentMatched = students?.FirstOrDefault(s => s.Id == id);
            Student studentMatched = (from student in students where student.Id == id select student).FirstOrDefault();

            return studentMatched;
        }
    }
}
