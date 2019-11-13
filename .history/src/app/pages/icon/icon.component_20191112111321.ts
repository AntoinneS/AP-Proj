import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { Profile } from '../../shared/profile.model';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { GlobalService } from '../../shared/services/global.service';
import { HuntingSessionService } from '../../shared/huntingsession.service';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent  implements OnInit {

  inputData :any = {
    GameReserve: 'Papine',
    Date: new Date(),
    GameBirdAmt : 4,
    OtherBirdAmt: 5,
    Id: 3
  };
  constructor(private huntingService : HuntingSessionService) { }

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
