import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringAdministratieComponent } from './monitoring-weerstations.component';

describe('MonitoringAdministratieComponent', () => {
  let component: MonitoringAdministratieComponent;
  let fixture: ComponentFixture<MonitoringAdministratieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoringAdministratieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoringAdministratieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
