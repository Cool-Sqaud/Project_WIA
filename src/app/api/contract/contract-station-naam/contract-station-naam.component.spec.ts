import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractStationNaamComponent } from './contract-station-naam.component';

describe('ContractStationNaamComponent', () => {
  let component: ContractStationNaamComponent;
  let fixture: ComponentFixture<ContractStationNaamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractStationNaamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractStationNaamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
