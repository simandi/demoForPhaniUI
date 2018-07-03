import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from "../../applications.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchItem:any;

  constructor(private _applications:ApplicationsService) { }

  ngOnInit() {
  }
  doSearch() {
    this._applications.filterApps(this.searchItem);
  }
}
