import { Component, OnInit } from '@angular/core';
import { RunService } from '../services/run.service';
import { Run } from '../models/run.model';

@Component({
  selector: 'app-all-runs-stats',
  templateUrl: './all-runs-stats.component.html',
  styleUrls: ['./all-runs-stats.component.css'],
})
export class AllRunsStatsComponent implements OnInit {
  totalRuns: number;
  totalDistance: number;
  averagePace: number;
  constructor(private runService: RunService) {}

  ngOnInit(): void {
    this.totalRuns = this.runService.getTotalRuns();
    this.totalDistance = this.runService.getTotalDistance();
    this.averagePace = this.runService.getAveragePace();
  }
}
