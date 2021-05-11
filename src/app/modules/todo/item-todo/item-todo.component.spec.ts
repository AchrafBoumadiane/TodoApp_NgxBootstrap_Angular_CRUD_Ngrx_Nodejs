import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTodoComponent } from './item-todo.component';

describe('ItemTodoComponent', () => {
  let component: ItemTodoComponent;
  let fixture: ComponentFixture<ItemTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
