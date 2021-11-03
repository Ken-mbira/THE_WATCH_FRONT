import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHoodComponent } from './create-hood.component';

describe('CreateHoodComponent', () => {
  let component: CreateHoodComponent;
  let fixture: ComponentFixture<CreateHoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
