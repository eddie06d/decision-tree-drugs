import { PredictedService } from './../../services/predicted.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor(public predictedService: PredictedService) { }

  ngOnInit(): void {

  }

}
