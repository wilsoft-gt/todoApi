import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common'
import { DetailedTodoService } from '../detailed-todo.service'
import { mainInterface, childInterface } from '../../interfaces'
import { Router } from '@angular/router'

@Component({
  selector: 'app-detailed-todo',
  templateUrl: './detailed-todo.component.html',
  styleUrls: ['./detailed-todo.component.scss']
})
export class DetailedTodoComponent implements OnInit {
  public todoObj: mainInterface;
  public addNew: Boolean = false;
  public toSubmit: childInterface;
  public date: null
  
  constructor(
    private route: ActivatedRoute,
    private detailed: DetailedTodoService,
    private router: Router,
  ) { 
    this.toSubmit = {
      child_title: "",
      child_description: "",
      child_due_date: "",
      child_related_to: null
    }
   }

  ngOnInit() {
    this.getId()
  }

  async getId(): Promise<void> {
    try {
      const todoId = parseInt(this.route.snapshot.paramMap.get("id"));
      this.todoObj = await this.detailed.getTodo(todoId).toPromise();
      this.toSubmit['child_related_to'] = this.todoObj.id
    } catch (e) {
      "No data to show"
    }
  }

  async sendData(): Promise<void> {
    try {
      this.toSubmit.child_due_date = formatDate(Date.parse(this.date), "yyyy-MM-dd","en-US",'+0530')
      this.toSubmit.child_related_to = this.todoObj.id
      this.detailed.submit(this.toSubmit).toPromise().then( () => this.getId())
      this.toSubmit['child_title'] = "",
      this.toSubmit['child_description'] = "",
      this.toSubmit['child_related_to'] = 0,
      this.toSubmit['child_due_date'] = null

    } catch (e) {
      "error"
    }
  }

  async todoDelete(id, service): Promise<void> {
    try {
      this.detailed.delete(id, service).toPromise().then( () => {
        
        if (service == "father"){
          this.router.navigate(['/'])
        }
        this.getId();
      })
    } catch (e) {
      "error"
    }
  }

}
