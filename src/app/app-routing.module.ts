import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { RunsListComponent } from './runs-list/runs-list.component';

const routes: Routes = [
  { path: 'runs-list', component: RunsListComponent },
  { path: 'run/:id', component: ActivityDetailComponent },
  { path: '', redirectTo: '/runs-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
