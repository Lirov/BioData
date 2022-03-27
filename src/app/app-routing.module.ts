import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StayFoolishComponent } from './stay-foolish/stay-foolish.component';
import { StayHungryComponent } from './stay-hungry/stay-hungry.component';



const routes: Routes = [
  {path:'stay-hungry', component:StayHungryComponent},
  {path:'stay-foolish', component:StayFoolishComponent},
  { path: '', redirectTo: '/stay-hungry', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
