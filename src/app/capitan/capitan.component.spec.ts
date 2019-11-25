import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitanComponent } from './capitan.component';

describe('CapitanComponent', () => {
  let component: CapitanComponent;
  let fixture: ComponentFixture<CapitanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
