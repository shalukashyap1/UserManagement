import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewjsonuserComponent } from './newjsonuser.component';

describe('NewjsonuserComponent', () => {
  let component: NewjsonuserComponent;
  let fixture: ComponentFixture<NewjsonuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewjsonuserComponent]
    });
    fixture = TestBed.createComponent(NewjsonuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
