import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvirnmentComponent } from './envirnment.component';

describe('EnvirnmentComponent', () => {
  let component: EnvirnmentComponent;
  let fixture: ComponentFixture<EnvirnmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvirnmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvirnmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
