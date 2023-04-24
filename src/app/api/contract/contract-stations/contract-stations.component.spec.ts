import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractStationsComponent } from './contract-stations.component';

describe('ContractStationsComponent', () => {
  let component: ContractStationsComponent;
  let fixture: ComponentFixture<ContractStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractStationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
