import { Component } from '@angular/core';

import { measurements } from '../../interfaces';

@Component({
  selector: 'app-monitoring-administratie',
  templateUrl: './monitoring-administratie.component.html',
  styleUrls: ['./monitoring-administratie.component.css']
})


export class MonitoringAdministratieComponent {
  measurements = measurements;

  share(){
    window.alert('Succes');
  }

}

