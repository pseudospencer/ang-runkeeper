import { Injectable } from '@angular/core';
import { Run } from '../models/run.model';
import { GpxJson } from '../models/runDataJson.model';
import { RunService } from './run.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import * as fastXml from 'fast-xml-parser';
import * as toGeoJSON from '@tmcw/togeojson';
import * as L from 'leaflet';
import { FeatureCollection } from 'geojson';

const apiToken = environment.MAPBOX_API_KEY;
declare const omnivore: any;

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
    const defaultCoords: L.LatLngTuple = [40, -80];
    const defaultZoom: number = 10;

    const mapSelector = `map-detail-${id}`;

    const map = new L.Map(mapSelector);
    map.setView(defaultCoords, defaultZoom);

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

    const customLayer = L.geoJSON(null, {
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
    const defaultCoords: L.LatLngTuple = [40, -80];
    const defaultZoom: number = 10;

    runs.forEach((run) => {
      const mapSelector = `map-${run.id}`;

      const map = new L.Map(mapSelector, { scrollWheelZoom: false });
      map.setView(defaultCoords, defaultZoom);
      map.dragging.disable();

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

      const customLayer = L.geoJSON(null, {
        style: style,
      });

      const gpxLayer = omnivore
        .gpx(this.getRun(run.id).gpx, null, customLayer)
        .on('ready', () => map.fitBounds(gpxLayer.getBounds()))
        .addTo(map);
    });
  }

  getRunGeoJson(id: string): Observable<FeatureCollection> {
    const runFile = this.getRun(id).gpx;
    return Observable.create((observer) => {
      fetch(runFile)
        .then((response) => response.text())
        .then((data) => {
          const result: FeatureCollection = toGeoJSON.gpx(
            new DOMParser().parseFromString(data, 'text/xml')
          );
          observer.next(result);
          observer.complete();
        })
        .catch((err) => observer.error(err));
    });
  }

  getRunData(id: string): Observable<GpxJson> {
    const runFile = this.getRun(id).gpx;
    return Observable.create((observer) => {
      fetch(runFile)
        .then((rf) => {
          return rf.text();
        })
        .then((data) => {
          const res = fastXml.parse(data, {
            attributeNamePrefix: '',
            ignoreAttributes: false,
          });
          observer.next(res);
          observer.complete();
        })
        .catch((err) => observer.console.error(err));
    });
  }
}
