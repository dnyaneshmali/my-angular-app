import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-template-form',
    templateUrl: 'template-form.component.html',
    styleUrl: 'template-form.component.css',
    imports: [FormsModule]
})

export class TemplateFormComponent {
  firstName!: string;
  lastName!: string;
    constructor() {}

     submitUserForm(userData: any) {
    console.log('user data', userData.value);
  }
}