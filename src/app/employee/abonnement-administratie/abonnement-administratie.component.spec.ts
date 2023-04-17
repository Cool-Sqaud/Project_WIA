import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementAdministratieComponent } from './abonnement-administratie.component';

describe('AbonnementAdministratieComponent', () => {
  let component: AbonnementAdministratieComponent;
  let fixture: ComponentFixture<AbonnementAdministratieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnementAdministratieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonnementAdministratieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
