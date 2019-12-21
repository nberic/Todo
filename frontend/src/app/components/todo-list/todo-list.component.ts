import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/TodoItem';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todoList: TodoItem[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodoList().subscribe((todoItems: TodoItem[]) => {
      this.todoList = todoItems;
    });
  }

  deleteTodoItemFromTodoList(todoItem: TodoItem) {
    console.log(`Attempt to delete ${ todoItem.id }`);
  }

}
