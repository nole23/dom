import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../servics/i18n.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css']
})
export class AccommodationComponent implements OnInit {

  sliders: any;
  constructor(private i18nService: I18nService) {
    this.sliders = null;
  }

  ngOnInit() {
    this._getText();
  }

  _getText() {
    this.i18nService.getHome().subscribe(res => {
      this.sliders = res['Accommodation'];
    })
  }

}
