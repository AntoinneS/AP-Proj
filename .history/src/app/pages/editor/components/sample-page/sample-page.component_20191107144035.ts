import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
