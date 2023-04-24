import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnemenentStationsComponent } from './abonnemenent-stations.component';

describe('AbonnemenentStationsComponent', () => {
  let component: AbonnemenentStationsComponent;
  let fixture: ComponentFixture<AbonnemenentStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnemenentStationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonnemenentStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
