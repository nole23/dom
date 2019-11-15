import { Component, OnInit } from '@angular/core';
import { Global } from './global/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ Global ]
})
export class AppComponent implements OnInit {

  constructor(private globals: Global) {
  }

  ngOnInit() {
  }
}
