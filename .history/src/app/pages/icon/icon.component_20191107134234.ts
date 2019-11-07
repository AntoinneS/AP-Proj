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
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent extends RootComponent implements OnInit {

  
  constructor(public ProfileService, public _globalService: GlobalService) {
    super();
   }

  ngOnInit() {
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
      console.log("Value of form", form.value)
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
