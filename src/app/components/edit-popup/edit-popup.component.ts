import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {DialogModule} from 'primeng/dialog'
import { Product } from '../../../types';
import {RatingModule} from 'primeng/rating'
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [DialogModule, CommonModule,FormsModule,RatingModule,ButtonModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss',
})
export class EditPopupComponent {
  @Input() display: boolean = false;
  @Input() header! : string  ;
  @Output() confirm = new EventEmitter<Product>();
  @Input() product: Product = {
    id: 0,
    name: '',
    image: '',
    price: '',
    rating: 0,
  };
  onConfirm() {
    this.confirm.emit(this.product);
  }
  onCancel() {
    this.display = false;
  }
}
