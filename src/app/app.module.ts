import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { PhotosComponent } from './photos/photos.component';
import { ChoreListComponent } from './chore-list/chore-list.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    MovieslistComponent,
    PhotosComponent,
    ChoreListComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
