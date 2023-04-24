import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnemenentComponent } from './abonnemenent.component';

describe('AbonnemenentComponent', () => {
  let component: AbonnemenentComponent;
  let fixture: ComponentFixture<AbonnemenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnemenentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonnemenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
