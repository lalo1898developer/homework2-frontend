import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table/table.component';
import { GraphicComponent } from './graphic/graphic.component';


const routes: Routes = [
  { path: '', component:  TableComponent, pathMatch: 'full' },
  { path: 'graphic', component:  GraphicComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
