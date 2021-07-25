import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from '@app/angularmaterial/angularmaterial.module';
import { ApproutingModule } from '@app/approuting/approuting.module';
import { CoursesService } from './datasource/datasource.service';
import { HttpClientModule } from "@angular/common/http";
import { MatTabsModule } from '@angular/material/tabs';
/* import { CoursecardComponent } from './coursecard/coursecard.component';*/
import { DataComponent } from './data/data.component';
import { ServersidefiltercoursesComponent } from './serversidefiltercourses/serversidefiltercourses.component';
import { HomeComponent } from './home/home.component'; 



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    HttpClientModule,
    MatTabsModule,
    ApproutingModule
  ],
  declarations: [
    AppComponent,
    DataComponent,
    ServersidefiltercoursesComponent,
    HomeComponent
    
  ],
  providers:[CoursesService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/