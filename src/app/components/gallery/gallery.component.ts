import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { I18nService } from '../../servics/i18n.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @ViewChild('myIdentifierRow') myIdentifierRow: ElementRef;

  imags: any;
  buttons: any;;
  headers: any;
  sliders: any;
  showImages: any;
  disableButton: Boolean;
  lenght: any;
  constructor(private i18nService: I18nService) {
    this.imags = null;
    this.buttons = null;
    this.sliders = null;
    this.headers = null;
    this.showImages = null;
    this.disableButton = false;
    this.lenght = 0;
  }

  ngOnInit() {
    this._getButton();
    
    this._getImages();
    
    if (this.imags !== undefined) this.onResize('');
  }

  _getImages() {
    this.i18nService.getImages().subscribe(res => {
      this.imags = res['Images'];
    })
  }

  _getButton() {
    this.i18nService.getHome().subscribe(res => {
      this.sliders = res['Gallery'];
    })
  }

  loadedItem(event: any) {
    this.onResize(event);
  }

  onResize(event) {
    if (this.myIdentifierRow !== undefined) {
      var rowWidth = this.myIdentifierRow.nativeElement.clientWidth;
      if (rowWidth >= 766) {
        for (let i=0; i<this.myIdentifierRow.nativeElement.children.length; i++) {
          this.myIdentifierRow.nativeElement.children[i].style.width = ((rowWidth / 5) - 10) + 'px';
          this.myIdentifierRow.nativeElement.children[i].style.height = ((rowWidth / 5) - 100) + 'px';
          this.myIdentifierRow.nativeElement.children[i].style.marginLeft = 8 + 'px';
          this.myIdentifierRow.nativeElement.children[i].style.marginBottom = 6 + 'px';
        }
      } else if (rowWidth < 765 && rowWidth >= 500) {
        for (let i=0; i<this.myIdentifierRow.nativeElement.children.length; i++) {
          this.myIdentifierRow.nativeElement.children[i].style.width = ((rowWidth / 5) - 10) + 'px';
          this.myIdentifierRow.nativeElement.children[i].style.height = ((rowWidth / 5) - 50) + 'px';
          this.myIdentifierRow.nativeElement.children[i].style.marginLeft = 8 + 'px';
          this.myIdentifierRow.nativeElement.children[i].style.marginBottom = 6 + 'px';
        }
      } else if (rowWidth < 500) {
        for (let i=0; i<this.myIdentifierRow.nativeElement.children.length; i++) {
          this.myIdentifierRow.nativeElement.children[i].style.width = ((rowWidth / 2) - 10) + 'px';
          this.myIdentifierRow.nativeElement.children[i].style.height = ((rowWidth / 2) - 50) + 'px';
          this.myIdentifierRow.nativeElement.children[i].style.marginLeft = 8 + 'px';
          this.myIdentifierRow.nativeElement.children[i].style.marginBottom = 6 + 'px';
        }
      }
    }
  }

  openImage(item: any) {
    this.lenght = item;
    this.showImages = this.imags[this.lenght];
  }

  nextImage() {
    if (this.imags[this.imags.length - 1]['id'] === this.showImages['id']) {
      this.showImages = this.imags[0];
      this.lenght = 0;
    } else {
      this.disableButton = false;
      this.lenght += 1;
      this.showImages = this.imags[this.lenght];
    }
  }

  previewImage() {
    if (this.imags[0]['id'] === this.showImages['id']) {
      this.showImages = this.imags[this.imags.length - 1];
      this.lenght = this.imags.length - 1;
    } else {
      this.disableButton = false;
      this.lenght -= 1;
      this.showImages = this.imags[this.lenght];
    }
  }

}
