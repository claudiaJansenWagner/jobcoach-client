import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeelnemersComponent } from 'src/app/deelnemers/deelnemers.component';
import { DashboardComponent }   from './dashboard/dashboard.component';


const routes: Routes = [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{path: 'dashboard', component: DashboardComponent },
{path: 'deelnemers', component: DeelnemersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
