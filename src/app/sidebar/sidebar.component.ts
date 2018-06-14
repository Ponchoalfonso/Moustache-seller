import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

export let sidebar = { state: 'inactive', zone: -1};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('state', [
      state('inactive', style({
        right: '-350px',
      })),
      state('active', style({
        right: '0px'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-in'))
    ])
  ]
})
export class SidebarComponent implements OnInit {

  sidebar = sidebar;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.sidebar.state = this.sidebar.state === 'active' ? 'inactive' : 'active';
  }

}
