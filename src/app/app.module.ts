import { CoursesService } from './courses/courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { ToggleStarComponent } from './toggle-star/toggle-star.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { TitleCasingPipe } from './title-casing/title-casing.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    ToggleStarComponent,
    TitleCasingComponent,
    TitleCasingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    TitleCasingComponent,
    ToggleStarComponent
  ]
})


export class AppModule { }
