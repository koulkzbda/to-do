import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoTabComponent } from './to-do-tab.component';

describe('ToDoTabComponent', () => {
  let component: ToDoTabComponent;
  let fixture: ComponentFixture<ToDoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
