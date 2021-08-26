import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulityItemComponent } from './populity-item.component';

describe('PopulityItemComponent', () => {
  let component: PopulityItemComponent;
  let fixture: ComponentFixture<PopulityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulityItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
