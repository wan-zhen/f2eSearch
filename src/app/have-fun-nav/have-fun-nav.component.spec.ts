
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveFunNavComponent } from './have-fun-nav.component';

describe('HaveFunNavComponent', () => {
  let component: HaveFunNavComponent;
  let fixture: ComponentFixture<HaveFunNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveFunNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaveFunNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
