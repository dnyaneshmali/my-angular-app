import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-template-form',
    templateUrl: 'template-form.component.html',
    styleUrl: 'template-form.component.css',
    imports: [FormsModule]
})

export class TemplateFormComponent implements OnInit, AfterViewInit {
  @ViewChild('firstNameInput') fistNameInput!: ElementRef;
  firstName!: string;
  lastName!: string;
    constructor() {}

    ngOnInit(): void {
      
    }

    ngAfterViewInit(): void {
      this.fistNameInput?.nativeElement?.focus();
    }

     submitUserForm(userData: any) {
    console.log('user data', userData.value);
  }
}