import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHoodComponent } from './new-hood.component';

describe('NewHoodComponent', () => {
  let component: NewHoodComponent;
  let fixture: ComponentFixture<NewHoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
