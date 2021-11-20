import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CareerComponent } from './career/career.component';
import { LifeComponent } from './life/life.component';
import { ReferencesComponent } from './references/references.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'actividades', component: ActivitiesComponent },
  { path: 'carrera', component: CareerComponent },
  { path: 'vida', component: LifeComponent },
  { path: 'referencias', component: ReferencesComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
