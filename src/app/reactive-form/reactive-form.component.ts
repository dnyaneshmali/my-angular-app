import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: 'reactive-form.component.html',
  styleUrl: 'reactive-form.component.css',
  imports: [FormsModule, ReactiveFormsModule],
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((rData) => {
      console.log('res data', rData[0]);
    });

    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  userFormSubmit() {
    console.log('form', this.userForm.value);
  }
}
