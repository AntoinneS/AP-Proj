import {AfterViewInit, Component, Input} from '@angular/core';
import {GlobalService} from '../../services/global.service';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent implements AfterViewInit {
  avatarImgSrc: string = 'assets/images/avatar.jpg';
  userName: string = 'B.I.R.D';
  userPost: string = 'WEB APP';
  EmailS: string;
  FirstS: string;
  LastS: string;
  TeleS: number;
  Liscence: number;
  TotGamBirSho: number;
  TotProBirSho: number;

  sidebarToggle: boolean = true;
  tip = {ring: true, email: true};

  constructor(private _globalService: GlobalService, public service: ProfileService) {
  }

  public _sidebarToggle() {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }


  ngAfterViewInit(): void {
    this.sidebarToggle = window.innerWidth >= 970;
  }
  ngOnInit() {
    this.EmailS =this.service.currentuser.email;
    this.FirstS =this.service.currentuser.FirstName;
    this.LastS = this.service.currentuser.LastName;
    this.TeleS = this.service.currentuser.tele;
    this.Liscence = this.service.currentuser.Liscence;
    this.TotGamBirSho = this.service.currentuser.TotGamBirSho;
    this.TotProBirSho = this.service.currentuser.TotProBirSho;
  }
}
