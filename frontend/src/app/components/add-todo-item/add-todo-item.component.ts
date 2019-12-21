import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {

  @Output() addTodoItem: EventEmitter<{ Title: string, Completed: boolean }> = new EventEmitter();
  
  private title: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todoItem: { Title: string, Completed: boolean } = {
      Title: this.title,
      Completed: false
    };
    this.addTodoItem.emit(todoItem);
  }

}
