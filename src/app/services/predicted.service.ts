import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PredictedService {
  value: any = {
    drug: "none",
    probability: 0
  };

  constructor() { }

  probabilityPercent(): string {
    return (this.value.probability*100).toFixed(1);
  }

}
