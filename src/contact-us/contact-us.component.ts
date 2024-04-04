import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { NavigationComponent } from "../navigation/navigation.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-contact-us',
    standalone: true,
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.css',
    imports: [MatFormFieldModule, MatInputModule, MatRadioModule,
        FormsModule, NavigationComponent, FooterComponent]
})
export class ContactUsComponent {
  constructor() { }
  selectedGender:any
  genders = ['Male','Female','Others','gay']

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form.value);   
  }
  resetForn(form:NgForm){
    form.reset();
  }
}
