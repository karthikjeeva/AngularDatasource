import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from '@app/data/data.component';
import { CoursesService } from '@app/datasource/datasource.service';
import { HomeComponent } from '@app/home/home.component';
import { ServersidefiltercoursesComponent } from '@app/serversidefiltercourses/serversidefiltercourses.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data', component: DataComponent },
  { path: 'coursesserverfilter', component: ServersidefiltercoursesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ApproutingModule { }
