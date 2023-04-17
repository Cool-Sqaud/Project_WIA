import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractregistratieComponent } from './contractregistratie.component';

describe('ContractregistratieComponent', () => {
  let component: ContractregistratieComponent;
  let fixture: ComponentFixture<ContractregistratieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractregistratieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractregistratieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
