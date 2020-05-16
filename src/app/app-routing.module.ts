import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesTableComponent } from './activities-table/activities-table.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';

const routes: Routes = [
  { path: 'runs-list', component: ActivitiesTableComponent },
  { path: 'run/:id', component: ActivityDetailComponent },
  { path: '', redirectTo: '/runs-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
