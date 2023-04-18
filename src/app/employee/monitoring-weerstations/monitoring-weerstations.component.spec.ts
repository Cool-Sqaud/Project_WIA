import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringWeerstationsComponent } from './monitoring-weerstations.component';

describe('MonitoringWeerstationsComponent', () => {
  let component: MonitoringWeerstationsComponent;
  let fixture: ComponentFixture<MonitoringWeerstationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoringWeerstationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoringWeerstationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
