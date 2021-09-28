import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatTaskComponent } from './create-task.component';

describe('CreatTaskComponent', () => {
  let component: CreatTaskComponent;
  let fixture: ComponentFixture<CreatTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
