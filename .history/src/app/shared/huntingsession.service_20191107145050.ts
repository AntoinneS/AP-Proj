import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HuntingSession } from './huntingsession.model';

@Injectable({
  providedIn: 'root'
})
export class HuntingSessionService {

  formData  : HuntingSession;
  list : HuntingSession[];
  readonly rootURL ="http://localhost:51063/api"

  constructor(private http : HttpClient) { }

  saveDetailsDemo(inputData){
    return this.http.post(this.rootURL+'/HuntingSession',inputData);
  }

  postHuntingSession(formData : HuntingSession){
   return this.http.post(this.rootURL+'/HuntingSession',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'/HuntingSession')
    .toPromise().then(res => this.list = res as HuntingSession[]);
  }

  putHuntingSession(formData : HuntingSession){
    return this.http.put(this.rootURL+'/HuntingSession/'+formData.Id,formData);
     
   }

   deleteHuntingSession(id : number){
    return this.http.delete(this.rootURL+'/HuntingSession/'+id);
   }
}