import { Product } from './../../../types';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!:Product ;
  @Output() productOutput : EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit(){
    this.productOutput.emit(this.product) ;
  }
}
