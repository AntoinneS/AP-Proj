using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
  public class ApplicationUser : IdentityUser
  {

  }
  public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
  {
    public ApplicationDbContext()
      : base("DefaultConnection", throwIfV1Schema: false)
    {

    }
  }
}
