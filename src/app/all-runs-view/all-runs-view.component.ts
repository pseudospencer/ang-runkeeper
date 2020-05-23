import { Component, OnInit } from '@angular/core';
import { Run } from '../models/run.model';
import { RunService } from '../services/run.service';

@Component({
  selector: 'app-all-runs-view',
  templateUrl: './all-runs-view.component.html',
  styleUrls: ['./all-runs-view.component.css'],
})
export class AllRunsViewComponent implements OnInit {
  runs: Run[];

  constructor(private runService: RunService) {}

  ngOnInit(): void {
    this.runs = this.runService.getRuns();
  }
}
