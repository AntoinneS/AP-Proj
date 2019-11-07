import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { Profile } from '../../shared/profile.model';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { RootComponent } from '../../shared/roots/root.component';
import { GlobalService } from '../../shared/services/global.service';

@Component({
  selector: 'app-test-c',
  templateUrl: './test-c.component.html',
  styleUrls: ['./test-c.component.scss']
})

  export class TestCComponent extends RootComponent implements OnInit {


    /* pagination Info */
    pageSize = 10;
    pageNumber = 1;
    
  
    constructor(public service: ProfileService, public _globalService: GlobalService)
     {
      super(_globalService);
    }
  
    ngOnInit() {
      this.service.refreshList();
      this.resetForm();
  }
  
  notification(type) {
    this.alertMessage(
      {
        type: type,
        title: 'Look here!',
        value: 'SUCCESS!'
      }
    );
  }
  
    populateForm(pro : Profile) {
      this.service.formData = Object.assign({}, pro);
    }
    pageChanged(pN: number): void {
      this.pageNumber = pN;
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
    
     
    updateRecord(form: NgForm) {
      this.service.putProfile(form.value).subscribe(res => {
        this.resetForm(form);
        this.service.refreshList();
      });
    }
  
    onSubmit(form: NgForm) {
      if (form.value.Liscence == null)
        this.insertRecord(form);
      else
        this.updateRecord(form);
    }
  
    insertRecord(form: NgForm) {
      console.log("Value of form",)
      this.service.postProfile(form.value).subscribe(res => {
      //  this.toastr.success('Inserted successfully', 'EMP. Register');
        this.resetForm(form);
        this.service.refreshList();
      });
    }
  
    
    onDelete(id: number) {
      if (confirm('Are you sure to delete this record?')) {
        this.service.deleteProfile(id).subscribe(res => {
          this.service.refreshList();
         // this.toastr.warning('Deleted successfully', 'EMP. Register');
        });
      }
    }
  }
  
}
