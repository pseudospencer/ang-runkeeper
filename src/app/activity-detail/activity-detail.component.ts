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
  // table
  tableCols: string[] = ['time', 'lat', 'lon', 'ele'];
  // line graph
  lineGraphData: any;
  autoScale: boolean = true;
  roundDomains: boolean = true;
  showYAxis: boolean = true;
  yAxisLabel: string = 'Elevation (Meters)';
  xAxisLabel: 'Time';
  timeline: boolean = true;

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
      this.makeElevationGraphData();
    });
  }

  makeMap(): void {
    this.mapService.makeMap(this.id);
  }

  makeElevationGraphData(): void {
    const datapoints = this.trk.map((t) => {
      return { name: new Date(t.time).toLocaleTimeString(), value: t.ele };
    });

    this.lineGraphData = [{ name: 'elevation (m)', series: [...datapoints] }];
  }
}
