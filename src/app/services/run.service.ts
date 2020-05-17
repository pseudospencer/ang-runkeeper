import { Injectable } from '@angular/core';

import { Run } from '../models/run.model';
import RUNDATA from '../../assets/cardioActivities';

@Injectable({
  providedIn: 'root',
})
export class RunService {
  constructor() {}

  getRuns(): Run[] {
    return RUNDATA;
  }

  getTotalRuns(): number {
    return RUNDATA.length;
  }

  getTotalDistance(): number {
    return RUNDATA.map((r) => r.distance_in_mi).reduce((acc, i) => acc + i);
  }

  getAveragePace(): number {
    return (
      RUNDATA.map((r) => r.average_speed_mph).reduce((acc, i) => acc + i) /
      RUNDATA.length
    );
  }

  getRun(id: string): Run {
    return RUNDATA.find((run) => run.id === id);
  }
}
