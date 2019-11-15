import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../servics/i18n.service';

@Component({
  selector: 'app-contants',
  templateUrl: './contants.component.html',
  styleUrls: ['./contants.component.css']
})
export class ContantsComponent implements OnInit {

  sliders: any;
  isSend: boolean;
  message: any;
  isCorectEmail: boolean;
  isCorectUsername: boolean;
  isCorectTitle: boolean;
  isCorectMess: boolean;
  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;
  constructor(private i18nService: I18nService) { 
    this.sliders = null;
    this.isSend = false;
    this.message = {
      username: '',
      email: '',
      title: '',
      mess: ''
    };
    this.isCorectEmail = false;
    this.isCorectUsername = false;
    this.isCorectTitle = false;
    this.isCorectMess = false;
  }

  ngOnInit() {
    this._getI18n();
  }

  _getI18n() {
    this.i18nService.getHome().subscribe(res => {
      this.sliders = res['Contant'];
      console.log(this.sliders)
    })
  }

  ngSend() {
    console.log(this.message.username === '')
    if (this.message.username !== '') {
      this.isCorectUsername = false;
      if (this.message.email !== '') {
        this.isCorectEmail = false;
        if (this.message.title !== '') {
          this.isCorectTitle = false;
          if (this.message.mess !== '') {
            this.isCorectMess = false;
            this.isCorectTitle = false;
            this.isCorectEmail = false;
            this.isCorectUsername = false;
            this.i18nService.setEmail(this.message);
            this.isSend;
          } else {
            this.isCorectMess = true;
          }
        } else {
          this.isCorectTitle = true;
        }
      } else {
        this.isCorectEmail = true;
      }
    } else {
      this.isCorectUsername = true;
    }
  }

}
