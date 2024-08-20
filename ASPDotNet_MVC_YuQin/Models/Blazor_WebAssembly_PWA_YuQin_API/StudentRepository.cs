using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorWebAssemblyExampleApi.Model
{
    public class StudentRepository : IStudentRepository
    {
        private static List<Student> Students = new List<Student> {
                new Student{ Id=1, Name="黄", Age=18, Class="1班", Sex="女"},
                new Student{ Id=2, Name="温", Age=19, Class="2班", Sex="男"},
                new Student{ Id=3, Name="王", Age=20, Class="3班", Sex="女"}
        };


        public Student Get(Int32 id)
        {
            Student studentMatched = (from student in Students where student.Id == id select student).FirstOrDefault();
            return studentMatched; 
        }

        public List<Student> List()
        {
            return Students;
        }

        public Boolean Add(Student studentAdded)
        {
            Students.Add(studentAdded);

            return true;
        }


        public Boolean Update(Student studentUpdated)
        {
            Student studentMatched = (from student in Students where student.Id == studentUpdated.Id select student).FirstOrDefault();
            if (studentMatched != null)
            {
                Students.Remove(studentMatched);
            }
            
            Students.Add(studentUpdated);
            return true;
        }

        public Boolean Delete(Int32 id)
        {
            Student studentMatched = (from student in Students where student.Id == id select student).FirstOrDefault();
            if (studentMatched != null)
            {
                Students.Remove(studentMatched);
            }

            return true;
        }
    }
}
