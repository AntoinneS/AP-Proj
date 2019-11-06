import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  EmailS: string;
  FirstS: string;
  constructor(public service: ProfileService) { }

  ngOnInit() {
    this.EmailS =this.service.currentuser.email;
    this.FirstS =this.service.currentuser.email;
   }

  Profiles(){
  //  this.service.currentuser
}
}
