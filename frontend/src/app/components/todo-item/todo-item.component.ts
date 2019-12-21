import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../models/TodoItem';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem;
  @Output() deleteTodoItem: EventEmitter<TodoItem> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // set dynamic classes
  setClasses() {
    const classes = {
      todo: true,
      "is-complete": this.todoItem.Completed
    };
    return classes;
  }

  onToggle(todoItem: TodoItem) {
    // Toggle in UI
    todoItem.Completed = !todoItem.Completed;
    // Toggle on server
    this.todoService.toggleFieldCompleted(todoItem).subscribe((updatedTodoItem: TodoItem) => {
      console.log(updatedTodoItem);
    });
  }

  onDelete(todoItem: TodoItem) {
    // Call emit method of deleteTodoItem
    this.deleteTodoItem.emit(todoItem);
  }

}
