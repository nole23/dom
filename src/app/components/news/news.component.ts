import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../servics/i18n.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  links: any;
  constructor(private i18nService: I18nService) {
    this.links = null;
  }

  ngOnInit() {
    this._getLinks();
  }

  _getLinks() {
    this.i18nService.getImages().subscribe(res => {
      this.links = res['Video'];
    });
  }

}
