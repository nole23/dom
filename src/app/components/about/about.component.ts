import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../servics/i18n.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  buttons: any;
  sliders: any;
  constructor(private i18nService: I18nService) {
    this.buttons = null;
    this.sliders = null;
  }

  ngOnInit() {
    this._getButton();
  }

  _getButton() {
    this.i18nService.getPage().subscribe(res => {
      this.buttons = res['DisableButton'];
      console.log(this.buttons)
    })
    this.i18nService.getHome().subscribe(res => {
      this.sliders = res['About'];
      console.log(this.sliders)
    })
  }

}
