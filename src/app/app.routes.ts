import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ToDoListComponent } from './todo-list/todo-list.component';
import { ToDoResolver } from './services/todo-list.resolver';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'template-form',
    component: TemplateFormComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: 'todo-list',
    component: ToDoListComponent,
    resolve: [ToDoResolver]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
];
