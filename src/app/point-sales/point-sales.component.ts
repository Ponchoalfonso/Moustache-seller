import { Component, OnInit } from '@angular/core';
import { sidebar } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-point-sales',
  templateUrl: './point-sales.component.html',
  styleUrls: ['./point-sales.component.css']
})
export class PointSalesComponent implements OnInit {

  sidebar = sidebar;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.sidebar.state = this.sidebar.state === 'active' ? 'inactive' : 'active';
  }

}
