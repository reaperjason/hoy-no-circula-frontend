import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title: string;
  @Input() isOpen: boolean = false;
  @Output() modalClosed: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.title = '';
  }

  closeModal() {
    this.isOpen = false;
    this.modalClosed.emit();
  }

}
