import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../models/TodoItem';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem;

  constructor() { }

  ngOnInit() {
  }

  // set dynamic classes
  setClasses() {
    const classes = {
      todo: true,
      "is-complete": this.todoItem.completed
    };
    return classes;
  }

  onToggle(todoItem) {
    todoItem.completed = !todoItem.completed;
  }

  onDelete(todoItem) {
    console.log(`The deleted clicked is ${ todoItem.title }`);
  }

}
