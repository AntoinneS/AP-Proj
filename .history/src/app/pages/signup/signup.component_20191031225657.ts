import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../../shared/profile.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    //toastr: any;
    constructor(public service: ProfileService ) {}

    ngOnInit() {
        this.resetForm();
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
          Password: ''
        }
      }
    
    
      onSubmit(form: NgForm) {
        if (form.value.tele == null)
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
    
      updateRecord(form: NgForm) {
        this.service.putProfile(form.value).subscribe(res => {
          // this.toastr.info('Updated successfully', 'EMP. Register');
          this.resetForm(form);
          this.service.refreshList();
        });
    
      }
    
    }
    
