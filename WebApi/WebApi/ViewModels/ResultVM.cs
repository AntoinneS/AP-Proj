using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.ViewModels
{
	public class ResultVM<T>
	{
    public bool success { get; set; } = true;
    public T data { get; set; }
    public string message { get; set; } = "Successful";
  }
}
