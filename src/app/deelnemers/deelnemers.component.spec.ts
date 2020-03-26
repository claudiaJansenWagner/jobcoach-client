import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeelnemersComponent } from './deelnemers.component';

describe('DeelnemersComponent', () => {
  let component: DeelnemersComponent;
  let fixture: ComponentFixture<DeelnemersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeelnemersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeelnemersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
