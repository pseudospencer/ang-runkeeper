import { Component, OnInit } from '@angular/core';
import { Run } from '../models/run.model';
import { RunService } from '../services/run.service';

@Component({
  selector: 'app-activities-table',
  templateUrl: './activities-table.component.html',
  styleUrls: ['./activities-table.component.css'],
})
export class ActivitiesTableComponent implements OnInit {
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
