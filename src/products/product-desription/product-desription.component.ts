import { Component } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product-desription',
  standalone: true,
  imports: [MatStepperModule,MatButtonModule],
  templateUrl: './product-desription.component.html',
  styleUrl: './product-desription.component.css'
})
export class ProductDesriptionComponent {
  count =0;
  Increment(){
    this.count++;  
  }
  Decrement(){
    this.count--;  
  }
}
