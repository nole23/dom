import { Component, OnInit } from '@angular/core';
import { OneServiceService } from '../../servics/one-service.service';
import { I18nService } from '../../servics/i18n.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: any;
  buttons: any;;
  headers: any;
  sliders: any;
  constructor(private oneServiceService: OneServiceService, private i18nService: I18nService) {
    this.news = null;
    this.buttons = null;
    this.sliders = null;
    this.headers = null;
  }

  ngOnInit() {
    this._getButton();
  }


  _getButton() {
    this.i18nService.getPage().subscribe(res => {
      this.buttons = res['button'];
      this.headers = res['Headers'];
    })
    this.i18nService.getHome().subscribe(res => {
      this.sliders = res['Home'];
      this.news = this.sliders['News'];
    })
  }

}
