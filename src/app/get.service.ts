import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  constructor(private http : HttpClient) { }
  onGetData(){
    this.http.get('http://34.71.150.111:3000/profile').subscribe(profiles => {
      console.log(profiles)
    });
  }
}
