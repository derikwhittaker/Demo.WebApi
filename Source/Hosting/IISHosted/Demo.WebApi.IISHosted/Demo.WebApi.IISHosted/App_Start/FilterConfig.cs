﻿using System.Web;
using System.Web.Mvc;

namespace Demo.WebApi.IISHosted
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}