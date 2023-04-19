import { Measurement } from './../../interfaces';
import { Station } from './../../interfaces';
import { MeasurementService } from './../../_services/measurement.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-monitoring-weerstations',
  templateUrl: './monitoring-weerstations.component.html',
  styleUrls: ['./monitoring-weerstations.component.css']
})
export class MonitoringWeerstationsComponent implements OnInit {
  station: FormGroup = new FormGroup({
    name: new FormControl(null),
  });
  measurementsFound = true;
  loadedMeasurements = false;
  appHeight = window.innerHeight - 200;
  selectedStationName = '';
  selectedStation: Station | null = null;
  selectedMeasurement: Measurement | null = null;

  rawMeasurements: Array<Measurement> = [];
  postedMeasurements: Array<Measurement> = [];

  stations: Array<Station> = [];

  constructor(
    private measurementService: MeasurementService
  ) { }

  ngOnInit(): void {
    this.measurementService.getAllMeasurements()
        .subscribe(
          (result: any) => { 
            this.rawMeasurements = result;
            this.postedMeasurements = result.slice(0, 99);
            this.loadedMeasurements = true;
            console.log(result);
          }
      )
    this.measurementService.getAllStations()
        .subscribe(
          (result: any) => { 
            this.stations = result;
            console.log(result);
          }
    )
  }

  onSubmit(): void {
    this.loadedMeasurements = false;
    if (this.station.value.name) {
      this.getStation(this.station.value.name)
      this.postedMeasurements = this.search(this.station.value.name).slice(0, 99);
    }
    else this.postedMeasurements = this.rawMeasurements.slice(0, 99);
    this.loadedMeasurements = true;
  }

  getStation = (stationnumber: string, measurementId: number | null = null) => {
    const measurement = this.rawMeasurements.find((measurement) => measurement.id === measurementId)
    this.selectedMeasurement = measurement ?? null;
    const station = this.stations.find((station) => station.name === stationnumber);
    this.selectedStation = station ?? null;
  }

  search = (stationnumber: string) => this.rawMeasurements.filter(
    (measurement) => measurement.station == stationnumber)
}

