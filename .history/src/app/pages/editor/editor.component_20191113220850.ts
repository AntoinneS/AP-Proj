import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { Profile } from '../../shared/profile.model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { RootComponent } from '../../shared/roots/root.component';
import { GlobalService } from '../../shared/services/global.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent extends RootComponent implements OnInit {

profile: Profile[];

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  docs: any;
  
  constructor(public service: ProfileService, public _globalService: GlobalService)
   {
    super(_globalService);
  }

  ngOnInit() {
    this.service.refreshList();
    this.resetForm();
}

refreshProfileList(form: NgForm){
  this.service.postProfile(form.value).subscribe(res => {
    res !== null; 
    this.docs = res.docs;
  })
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
    this.service.formData = Array.assign({}, pro);
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
