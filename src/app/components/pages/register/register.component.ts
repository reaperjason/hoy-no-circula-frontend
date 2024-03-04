import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreateCarDto } from 'src/app/models/interfaces/car-dto.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  carRegisterForm: FormGroup = this.formBuilder.group({});
  submittedForm = false;

  //spinner control
  loading = false

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private carService: CarService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {

  }

  buildForm() {
    this.carRegisterForm = this.formBuilder.group({
      plate: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(6), Validators.pattern(/^[a-zA-Z]{3}/)]],
      color: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
      model: ['', Validators.required],
      chassis: ['', [Validators.required, Validators.minLength(17), Validators.maxLength(17), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
    });
  }

  cleanForm() {
    this.submittedForm = false;
    this.carRegisterForm.reset();
  }

  sendCarForm() {
    this.submittedForm = true;
    this.loading = false
    if (this.carRegisterForm.valid) {
      //map form values to DTO
      let newCar: CreateCarDto;
      let plateAlphaNumeric = this.carRegisterForm.value.plate.replace(/-/g, '');
      newCar = {
        placa: plateAlphaNumeric.toUpperCase(),
        color: this.carRegisterForm.value.color.toUpperCase(),
        modelo: this.carRegisterForm.value.model.toUpperCase(),
        chasis: this.carRegisterForm.value.chassis.toUpperCase(),
      }

      //peticion API
      this.loading = true;
      this.carService.createCar(newCar)
        .subscribe({
          next: res => {
            if (res.codigo == "201")
              this.toastr.success('El auto se guardo exitosamente', 'Exito!');
            this.loading = false;
            this.cleanForm();
          },
          error: err => {
            if (err.error.error.codigo == "409") {
              this.toastr.error('El auto ya se encuentra registrado', 'Error!');
            } else {
              this.toastr.error('El auto no se pudo guardar', 'Error!');
            }
            this.loading = false;
          }
        });
    } else {
      this.toastr.error('El formulario contiene errores', 'Error!');
    }
  }
}
