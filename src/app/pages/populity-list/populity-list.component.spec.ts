import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulityListComponent } from './populity-list.component';

describe('PopulityListComponent', () => {
  let component: PopulityListComponent;
  let fixture: ComponentFixture<PopulityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
