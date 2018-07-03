import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from "../../applications.service";

@Component({
  selector: 'app-apps-page',
  templateUrl: './apps-page.component.html',
  styleUrls: ['./apps-page.component.css']
})
export class AppsPageComponent implements OnInit {

  constructor(private _applications:ApplicationsService) { }

  finalApps: any = [];
  applicationsData: any = [];

  ngOnInit() {
    this._applications.applicationsGetData().subscribe(res =>{
      this.finalApps = (<any>res).applications
      this.applicationsData = (<any>res).applications;
    })
    // To get the filtered data from the service
    this._applications.applicationsData.subscribe(res => {
        this.finalApps = this.applicationsData.filter(app => app.name.toLowerCase().includes(res))
    })
  }

}
