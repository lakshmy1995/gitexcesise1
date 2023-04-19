import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
<<<<<<< HEAD
import { StudentComponent } from './student/student.component';
import { DetailComponent } from './detail/detail.component';
=======
>>>>>>> parent of 7598aa8 (fifth change occur)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
<<<<<<< HEAD
    BodyComponent,
    StudentComponent,
    DetailComponent
=======
    BodyComponent
>>>>>>> parent of 7598aa8 (fifth change occur)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
