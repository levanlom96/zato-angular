import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapralComponent } from './capral.component';

describe('CapralComponent', () => {
  let component: CapralComponent;
  let fixture: ComponentFixture<CapralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
