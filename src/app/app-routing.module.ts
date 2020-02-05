import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeComponent } from './home/home.component';


const routes: Routes = [  { path: '', component : homeComponent},
                          { path: 'home', component : homeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
