import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.jpg';
  userPost: string = 'WEB APP';
  EmailS: string;
  FirstS: string;
  LastS: string;
  TeleS: number;
  Liscence: number;
  TotGamBirSho: number;
  TotProBirSho: number;
  ProPhotoS: File;
  constructor(public service: ProfileService) { }

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
