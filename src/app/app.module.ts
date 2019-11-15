import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

import { Global } from './global/global';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AccommodationComponent } from './components/accommodation/accommodation.component';
import { NewsComponent } from './components/news/news.component';
import { ContantsComponent } from './components/contants/contants.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    AccommodationComponent,
    NewsComponent,
    ContantsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCrIfxEdq5bAxCrRPxn8H6r6MJJby892-0'
    })
  ],
  providers: [
    Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
