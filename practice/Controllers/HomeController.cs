using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace practice.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Add()
        {
            return View();
        }
        public ActionResult Ops()
        {
            return View();
        }
        public ActionResult Product()
        {
            return View();
        }
        public ActionResult Store()
        {
            return View();
        }
        public ActionResult SideOfTriangle()
        {
            return View();
        }
        public ActionResult HighSchoolGrade()
        {
            return View();
        }
        public ActionResult VehicleSpeed()
        {
            return View();
        }

        public ActionResult Login()
        {
            return View();
        }

        [HttpGet]
        public ActionResult LoginDataSample(string user, string pass, string gender)
        {

            var allData = new { message = $"{user}, {pass}, {gender}" };
        
            return Json(allData, JsonRequestBehavior.AllowGet);
        }

        public ActionResult LoginNew()
        {
            return View();
        }

        [HttpGet]
        public ActionResult NewLogInDisplay(string user, string pass, string gender)
        {
            var user_data = new { msg = $"{user} {pass}{gender}"};
            return Json(user_data, JsonRequestBehavior.AllowGet);
        }

        public ActionResult StudentProfile()
        {
            return View();
        }

        public ActionResult StudentEntry()
        {
            var data = new List<object>();
            var lastname = Request["lname"];
            var firstname = Request["fname"];

            data.Add(new
            {
                mess = $"{lastname}, {firstname}"
            });


            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public ActionResult StudentRegistry()
        {
            return View();
        }

        public ActionResult StudentData()
        {
            var datas = new List<object>();

            var fname = Request["fname"];
            var lname = Request["lname"];
            var gender = Request["genType"];

            // always remember that datas is a list of object or an array.
            datas.Add(new
            {
                mess = $"{fname}, {lname}, {gender}"
        }); 

            return Json(datas, JsonRequestBehavior.AllowGet);
        }
    
        public ActionResult StudentAccountingSystem()
        {
            return View();
        }

        public ActionResult StudentAccountingData()
        {
            var data = new List<object>();

            string[] dataArray = { Request["courseCode"], Request["course"],
                Request["tuition"], Request["registration"], Request["misc"],
                Request["lab"], Request["units"], Request["terms"]};

            data.Add(new
            {
                courseCode =dataArray[0],
                course = dataArray[1],
                tuition = dataArray[2],
                registration = dataArray[3],
                misc = dataArray[4],
                lab = dataArray[5],
                units = dataArray[6],
                terms = dataArray[7]
            });

            data.Add(new
            {
                fullname = Request["name"],
                schoolId = Request["schoolId"]
            });

            return Json(data);
        }
    }
}