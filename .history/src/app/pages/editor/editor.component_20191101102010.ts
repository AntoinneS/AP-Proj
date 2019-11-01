import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { Profile } from '../../shared/profile.model';

//import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(public service: ProfileService)
   { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pro : Profile) {
    this.service.formData = Object.assign({}, pro);
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
