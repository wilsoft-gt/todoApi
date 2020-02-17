import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { DetailedTodoComponent } from './detailed-todo/detailed-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    CreateTodoComponent,
    DetailedTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
