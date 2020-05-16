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
      color: 'red',
      weight: 5,
      opacity: 0.95,
    };
    const defaultCoords: number[] = [40, -80];
    const defaultZoom: number = 8;

    const map = L.map('map').setView(defaultCoords, defaultZoom);

    map.maxZoom = 100;

    L.tileLayer(
      'https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.satellite',
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
}
