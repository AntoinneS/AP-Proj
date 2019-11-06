import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
status: string;
  constructor(public service: ProfileService) { }

  ngOnInit() {
this.status = "Hello" + this.service.currentuser.email;
   }

  Profiles(){
  //  this.service.currentuser



}
}
