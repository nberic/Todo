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
    // Delete the todoItem from UI
    this.todoList = this.todoList.filter((todo: TodoItem) => todo.id !== todoItem.id);

    // Delete the todoItem on the server
    this.todoService.deleteTodoItem(todoItem).subscribe(() => {
      console.log(todoItem);
    });
  }

  addTodoItemInTodoList(todoItem: { title: string, completed: boolean}) {
    // Add to the server
    this.todoService.addTodoItem(todoItem).subscribe((addedTodoItem: TodoItem) => {
      // Add it on the UI
      this.todoList.push(addedTodoItem);
    });
  }

}
