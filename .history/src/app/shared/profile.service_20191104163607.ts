import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  formData  : Profile;
  list : Profile[];
  readonly rootURL ="http://localhost:51063/api"

  constructor(private http : HttpClient) { }

  postProfile(formData : Profile){
   return this.http.post(this.rootURL+'/Profile',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/Profile')
    .toPromise().then(res => this.list = res as Profile[]);
  }

  putProfile(formData : Profile){
    return this.http.put(this.rootURL+'/Profile/'+formData.Liscence,formData);
     
   }

   deleteProfile(id : number){
    return this.http.delete(this.rootURL+'/Profile/'+id);
   }
   
}
