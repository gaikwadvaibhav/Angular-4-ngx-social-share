import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxShareComponent } from './ngx-share.component';

describe('NgxShareComponent', () => {
  let component: NgxShareComponent;
  let fixture: ComponentFixture<NgxShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
