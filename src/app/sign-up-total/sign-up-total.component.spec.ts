import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpTotalComponent } from './sign-up-total.component';

describe('SignUpTotalComponent', () => {
  let component: SignUpTotalComponent;
  let fixture: ComponentFixture<SignUpTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
