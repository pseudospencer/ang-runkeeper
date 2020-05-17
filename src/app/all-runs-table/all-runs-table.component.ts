import { Component, OnInit } from '@angular/core';
import { Run } from '../models/run.model';
import { RunService } from '../services/run.service';

@Component({
  selector: 'app-all-runs-table',
  templateUrl: './all-runs-table.component.html',
  styleUrls: ['./all-runs-table.component.css'],
})
export class AllRunsTableComponent implements OnInit {
  runs: Run[];
  runCols: string[] = [
    'date',
    'calories_burned',
    'distance_in_mi',
    'climb_ft',
    'average_speed_mph',
  ];
  constructor(private runService: RunService) {}

  ngOnInit(): void {
    this.runs = this.runService.getRuns();
  }
}
