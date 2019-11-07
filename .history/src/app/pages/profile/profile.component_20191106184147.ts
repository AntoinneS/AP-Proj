import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { NgForm } from '@angular/forms';
import { Profile } from '../../shared/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  EmailS: string;
  FirstS: string;
  LastS: string;
  TeleS: string;
  constructor(public service: ProfileService) { }

  ngOnInit() {
    this.EmailS =this.service.currentuser.email;
    this.FirstS =this.service.currentuser.FirstName;
    this.LastS = this.service.currentuser.LastName;
    this.TeleS = this.service.currentuser.tele;
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
  Profiles(){
  //  this.service.currentuser
}
}
