import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from '@app/data/data.component';
import { CoursesService } from '@app/datasource/datasource.service';


const routes: Routes = [
  { path: '', component: DataComponent}
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
