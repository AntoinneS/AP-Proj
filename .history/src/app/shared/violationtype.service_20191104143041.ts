import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ViolationType } from './violationtype.model';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ViolationTypeService {

  formData  : ViolationType;
  list : ViolationType[];
  readonly rootURL ="http://localhost:51063/api"

  constructor(private http : HttpClient) { }

  postViolationType(formData : ViolationType){
   return this.http.post(this.rootURL+'/ViolationType',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/ViolationType')
    .toPromise().then(res => this.list = res as Profile[]);
  }

  putViolationType(formData : ViolationType){
    return this.http.put(this.rootURL+'/ViolationType/'+formData.Id,formData);
     
   }

   deleteViolationType(id : number){
    return this.http.delete(this.rootURL+'/ViolationType/'+id);
   }
}