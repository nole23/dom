import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AccommodationComponent } from './components/accommodation/accommodation.component';
import { NewsComponent } from './components/news/news.component';
import { ContantsComponent } from './components/contants/contants.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'accommodation', component: AccommodationComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contant', component: ContantsComponent },
  { path: 'offers', component: PageNotFoundComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
