﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Demo.WebApi.IISHosted.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SimpleGet()
        {
            return View();
        }

        public ActionResult ModelBinding()
        {
            return View();
        }

    }
}
