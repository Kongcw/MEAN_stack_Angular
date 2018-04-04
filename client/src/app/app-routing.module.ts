import { RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'

const appRoutes: Routes = [
  { path: '',  
   component: HomeComponent },
   { path: 'dashboard',  
   component: DashboardComponent },
   { path: '**', component: HomeComponent } // The "Catch-All" Route
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports:[RouterModule]
  })

  export class AppRoutingModule { }
  