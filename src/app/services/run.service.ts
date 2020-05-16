import { Injectable } from '@angular/core';

import { Run } from '../models/run.model';
import RUNDATA from '../data/cardioActivities';

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

  getRun(id: string): Run {
    return RUNDATA.find((run) => run.id === id);
  }
}
