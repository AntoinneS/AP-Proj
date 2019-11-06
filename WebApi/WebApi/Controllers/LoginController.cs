using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.Models;
using WebApi.ViewModels;

namespace WebApi.Controllers
{
    public class LoginController : ApiController
    {
    private DBModel db = new DBModel();
    // POST: api/Login
    //[ResponseType(typeof(LoginViewModel))]
    [ResponseType(typeof(Profile))]
    public IHttpActionResult PostLoginViewModel(LoginViewModel LoginViewModel)
    {
      var record =
        db.Profiles.Where(row => row.email == LoginViewModel.email && row.Password == LoginViewModel.Password).FirstOrDefault();
      record.Password = null;
      return Ok(record);
      
    }
  }
}
