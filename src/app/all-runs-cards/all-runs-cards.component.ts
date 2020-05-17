import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Run } from '../models/run.model';
import { RunService } from '../services/run.service';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-all-runs-cards',
  templateUrl: './all-runs-cards.component.html',
  styleUrls: ['./all-runs-cards.component.css'],
})
export class AllRunsCardsComponent implements OnInit {
  runs: Run[];
  constructor(private runService: RunService, private mapService: MapService) {}

  ngOnInit(): void {
    this.runs = this.runService.getRuns();
  }

  ngAfterViewInit(): void {
    this.mapService.makeAllMaps();
  }
}
