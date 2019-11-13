import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../../shared/profile.service';
import { Profile } from '../../shared/profile.model';
import { IndexComponent } from '../index/index.component';
import {Router} from "@angular/router"
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(public service: ProfileService, private router: Router)
    { }
 
   ngOnInit() {
    this.resetForm();
   }

   onSubmit(form: NgForm) {
    if (form.value.Liscence == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postProfile(form.value).subscribe(res => {
    //  this.toastr.success('Inserted successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      FirstName: '',
      LastName: '',
      tele:'',
      Liscence: null,
      email: '',
      Password: '',
      ProPhoto: null,
      TotGamBirSho: null,
      TotProBirSho: null,
      HuntingSession: null,
      ViolationType: null
    }
  }

  email:string;
  Password:string;

  login(){
      console.log("login button press",this.email);
      this.service.Authenticate(this.email,this.Password).subscribe(res =>{
          console.log("Login Successful", res);
          if (res != null){
            this.router.navigate(['/pages/index'])
          }
      });

  }

  updateRecord(form: NgForm) {
    this.service.putProfile(form.value).subscribe(res => {
      // this.toastr.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
 }
}
 