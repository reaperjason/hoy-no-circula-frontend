import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  carRegisterForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {

  }

  buildForm() {
    this.carRegisterForm = this.formBuilder.group({
      plate: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(6)], Validators.pattern(/^[a-zA-Z]{3}/)],
      color: ['', [Validators.required, Validators.minLength(3)], Validators.pattern(/^[a-zA-Z]+$/)],
      model: ['', Validators.required],
      chassis: ['', [Validators.required, Validators.minLength(17), Validators.maxLength(17), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
    });
  }

  cleanForm() {
    this.carRegisterForm.reset();
  }

  sendCarForm() {
    if (!this.carRegisterForm.hasError) {

    } else {
      console.log('form valid', this.carRegisterForm.value);
    }


  }


}
