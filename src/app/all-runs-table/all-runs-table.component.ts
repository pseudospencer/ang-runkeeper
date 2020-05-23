import { Component, OnInit, Input } from '@angular/core';
import { Run } from '../models/run.model';

@Component({
  selector: 'app-all-runs-table',
  templateUrl: './all-runs-table.component.html',
  styleUrls: ['./all-runs-table.component.css'],
})
export class AllRunsTableComponent implements OnInit {
  @Input() runs: Run[];

  runCols: string[] = [
    'date',
    'calories_burned',
    'distance_in_mi',
    'climb_ft',
    'average_speed_mph',
  ];
  constructor() {}

  ngOnInit(): void {}
}
