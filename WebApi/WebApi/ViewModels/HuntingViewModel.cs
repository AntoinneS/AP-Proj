using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.ViewModels
{
  public class HuntingViewModel
  {
    
    public string GameReserve { get; set; } =  "Papine 100";
    public DateTime Date { get; set; } =  DateTime.Now;
    public int GameBirdAmt  { get; set; } =  89;
    public int OtherBirdAmt { get; set; } =  5;
    public int Id { get; set; } = 3;
  }
}
