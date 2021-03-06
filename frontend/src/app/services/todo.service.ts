import { Injectable } from '@angular/core';
import { TodoItem } from '../models/TodoItem';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoListUrl: string = 'https://localhost:5001/api/todoitems';
  private httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  // Get todoList from server
  getTodoList(): Observable<TodoItem[]> {
    const url: string = `${ this.todoListUrl }`;
    return this.http.get<TodoItem[]>(url);
  }

  // Update/toggle todoItem 'completed' status on the server
  toggleFieldCompleted(todoItem: TodoItem): Observable<TodoItem> {
    const url: string = `${ this.todoListUrl }/${ todoItem.id }`;
    return this.http.put<TodoItem>(url, todoItem, this.httpOptions);
  }

  // Delete todoItem to the server
  deleteTodoItem(todoItem: TodoItem): Observable<TodoItem> {
    const url: string = `${ this.todoListUrl }/${ todoItem.id }`;
    return this.http.delete<TodoItem>(url, this.httpOptions);
  }

  // Add todoItem to the server
  addTodoItem(todoItem: { title: string, completed: boolean }): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.todoListUrl, todoItem, this.httpOptions);
  }
}
