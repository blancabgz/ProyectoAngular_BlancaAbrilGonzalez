import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiccionComponent } from './ficcion.component';

describe('FiccionComponent', () => {
  let component: FiccionComponent;
  let fixture: ComponentFixture<FiccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
