import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnemenentStationNaamComponent } from './abonnemenent-station-naam.component';

describe('AbonnemenentStationNaamComponent', () => {
  let component: AbonnemenentStationNaamComponent;
  let fixture: ComponentFixture<AbonnemenentStationNaamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnemenentStationNaamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonnemenentStationNaamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
