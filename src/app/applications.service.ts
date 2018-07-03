import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  private url = "https://demoforphaniapi.cfapps.io/v1/applications"
  constructor(private http : HttpClient) { }
  //To reflect back on the apps-page
  public applicationsData = new Subject<any>();

  applicationsGetData(){
      return this.http.get(this.url);
  }
 
  //To filter apps based on the input from the search bar
  filterApps(name) {
    this.applicationsData.next(name)
  }
}
