import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppComponent } from './app.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { AllRunsStatsComponent } from './all-runs-stats/all-runs-stats.component';

import { RunService } from './services/run.service';
import { MapService } from './services/map.service';
import { AllRunsViewComponent } from './all-runs-view/all-runs-view.component';
import { AllRunsTableComponent } from './all-runs-table/all-runs-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityDetailComponent,
    AllRunsStatsComponent,
    AllRunsViewComponent,
    AllRunsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
  ],
  providers: [RunService, MapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
