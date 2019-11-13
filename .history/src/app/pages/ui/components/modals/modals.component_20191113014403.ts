import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { RootComponent } from '../../../../shared/roots/root.component';
import { HuntingSessionService } from '../../../../shared/huntingsession.service';
import { GlobalService } from '../../../../shared/services/global.service';
import { ChartsService } from '../../../charts/components/echarts/charts.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
  providers: [ChartsService]
})

export class ModalsComponent extends RootComponent implements OnInit {
 
  showloading: boolean = false;
  BarOption;
  PieOption;

  inputData :any = {
    GameReserve: 'Papine',
    Date: new Date(),
    GameBirdAmt : 4,
    OtherBirdAmt: 5,
    Id: 3
  };

  constructor(private huntingService : HuntingSessionService, public _globalService: GlobalService,private chartsService: ChartsService) { 
    super(_globalService);
    this.BarOption = this.chartsService.getBarOption();
    this.PieOption = this.chartsService.getPieOption();
  }

  ngOnInit() { }

  openModal(modal) {
    modal.open();
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
  closeModal(modal) {
    modal.close();
  }

  onClose() {
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
  }
}
