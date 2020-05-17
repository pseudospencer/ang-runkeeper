import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ActivitiesTableComponent } from './activities-table/activities-table.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { RunService } from './services/run.service';
import { MapService } from './services/map.service';
import { AllRunsStatsComponent } from './all-runs-stats/all-runs-stats.component';
import { RunsListComponent } from './runs-list/runs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesTableComponent,
    ActivityDetailComponent,
    AllRunsStatsComponent,
    RunsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [RunService, MapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
