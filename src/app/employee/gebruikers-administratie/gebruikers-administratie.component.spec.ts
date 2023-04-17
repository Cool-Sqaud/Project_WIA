import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikersAdministratieComponent } from './gebruikers-administratie.component';

describe('GebruikersAdministratieComponent', () => {
  let component: GebruikersAdministratieComponent;
  let fixture: ComponentFixture<GebruikersAdministratieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GebruikersAdministratieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GebruikersAdministratieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
