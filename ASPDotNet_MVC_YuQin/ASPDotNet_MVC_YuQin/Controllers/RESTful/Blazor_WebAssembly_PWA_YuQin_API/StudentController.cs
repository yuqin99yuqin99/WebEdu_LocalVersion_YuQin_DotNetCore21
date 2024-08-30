using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using BlazorWebAssemblyExampleApi.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers.RESTful.NewFolder
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : ControllerBase
    {
        public IStudentRepository iStudentRepository;
        public StudentController(IStudentRepository studentRepository)
        {
            iStudentRepository = studentRepository;
        }

        [HttpGet]
        public List<Student> Get()
        {
            return iStudentRepository.List();
        }

        [HttpGet("{id}")]
        public Student Get(int id)
        {
            return iStudentRepository.Get(id);
        }

        [HttpPost]
        public Student Post(Student studentAdded)
        {
            iStudentRepository.Add(studentAdded);

            return studentAdded;
        }

        [HttpPut]
        public Student Put(Student studentUpdated)
        {
            iStudentRepository.Update(studentUpdated);

            return studentUpdated;
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            iStudentRepository.Delete(id);
        }
    }
}
