export interface TrkPoint {
  lat: string;
  lon: string;
  ele: number;
  time: string;
}

export interface GpxJson {
  gpx: {
    trk: {
      name: string;
      time: string;
      trkseg: {
        trkpt: TrkPoint[];
      };
    };
  };
}
