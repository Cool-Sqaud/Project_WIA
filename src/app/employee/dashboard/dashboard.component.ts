import { Measurement, measurements } from './../../interfaces';
import { MeasurementService } from './../../_services/measurement.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  station: FormGroup = new FormGroup({
    number: new FormControl(null),
  });

  rawMeasurements: Array<Measurement> = [];
  postedMeasurements: Array<Measurement> = [];

  constructor(
    private measurementService: MeasurementService
  ) { }

  ngOnInit(): void {
    this.getMeasurements();
  }

  getMeasurements() {
    this.measurementService.getMeasurements()
        .subscribe(
          (result: any) => { 
            this.rawMeasurements = result;
            this.postedMeasurements = result;
          }
        )
  }

  onSubmit(): void {
    // console.log(this.station.value.number);
    if (this.station.value.number) this.postedMeasurements = this.search(this.station.value.number);
    else this.postedMeasurements = this.rawMeasurements;
  }

  search(stationnumber: string) {
    return this.rawMeasurements.filter((measurement) => {
      return measurement.station == stationnumber;
    })
  }
}
