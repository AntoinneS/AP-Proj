import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../../shared/profile.service';
import { RootComponent } from 'src/app/shared/roots/root.component';
import { GlobalService } from 'src/app/shared/services/global.service';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent extends RootComponent implements OnInit {
    //toastr: any;
    constructor(public service: ProfileService, public _globalService: GlobalService ) {
        super(_globalService);
    }

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
          Password: '',
          Photo: null
        }
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
    
      updateRecord(form: NgForm) {
        this.service.putProfile(form.value).subscribe(res => {
          // this.toastr.info('Updated successfully', 'EMP. Register');
          this.resetForm(form);
          this.service.refreshList();
        });
    
      }
    
    }
    
