import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './comp/base/base.component';

const routes: Routes = [
  { path: 'mesa', component: BaseComponent },
  { path: '', redirectTo: 'mesa', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
