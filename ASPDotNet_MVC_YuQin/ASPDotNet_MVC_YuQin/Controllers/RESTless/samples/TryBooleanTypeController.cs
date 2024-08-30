using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Controllers.samples
{
    public class TryBooleanTypeController : Controller
    {
        // GET: TryBooleanType
        public ActionResult Index()
        {
           // Boolean tryBoolean = new Boolean();//面向对象的写法.培养一切都是类型对象的思想。
           // tryBoolean = true;
            return Content(true.ToString()+"|" +sizeof(System.Boolean) + "|" + default(System.Int32)+"|"+1.ToString() + "|" + sizeof(System.Int32) + "|" + default(System.Int32) + "|" + 'A'.ToString() + "|" +  sizeof(System.Char) + "|" + default(System.Char));
        }

        // GET: TryBooleanType/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: TryBooleanType/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: TryBooleanType/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                // Add insert logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: TryBooleanType/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: TryBooleanType/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // Add update logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: TryBooleanType/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: TryBooleanType/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}