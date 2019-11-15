import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../servics/i18n.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  style: any;
  constructor(private i18nService: I18nService) {
    this.style = null;
  }

  ngOnInit() {
    this._getStrule();
  }

  _getStrule() {
    this.i18nService.getStyle().subscribe(res => {
      this.style = res;
      console.log(this.style)
    })
  }

}
