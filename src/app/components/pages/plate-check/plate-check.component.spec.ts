import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateCheckComponent } from './plate-check.component';

describe('PlateCheckComponent', () => {
  let component: PlateCheckComponent;
  let fixture: ComponentFixture<PlateCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlateCheckComponent]
    });
    fixture = TestBed.createComponent(PlateCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
