import { Component, OnInit } from '@angular/core';
import { mainInterface } from '../../interfaces'
import { CreateTodoService } from '../create-todo.service'
import {formatDate} from '@angular/common'

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  public toSubmit: mainInterface;
  public cathegories: any
  public date: null

  constructor(private todoService: CreateTodoService) {
    this.toSubmit = {
      main_title: "",
      main_description: "",
      main_due_date: "",
      main_cathegory: null,
      childitem_set: {}
    }
   }

  ngOnInit() {
    this.getCathegories()
  }

  async getCathegories(): Promise<void> {
    try {
      this.cathegories = await this.todoService.getCathegories().toPromise();
    } catch(e) {}
  }

  async createTodo(): Promise<void> {
    try {
      this.toSubmit.main_due_date = formatDate(Date.parse(this.date), "yyyy-MM-dd","en-US",'+0530')
      this.todoService.createTodo(this.toSubmit).toPromise()
    } catch (e) {}
  }

}
