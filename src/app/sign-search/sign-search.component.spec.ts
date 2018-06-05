import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignSearchComponent } from './sign-search.component';

describe('SignSearchComponent', () => {
  let component: SignSearchComponent;
  let fixture: ComponentFixture<SignSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
