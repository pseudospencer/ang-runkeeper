import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RunService } from '../services/run.service';
import { MapService } from '../services/map.service';
import { ActivatedRoute } from '@angular/router';
import { Run } from '../models/run.model';
import { GpxJson, TrkPoint } from '../models/runDataJson.model';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
})
export class ActivityDetailComponent implements OnInit {
  id: string;
  run: Run;
  runData: GpxJson;
  trk: TrkPoint[];

  tableCols: string[] = ['time', 'lat', 'lon', 'ele'];

  constructor(
    private runService: RunService,
    private route: ActivatedRoute,
    private mapService: MapService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.run = this.runService.getRun(this.id);
    this.getRunData();
  }

  ngAfterViewInit() {
    this.makeMap();
  }

  getRunData(): void {
    this.mapService.getRunData(this.id).subscribe((d) => {
      this.runData = d;
      this.trk = this.runData.gpx.trk.trkseg.trkpt;
    });
  }

  getRunElevationArray(): number[] {
    return this.trk.map((t) => t.ele);
  }

  makeMap(): void {
    this.mapService.makeMap(this.id);
  }
}
