import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CheckPlateDto } from 'src/app/models/interfaces/car-dto.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-plate-check',
  templateUrl: './plate-check.component.html',
  styleUrls: ['./plate-check.component.scss']
})
export class PlateCheckComponent {

  plateCheckForm!: FormGroup;
  submittedForm = false;
  today!: Date;
  localDateTime: string = '';

  //modal
  isModalOpen: boolean = false;

  //results
  registeredCar = false;
  restrictedCar = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private carService: CarService
  ) {
    this.buildForm();
  }

  buildForm() {
    this.today = new Date();
    this.localDateTime = this.formatDateToLocal(this.today);
    this.plateCheckForm = this.formBuilder.group({
      plate: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(6), Validators.pattern(/^[a-zA-Z]{3}/)]],
      date: [this.localDateTime, [Validators.required, this.validateDate.bind(this)]]
    });
  }

  validateDate(control: FormControl) {
    const inputDate = new Date(control.value);
    const currentDate = new Date();

    if (inputDate < currentDate) {
      return { 'invalidDate': true };
    }

    return null;
  }

  checkPlate() {
    //Update date and time
    this.today = new Date();
    this.localDateTime = this.formatDateToLocal(this.today);

    this.submittedForm = true;
    if (this.plateCheckForm.valid) {
      //DTO map
      let carData: CheckPlateDto;
      carData = {
        placa: this.plateCheckForm.value.plate,
        fecha: this.plateCheckForm.value.date
      }
      //open modal
      this.openModal();
      //load spinner
      //call to api service to check circulation
      // this.carService.checkCirculationByPlate(carData)
      //   .subscribe({
      //     next: res => {
      //       console.log('res', res);
      //     },
      //     error: err => {
      //       //404
      //       this.toastr.error('El auto no se encuentra registrado', 'Error!');
      //       //other
      //       this.toastr.error('No se pudo realizar la consulta', 'Error!');
      //     }
      //   });
      console.log(this.plateCheckForm.value);
    } else {
      this.toastr.error('El formulario contiene errores', 'Error!');
    }
  }

  formatDateToLocal(date: Date) {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  openModal() {
    this.isModalOpen = true;
  }

  modalClosed() {
    this.isModalOpen = false;
    this.plateCheckForm.reset();
    this.buildForm();
    this.submittedForm = false;
  }
}
