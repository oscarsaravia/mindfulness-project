import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CareerComponent } from './career/career.component';
import { LifeComponent } from './life/life.component';
import { ReferencesComponent } from './references/references.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ActivitiesComponent,
    CareerComponent,
    LifeComponent,
    ReferencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
