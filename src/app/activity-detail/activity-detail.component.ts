import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RunService } from '../services/run.service';
import { MapService } from '../services/map.service';
import { ActivatedRoute } from '@angular/router';
import { Run } from '../models/run.model';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
})
export class ActivityDetailComponent implements OnInit {
  run: Run;

  constructor(
    private runService: RunService,
    private route: ActivatedRoute,
    private mapService: MapService
  ) {}

  ngOnInit(): void {
    this.getRun();
  }

  ngAfterViewInit() {
    this.makeMap();
  }

  getRun(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.run = this.runService.getRun(id);
  }

  makeMap(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.mapService.makeMap(id);
  }
}
