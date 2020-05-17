import { Injectable } from '@angular/core';
import { Run } from '../models/run.model';
import { RunService } from './run.service';
import { environment } from '../../environments/environment';

const apiToken = environment.MAPBOX_API_KEY;
declare const omnivore: any;
declare const L: any;

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private runService: RunService) {}

  getRun(id: string): Run {
    return this.runService.getRun(id);
  }

  makeMap(id: string) {
    const style = {
      color: '#eb4034',
      weight: 5,
      opacity: 0.75,
    };
    const defaultCoords: number[] = [40, -80];
    const defaultZoom: number = 10;

    const mapSelector = `map`;

    const map = L.map(mapSelector).setView(defaultCoords, defaultZoom);

    map.maxZoom = 100;

    L.tileLayer(
      `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}`,
      {
        tileSize: 512,
        zoomOffset: -1,
        attribution:
          '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        accessToken: apiToken,
      }
    ).addTo(map);

    const customLayer = L.geoJson(null, {
      style: style,
    });

    const gpxLayer = omnivore
      .gpx(this.getRun(id).gpx, null, customLayer)
      .on('ready', () => map.fitBounds(gpxLayer.getBounds()))
      .addTo(map);
  }

  makeAllMaps(): void {
    const runs: Run[] = this.runService.getRuns();

    const style = {
      color: '#eb4034',
      weight: 5,
      opacity: 0.75,
    };
    const defaultCoords: number[] = [40, -80];
    const defaultZoom: number = 10;

    runs.forEach((run) => {
      const mapSelector = `map-${run.id}`;

      const map = new L.map(mapSelector, { scrollWheelZoom: false }).setView(
        defaultCoords,
        defaultZoom
      );
      map.dragging.disable();

      map.maxZoom = 100;

      L.tileLayer(
        `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}`,
        {
          tileSize: 512,
          zoomOffset: -1,
          attribution:
            '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          accessToken: apiToken,
        }
      ).addTo(map);

      const customLayer = L.geoJson(null, {
        style: style,
      });

      const gpxLayer = omnivore
        .gpx(this.getRun(run.id).gpx, null, customLayer)
        .on('ready', () => map.fitBounds(gpxLayer.getBounds()))
        .addTo(map);
    });
  }
}
