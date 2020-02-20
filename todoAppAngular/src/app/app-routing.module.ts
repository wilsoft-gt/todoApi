import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component'
import { CreateTodoComponent } from './create-todo/create-todo.component'
import { DetailedTodoComponent } from './detailed-todo/detailed-todo.component'


const routes: Routes = [
  {path: "", component: MainViewComponent},
  {path: "create", component: CreateTodoComponent},
  {path: "detail/:id", component: DetailedTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
