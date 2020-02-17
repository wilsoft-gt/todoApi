import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component'
import { CreateTodoComponent } from './create-todo/create-todo.component'


const routes: Routes = [
  {path: "", component: MainViewComponent},
  {path: "create/:id", component: CreateTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
