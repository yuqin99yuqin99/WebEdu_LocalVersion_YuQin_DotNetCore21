using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorWebAssemblyExampleApi.Model
{
    public interface IStudentRepository
    {
        List<Student> List();

        Student Get(Int32 id);

        Boolean Add(Student student);

        Boolean Update(Student student);

        Boolean Delete(Int32 id);
    }
}
