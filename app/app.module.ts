import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TablebookingComponent } from './tablebooking/tablebooking.component';
import { HomedeliveryComponent } from './homedelivery/homedelivery.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ReviewsComponent,
    TablebookingComponent,
    HomedeliveryComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
