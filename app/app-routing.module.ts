import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { HomedeliveryComponent } from './homedelivery/homedelivery.component';
import { MenuComponent } from './menu/menu.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TablebookingComponent } from './tablebooking/tablebooking.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"menu", component:MenuComponent},
  {path:"reviews", component:ReviewsComponent},
  {path:"tablebooking", component:TablebookingComponent},
  {path:"homedelivery", component:HomedeliveryComponent},
  {path:"aboutus", component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
