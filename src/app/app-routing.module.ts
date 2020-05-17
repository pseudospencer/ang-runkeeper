import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { AllRunsViewComponent } from './all-runs-view/all-runs-view.component';

const routes: Routes = [
  { path: 'runs-list', component: AllRunsViewComponent },
  { path: 'run/:id', component: ActivityDetailComponent },
  { path: '', redirectTo: '/runs-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
