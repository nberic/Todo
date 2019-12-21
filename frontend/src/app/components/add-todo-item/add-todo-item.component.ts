import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {

  @Output() addTodoItem: EventEmitter<{ title: string, completed: boolean }> = new EventEmitter();
  
  private title: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todoItem: { title: string, completed: boolean } = {
      title: this.title,
      completed: false
    };
    this.addTodoItem.emit(todoItem);
  }

}
