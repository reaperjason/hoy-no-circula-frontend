import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  carRegisterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.carRegisterForm = this.formBuilder.group({
      plate: ['', Validators.required],
      color: ['', Validators.required],
      model: ['', Validators.required],
      chassis: ['', Validators.required],
      year: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  guardarRegistroAuto() {
    console.log('form');
  }
}
