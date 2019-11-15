import { Injectable } from '@angular/core';
import { I18nService } from '../servics/i18n.service';

@Injectable({
    providedIn: 'root'
})
export class Global{

    style: any;
    constructor(private i18nService: I18nService) {
        this.style = null;
    }

    ngOnInit() {
        console.log("Dosao ovde")
        if (this.style === null) {
            return this.i18nService.getStyle().subscribe(res => {
                this.style = res;
                console.log(this.style)
            })
        }
    }

    ngStyle() {
        return this.style;
    }
}
