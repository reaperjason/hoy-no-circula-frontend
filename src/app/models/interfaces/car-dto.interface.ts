export interface CreateCarDto {
  placa: string;
  color: string;
  modelo: string;
  chasis: string;
}

export interface CheckPlateDto {
  placa: string;
  fecha: string;
}
