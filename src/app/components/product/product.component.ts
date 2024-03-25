import { Product } from './../../../types';
import { Component, EventEmitter, Input, Output, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating'
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule, ButtonModule,ConfirmPopupModule],
  providers: [ConfirmationService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  constructor(private confirmationService:ConfirmationService){}
  @Input() product!: Product;
  @ViewChild('magicButton') magicButton : any ;
  @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

  editProduct() {
    this.edit.emit(this.product);
  }
  confirmDelete(){
    this.confirmationService.confirm({
      target:this.magicButton.nativeElement ,
      message:"Are You Sure ??",
      accept:()=>{
        this.deleteProduct();
      },
    })
  }
  deleteProduct() {
    this.delete.emit(this.product);
  }
  ngOnInit() {}
}
