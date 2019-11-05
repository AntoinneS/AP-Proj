import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { Profile } from '../../shared/profile.model';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

//import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {


  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  

  constructor(public service: ProfileService)
   { }

  ngOnInit() {
    this.service.refreshList();
    this.resetForm();
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
      // this.toastr.info('Updated successfully', 'EMP. Register');
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
