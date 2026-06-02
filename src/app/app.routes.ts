import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ToDoListComponent } from './todo-list/todo-list.component';
import { ToDoResolver } from './services/todo-list.resolver';
import { AuthGuard } from './services/auth.guard';
import { CenterDivComponent } from './center-div/center-div.component';
import { DebounceComponent } from './debounce/debounce.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact/:id',
    component: ContactComponent,
  },
  {
    path: 'template-form',
    component: TemplateFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
    data: [{formId: 'rc-1'}]
  },
  {
    path: 'todo-list',
    component: ToDoListComponent,
    resolve: [ToDoResolver]
  },
  {
    path: 'div-center',
    component: CenterDivComponent
  },
  {
    path: 'debounce',
    component: DebounceComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
];
