import { Component, OnInit } from '@angular/core';
import { RootComponent } from '../../../../shared/roots/root.component';
import { HuntingSessionService } from '../../../../shared/huntingsession.service';
import { GlobalService } from '../../../../shared/services/global.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent extends RootComponent implements OnInit {

  inputData :any = {
    GameReserve: 'Papine',
    Date: new Date(),
    GameBirdAmt : 4,
    OtherBirdAmt: 5,
    Id: 3
  };
  constructor(private huntingService : HuntingSessionService, public _globalService: GlobalService)
  {
   super(_globalService);
  }

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

  notification(type) {
    this.alertMessage(
      {
        type: type,
        title: 'Look here!',
        value: 'SUCCESS!'
      }
    );
  }

  
}

