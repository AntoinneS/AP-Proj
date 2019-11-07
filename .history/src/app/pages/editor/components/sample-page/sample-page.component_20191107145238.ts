import { Component, OnInit } from '@angular/core';
import { HuntingSessionService } from '../../shared/huntingsession.service';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {

  inputData :any = {
    GameReserve: 'Papine',
    Date: new Date(),
    GameBirdAmt : 4,
    OtherBirdAmt: 5,
    Id: 3
  };
  constructor(
    private huntingService : HuntingSessionService
  ) { }

  ngOnInit() {
  }

  submitData(){
    console.log("submit button clicked with data",this.inputData);
    this.huntingService.saveDetailsDemo(this.inputData).subscribe((result )=>{
      console.log(result)
      if(result['success'] == true){
        alert("Successful")
      }else{
        alert("Unsuccesful")
      }
    })
  }

}
