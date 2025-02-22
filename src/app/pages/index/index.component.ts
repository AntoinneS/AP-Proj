import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts/components/echarts/charts.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService]
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;

  public BarOption;

  constructor(private _chartsService: ChartsService) { }

  ngOnInit() {
    this.BarOption = this._chartsService.getBarOption();
  }
}
