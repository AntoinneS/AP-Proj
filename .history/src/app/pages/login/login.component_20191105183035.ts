import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../../shared/profile.service';
import { Profile } from '../../shared/profile.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(public service: ProfileService)
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

  email:any;
  Password: string;

  login(){
      console.log("login button press",this.email);
  }

  updateRecord(form: NgForm) {
    this.service.putProfile(form.value).subscribe(res => {
      // this.toastr.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
 }
}
 