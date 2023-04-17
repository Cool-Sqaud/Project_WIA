import { Component } from '@angular/core';

import { measurements } from '../../interfaces';

@Component({
  selector: 'app-monitoring-weerstations',
  templateUrl: './monitoring-weerstations.component.html',
  styleUrls: ['./monitoring-weerstations.component.css']
})


export class MonitoringWeerstationsComponent {
  measurements = measurements;

  share(){
    window.alert('Succes');
  }

  details(): void {
    
  }

}

